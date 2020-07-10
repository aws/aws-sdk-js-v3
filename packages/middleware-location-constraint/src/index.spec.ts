import { locationConstraintMiddleware } from "./";

describe("locationConstrainMiddleware", () => {
  const next = jest.fn();
  const basicInput = {
    foo: "bar",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("for region us-east-1", () => {
    const handler = locationConstraintMiddleware({
      region: () => Promise.resolve("us-east-1"),
    })(next, {} as any);

    it("should not update LocationConstraint if it's already set", async () => {
      const input = {
        ...basicInput,
        CreateBucketConfiguration: { LocationConstraint: "us-east-1" },
      };
      await handler({ input });
      expect(next.mock.calls.length).toBe(1);
      expect(next.mock.calls[0][0]).toEqual({ input });
    });

    it("should not add LocationConstraint if it's not set", async () => {
      const input = basicInput;
      await handler({ input });
      expect(next.mock.calls.length).toBe(1);
      expect(next.mock.calls[0][0]).toEqual({ input });
    });
  });

  describe("for region not us-east-1", () => {
    const region = "us-east-2";
    const handler = locationConstraintMiddleware({
      region: () => Promise.resolve(region),
    })(next, {} as any);

    it("should not update LocationConstraint if it's already set", async () => {
      const input = {
        ...basicInput,
        CreateBucketConfiguration: { LocationConstraint: "us-east-1" },
      };
      await handler({ input });
      expect(next.mock.calls.length).toBe(1);
      expect(next.mock.calls[0][0]).toEqual({ input });
    });

    it("should add region as LocationConstraint if it's not set", async () => {
      const input = basicInput;
      await handler({ input });
      expect(next.mock.calls.length).toBe(1);
      expect(next.mock.calls[0][0]).toEqual({
        input: {
          ...input,
          CreateBucketConfiguration: { LocationConstraint: region },
        },
      });
    });
  });
});
