import { Identity, TokenIdentity } from "@aws-sdk/types";

export const isTokenIdentity = (identity: Identity) =>
  (identity as TokenIdentity).token !== undefined;
