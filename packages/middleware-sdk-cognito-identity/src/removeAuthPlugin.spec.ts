import { getRemoveAuthPlugin } from "./removeAuthPlugin";
import { awsAuthMiddlewareOptions } from "@aws-sdk/middleware-signing";

describe("removeAuthPlugin", () => {
  it("should remove authMiddleware with right middleware name", () => {
    const { name: nameToRemove } = awsAuthMiddlewareOptions;
    const fakeStack: any = {
      remove: jest.fn()
    };
    getRemoveAuthPlugin().applyToStack(fakeStack);
    expect(fakeStack.remove.mock.calls.length).toBe(1);
    expect(fakeStack.remove.mock.calls[0][0]).toEqual(nameToRemove);
  });
});
