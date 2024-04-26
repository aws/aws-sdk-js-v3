// @ts-expect-error Cannot find module '@aws-sdk/client-sts'
import { AssumeRoleCommand, STSClient } from "@aws-sdk/client-sts";

// This file must be loaded dynamically.
export { AssumeRoleCommand, STSClient };
