// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisableClientAuthenticationRequest, DisableClientAuthenticationResult } from "../models/models_0";
import { DisableClientAuthentication$ } from "../schemas/schemas_0";

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
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DisableClientAuthentication", {})
  .n("DirectoryServiceClient", "DisableClientAuthenticationCommand")
  .sc(DisableClientAuthentication$)
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
