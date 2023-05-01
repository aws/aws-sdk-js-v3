import { Provider } from "@aws-sdk/types";

/**
 * @internal
 */
export type Logins = Record<string, string | Provider<string>>;

/**
 * @internal
 */
export type ResolvedLogins = Record<string, string>;
