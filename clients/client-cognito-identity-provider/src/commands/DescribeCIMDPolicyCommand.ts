// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCIMDPolicyRequest, DescribeCIMDPolicyResponse } from "../models/models_0";
import { DescribeCIMDPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCIMDPolicyCommand}.
 */
export interface DescribeCIMDPolicyCommandInput extends DescribeCIMDPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCIMDPolicyCommand}.
 */
export interface DescribeCIMDPolicyCommandOutput extends DescribeCIMDPolicyResponse, __MetadataBearer {}

/**
 * <p>Returns the configuration of a Client ID Metadata Document (CIMD) policy.</p>
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
 * import { CognitoIdentityProviderClient, DescribeCIMDPolicyCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeCIMDPolicyCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DescribeCIMDPolicyRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   CIMDPolicyId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCIMDPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCIMDPolicyResponse
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
 * @param DescribeCIMDPolicyCommandInput - {@link DescribeCIMDPolicyCommandInput}
 * @returns {@link DescribeCIMDPolicyCommandOutput}
 * @see {@link DescribeCIMDPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeCIMDPolicyCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeCIMDPolicyCommand extends command<DescribeCIMDPolicyCommandInput, DescribeCIMDPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCIMDPolicy",
  DescribeCIMDPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCIMDPolicyRequest;
      output: DescribeCIMDPolicyResponse;
    };
    sdk: {
      input: DescribeCIMDPolicyCommandInput;
      output: DescribeCIMDPolicyCommandOutput;
    };
  };
}
