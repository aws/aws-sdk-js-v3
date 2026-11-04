// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUserPoolReplicaRequest, CreateUserPoolReplicaResponse } from "../models/models_0";
import { CreateUserPoolReplica$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateUserPoolReplicaCommand}.
 */
export interface CreateUserPoolReplicaCommandInput extends CreateUserPoolReplicaRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserPoolReplicaCommand}.
 */
export interface CreateUserPoolReplicaCommandOutput extends CreateUserPoolReplicaResponse, __MetadataBearer {}

/**
 * Creates a replica of an existing user pool in a specified Amazon Web Services Region. The replica enables multi-region replication for high availability and disaster recovery. To create a replica, you must have permissions to create user pools in the target Region.
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
 * import { CognitoIdentityProviderClient, CreateUserPoolReplicaCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserPoolReplicaCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // CreateUserPoolReplicaRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   RegionName: "STRING_VALUE", // required
 *   UserPoolTags: { // UserPoolTagsType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateUserPoolReplicaCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserPoolReplicaResponse
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
 * @param CreateUserPoolReplicaCommandInput - {@link CreateUserPoolReplicaCommandInput}
 * @returns {@link CreateUserPoolReplicaCommandOutput}
 * @see {@link CreateUserPoolReplicaCommandInput} for command's `input` shape.
 * @see {@link CreateUserPoolReplicaCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link FeatureUnavailableInTierException} (client fault)
 *
 * This exception is thrown when a feature that you attempted to use or configure isn't included in your user pool's current feature plan. This can occur when:
 *
 * - You configure a feature that your feature plan doesn't support.
 * - You make a request that uses a feature that requires a higher feature plan.
 *
 * To resolve this issue, upgrade your user pool to a feature plan that includes the feature.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * This exception is thrown when a user exceeds the limit for a requested Amazon Web Services resource.
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
 * @throws {@link UserPoolTaggingException} (client fault)
 *
 * This exception is thrown when a user pool tag can't be set or updated.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @example Example create a replica of a user pool in a new Region
 * ```javascript
 * // The following example creates a replica of a user pool in the ap-south-1 Region.
 * const input = {
 *   RegionName: "ap-south-1",
 *   UserPoolId: "us-east-1_abcd12345"
 * };
 * const command = new CreateUserPoolReplicaCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   UserPoolReplica: {
 *     RegionName: "ap-south-1",
 *     Role: "SECONDARY",
 *     Status: "CREATING",
 *     UserPoolArn: "arn:aws:cognito-idp:ap-south-1:123456789012:userpool/us-east-1_abcd12345"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateUserPoolReplicaCommand extends command<CreateUserPoolReplicaCommandInput, CreateUserPoolReplicaCommandOutput>(
  _ep0,
  _mw0,
  "CreateUserPoolReplica",
  CreateUserPoolReplica$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserPoolReplicaRequest;
      output: CreateUserPoolReplicaResponse;
    };
    sdk: {
      input: CreateUserPoolReplicaCommandInput;
      output: CreateUserPoolReplicaCommandOutput;
    };
  };
}
