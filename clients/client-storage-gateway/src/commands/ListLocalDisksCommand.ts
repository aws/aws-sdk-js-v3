// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLocalDisksInput, ListLocalDisksOutput } from "../models/models_0";
import { de_ListLocalDisksCommand, se_ListLocalDisksCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLocalDisksCommand}.
 */
export interface ListLocalDisksCommandInput extends ListLocalDisksInput {}
/**
 * @public
 *
 * The output of {@link ListLocalDisksCommand}.
 */
export interface ListLocalDisksCommandOutput extends ListLocalDisksOutput, __MetadataBearer {}

/**
 * <p>Returns a list of the gateway's local disks. To specify which gateway to describe,
 *          you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p>
 *          <p>The request returns a list of all disks, specifying which are configured as working
 *          storage, cache storage, or stored volume or not configured at all. The response includes a
 *             <code>DiskStatus</code> field. This field can have a value of present (the disk is
 *          available to use), missing (the disk is no longer connected to the gateway), or mismatch
 *          (the disk node is occupied by a disk that has incorrect metadata or the disk content is
 *          corrupted).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListLocalDisksCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListLocalDisksCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // ListLocalDisksInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new ListLocalDisksCommand(input);
 * const response = await client.send(command);
 * // { // ListLocalDisksOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   Disks: [ // Disks
 * //     { // Disk
 * //       DiskId: "STRING_VALUE",
 * //       DiskPath: "STRING_VALUE",
 * //       DiskNode: "STRING_VALUE",
 * //       DiskStatus: "STRING_VALUE",
 * //       DiskSizeInBytes: Number("long"),
 * //       DiskAllocationType: "STRING_VALUE",
 * //       DiskAllocationResource: "STRING_VALUE",
 * //       DiskAttributeList: [ // DiskAttributeList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListLocalDisksCommandInput - {@link ListLocalDisksCommandInput}
 * @returns {@link ListLocalDisksCommandOutput}
 * @see {@link ListLocalDisksCommandInput} for command's `input` shape.
 * @see {@link ListLocalDisksCommandOutput} for command's `response` shape.
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
 * @example To list the gateway's local disks
 * ```javascript
 * // The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new ListLocalDisksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Disks: [
 *     {
 *       DiskAllocationType: "CACHE_STORAGE",
 *       DiskId: "pci-0000:03:00.0-scsi-0:0:0:0",
 *       DiskNode: "SCSI(0:0)",
 *       DiskPath: "/dev/sda",
 *       DiskSizeInBytes: 1099511627776,
 *       DiskStatus: "missing"
 *     },
 *     {
 *       DiskAllocationResource: "",
 *       DiskAllocationType: "UPLOAD_BUFFER",
 *       DiskId: "pci-0000:03:00.0-scsi-0:0:1:0",
 *       DiskNode: "SCSI(0:1)",
 *       DiskPath: "/dev/sdb",
 *       DiskSizeInBytes: 1099511627776,
 *       DiskStatus: "present"
 *     }
 *   ],
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListLocalDisksCommand extends $Command
  .classBuilder<
    ListLocalDisksCommandInput,
    ListLocalDisksCommandOutput,
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
  .s("StorageGateway_20130630", "ListLocalDisks", {})
  .n("StorageGatewayClient", "ListLocalDisksCommand")
  .f(void 0, void 0)
  .ser(se_ListLocalDisksCommand)
  .de(de_ListLocalDisksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLocalDisksInput;
      output: ListLocalDisksOutput;
    };
    sdk: {
      input: ListLocalDisksCommandInput;
      output: ListLocalDisksCommandOutput;
    };
  };
}
