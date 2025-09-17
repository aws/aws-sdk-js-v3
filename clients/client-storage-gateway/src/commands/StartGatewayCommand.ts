// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartGatewayInput, StartGatewayOutput } from "../models/models_0";
import { de_StartGatewayCommand, se_StartGatewayCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartGatewayCommand}.
 */
export interface StartGatewayCommandInput extends StartGatewayInput {}
/**
 * @public
 *
 * The output of {@link StartGatewayCommand}.
 */
export interface StartGatewayCommandOutput extends StartGatewayOutput, __MetadataBearer {}

/**
 * <p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>).
 *          After the gateway starts, you can then make other API calls, your applications can read
 *          from or write to the gateway's storage volumes and you will be able to take snapshot
 *          backups.</p>
 *          <note>
 *             <p>When you make a request, you will get a 200 OK success response immediately. However,
 *             it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any
 *             additional API calls. For more information, see <a>ActivateGateway</a>.</p>
 *          </note>
 *          <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in
 *          your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, StartGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, StartGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // StartGatewayInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new StartGatewayCommand(input);
 * const response = await client.send(command);
 * // { // StartGatewayOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartGatewayCommandInput - {@link StartGatewayCommandInput}
 * @returns {@link StartGatewayCommandOutput}
 * @see {@link StartGatewayCommandInput} for command's `input` shape.
 * @see {@link StartGatewayCommandOutput} for command's `response` shape.
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
 * @example To start a gateway service
 * ```javascript
 * // Starts a gateway service that was previously shut down.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
 * };
 * const command = new StartGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartGatewayCommand extends $Command
  .classBuilder<
    StartGatewayCommandInput,
    StartGatewayCommandOutput,
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
  .s("StorageGateway_20130630", "StartGateway", {})
  .n("StorageGatewayClient", "StartGatewayCommand")
  .f(void 0, void 0)
  .ser(se_StartGatewayCommand)
  .de(de_StartGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartGatewayInput;
      output: StartGatewayOutput;
    };
    sdk: {
      input: StartGatewayCommandInput;
      output: StartGatewayCommandOutput;
    };
  };
}
