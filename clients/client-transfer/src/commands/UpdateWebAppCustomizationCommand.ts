// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWebAppCustomizationRequest, UpdateWebAppCustomizationResponse } from "../models/models_0";
import { UpdateWebAppCustomization } from "../schemas/schemas_3_Web";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWebAppCustomizationCommand}.
 */
export interface UpdateWebAppCustomizationCommandInput extends UpdateWebAppCustomizationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWebAppCustomizationCommand}.
 */
export interface UpdateWebAppCustomizationCommandOutput extends UpdateWebAppCustomizationResponse, __MetadataBearer {}

/**
 * <p>Assigns new customization properties to a web app. You can modify the icon file, logo file, and title.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateWebAppCustomizationCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateWebAppCustomizationCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // UpdateWebAppCustomizationRequest
 *   WebAppId: "STRING_VALUE", // required
 *   Title: "STRING_VALUE",
 *   LogoFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   FaviconFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new UpdateWebAppCustomizationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWebAppCustomizationResponse
 * //   WebAppId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateWebAppCustomizationCommandInput - {@link UpdateWebAppCustomizationCommandInput}
 * @returns {@link UpdateWebAppCustomizationCommandOutput}
 * @see {@link UpdateWebAppCustomizationCommandInput} for command's `input` shape.
 * @see {@link UpdateWebAppCustomizationCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when the <code>UpdateServer</code> is called for a file transfer protocol-enabled server that has VPC as the endpoint type and the server's <code>VpcEndpointID</code> is not in the available state.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class UpdateWebAppCustomizationCommand extends $Command
  .classBuilder<
    UpdateWebAppCustomizationCommandInput,
    UpdateWebAppCustomizationCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "UpdateWebAppCustomization", {})
  .n("TransferClient", "UpdateWebAppCustomizationCommand")
  .sc(UpdateWebAppCustomization)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWebAppCustomizationRequest;
      output: UpdateWebAppCustomizationResponse;
    };
    sdk: {
      input: UpdateWebAppCustomizationCommandInput;
      output: UpdateWebAppCustomizationCommandOutput;
    };
  };
}
