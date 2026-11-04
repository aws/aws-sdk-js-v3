// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteUserPoolReplicaRequest, DeleteUserPoolReplicaResponse } from "../models/models_0";
import { DeleteUserPoolReplica$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a secondary replica user pool. You can only delete replicas that are in the INACTIVE status. This operation must be called from the primary Region.
 *
 * > **Note:**
 * >
 * > Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.
 * >
 * > **Learn more**
 * >
 * > - [Signing Amazon Web Services API Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
 * > - [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html)
 *
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
 *
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * This exception is thrown when a user isn't authorized.
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *
 * This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
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
export class DeleteUserPoolReplicaCommand extends command<DeleteUserPoolReplicaCommandInput, DeleteUserPoolReplicaCommandOutput>(
  _ep0,
  _mw0,
  "DeleteUserPoolReplica",
  DeleteUserPoolReplica$
) {
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
