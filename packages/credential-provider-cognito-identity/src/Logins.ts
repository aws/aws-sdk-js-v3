import { Provider } from "@aws-sdk/types";

export type Logins = Record<string, string | Provider<string>>;

export type ResolvedLogins = Record<string, string>;
