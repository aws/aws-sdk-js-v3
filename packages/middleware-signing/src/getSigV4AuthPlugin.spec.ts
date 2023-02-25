import { MiddlewareStack } from "@aws-sdk/types";

import { getSigV4AuthPlugin } from "./getSigV4AuthPlugin";
import { sigV4AuthMiddlewareOptions } from "./sigV4AuthMiddleware";

describe(getSigV4AuthPlugin.name, () => {
  const mockClientStack = {
    addRelativeTo: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("adds middleware", () => {
    getSigV4AuthPlugin({} as any).applyToStack(mockClientStack as unknown as MiddlewareStack<any, any>);
    expect(mockClientStack.addRelativeTo).toHaveBeenCalledTimes(1);
    expect(mockClientStack.addRelativeTo.mock.calls[0][1]).toEqual(sigV4AuthMiddlewareOptions);
  });
});
