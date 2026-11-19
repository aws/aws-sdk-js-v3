// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCIMDPoliciesRequest, ListCIMDPoliciesResponse } from "../models/models_0";
import { ListCIMDPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCIMDPoliciesCommand}.
 */
export interface ListCIMDPoliciesCommandInput extends ListCIMDPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListCIMDPoliciesCommand}.
 */
export interface ListCIMDPoliciesCommandOutput extends ListCIMDPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the Client ID Metadata Document (CIMD) policies in a user pool.</p>
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
 * import { CognitoIdentityProviderClient, ListCIMDPoliciesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListCIMDPoliciesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListCIMDPoliciesRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCIMDPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListCIMDPoliciesResponse
 * //   NextToken: "STRING_VALUE",
 * //   CIMDPolicies: [ // CIMDPolicySummaryListType // required
 * //     { // CIMDPolicySummaryType
 * //       CIMDPolicyId: "STRING_VALUE", // required
 * //       ClientId: "STRING_VALUE",
 * //       PolicyName: "STRING_VALUE", // required
 * //       CacheDuration: Number("int"),
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCIMDPoliciesCommandInput - {@link ListCIMDPoliciesCommandInput}
 * @returns {@link ListCIMDPoliciesCommandOutput}
 * @see {@link ListCIMDPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListCIMDPoliciesCommandOutput} for command's `response` shape.
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
export class ListCIMDPoliciesCommand extends command<ListCIMDPoliciesCommandInput, ListCIMDPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListCIMDPolicies",
  ListCIMDPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCIMDPoliciesRequest;
      output: ListCIMDPoliciesResponse;
    };
    sdk: {
      input: ListCIMDPoliciesCommandInput;
      output: ListCIMDPoliciesCommandOutput;
    };
  };
}
