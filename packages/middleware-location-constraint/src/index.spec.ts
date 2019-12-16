import { locationConstraintMiddleware } from "./";

describe("locationConstrainMiddleware", () => {
  const next = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should remove any CreateBucketConfiguration from requests directed at us-east-1", async () => {
    const handler = locationConstraintMiddleware({
      region: () => Promise.resolve("us-east-1")
    })(next, {} as any);
    const input = {
      CreateBucketConfiguration: { LocationConstraint: "us-east-1" },
      foo: "bar"
    };
    await handler({ input });

    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0][0]).toEqual({
      input: {
        ...input,
        CreateBucketConfiguration: undefined
      }
    });
  });

  it("should apply a CreateBucketConfiguration with a LocationConstraint of the target region for requests directed outside of us-east-1", async () => {
    const handler = locationConstraintMiddleware({
      region: () => Promise.resolve("us-east-2")
    })(next, {} as any);
    const input = {
      foo: "bar"
    };

    await handler({ input });

    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0][0]).toEqual({
      input: {
        ...input,
        CreateBucketConfiguration: { LocationConstraint: "us-east-2" }
      }
    });
  });

  it("should do nothing if a LocationConstraint had already been set on a request directed outside of us-east-1", async () => {
    const handler = locationConstraintMiddleware({
      region: () => Promise.resolve("us-east-2")
    })(next, {} as any);
    const input = {
      CreateBucketConfiguration: { LocationConstraint: "us-east-1" },
      foo: "bar"
    };

    await handler({ input });

    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0][0]).toEqual({ input });
  });
});
