// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTapeWithBarcodeInput, CreateTapeWithBarcodeOutput } from "../models/models_0";
import { de_CreateTapeWithBarcodeCommand, se_CreateTapeWithBarcodeCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTapeWithBarcodeCommand}.
 */
export interface CreateTapeWithBarcodeCommandInput extends CreateTapeWithBarcodeInput {}
/**
 * @public
 *
 * The output of {@link CreateTapeWithBarcodeCommand}.
 */
export interface CreateTapeWithBarcodeCommandOutput extends CreateTapeWithBarcodeOutput, __MetadataBearer {}

/**
 * <p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and
 *          then archive the tape. A barcode is unique and cannot be reused if it has already been used
 *          on a tape. This applies to barcodes used on deleted tapes. This operation is only supported
 *          in the tape gateway type.</p>
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create a virtual tape.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateTapeWithBarcodeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateTapeWithBarcodeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // CreateTapeWithBarcodeInput
 *   GatewayARN: "STRING_VALUE", // required
 *   TapeSizeInBytes: Number("long"), // required
 *   TapeBarcode: "STRING_VALUE", // required
 *   KMSEncrypted: true || false,
 *   KMSKey: "STRING_VALUE",
 *   PoolId: "STRING_VALUE",
 *   Worm: true || false,
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateTapeWithBarcodeCommand(input);
 * const response = await client.send(command);
 * // { // CreateTapeWithBarcodeOutput
 * //   TapeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTapeWithBarcodeCommandInput - {@link CreateTapeWithBarcodeCommandInput}
 * @returns {@link CreateTapeWithBarcodeCommandOutput}
 * @see {@link CreateTapeWithBarcodeCommandInput} for command's `input` shape.
 * @see {@link CreateTapeWithBarcodeCommandOutput} for command's `response` shape.
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
 * @example To create a virtual tape using a barcode
 * ```javascript
 * // Creates a virtual tape by using your own barcode.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   TapeBarcode: "TEST12345",
 *   TapeSizeInBytes: 107374182400
 * };
 * const command = new CreateTapeWithBarcodeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TapeARN: "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST12345"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateTapeWithBarcodeCommand extends $Command
  .classBuilder<
    CreateTapeWithBarcodeCommandInput,
    CreateTapeWithBarcodeCommandOutput,
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
  .s("StorageGateway_20130630", "CreateTapeWithBarcode", {})
  .n("StorageGatewayClient", "CreateTapeWithBarcodeCommand")
  .f(void 0, void 0)
  .ser(se_CreateTapeWithBarcodeCommand)
  .de(de_CreateTapeWithBarcodeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTapeWithBarcodeInput;
      output: CreateTapeWithBarcodeOutput;
    };
    sdk: {
      input: CreateTapeWithBarcodeCommandInput;
      output: CreateTapeWithBarcodeCommandOutput;
    };
  };
}
