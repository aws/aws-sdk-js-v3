// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWebAppRequest } from "../models/models_0";
import { de_DeleteWebAppCommand, se_DeleteWebAppCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWebAppCommand}.
 */
export interface DeleteWebAppCommandInput extends DeleteWebAppRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWebAppCommand}.
 */
export interface DeleteWebAppCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified web app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteWebAppCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteWebAppCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // DeleteWebAppRequest
 *   WebAppId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWebAppCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWebAppCommandInput - {@link DeleteWebAppCommandInput}
 * @returns {@link DeleteWebAppCommandOutput}
 * @see {@link DeleteWebAppCommandInput} for command's `input` shape.
 * @see {@link DeleteWebAppCommandOutput} for command's `response` shape.
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
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
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
export class DeleteWebAppCommand extends $Command
  .classBuilder<
    DeleteWebAppCommandInput,
    DeleteWebAppCommandOutput,
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
  .s("TransferService", "DeleteWebApp", {})
  .n("TransferClient", "DeleteWebAppCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWebAppCommand)
  .de(de_DeleteWebAppCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWebAppRequest;
      output: {};
    };
    sdk: {
      input: DeleteWebAppCommandInput;
      output: DeleteWebAppCommandOutput;
    };
  };
}
