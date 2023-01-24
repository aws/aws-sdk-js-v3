import { authenticationMiddleware, AuthenticationMiddlewareOptions } from "./authenticationMiddleware";
import { AuthenticationResolvedConfig } from "./configurations";
import { getAuthenticationPlugin } from "./getAuthenticationPlugin";
import { normalizeIdentityProvider } from "./util/provider/normalizeIdentityProvider";

jest.mock("./authenticationMiddleware");

describe(getAuthenticationPlugin.name, () => {
  it("applyToStack adds authenticationMiddleware", () => {
    const MOCK_IDENTITY = {
      expiration: new Date(),
    };
    const MOCK_IDENTITY_PROVIDER = normalizeIdentityProvider(MOCK_IDENTITY);
    const PLUGIN_CONFIG = {
      identity: MOCK_IDENTITY_PROVIDER,
    } as AuthenticationResolvedConfig;
    const MIDDLEWARE_RETURN = () => ({ MOCK_RETURN: "mockReturn" });
    (authenticationMiddleware as jest.Mock).mockReturnValueOnce(MIDDLEWARE_RETURN);

    const plugin = getAuthenticationPlugin(PLUGIN_CONFIG);
    const commandStack = {
      addRelativeTo: jest.fn(),
    } as any;

    plugin.applyToStack(commandStack);
    expect(commandStack.addRelativeTo).toHaveBeenCalledWith(MIDDLEWARE_RETURN, AuthenticationMiddlewareOptions);
    expect(authenticationMiddleware).toHaveBeenCalledTimes(1);
    expect(authenticationMiddleware).toHaveBeenCalledWith(PLUGIN_CONFIG);
    jest.clearAllMocks();
  });
});
