import { invalidProvider } from "./invalidProvider";

describe("invalidProvider", () => {
  it("rejects with error containing message", async () => {
    const message = "Error";
    const provider = invalidProvider(message);
    //@ts-ignore
    await expect(provider()).rejects.toEqual(message);
  });
});
