// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTapesInput, DescribeTapesOutput } from "../models/models_0";
import { DescribeTapes } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTapesCommand}.
 */
export interface DescribeTapesCommandInput extends DescribeTapesInput {}
/**
 * @public
 *
 * The output of {@link DescribeTapesCommand}.
 */
export interface DescribeTapesCommandOutput extends DescribeTapesOutput, __MetadataBearer {}

/**
 * <p>Returns a description of virtual tapes that correspond to the specified Amazon Resource
 *          Names (ARNs). If <code>TapeARN</code> is not specified, returns a description of the
 *          virtual tapes associated with the specified gateway. This operation is only supported for
 *          the tape gateway type.</p>
 *          <p>The operation supports pagination. By default, the operation returns a maximum of up to
 *          100 tapes. You can optionally specify the <code>Limit</code> field in the body to limit the
 *          number of tapes in the response. If the number of tapes returned in the response is
 *          truncated, the response includes a <code>Marker</code> field. You can use this
 *             <code>Marker</code> value in your subsequent request to retrieve the next set of
 *          tapes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeTapesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeTapesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeTapesInput
 *   GatewayARN: "STRING_VALUE", // required
 *   TapeARNs: [ // TapeARNs
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeTapesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTapesOutput
 * //   Tapes: [ // Tapes
 * //     { // Tape
 * //       TapeARN: "STRING_VALUE",
 * //       TapeBarcode: "STRING_VALUE",
 * //       TapeCreatedDate: new Date("TIMESTAMP"),
 * //       TapeSizeInBytes: Number("long"),
 * //       TapeStatus: "STRING_VALUE",
 * //       VTLDevice: "STRING_VALUE",
 * //       Progress: Number("double"),
 * //       TapeUsedInBytes: Number("long"),
 * //       KMSKey: "STRING_VALUE",
 * //       PoolId: "STRING_VALUE",
 * //       Worm: true || false,
 * //       RetentionStartDate: new Date("TIMESTAMP"),
 * //       PoolEntryDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTapesCommandInput - {@link DescribeTapesCommandInput}
 * @returns {@link DescribeTapesCommandOutput}
 * @see {@link DescribeTapesCommandInput} for command's `input` shape.
 * @see {@link DescribeTapesCommandOutput} for command's `response` shape.
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
 * @example To describe virtual tape(s) associated with gateway
 * ```javascript
 * // Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a TapeARN is not specified, returns a description of all virtual tapes.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   Limit: 2,
 *   Marker: "1",
 *   TapeARNs: [
 *     "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST04A2A1",
 *     "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST05A2A0"
 *   ]
 * };
 * const command = new DescribeTapesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Marker: "1",
 *   Tapes: [
 *     {
 *       TapeARN: "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST04A2A1",
 *       TapeBarcode: "TEST04A2A1",
 *       TapeSizeInBytes: 107374182400,
 *       TapeStatus: "AVAILABLE"
 *     },
 *     {
 *       TapeARN: "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST05A2A0",
 *       TapeBarcode: "TEST05A2A0",
 *       TapeSizeInBytes: 107374182400,
 *       TapeStatus: "AVAILABLE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeTapesCommand extends $Command
  .classBuilder<
    DescribeTapesCommandInput,
    DescribeTapesCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DescribeTapes", {})
  .n("StorageGatewayClient", "DescribeTapesCommand")
  .sc(DescribeTapes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTapesInput;
      output: DescribeTapesOutput;
    };
    sdk: {
      input: DescribeTapesCommandInput;
      output: DescribeTapesCommandOutput;
    };
  };
}
