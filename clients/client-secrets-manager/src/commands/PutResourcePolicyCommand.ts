// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutResourcePolicyRequest, PutResourcePolicyResponse } from "../models/models_0";
import { PutResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandInput extends PutResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyResponse, __MetadataBearer {}

/**
 * Attaches a resource-based permission policy to a secret. A resource-based policy is optional. For more information, see [Authentication and access control for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html)
 *
 * For information about attaching a policy in the console, see [Attach a permissions policy to a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html).
 *
 * Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see [Logging Secrets Manager events with CloudTrail](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html).
 *
 * **Required permissions:** `secretsmanager:PutResourcePolicy`. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, PutResourcePolicyCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, PutResourcePolicyCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // PutResourcePolicyRequest
 *   SecretId: "STRING_VALUE", // required
 *   ResourcePolicy: "STRING_VALUE", // required
 *   BlockPublicPolicy: true || false,
 * };
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutResourcePolicyResponse
 * //   ARN: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutResourcePolicyCommandInput - {@link PutResourcePolicyCommandInput}
 * @returns {@link PutResourcePolicyCommandOutput}
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The parameter name or value is invalid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * A parameter value is not valid for the current state of the resource.
 *
 * Possible causes:
 *
 * - The secret is scheduled for deletion.
 * - You tried to enable rotation on a secret that doesn't already have a Lambda function ARN configured and you didn't include such an ARN as a parameter in this call.
 * - The secret is managed by another service, and you must use that service to update it. For more information, see [Secrets managed by other Amazon Web Services services](https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html).
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *
 * The resource policy has syntax errors.
 *
 * @throws {@link PublicPolicyException} (client fault)
 *
 * The `BlockPublicPolicy` parameter is set to true, and the resource policy did not prevent broad access to the secret.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Secrets Manager can't find the resource that you asked for.
 *
 * @throws {@link SecretsManagerServiceException}
 *
 * Base exception class for all service exceptions from SecretsManager service.
 *
 * @example To add a resource-based policy to a secret
 * ```javascript
 * // The following example shows how to add a resource-based policy to a secret.
 * const input = {
 *   ResourcePolicy: `{
 * "Version":"2012-10-17",
 * "Statement":[{
 * "Effect":"Allow",
 * "Principal":{
 * "AWS":"arn:aws:iam::123456789012:root"
 * },
 * "Action":"secretsmanager:GetSecretValue",
 * "Resource":"*"
 * }]
 * }`,
 *   SecretId: "MyTestDatabaseSecret"
 * };
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   Name: "MyTestDatabaseSecret"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutResourcePolicyCommand extends command<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutResourcePolicy",
  PutResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourcePolicyRequest;
      output: PutResourcePolicyResponse;
    };
    sdk: {
      input: PutResourcePolicyCommandInput;
      output: PutResourcePolicyCommandOutput;
    };
  };
}
