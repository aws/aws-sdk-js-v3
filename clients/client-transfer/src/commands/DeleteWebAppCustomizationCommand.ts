// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWebAppCustomizationRequest } from "../models/models_0";
import { de_DeleteWebAppCustomizationCommand, se_DeleteWebAppCustomizationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWebAppCustomizationCommand}.
 */
export interface DeleteWebAppCustomizationCommandInput extends DeleteWebAppCustomizationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWebAppCustomizationCommand}.
 */
export interface DeleteWebAppCustomizationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the <code>WebAppCustomization</code> object that corresponds to the web app ID specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteWebAppCustomizationCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteWebAppCustomizationCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // DeleteWebAppCustomizationRequest
 *   WebAppId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWebAppCustomizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWebAppCustomizationCommandInput - {@link DeleteWebAppCustomizationCommandInput}
 * @returns {@link DeleteWebAppCustomizationCommandOutput}
 * @see {@link DeleteWebAppCustomizationCommandInput} for command's `input` shape.
 * @see {@link DeleteWebAppCustomizationCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when the <code>UpdateServer</code> is called for a file transfer
 *       protocol-enabled server that has VPC as the endpoint type and the server's
 *         <code>VpcEndpointID</code> is not in the available state.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 * @public
 */
export class DeleteWebAppCustomizationCommand extends $Command
  .classBuilder<
    DeleteWebAppCustomizationCommandInput,
    DeleteWebAppCustomizationCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "DeleteWebAppCustomization", {})
  .n("TransferClient", "DeleteWebAppCustomizationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWebAppCustomizationCommand)
  .de(de_DeleteWebAppCustomizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWebAppCustomizationRequest;
      output: {};
    };
    sdk: {
      input: DeleteWebAppCustomizationCommandInput;
      output: DeleteWebAppCustomizationCommandOutput;
    };
  };
}
