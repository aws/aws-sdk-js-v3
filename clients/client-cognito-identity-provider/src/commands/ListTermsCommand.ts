// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTermsRequest, ListTermsResponse } from "../models/models_0";
import { ListTerms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTermsCommand}.
 */
export interface ListTermsCommandInput extends ListTermsRequest {}
/**
 * @public
 *
 * The output of {@link ListTermsCommand}.
 */
export interface ListTermsCommandOutput extends ListTermsResponse, __MetadataBearer {}

/**
 * Returns details about all terms documents for the requested user pool.
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
 * import { CognitoIdentityProviderClient, ListTermsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListTermsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListTermsRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTermsCommand(input);
 * const response = await client.send(command);
 * // { // ListTermsResponse
 * //   Terms: [ // TermsDescriptionListType // required
 * //     { // TermsDescriptionType
 * //       TermsId: "STRING_VALUE", // required
 * //       TermsName: "STRING_VALUE", // required
 * //       Enforcement: "NONE", // required
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       LastModifiedDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTermsCommandInput - {@link ListTermsCommandInput}
 * @returns {@link ListTermsCommandOutput}
 * @see {@link ListTermsCommandInput} for command's `input` shape.
 * @see {@link ListTermsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListTermsCommand extends command<ListTermsCommandInput, ListTermsCommandOutput>(
  _ep0,
  _mw0,
  "ListTerms",
  ListTerms$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTermsRequest;
      output: ListTermsResponse;
    };
    sdk: {
      input: ListTermsCommandInput;
      output: ListTermsCommandOutput;
    };
  };
}
