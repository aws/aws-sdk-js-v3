import { normalizeIdentityProvider } from "../util/normalizeIdentityProvider";
import { IdentityResolvedConfig } from "./configurations";
import { getIdentityPlugin } from "./getIdentityPlugin";
import { identityMiddleware, IdentityMiddlewareOptions } from "./identityMiddleware";

jest.mock("./identityMiddleware");

describe(getIdentityPlugin.name, () => {
  it("applyToStack adds identityMiddleware", () => {
    const MOCK_IDENTITY = {
      expiration: new Date(),
    };
    const MOCK_IDENTITY_PROVIDER = normalizeIdentityProvider(MOCK_IDENTITY);
    const PLUGIN_CONFIG = {
      identity: MOCK_IDENTITY_PROVIDER,
    } as IdentityResolvedConfig;
    const MIDDLEWARE_RETURN = () => ({ MOCK_RETURN: "mockReturn" });
    (identityMiddleware as jest.Mock).mockReturnValueOnce(MIDDLEWARE_RETURN);

    const plugin = getIdentityPlugin(PLUGIN_CONFIG);
    const commandStack = {
      addRelativeTo: jest.fn(),
    } as any;

    plugin.applyToStack(commandStack);
    expect(commandStack.addRelativeTo).toHaveBeenCalledWith(MIDDLEWARE_RETURN, IdentityMiddlewareOptions);
    expect(identityMiddleware).toHaveBeenCalledTimes(1);
    expect(identityMiddleware).toHaveBeenCalledWith(PLUGIN_CONFIG);
    jest.clearAllMocks();
  });
});
