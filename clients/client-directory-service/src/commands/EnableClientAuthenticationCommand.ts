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
import type { EnableClientAuthenticationRequest, EnableClientAuthenticationResult } from "../models/models_0";
import { EnableClientAuthentication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableClientAuthenticationCommand}.
 */
export interface EnableClientAuthenticationCommandInput extends EnableClientAuthenticationRequest {}
/**
 * @public
 *
 * The output of {@link EnableClientAuthenticationCommand}.
 */
export interface EnableClientAuthenticationCommandOutput extends EnableClientAuthenticationResult, __MetadataBearer {}

/**
 * <p>Enables alternative client authentication methods for the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableClientAuthenticationCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableClientAuthenticationCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // EnableClientAuthenticationRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Type: "SmartCard" || "SmartCardOrPassword", // required
 * };
 * const command = new EnableClientAuthenticationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableClientAuthenticationCommandInput - {@link EnableClientAuthenticationCommandInput}
 * @returns {@link EnableClientAuthenticationCommandOutput}
 * @see {@link EnableClientAuthenticationCommandInput} for command's `input` shape.
 * @see {@link EnableClientAuthenticationCommandOutput} for command's `response` shape.
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
 * @throws {@link NoAvailableCertificateException} (client fault)
 *  <p>Client authentication setup could not be completed because at least one valid certificate
 *       must be registered in the system.</p>
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
export class EnableClientAuthenticationCommand extends $Command
  .classBuilder<
    EnableClientAuthenticationCommandInput,
    EnableClientAuthenticationCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "EnableClientAuthentication", {})
  .n("DirectoryServiceClient", "EnableClientAuthenticationCommand")
  .sc(EnableClientAuthentication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableClientAuthenticationRequest;
      output: {};
    };
    sdk: {
      input: EnableClientAuthenticationCommandInput;
      output: EnableClientAuthenticationCommandOutput;
    };
  };
}
