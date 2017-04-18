import {Credentials} from './Credentials';

export type CredentialProvider = () => Promise<Credentials>;

// TODO remove this file when the types package is merged to master
