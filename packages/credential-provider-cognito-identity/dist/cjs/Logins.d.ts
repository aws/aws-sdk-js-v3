import { Provider } from "@aws-sdk/types";
export interface Logins {
    [providerName: string]: string | Provider<string>;
}
export interface ResolvedLogins {
    [providerName: string]: string;
}
