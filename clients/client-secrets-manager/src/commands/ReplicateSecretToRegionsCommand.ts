// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ReplicateSecretToRegionsRequest, ReplicateSecretToRegionsResponse } from "../models/models_0";
import { ReplicateSecretToRegions } from "../schemas/schemas_0";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReplicateSecretToRegionsCommand}.
 */
export interface ReplicateSecretToRegionsCommandInput extends ReplicateSecretToRegionsRequest {}
/**
 * @public
 *
 * The output of {@link ReplicateSecretToRegionsCommand}.
 */
export interface ReplicateSecretToRegionsCommandOutput extends ReplicateSecretToRegionsResponse, __MetadataBearer {}

/**
 * <p>Replicates the secret to a new Regions. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create-manage-multi-region-secrets.html">Multi-Region secrets</a>.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:ReplicateSecretToRegions</code>.
 *       If the primary secret is encrypted with a KMS key other than <code>aws/secretsmanager</code>, you also need <code>kms:Decrypt</code> permission to the key. To encrypt the replicated secret with a KMS key other than <code>aws/secretsmanager</code>, you need <code>kms:GenerateDataKey</code> and <code>kms:Encrypt</code> to the key. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, ReplicateSecretToRegionsCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, ReplicateSecretToRegionsCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // ReplicateSecretToRegionsRequest
 *   SecretId: "STRING_VALUE", // required
 *   AddReplicaRegions: [ // AddReplicaRegionListType // required
 *     { // ReplicaRegionType
 *       Region: "STRING_VALUE",
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *   ],
 *   ForceOverwriteReplicaSecret: true || false,
 * };
 * const command = new ReplicateSecretToRegionsCommand(input);
 * const response = await client.send(command);
 * // { // ReplicateSecretToRegionsResponse
 * //   ARN: "STRING_VALUE",
 * //   ReplicationStatus: [ // ReplicationStatusListType
 * //     { // ReplicationStatusType
 * //       Region: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       Status: "InSync" || "Failed" || "InProgress",
 * //       StatusMessage: "STRING_VALUE",
 * //       LastAccessedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ReplicateSecretToRegionsCommandInput - {@link ReplicateSecretToRegionsCommandInput}
 * @returns {@link ReplicateSecretToRegionsCommandOutput}
 * @see {@link ReplicateSecretToRegionsCommandInput} for command's `input` shape.
 * @see {@link ReplicateSecretToRegionsCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The parameter name or value is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>A parameter value is not valid for the current state of the
 *       resource.</p>
 *          <p>Possible causes:</p>
 *          <ul>
 *             <li>
 *                <p>The secret is scheduled for deletion.</p>
 *             </li>
 *             <li>
 *                <p>You tried to enable rotation on a secret that doesn't already have a Lambda function
 *           ARN configured and you didn't include such an ARN as a parameter in this call. </p>
 *             </li>
 *             <li>
 *                <p>The secret is managed by another service, and you must use that service to update it.
 *           For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets managed by other Amazon Web Services services</a>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Secrets Manager can't find the resource that you asked for.</p>
 *
 * @throws {@link SecretsManagerServiceException}
 * <p>Base exception class for all service exceptions from SecretsManager service.</p>
 *
 *
 * @example Example
 * ```javascript
 * // The following example replicates a secret to eu-west-3. The replica is encrypted with the AWS managed key aws/secretsmanager.
 * const input = {
 *   AddReplicaRegions: [
 *     {
 *       Region: "eu-west-3"
 *     }
 *   ],
 *   ForceOverwriteReplicaSecret: true,
 *   SecretId: "MyTestSecret"
 * };
 * const command = new ReplicateSecretToRegionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestSecret-1a2b3c",
 *   ReplicationStatus: [
 *     {
 *       KmsKeyId: "alias/aws/secretsmanager",
 *       Region: "eu-west-3",
 *       Status: "InProgress"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ReplicateSecretToRegionsCommand extends $Command
  .classBuilder<
    ReplicateSecretToRegionsCommandInput,
    ReplicateSecretToRegionsCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecretsManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("secretsmanager", "ReplicateSecretToRegions", {})
  .n("SecretsManagerClient", "ReplicateSecretToRegionsCommand")
  .sc(ReplicateSecretToRegions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplicateSecretToRegionsRequest;
      output: ReplicateSecretToRegionsResponse;
    };
    sdk: {
      input: ReplicateSecretToRegionsCommandInput;
      output: ReplicateSecretToRegionsCommandOutput;
    };
  };
}
