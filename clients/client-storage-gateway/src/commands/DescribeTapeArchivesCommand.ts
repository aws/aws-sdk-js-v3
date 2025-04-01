// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTapeArchivesInput, DescribeTapeArchivesOutput } from "../models/models_0";
import { de_DescribeTapeArchivesCommand, se_DescribeTapeArchivesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTapeArchivesCommand}.
 */
export interface DescribeTapeArchivesCommandInput extends DescribeTapeArchivesInput {}
/**
 * @public
 *
 * The output of {@link DescribeTapeArchivesCommand}.
 */
export interface DescribeTapeArchivesCommandOutput extends DescribeTapeArchivesOutput, __MetadataBearer {}

/**
 * <p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This
 *          operation is only supported in the tape gateway type.</p>
 *          <p>If a specific <code>TapeARN</code> is not specified, Storage Gateway returns a
 *          description of all virtual tapes found in the VTS associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeTapeArchivesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeTapeArchivesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeTapeArchivesInput
 *   TapeARNs: [ // TapeARNs
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeTapeArchivesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTapeArchivesOutput
 * //   TapeArchives: [ // TapeArchives
 * //     { // TapeArchive
 * //       TapeARN: "STRING_VALUE",
 * //       TapeBarcode: "STRING_VALUE",
 * //       TapeCreatedDate: new Date("TIMESTAMP"),
 * //       TapeSizeInBytes: Number("long"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       RetrievedTo: "STRING_VALUE",
 * //       TapeStatus: "STRING_VALUE",
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
 * @param DescribeTapeArchivesCommandInput - {@link DescribeTapeArchivesCommandInput}
 * @returns {@link DescribeTapeArchivesCommandOutput}
 * @see {@link DescribeTapeArchivesCommandInput} for command's `input` shape.
 * @see {@link DescribeTapeArchivesCommandOutput} for command's `response` shape.
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
export class DescribeTapeArchivesCommand extends $Command
  .classBuilder<
    DescribeTapeArchivesCommandInput,
    DescribeTapeArchivesCommandOutput,
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
  .s("StorageGateway_20130630", "DescribeTapeArchives", {})
  .n("StorageGatewayClient", "DescribeTapeArchivesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTapeArchivesCommand)
  .de(de_DescribeTapeArchivesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTapeArchivesInput;
      output: DescribeTapeArchivesOutput;
    };
    sdk: {
      input: DescribeTapeArchivesCommandInput;
      output: DescribeTapeArchivesCommandOutput;
    };
  };
}
