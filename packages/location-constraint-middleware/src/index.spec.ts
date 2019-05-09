import { locationConstraintMiddleware } from "./";

describe("locationConstrainMiddleware", () => {
  it("should remove any CreateBucketConfiguration from requests directed at us-east-1", async () => {
    const mw = locationConstraintMiddleware(async () => "us-east-1");
    const next = jest.fn();
    const input = {
      CreateBucketConfiguration: { LocationConstraint: "us-east-1" },
      foo: "bar"
    };

    await mw(next, {} as any)({ input });

    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0][0]).toEqual({
      input: {
        ...input,
        CreateBucketConfiguration: undefined
      }
    });
  });

  it("should apply a CreateBucketConfiguration with a LocationConstraint of the target region for requests directed outside of us-east-1", async () => {
    const mw = locationConstraintMiddleware(async () => "us-east-2");
    const next = jest.fn();
    const input = {
      foo: "bar"
    };

    await mw(next, {} as any)({ input });

    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0][0]).toEqual({
      input: {
        ...input,
        CreateBucketConfiguration: { LocationConstraint: "us-east-2" }
      }
    });
  });

  it("should do nothing if a LocationConstraint had already been set on a request directed outside of us-east-1", async () => {
    const mw = locationConstraintMiddleware(async () => "us-east-2");
    const next = jest.fn();
    const input = {
      CreateBucketConfiguration: { LocationConstraint: "us-east-1" },
      foo: "bar"
    };

    await mw(next, {} as any)({ input });

    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0][0]).toEqual({ input });
  });
});
