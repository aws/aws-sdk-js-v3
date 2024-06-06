// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeUploadBufferInput, DescribeUploadBufferOutput } from "../models/models_0";
import { de_DescribeUploadBufferCommand, se_DescribeUploadBufferCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUploadBufferCommand}.
 */
export interface DescribeUploadBufferCommandInput extends DescribeUploadBufferInput {}
/**
 * @public
 *
 * The output of {@link DescribeUploadBufferCommand}.
 */
export interface DescribeUploadBufferCommandOutput extends DescribeUploadBufferOutput, __MetadataBearer {}

/**
 * <p>Returns information about the upload buffer of a gateway. This operation is supported
 *          for the stored volume, cached volume, and tape gateway types.</p>
 *          <p>The response includes disk IDs that are configured as upload buffer space, and it
 *          includes the amount of upload buffer space allocated and used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeUploadBufferCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeUploadBufferCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeUploadBufferInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeUploadBufferCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUploadBufferOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   DiskIds: [ // DiskIds
 * //     "STRING_VALUE",
 * //   ],
 * //   UploadBufferUsedInBytes: Number("long"),
 * //   UploadBufferAllocatedInBytes: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeUploadBufferCommandInput - {@link DescribeUploadBufferCommandInput}
 * @returns {@link DescribeUploadBufferCommandOutput}
 * @see {@link DescribeUploadBufferCommandInput} for command's `input` shape.
 * @see {@link DescribeUploadBufferCommandOutput} for command's `response` shape.
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
 * @public
 * @example To describe upload buffer of gateway
 * ```javascript
 * // Returns information about the upload buffer of a gateway including disk IDs and the amount of upload buffer space allocated/used.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeUploadBufferCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DiskIds": [
 *     "pci-0000:03:00.0-scsi-0:0:0:0",
 *     "pci-0000:04:00.0-scsi-0:1:0:0"
 *   ],
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "UploadBufferAllocatedInBytes": 0,
 *   "UploadBufferUsedInBytes": 161061273600
 * }
 * *\/
 * // example id: to-describe-upload-buffer-of-gateway-1471631099003
 * ```
 *
 * @example To describe upload buffer of a gateway
 * ```javascript
 * // Returns information about the upload buffer of a gateway including disk IDs and the amount of upload buffer space allocated and used.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeUploadBufferCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DiskIds": [
 *     "pci-0000:03:00.0-scsi-0:0:0:0",
 *     "pci-0000:04:00.0-scsi-0:1:0:0"
 *   ],
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "UploadBufferAllocatedInBytes": 161061273600,
 *   "UploadBufferUsedInBytes": 0
 * }
 * *\/
 * // example id: to-describe-upload-buffer-of-a-gateway--1471904566370
 * ```
 *
 */
export class DescribeUploadBufferCommand extends $Command
  .classBuilder<
    DescribeUploadBufferCommandInput,
    DescribeUploadBufferCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "DescribeUploadBuffer", {})
  .n("StorageGatewayClient", "DescribeUploadBufferCommand")
  .f(void 0, void 0)
  .ser(se_DescribeUploadBufferCommand)
  .de(de_DescribeUploadBufferCommand)
  .build() {}
