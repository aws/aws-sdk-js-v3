// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCIMDPolicyRequest, UpdateCIMDPolicyResponse } from "../models/models_1";
import { UpdateCIMDPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCIMDPolicyCommand}.
 */
export interface UpdateCIMDPolicyCommandInput extends UpdateCIMDPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCIMDPolicyCommand}.
 */
export interface UpdateCIMDPolicyCommandOutput extends UpdateCIMDPolicyResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of a Client ID Metadata Document (CIMD) policy.</p>
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
 * import { CognitoIdentityProviderClient, UpdateCIMDPolicyCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateCIMDPolicyCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateCIMDPolicyRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   CIMDPolicyId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE",
 *   CacheDuration: Number("int"),
 *   URLPatterns: [ // URLPatternListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateCIMDPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCIMDPolicyResponse
 * //   CIMDPolicy: { // CIMDPolicyType
 * //     UserPoolId: "STRING_VALUE", // required
 * //     CIMDPolicyId: "STRING_VALUE", // required
 * //     ClientId: "STRING_VALUE",
 * //     PolicyName: "STRING_VALUE", // required
 * //     CacheDuration: Number("int"),
 * //     URLPatterns: [ // URLPatternListType
 * //       "STRING_VALUE",
 * //     ],
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCIMDPolicyCommandInput - {@link UpdateCIMDPolicyCommandInput}
 * @returns {@link UpdateCIMDPolicyCommandOutput}
 * @see {@link UpdateCIMDPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateCIMDPolicyCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>This exception is thrown if two or more modifications are happening
 *             concurrently.</p>
 *
 * @throws {@link FeatureUnavailableInTierException} (client fault)
 *  <p>This exception is thrown when a feature that you attempted to use or configure
 *             isn't included in your user pool's current feature plan. This can occur
 *             when:</p>
 *          <ul>
 *             <li>
 *                <p>You configure a feature that your feature plan doesn't support.</p>
 *             </li>
 *             <li>
 *                <p>You make a request that uses a feature that requires a higher feature
 *                     plan.</p>
 *             </li>
 *          </ul>
 *          <p>To resolve this issue, upgrade your user pool to a feature plan that includes the
 *             feature.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
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
 * @public
 */
export class UpdateCIMDPolicyCommand extends command<UpdateCIMDPolicyCommandInput, UpdateCIMDPolicyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCIMDPolicy",
  UpdateCIMDPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCIMDPolicyRequest;
      output: UpdateCIMDPolicyResponse;
    };
    sdk: {
      input: UpdateCIMDPolicyCommandInput;
      output: UpdateCIMDPolicyCommandOutput;
    };
  };
}
