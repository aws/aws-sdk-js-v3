// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutApplicationAuthenticationMethodRequest } from "../models/models_0";
import {
  de_PutApplicationAuthenticationMethodCommand,
  se_PutApplicationAuthenticationMethodCommand,
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
 * The input for {@link PutApplicationAuthenticationMethodCommand}.
 */
export interface PutApplicationAuthenticationMethodCommandInput extends PutApplicationAuthenticationMethodRequest {}
/**
 * @public
 *
 * The output of {@link PutApplicationAuthenticationMethodCommand}.
 */
export interface PutApplicationAuthenticationMethodCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds or updates an authentication method for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, PutApplicationAuthenticationMethodCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, PutApplicationAuthenticationMethodCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // PutApplicationAuthenticationMethodRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   AuthenticationMethodType: "IAM", // required
 *   AuthenticationMethod: { // AuthenticationMethod Union: only one key present
 *     Iam: { // IamAuthenticationMethod
 *       ActorPolicy: "DOCUMENT_VALUE", // required
 *     },
 *   },
 * };
 * const command = new PutApplicationAuthenticationMethodCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutApplicationAuthenticationMethodCommandInput - {@link PutApplicationAuthenticationMethodCommandInput}
 * @returns {@link PutApplicationAuthenticationMethodCommandOutput}
 * @see {@link PutApplicationAuthenticationMethodCommandInput} for command's `input` shape.
 * @see {@link PutApplicationAuthenticationMethodCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *             occurs when the previous write did not have time to propagate to the host serving the
 *             current request. A retry (with appropriate backoff logic) is the recommended response to
 *             this exception.</p>
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
 *
 * @public
 */
export class PutApplicationAuthenticationMethodCommand extends $Command
  .classBuilder<
    PutApplicationAuthenticationMethodCommandInput,
    PutApplicationAuthenticationMethodCommandOutput,
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
  .s("SWBExternalService", "PutApplicationAuthenticationMethod", {})
  .n("SSOAdminClient", "PutApplicationAuthenticationMethodCommand")
  .f(void 0, void 0)
  .ser(se_PutApplicationAuthenticationMethodCommand)
  .de(de_PutApplicationAuthenticationMethodCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutApplicationAuthenticationMethodRequest;
      output: {};
    };
    sdk: {
      input: PutApplicationAuthenticationMethodCommandInput;
      output: PutApplicationAuthenticationMethodCommandOutput;
    };
  };
}
