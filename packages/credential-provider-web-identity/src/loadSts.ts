// @ts-expect-error Cannot find module '@aws-sdk/client-sts'
import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";

// This file must be loaded dynamically.
export { getDefaultRoleAssumerWithWebIdentity };
// @ts-expect-error Cannot find module '@aws-sdk/client-sts'
export type { STSClientConfig } from "@aws-sdk/client-sts";
