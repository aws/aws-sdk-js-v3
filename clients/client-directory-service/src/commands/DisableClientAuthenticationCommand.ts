// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableClientAuthenticationRequest, DisableClientAuthenticationResult } from "../models/models_0";
import { de_DisableClientAuthenticationCommand, se_DisableClientAuthenticationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableClientAuthenticationCommand}.
 */
export interface DisableClientAuthenticationCommandInput extends DisableClientAuthenticationRequest {}
/**
 * @public
 *
 * The output of {@link DisableClientAuthenticationCommand}.
 */
export interface DisableClientAuthenticationCommandOutput extends DisableClientAuthenticationResult, __MetadataBearer {}

/**
 * <p>Disables alternative client authentication methods for the specified directory. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DisableClientAuthenticationCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DisableClientAuthenticationCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // DisableClientAuthenticationRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Type: "SmartCard" || "SmartCardOrPassword", // required
 * };
 * const command = new DisableClientAuthenticationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableClientAuthenticationCommandInput - {@link DisableClientAuthenticationCommandInput}
 * @returns {@link DisableClientAuthenticationCommandOutput}
 * @see {@link DisableClientAuthenticationCommandInput} for command's `input` shape.
 * @see {@link DisableClientAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link InvalidClientAuthStatusException} (client fault)
 *  <p>Client authentication is already enabled.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class DisableClientAuthenticationCommand extends $Command
  .classBuilder<
    DisableClientAuthenticationCommandInput,
    DisableClientAuthenticationCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "DisableClientAuthentication", {})
  .n("DirectoryServiceClient", "DisableClientAuthenticationCommand")
  .f(void 0, void 0)
  .ser(se_DisableClientAuthenticationCommand)
  .de(de_DisableClientAuthenticationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableClientAuthenticationRequest;
      output: {};
    };
    sdk: {
      input: DisableClientAuthenticationCommandInput;
      output: DisableClientAuthenticationCommandOutput;
    };
  };
}
