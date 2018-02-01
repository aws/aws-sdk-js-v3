import { Provider } from '@aws/types';

export interface Logins {
    [providerName: string]: string|Provider<string>;
}

export interface ResolvedLogins {
    [providerName: string]: string;
}
