// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetApplicationAuthenticationMethodRequest,
  GetApplicationAuthenticationMethodResponse,
} from "../models/models_0";
import {
  de_GetApplicationAuthenticationMethodCommand,
  se_GetApplicationAuthenticationMethodCommand,
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
 * The input for {@link GetApplicationAuthenticationMethodCommand}.
 */
export interface GetApplicationAuthenticationMethodCommandInput extends GetApplicationAuthenticationMethodRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationAuthenticationMethodCommand}.
 */
export interface GetApplicationAuthenticationMethodCommandOutput
  extends GetApplicationAuthenticationMethodResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves details about an authentication method used by an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetApplicationAuthenticationMethodCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetApplicationAuthenticationMethodCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSOAdminClient(config);
 * const input = { // GetApplicationAuthenticationMethodRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   AuthenticationMethodType: "IAM", // required
 * };
 * const command = new GetApplicationAuthenticationMethodCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationAuthenticationMethodResponse
 * //   AuthenticationMethod: { // AuthenticationMethod Union: only one key present
 * //     Iam: { // IamAuthenticationMethod
 * //       ActorPolicy: "DOCUMENT_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApplicationAuthenticationMethodCommandInput - {@link GetApplicationAuthenticationMethodCommandInput}
 * @returns {@link GetApplicationAuthenticationMethodCommandOutput}
 * @see {@link GetApplicationAuthenticationMethodCommandInput} for command's `input` shape.
 * @see {@link GetApplicationAuthenticationMethodCommandOutput} for command's `response` shape.
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
export class GetApplicationAuthenticationMethodCommand extends $Command
  .classBuilder<
    GetApplicationAuthenticationMethodCommandInput,
    GetApplicationAuthenticationMethodCommandOutput,
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
  .s("SWBExternalService", "GetApplicationAuthenticationMethod", {})
  .n("SSOAdminClient", "GetApplicationAuthenticationMethodCommand")
  .f(void 0, void 0)
  .ser(se_GetApplicationAuthenticationMethodCommand)
  .de(de_GetApplicationAuthenticationMethodCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationAuthenticationMethodRequest;
      output: GetApplicationAuthenticationMethodResponse;
    };
    sdk: {
      input: GetApplicationAuthenticationMethodCommandInput;
      output: GetApplicationAuthenticationMethodCommandOutput;
    };
  };
}
