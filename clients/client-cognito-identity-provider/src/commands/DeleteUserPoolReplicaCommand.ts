// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteUserPoolReplicaRequest, DeleteUserPoolReplicaResponse } from "../models/models_0";
import { DeleteUserPoolReplica$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserPoolReplicaCommand}.
 */
export interface DeleteUserPoolReplicaCommandInput extends DeleteUserPoolReplicaRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserPoolReplicaCommand}.
 */
export interface DeleteUserPoolReplicaCommandOutput extends DeleteUserPoolReplicaResponse, __MetadataBearer {}

/**
 * <p>Deletes a secondary replica user pool. You can only delete replicas that are in the
 *             INACTIVE status. This operation must be called from the primary Region.</p>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you must use IAM credentials to authorize requests, and you must
 *     grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteUserPoolReplicaCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteUserPoolReplicaCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DeleteUserPoolReplicaRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   RegionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserPoolReplicaCommand(input);
 * const response = await client.send(command);
 * // { // DeleteUserPoolReplicaResponse
 * //   UserPoolReplica: { // UserPoolReplicaType
 * //     RegionName: "STRING_VALUE",
 * //     Status: "CREATING" || "ACTIVE" || "INACTIVE" || "DELETING",
 * //     Role: "PRIMARY" || "SECONDARY",
 * //     UserPoolArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteUserPoolReplicaCommandInput - {@link DeleteUserPoolReplicaCommandInput}
 * @returns {@link DeleteUserPoolReplicaCommandOutput}
 * @see {@link DeleteUserPoolReplicaCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPoolReplicaCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *  <p>This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @example Example delete a user pool replica
 * ```javascript
 * // The following example deletes a user pool replica in the us-east-2 Region.
 * const input = {
 *   RegionName: "us-east-2",
 *   UserPoolId: "us-west-2_abcd12345"
 * };
 * const command = new DeleteUserPoolReplicaCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   UserPoolReplica: {
 *     RegionName: "us-east-2",
 *     Role: "SECONDARY",
 *     Status: "DELETING",
 *     UserPoolArn: "arn:aws:cognito-idp:us-east-2:123456789012:userpool/us-west-2_abcd12345"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteUserPoolReplicaCommand extends $Command
  .classBuilder<
    DeleteUserPoolReplicaCommandInput,
    DeleteUserPoolReplicaCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "DeleteUserPoolReplica", {})
  .n("CognitoIdentityProviderClient", "DeleteUserPoolReplicaCommand")
  .sc(DeleteUserPoolReplica$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserPoolReplicaRequest;
      output: DeleteUserPoolReplicaResponse;
    };
    sdk: {
      input: DeleteUserPoolReplicaCommandInput;
      output: DeleteUserPoolReplicaCommandOutput;
    };
  };
}
