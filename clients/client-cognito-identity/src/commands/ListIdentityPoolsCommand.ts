// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIdentityPoolsInput, ListIdentityPoolsResponse } from "../models/models_0";
import { de_ListIdentityPoolsCommand, se_ListIdentityPoolsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIdentityPoolsCommand}.
 */
export interface ListIdentityPoolsCommandInput extends ListIdentityPoolsInput {}
/**
 * @public
 *
 * The output of {@link ListIdentityPoolsCommand}.
 */
export interface ListIdentityPoolsCommandOutput extends ListIdentityPoolsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the Cognito identity pools registered for your account.</p>
 *          <p>You must use Amazon Web Services developer credentials to call this
 *          operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, ListIdentityPoolsCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, ListIdentityPoolsCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * // import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
 * const config = {}; // type is CognitoIdentityClientConfig
 * const client = new CognitoIdentityClient(config);
 * const input = { // ListIdentityPoolsInput
 *   MaxResults: Number("int"), // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListIdentityPoolsCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityPoolsResponse
 * //   IdentityPools: [ // IdentityPoolsList
 * //     { // IdentityPoolShortDescription
 * //       IdentityPoolId: "STRING_VALUE",
 * //       IdentityPoolName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentityPoolsCommandInput - {@link ListIdentityPoolsCommandInput}
 * @returns {@link ListIdentityPoolsCommandOutput}
 * @see {@link ListIdentityPoolsCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPoolsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Thrown when a user is not authorized to access the requested resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Thrown when a request is throttled.</p>
 *
 * @throws {@link CognitoIdentityServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentity service.</p>
 *
 *
 * @public
 */
export class ListIdentityPoolsCommand extends $Command
  .classBuilder<
    ListIdentityPoolsCommandInput,
    ListIdentityPoolsCommandOutput,
    CognitoIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityService", "ListIdentityPools", {})
  .n("CognitoIdentityClient", "ListIdentityPoolsCommand")
  .f(void 0, void 0)
  .ser(se_ListIdentityPoolsCommand)
  .de(de_ListIdentityPoolsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdentityPoolsInput;
      output: ListIdentityPoolsResponse;
    };
    sdk: {
      input: ListIdentityPoolsCommandInput;
      output: ListIdentityPoolsCommandOutput;
    };
  };
}
