// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVolumeInitiatorsInput, ListVolumeInitiatorsOutput } from "../models/models_0";
import { ListVolumeInitiators } from "../schemas/schemas_13_ListVolumeInitiators";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVolumeInitiatorsCommand}.
 */
export interface ListVolumeInitiatorsCommandInput extends ListVolumeInitiatorsInput {}
/**
 * @public
 *
 * The output of {@link ListVolumeInitiatorsCommand}.
 */
export interface ListVolumeInitiatorsCommandOutput extends ListVolumeInitiatorsOutput, __MetadataBearer {}

/**
 * <p>Lists iSCSI initiators that are connected to a volume. You can use this operation to
 *          determine whether a volume is being used or not. This operation is only supported in the
 *          cached volume and stored volume gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumeInitiatorsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumeInitiatorsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // ListVolumeInitiatorsInput
 *   VolumeARN: "STRING_VALUE", // required
 * };
 * const command = new ListVolumeInitiatorsCommand(input);
 * const response = await client.send(command);
 * // { // ListVolumeInitiatorsOutput
 * //   Initiators: [ // Initiators
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVolumeInitiatorsCommandInput - {@link ListVolumeInitiatorsCommandInput}
 * @returns {@link ListVolumeInitiatorsCommandOutput}
 * @see {@link ListVolumeInitiatorsCommandInput} for command's `input` shape.
 * @see {@link ListVolumeInitiatorsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListVolumeInitiatorsCommand extends $Command
  .classBuilder<
    ListVolumeInitiatorsCommandInput,
    ListVolumeInitiatorsCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "ListVolumeInitiators", {})
  .n("StorageGatewayClient", "ListVolumeInitiatorsCommand")
  .sc(ListVolumeInitiators)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVolumeInitiatorsInput;
      output: ListVolumeInitiatorsOutput;
    };
    sdk: {
      input: ListVolumeInitiatorsCommandInput;
      output: ListVolumeInitiatorsCommandOutput;
    };
  };
}
