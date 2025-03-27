// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AddCacheInput, AddCacheOutput } from "../models/models_0";
import { de_AddCacheCommand, se_AddCacheCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddCacheCommand}.
 */
export interface AddCacheCommandInput extends AddCacheInput {}
/**
 * @public
 *
 * The output of {@link AddCacheCommand}.
 */
export interface AddCacheCommandOutput extends AddCacheOutput, __MetadataBearer {}

/**
 * <p>Configures one or more gateway local disks as cache for a gateway. This operation is
 *          only supported in the cached volume, tape, and file gateway type (see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html">How Storage Gateway works (architecture)</a>.</p>
 *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 *          add cache, and one or more disk IDs that you want to configure as cache.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AddCacheCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AddCacheCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // AddCacheInput
 *   GatewayARN: "STRING_VALUE", // required
 *   DiskIds: [ // DiskIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AddCacheCommand(input);
 * const response = await client.send(command);
 * // { // AddCacheOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddCacheCommandInput - {@link AddCacheCommandInput}
 * @returns {@link AddCacheCommandOutput}
 * @see {@link AddCacheCommandInput} for command's `input` shape.
 * @see {@link AddCacheCommandOutput} for command's `response` shape.
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
 * @example To add a cache
 * ```javascript
 * // The following example shows a request that activates a gateway-stored volume.
 * const input = {
 *   DiskIds: [
 *     "pci-0000:03:00.0-scsi-0:0:0:0",
 *     "pci-0000:03:00.0-scsi-0:0:1:0"
 *   ],
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new AddCacheCommand(input);
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
export class AddCacheCommand extends $Command
  .classBuilder<
    AddCacheCommandInput,
    AddCacheCommandOutput,
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
  .s("StorageGateway_20130630", "AddCache", {})
  .n("StorageGatewayClient", "AddCacheCommand")
  .f(void 0, void 0)
  .ser(se_AddCacheCommand)
  .de(de_AddCacheCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddCacheInput;
      output: AddCacheOutput;
    };
    sdk: {
      input: AddCacheCommandInput;
      output: AddCacheCommandOutput;
    };
  };
}
