// @ts-expect-error Cannot find module '@aws-sdk/client-sts'
import { getDefaultRoleAssumer } from "@aws-sdk/client-sts";

// This file must be loaded dynamically.
export { getDefaultRoleAssumer };
// @ts-expect-error Cannot find module '@aws-sdk/client-sts'
export type { STSClientConfig } from "@aws-sdk/client-sts";
