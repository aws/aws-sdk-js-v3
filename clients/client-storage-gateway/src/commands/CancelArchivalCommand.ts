// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelArchivalInput, CancelArchivalOutput } from "../models/models_0";
import { de_CancelArchivalCommand, se_CancelArchivalCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelArchivalCommand}.
 */
export interface CancelArchivalCommandInput extends CancelArchivalInput {}
/**
 * @public
 *
 * The output of {@link CancelArchivalCommand}.
 */
export interface CancelArchivalCommandOutput extends CancelArchivalOutput, __MetadataBearer {}

/**
 * <p>Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving
 *          process is initiated. This operation is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CancelArchivalCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CancelArchivalCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // CancelArchivalInput
 *   GatewayARN: "STRING_VALUE", // required
 *   TapeARN: "STRING_VALUE", // required
 * };
 * const command = new CancelArchivalCommand(input);
 * const response = await client.send(command);
 * // { // CancelArchivalOutput
 * //   TapeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelArchivalCommandInput - {@link CancelArchivalCommandInput}
 * @returns {@link CancelArchivalCommandOutput}
 * @see {@link CancelArchivalCommandInput} for command's `input` shape.
 * @see {@link CancelArchivalCommandOutput} for command's `response` shape.
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
 * @example To cancel virtual tape archiving
 * ```javascript
 * // Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   TapeARN: "arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4"
 * };
 * const command = new CancelArchivalCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TapeARN: "arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelArchivalCommand extends $Command
  .classBuilder<
    CancelArchivalCommandInput,
    CancelArchivalCommandOutput,
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
  .s("StorageGateway_20130630", "CancelArchival", {})
  .n("StorageGatewayClient", "CancelArchivalCommand")
  .f(void 0, void 0)
  .ser(se_CancelArchivalCommand)
  .de(de_CancelArchivalCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelArchivalInput;
      output: CancelArchivalOutput;
    };
    sdk: {
      input: CancelArchivalCommandInput;
      output: CancelArchivalCommandOutput;
    };
  };
}
