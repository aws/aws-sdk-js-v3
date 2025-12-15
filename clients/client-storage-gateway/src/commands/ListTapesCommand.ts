// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTapesInput, ListTapesOutput } from "../models/models_0";
import { ListTapes$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig,
} from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTapesCommand}.
 */
export interface ListTapesCommandInput extends ListTapesInput {}
/**
 * @public
 *
 * The output of {@link ListTapesCommand}.
 */
export interface ListTapesCommandOutput extends ListTapesOutput, __MetadataBearer {}

/**
 * <p>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf
 *          (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names
 *          (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both
 *          your VTL and VTS.</p>
 *          <p>This operation supports pagination. By default, the operation returns a maximum of up to
 *          100 tapes. You can optionally specify the <code>Limit</code> parameter in the body to limit
 *          the number of tapes in the response. If the number of tapes returned in the response is
 *          truncated, the response includes a <code>Marker</code> element that you can use in your
 *          subsequent request to retrieve the next set of tapes. This operation is only supported in
 *          the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListTapesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListTapesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // ListTapesInput
 *   TapeARNs: [ // TapeARNs
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListTapesCommand(input);
 * const response = await client.send(command);
 * // { // ListTapesOutput
 * //   TapeInfos: [ // TapeInfos
 * //     { // TapeInfo
 * //       TapeARN: "STRING_VALUE",
 * //       TapeBarcode: "STRING_VALUE",
 * //       TapeSizeInBytes: Number("long"),
 * //       TapeStatus: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //       PoolId: "STRING_VALUE",
 * //       RetentionStartDate: new Date("TIMESTAMP"),
 * //       PoolEntryDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTapesCommandInput - {@link ListTapesCommandInput}
 * @returns {@link ListTapesCommandOutput}
 * @see {@link ListTapesCommandInput} for command's `input` shape.
 * @see {@link ListTapesCommandOutput} for command's `response` shape.
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
export class ListTapesCommand extends $Command
  .classBuilder<
    ListTapesCommandInput,
    ListTapesCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "ListTapes", {})
  .n("StorageGatewayClient", "ListTapesCommand")
  .sc(ListTapes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTapesInput;
      output: ListTapesOutput;
    };
    sdk: {
      input: ListTapesCommandInput;
      output: ListTapesCommandOutput;
    };
  };
}
