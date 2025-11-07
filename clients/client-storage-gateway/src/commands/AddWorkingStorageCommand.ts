// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AddWorkingStorageInput, AddWorkingStorageOutput } from "../models/models_0";
import { AddWorkingStorage } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddWorkingStorageCommand}.
 */
export interface AddWorkingStorageCommandInput extends AddWorkingStorageInput {}
/**
 * @public
 *
 * The output of {@link AddWorkingStorageCommand}.
 */
export interface AddWorkingStorageCommandOutput extends AddWorkingStorageOutput, __MetadataBearer {}

/**
 * <p>Configures one or more gateway local disks as working storage for a gateway. This
 *          operation is only supported in the stored volume gateway type. This operation is deprecated
 *          in cached volume API version 20120630. Use <a>AddUploadBuffer</a>
 *          instead.</p>
 *          <note>
 *             <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored volume
 *             gateway.</p>
 *          </note>
 *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 *          add working storage, and one or more disk IDs that you want to configure as working
 *          storage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AddWorkingStorageCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AddWorkingStorageCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // AddWorkingStorageInput
 *   GatewayARN: "STRING_VALUE", // required
 *   DiskIds: [ // DiskIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AddWorkingStorageCommand(input);
 * const response = await client.send(command);
 * // { // AddWorkingStorageOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddWorkingStorageCommandInput - {@link AddWorkingStorageCommandInput}
 * @returns {@link AddWorkingStorageCommandOutput}
 * @see {@link AddWorkingStorageCommandInput} for command's `input` shape.
 * @see {@link AddWorkingStorageCommandOutput} for command's `response` shape.
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
 * @example To add storage on local disk
 * ```javascript
 * // Configures one or more gateway local disks as working storage for a gateway. (Working storage is also referred to as upload buffer.)
 * const input = {
 *   DiskIds: [
 *     "pci-0000:03:00.0-scsi-0:0:0:0",
 *     "pci-0000:03:00.0-scsi-0:0:1:0"
 *   ],
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new AddWorkingStorageCommand(input);
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
export class AddWorkingStorageCommand extends $Command
  .classBuilder<
    AddWorkingStorageCommandInput,
    AddWorkingStorageCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "AddWorkingStorage", {})
  .n("StorageGatewayClient", "AddWorkingStorageCommand")
  .sc(AddWorkingStorage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddWorkingStorageInput;
      output: AddWorkingStorageOutput;
    };
    sdk: {
      input: AddWorkingStorageCommandInput;
      output: AddWorkingStorageCommandOutput;
    };
  };
}
