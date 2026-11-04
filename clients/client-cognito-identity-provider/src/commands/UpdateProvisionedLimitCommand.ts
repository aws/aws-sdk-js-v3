// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProvisionedLimitRequest, UpdateProvisionedLimitResponse } from "../models/models_1";
import { UpdateProvisionedLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProvisionedLimitCommand}.
 */
export interface UpdateProvisionedLimitCommandInput extends UpdateProvisionedLimitRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProvisionedLimitCommand}.
 */
export interface UpdateProvisionedLimitCommandOutput extends UpdateProvisionedLimitResponse, __MetadataBearer {}

/**
 * Sets the provisioned limit for a specific API category. The value must be between the default limit and your account-level maximum limit in Service Quotas.
 *
 * Managed login user pools don't support adjustments to the `UserAuthentication` or `UserFederation` categories. To increase these limits, submit a Service Quotas increase request.
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
 * import { CognitoIdentityProviderClient, UpdateProvisionedLimitCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateProvisionedLimitCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateProvisionedLimitRequest
 *   LimitDefinition: { // LimitDefinitionType
 *     LimitClass: "API_CATEGORY", // required
 *     Attributes: { // StringToStringMapType // required
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   RequestedLimitValue: Number("int"), // required
 * };
 * const command = new UpdateProvisionedLimitCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProvisionedLimitResponse
 * //   Limit: { // LimitType
 * //     LimitDefinition: { // LimitDefinitionType
 * //       LimitClass: "API_CATEGORY", // required
 * //       Attributes: { // StringToStringMapType // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     ProvisionedLimitValue: Number("int"), // required
 * //     FreeLimitValue: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProvisionedLimitCommandInput - {@link UpdateProvisionedLimitCommandInput}
 * @returns {@link UpdateProvisionedLimitCommandOutput}
 * @see {@link UpdateProvisionedLimitCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisionedLimitCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeded your account's service quota. To increase your limit, use or submit a Service Quotas increase request.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @example Example update a provisioned limit
 * ```javascript
 * // The following example sets the provisioned limit for the UserAuthentication API category to 300 RPS.
 * const input = {
 *   LimitDefinition: {
 *     Attributes: {
 *       Category: "UserAuthentication"
 *     },
 *     LimitClass: "API_CATEGORY"
 *   },
 *   RequestedLimitValue: 300
 * };
 * const command = new UpdateProvisionedLimitCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Limit: {
 *     FreeLimitValue: 120,
 *     LimitDefinition: {
 *       Attributes: {
 *         Category: "UserAuthentication"
 *       },
 *       LimitClass: "API_CATEGORY"
 *     },
 *     ProvisionedLimitValue: 300
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateProvisionedLimitCommand extends command<UpdateProvisionedLimitCommandInput, UpdateProvisionedLimitCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProvisionedLimit",
  UpdateProvisionedLimit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProvisionedLimitRequest;
      output: UpdateProvisionedLimitResponse;
    };
    sdk: {
      input: UpdateProvisionedLimitCommandInput;
      output: UpdateProvisionedLimitCommandOutput;
    };
  };
}
