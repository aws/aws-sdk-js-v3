// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProvisionedLimitRequest, GetProvisionedLimitResponse } from "../models/models_0";
import { GetProvisionedLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProvisionedLimitCommand}.
 */
export interface GetProvisionedLimitCommandInput extends GetProvisionedLimitRequest {}
/**
 * @public
 *
 * The output of {@link GetProvisionedLimitCommand}.
 */
export interface GetProvisionedLimitCommandOutput extends GetProvisionedLimitResponse, __MetadataBearer {}

/**
 * <p>Returns the current provisioned limit for a specific API category.</p>
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
 * import { CognitoIdentityProviderClient, GetProvisionedLimitCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetProvisionedLimitCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetProvisionedLimitRequest
 *   LimitDefinition: { // LimitDefinitionType
 *     LimitClass: "API_CATEGORY", // required
 *     Attributes: { // StringToStringMapType // required
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new GetProvisionedLimitCommand(input);
 * const response = await client.send(command);
 * // { // GetProvisionedLimitResponse
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
 * @param GetProvisionedLimitCommandInput - {@link GetProvisionedLimitCommandInput}
 * @returns {@link GetProvisionedLimitCommandOutput}
 * @see {@link GetProvisionedLimitCommandInput} for command's `input` shape.
 * @see {@link GetProvisionedLimitCommandOutput} for command's `response` shape.
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
 * @example Example get a provisioned limit
 * ```javascript
 * // The following example returns the provisioned limit for the UserAuthentication API category.
 * const input = {
 *   LimitDefinition: {
 *     Attributes: {
 *       Category: "UserAuthentication"
 *     },
 *     LimitClass: "API_CATEGORY"
 *   }
 * };
 * const command = new GetProvisionedLimitCommand(input);
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
 *     ProvisionedLimitValue: 120
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetProvisionedLimitCommand extends command<GetProvisionedLimitCommandInput, GetProvisionedLimitCommandOutput>(
  _ep0,
  _mw0,
  "GetProvisionedLimit",
  GetProvisionedLimit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProvisionedLimitRequest;
      output: GetProvisionedLimitResponse;
    };
    sdk: {
      input: GetProvisionedLimitCommandInput;
      output: GetProvisionedLimitCommandOutput;
    };
  };
}
