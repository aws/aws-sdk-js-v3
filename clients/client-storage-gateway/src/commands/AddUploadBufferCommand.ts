// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AddUploadBufferInput, AddUploadBufferOutput } from "../models/models_0";
import { de_AddUploadBufferCommand, se_AddUploadBufferCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddUploadBufferCommand}.
 */
export interface AddUploadBufferCommandInput extends AddUploadBufferInput {}
/**
 * @public
 *
 * The output of {@link AddUploadBufferCommand}.
 */
export interface AddUploadBufferCommandOutput extends AddUploadBufferOutput, __MetadataBearer {}

/**
 * <p>Configures one or more gateway local disks as upload buffer for a specified gateway.
 *          This operation is supported for the stored volume, cached volume, and tape gateway
 *          types.</p>
 *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 *          add upload buffer, and one or more disk IDs that you want to configure as upload
 *          buffer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AddUploadBufferCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AddUploadBufferCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // AddUploadBufferInput
 *   GatewayARN: "STRING_VALUE", // required
 *   DiskIds: [ // DiskIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AddUploadBufferCommand(input);
 * const response = await client.send(command);
 * // { // AddUploadBufferOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddUploadBufferCommandInput - {@link AddUploadBufferCommandInput}
 * @returns {@link AddUploadBufferCommandOutput}
 * @see {@link AddUploadBufferCommandInput} for command's `input` shape.
 * @see {@link AddUploadBufferCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @example To add upload buffer on local disk
 * ```javascript
 * // Configures one or more gateway local disks as upload buffer for a specified gateway.
 * const input = {
 *   DiskIds: [
 *     "pci-0000:03:00.0-scsi-0:0:0:0",
 *     "pci-0000:03:00.0-scsi-0:0:1:0"
 *   ],
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new AddUploadBufferCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AddUploadBufferCommand extends $Command
  .classBuilder<
    AddUploadBufferCommandInput,
    AddUploadBufferCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "AddUploadBuffer", {})
  .n("StorageGatewayClient", "AddUploadBufferCommand")
  .f(void 0, void 0)
  .ser(se_AddUploadBufferCommand)
  .de(de_AddUploadBufferCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddUploadBufferInput;
      output: AddUploadBufferOutput;
    };
    sdk: {
      input: AddUploadBufferCommandInput;
      output: AddUploadBufferCommandOutput;
    };
  };
}
