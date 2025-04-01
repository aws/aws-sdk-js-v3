// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeWorkingStorageInput, DescribeWorkingStorageOutput } from "../models/models_0";
import { de_DescribeWorkingStorageCommand, se_DescribeWorkingStorageCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkingStorageCommand}.
 */
export interface DescribeWorkingStorageCommandInput extends DescribeWorkingStorageInput {}
/**
 * @public
 *
 * The output of {@link DescribeWorkingStorageCommand}.
 */
export interface DescribeWorkingStorageCommandOutput extends DescribeWorkingStorageOutput, __MetadataBearer {}

/**
 * <p>Returns information about the working storage of a gateway. This operation is only
 *          supported in the stored volumes gateway type. This operation is deprecated in cached
 *          volumes API version (20120630). Use DescribeUploadBuffer instead.</p>
 *          <note>
 *             <p>Working storage is also referred to as upload buffer. You can also use the
 *             DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.</p>
 *          </note>
 *          <p>The response includes disk IDs that are configured as working storage, and it includes
 *          the amount of working storage allocated and used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeWorkingStorageCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeWorkingStorageCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeWorkingStorageInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkingStorageCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkingStorageOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   DiskIds: [ // DiskIds
 * //     "STRING_VALUE",
 * //   ],
 * //   WorkingStorageUsedInBytes: Number("long"),
 * //   WorkingStorageAllocatedInBytes: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeWorkingStorageCommandInput - {@link DescribeWorkingStorageCommandInput}
 * @returns {@link DescribeWorkingStorageCommandOutput}
 * @see {@link DescribeWorkingStorageCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkingStorageCommandOutput} for command's `response` shape.
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
 * @example To describe the working storage of a gateway [Depreciated]
 * ```javascript
 * // This operation is supported only for the gateway-stored volume architecture. This operation is deprecated in cached-volumes API version (20120630). Use DescribeUploadBuffer instead.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeWorkingStorageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DiskIds: [
 *     "pci-0000:03:00.0-scsi-0:0:0:0",
 *     "pci-0000:03:00.0-scsi-0:0:1:0"
 *   ],
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   WorkingStorageAllocatedInBytes: 2199023255552,
 *   WorkingStorageUsedInBytes: 789207040
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeWorkingStorageCommand extends $Command
  .classBuilder<
    DescribeWorkingStorageCommandInput,
    DescribeWorkingStorageCommandOutput,
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
  .s("StorageGateway_20130630", "DescribeWorkingStorage", {})
  .n("StorageGatewayClient", "DescribeWorkingStorageCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWorkingStorageCommand)
  .de(de_DescribeWorkingStorageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkingStorageInput;
      output: DescribeWorkingStorageOutput;
    };
    sdk: {
      input: DescribeWorkingStorageCommandInput;
      output: DescribeWorkingStorageCommandOutput;
    };
  };
}
