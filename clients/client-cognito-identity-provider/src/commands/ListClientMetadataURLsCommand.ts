// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListClientMetadataURLsRequest, ListClientMetadataURLsResponse } from "../models/models_0";
import { ListClientMetadataURLs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListClientMetadataURLsCommand}.
 */
export interface ListClientMetadataURLsCommandInput extends ListClientMetadataURLsRequest {}
/**
 * @public
 *
 * The output of {@link ListClientMetadataURLsCommand}.
 */
export interface ListClientMetadataURLsCommandOutput extends ListClientMetadataURLsResponse, __MetadataBearer {}

/**
 * <p>Lists the client ID metadata document URLs that Amazon Cognito has received for a
 *             Client ID Metadata Document (CIMD) policy, with the cache state of each URL.</p>
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
 * import { CognitoIdentityProviderClient, ListClientMetadataURLsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListClientMetadataURLsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListClientMetadataURLsRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   CIMDPolicyId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListClientMetadataURLsCommand(input);
 * const response = await client.send(command);
 * // { // ListClientMetadataURLsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ClientMetadataURLs: [ // ClientMetadataURLListType // required
 * //     { // ClientMetadataURLType
 * //       URL: "STRING_VALUE", // required
 * //       CachedDate: new Date("TIMESTAMP"),
 * //       ExpirationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListClientMetadataURLsCommandInput - {@link ListClientMetadataURLsCommandInput}
 * @returns {@link ListClientMetadataURLsCommandOutput}
 * @see {@link ListClientMetadataURLsCommandInput} for command's `input` shape.
 * @see {@link ListClientMetadataURLsCommandOutput} for command's `response` shape.
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
export class ListClientMetadataURLsCommand extends command<ListClientMetadataURLsCommandInput, ListClientMetadataURLsCommandOutput>(
  _ep0,
  _mw0,
  "ListClientMetadataURLs",
  ListClientMetadataURLs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClientMetadataURLsRequest;
      output: ListClientMetadataURLsResponse;
    };
    sdk: {
      input: ListClientMetadataURLsCommandInput;
      output: ListClientMetadataURLsCommandOutput;
    };
  };
}
