// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListApplicationAuthenticationMethodsRequest,
  ListApplicationAuthenticationMethodsResponse,
} from "../models/models_0";
import {
  de_ListApplicationAuthenticationMethodsCommand,
  se_ListApplicationAuthenticationMethodsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationAuthenticationMethodsCommand}.
 */
export interface ListApplicationAuthenticationMethodsCommandInput extends ListApplicationAuthenticationMethodsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationAuthenticationMethodsCommand}.
 */
export interface ListApplicationAuthenticationMethodsCommandOutput
  extends ListApplicationAuthenticationMethodsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all of the authentication methods supported by the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListApplicationAuthenticationMethodsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListApplicationAuthenticationMethodsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSOAdminClient(config);
 * const input = { // ListApplicationAuthenticationMethodsRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationAuthenticationMethodsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationAuthenticationMethodsResponse
 * //   AuthenticationMethods: [ // AuthenticationMethods
 * //     { // AuthenticationMethodItem
 * //       AuthenticationMethodType: "IAM",
 * //       AuthenticationMethod: { // AuthenticationMethod Union: only one key present
 * //         Iam: { // IamAuthenticationMethod
 * //           ActorPolicy: "DOCUMENT_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationAuthenticationMethodsCommandInput - {@link ListApplicationAuthenticationMethodsCommandInput}
 * @returns {@link ListApplicationAuthenticationMethodsCommandOutput}
 * @see {@link ListApplicationAuthenticationMethodsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationAuthenticationMethodsCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 * @public
 */
export class ListApplicationAuthenticationMethodsCommand extends $Command
  .classBuilder<
    ListApplicationAuthenticationMethodsCommandInput,
    ListApplicationAuthenticationMethodsCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "ListApplicationAuthenticationMethods", {})
  .n("SSOAdminClient", "ListApplicationAuthenticationMethodsCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationAuthenticationMethodsCommand)
  .de(de_ListApplicationAuthenticationMethodsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationAuthenticationMethodsRequest;
      output: ListApplicationAuthenticationMethodsResponse;
    };
    sdk: {
      input: ListApplicationAuthenticationMethodsCommandInput;
      output: ListApplicationAuthenticationMethodsCommandOutput;
    };
  };
}
