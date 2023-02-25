import { HttpAuthLocation, MiddlewareStack } from "@aws-sdk/types";

import { apiKeyMiddlewareOptions } from "./apiKeyMiddleware";
import { getApiKeyPlugin } from "./getApiKeyPlugin";

describe(getApiKeyPlugin.name, () => {
  const mockClientStack = {
    addRelativeTo: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("adds loggerMiddleware", () => {
    getApiKeyPlugin({}, { in: HttpAuthLocation.HEADER, name: "" }).applyToStack(
      mockClientStack as unknown as MiddlewareStack<any, any>
    );
    expect(mockClientStack.addRelativeTo).toHaveBeenCalledTimes(1);
    expect(mockClientStack.addRelativeTo.mock.calls[0][1]).toEqual(apiKeyMiddlewareOptions);
  });
});
