// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUserPoolReplicasRequest, ListUserPoolReplicasResponse } from "../models/models_0";
import { ListUserPoolReplicas$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListUserPoolReplicasCommand}.
 */
export interface ListUserPoolReplicasCommandInput extends ListUserPoolReplicasRequest {}
/**
 * @public
 *
 * The output of {@link ListUserPoolReplicasCommand}.
 */
export interface ListUserPoolReplicasCommandOutput extends ListUserPoolReplicasResponse, __MetadataBearer {}

/**
 * <p>Lists all replicas for a user pool, including both primary and secondary replicas. We
 *             recommend using pagination to ensure that the operation returns quickly and
 *             successfully.</p>
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
 * import { CognitoIdentityProviderClient, ListUserPoolReplicasCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUserPoolReplicasCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListUserPoolReplicasRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListUserPoolReplicasCommand(input);
 * const response = await client.send(command);
 * // { // ListUserPoolReplicasResponse
 * //   UserPoolReplicas: [ // UserPoolReplicaListType
 * //     { // UserPoolReplicaType
 * //       RegionName: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "INACTIVE" || "DELETING",
 * //       Role: "PRIMARY" || "SECONDARY",
 * //       UserPoolArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserPoolReplicasCommandInput - {@link ListUserPoolReplicasCommandInput}
 * @returns {@link ListUserPoolReplicasCommandOutput}
 * @see {@link ListUserPoolReplicasCommandInput} for command's `input` shape.
 * @see {@link ListUserPoolReplicasCommandOutput} for command's `response` shape.
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
 * @example Example list the replicas of a user pool
 * ```javascript
 * // The following example lists the replicas of a user pool that has a replica in the ap-south-1 Region.
 * const input = {
 *   UserPoolId: "eu-north-1_abcd12345"
 * };
 * const command = new ListUserPoolReplicasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   UserPoolReplicas: [
 *     {
 *       RegionName: "ap-south-1",
 *       Role: "SECONDARY",
 *       Status: "CREATING",
 *       UserPoolArn: "arn:aws:cognito-idp:ap-south-1:123456789012:userpool/eu-north-1_abcd12345"
 *     },
 *     {
 *       RegionName: "eu-north-1",
 *       Role: "PRIMARY",
 *       Status: "ACTIVE",
 *       UserPoolArn: "arn:aws:cognito-idp:eu-north-1:123456789012:userpool/eu-north-1_abcd12345"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListUserPoolReplicasCommand extends command<ListUserPoolReplicasCommandInput, ListUserPoolReplicasCommandOutput>(
  _ep0,
  _mw0,
  "ListUserPoolReplicas",
  ListUserPoolReplicas$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserPoolReplicasRequest;
      output: ListUserPoolReplicasResponse;
    };
    sdk: {
      input: ListUserPoolReplicasCommandInput;
      output: ListUserPoolReplicasCommandOutput;
    };
  };
}
