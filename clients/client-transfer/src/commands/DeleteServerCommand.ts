// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServerRequest } from "../models/models_0";
import { de_DeleteServerCommand, se_DeleteServerCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServerCommand}.
 */
export interface DeleteServerCommandInput extends DeleteServerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServerCommand}.
 */
export interface DeleteServerCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // DeleteServerRequest
 *   ServerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteServerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServerCommandInput - {@link DeleteServerCommandInput}
 * @returns {@link DeleteServerCommandOutput}
 * @see {@link DeleteServerCommandInput} for command's `input` shape.
 * @see {@link DeleteServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class DeleteServerCommand extends $Command
  .classBuilder<
    DeleteServerCommandInput,
    DeleteServerCommandOutput,
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
  .s("TransferService", "DeleteServer", {})
  .n("TransferClient", "DeleteServerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteServerCommand)
  .de(de_DeleteServerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServerRequest;
      output: {};
    };
    sdk: {
      input: DeleteServerCommandInput;
      output: DeleteServerCommandOutput;
    };
  };
}
