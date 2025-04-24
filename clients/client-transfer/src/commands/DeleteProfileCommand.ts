// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProfileRequest } from "../models/models_0";
import { de_DeleteProfileCommand, se_DeleteProfileCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProfileCommand}.
 */
export interface DeleteProfileCommandInput extends DeleteProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProfileCommand}.
 */
export interface DeleteProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the profile that's specified in the <code>ProfileId</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteProfileCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteProfileCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // DeleteProfileRequest
 *   ProfileId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProfileCommandInput - {@link DeleteProfileCommandInput}
 * @returns {@link DeleteProfileCommandOutput}
 * @see {@link DeleteProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
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
export class DeleteProfileCommand extends $Command
  .classBuilder<
    DeleteProfileCommandInput,
    DeleteProfileCommandOutput,
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
  .s("TransferService", "DeleteProfile", {})
  .n("TransferClient", "DeleteProfileCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProfileCommand)
  .de(de_DeleteProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteProfileCommandInput;
      output: DeleteProfileCommandOutput;
    };
  };
}
