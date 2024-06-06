// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelRetrievalInput, CancelRetrievalOutput } from "../models/models_0";
import { de_CancelRetrievalCommand, se_CancelRetrievalCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelRetrievalCommand}.
 */
export interface CancelRetrievalCommandInput extends CancelRetrievalInput {}
/**
 * @public
 *
 * The output of {@link CancelRetrievalCommand}.
 */
export interface CancelRetrievalCommandOutput extends CancelRetrievalOutput, __MetadataBearer {}

/**
 * <p>Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after
 *          the retrieval process is initiated. The virtual tape is returned to the VTS. This operation
 *          is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CancelRetrievalCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CancelRetrievalCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // CancelRetrievalInput
 *   GatewayARN: "STRING_VALUE", // required
 *   TapeARN: "STRING_VALUE", // required
 * };
 * const command = new CancelRetrievalCommand(input);
 * const response = await client.send(command);
 * // { // CancelRetrievalOutput
 * //   TapeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelRetrievalCommandInput - {@link CancelRetrievalCommandInput}
 * @returns {@link CancelRetrievalCommandOutput}
 * @see {@link CancelRetrievalCommandInput} for command's `input` shape.
 * @see {@link CancelRetrievalCommandOutput} for command's `response` shape.
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
 * @example To cancel virtual tape retrieval
 * ```javascript
 * // Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4"
 * };
 * const command = new CancelRetrievalCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4"
 * }
 * *\/
 * // example id: to-cancel-virtual-tape-retrieval-1471295704491
 * ```
 *
 */
export class CancelRetrievalCommand extends $Command
  .classBuilder<
    CancelRetrievalCommandInput,
    CancelRetrievalCommandOutput,
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
  .s("StorageGateway_20130630", "CancelRetrieval", {})
  .n("StorageGatewayClient", "CancelRetrievalCommand")
  .f(void 0, void 0)
  .ser(se_CancelRetrievalCommand)
  .de(de_CancelRetrievalCommand)
  .build() {}
