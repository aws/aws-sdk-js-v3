import { Identity, LoginIdentity } from "@aws-sdk/types";

export const isLoginIdentity = (identity: Identity) =>
  (identity as LoginIdentity).username !== undefined &&
  (identity as LoginIdentity).password !== undefined;
