// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserPoolReplicaRequest, UpdateUserPoolReplicaResponse } from "../models/models_1";
import { UpdateUserPoolReplica$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUserPoolReplicaCommand}.
 */
export interface UpdateUserPoolReplicaCommandInput extends UpdateUserPoolReplicaRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserPoolReplicaCommand}.
 */
export interface UpdateUserPoolReplicaCommandOutput extends UpdateUserPoolReplicaResponse, __MetadataBearer {}

/**
 * <p>Updates replica-specific settings for a user pool replica. You can modify the status
 *             to activate or deactivate the replica. This request can be made in both primary and secondary
 *             regions of the user pool.</p>
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
 * import { CognitoIdentityProviderClient, UpdateUserPoolReplicaCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserPoolReplicaCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateUserPoolReplicaRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   RegionName: "STRING_VALUE", // required
 *   Status: "ACTIVE" || "INACTIVE", // required
 * };
 * const command = new UpdateUserPoolReplicaCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserPoolReplicaResponse
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
 * @param UpdateUserPoolReplicaCommandInput - {@link UpdateUserPoolReplicaCommandInput}
 * @returns {@link UpdateUserPoolReplicaCommandOutput}
 * @see {@link UpdateUserPoolReplicaCommandInput} for command's `input` shape.
 * @see {@link UpdateUserPoolReplicaCommandOutput} for command's `response` shape.
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
 * @example Example update a user pool replica
 * ```javascript
 * // The following example sets the status of a user pool replica in the us-east-1 Region to ACTIVE.
 * const input = {
 *   RegionName: "us-east-1",
 *   Status: "ACTIVE",
 *   UserPoolId: "ap-south-1_abcd12345"
 * };
 * const command = new UpdateUserPoolReplicaCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   UserPoolReplica: {
 *     RegionName: "us-east-1",
 *     Role: "SECONDARY",
 *     Status: "ACTIVE",
 *     UserPoolArn: "arn:aws:cognito-idp:us-east-1:123456789012:userpool/ap-south-1_abcd12345"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateUserPoolReplicaCommand extends command<UpdateUserPoolReplicaCommandInput, UpdateUserPoolReplicaCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserPoolReplica",
  UpdateUserPoolReplica$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserPoolReplicaRequest;
      output: UpdateUserPoolReplicaResponse;
    };
    sdk: {
      input: UpdateUserPoolReplicaCommandInput;
      output: UpdateUserPoolReplicaCommandOutput;
    };
  };
}
