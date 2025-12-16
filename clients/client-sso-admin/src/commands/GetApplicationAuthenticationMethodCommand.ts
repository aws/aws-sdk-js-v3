// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetApplicationAuthenticationMethodRequest,
  GetApplicationAuthenticationMethodResponse,
} from "../models/models_0";
import { GetApplicationAuthenticationMethod$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

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
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
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
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "GetApplicationAuthenticationMethod", {})
  .n("SSOAdminClient", "GetApplicationAuthenticationMethodCommand")
  .sc(GetApplicationAuthenticationMethod$)
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
