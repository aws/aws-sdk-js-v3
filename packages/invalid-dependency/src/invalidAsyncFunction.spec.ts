import { invalidAsyncFunction } from "./invalidAsyncFunction";

describe("invalidAsyncFunction", () => {
  it("rejects with error containing message", async () => {
    const message = "Error";
    await expect(invalidAsyncFunction(message)).rejects.toThrow(new Error(message));
  });
});
