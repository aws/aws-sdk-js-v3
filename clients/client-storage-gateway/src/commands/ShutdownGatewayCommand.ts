// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ShutdownGatewayInput, ShutdownGatewayOutput } from "../models/models_0";
import { de_ShutdownGatewayCommand, se_ShutdownGatewayCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ShutdownGatewayCommand}.
 */
export interface ShutdownGatewayCommandInput extends ShutdownGatewayInput {}
/**
 * @public
 *
 * The output of {@link ShutdownGatewayCommand}.
 */
export interface ShutdownGatewayCommandOutput extends ShutdownGatewayOutput, __MetadataBearer {}

/**
 * <p>Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use
 *          the Amazon Resource Name (ARN) of the gateway in the body of your request.</p>
 *          <note>
 *             <p>This API action cannot be used to shut down S3 File Gateway or FSx File
 *             Gateway.</p>
 *          </note>
 *          <p>The operation shuts down the gateway service component running in the gateway's
 *          virtual machine (VM) and not the host VM.</p>
 *          <note>
 *             <p>If you want to shut down the VM, it is recommended that you first shut down the
 *             gateway component in the VM to avoid unpredictable conditions.</p>
 *          </note>
 *          <p>After the gateway is shutdown, you cannot call any other API except <a>StartGateway</a>, <a>DescribeGatewayInformation</a>, and <a>ListGateways</a>. For more information, see <a>ActivateGateway</a>.
 *          Your applications cannot read from or write to the gateway's storage volumes, and
 *          there are no snapshots taken.</p>
 *          <note>
 *             <p>When you make a shutdown request, you will get a <code>200 OK</code> success response
 *             immediately. However, it might take some time for the gateway to shut down. You can call
 *             the <a>DescribeGatewayInformation</a> API to check the status. For more
 *             information, see <a>ActivateGateway</a>.</p>
 *          </note>
 *          <p>If do not intend to use the gateway again, you must delete the gateway (using <a>DeleteGateway</a>) to no longer pay software charges associated with the
 *          gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ShutdownGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ShutdownGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // ShutdownGatewayInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new ShutdownGatewayCommand(input);
 * const response = await client.send(command);
 * // { // ShutdownGatewayOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ShutdownGatewayCommandInput - {@link ShutdownGatewayCommandInput}
 * @returns {@link ShutdownGatewayCommandOutput}
 * @see {@link ShutdownGatewayCommandInput} for command's `input` shape.
 * @see {@link ShutdownGatewayCommandOutput} for command's `response` shape.
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
 * @example To shut down a gateway service
 * ```javascript
 * // This operation shuts down the gateway service component running in the storage gateway's virtual machine (VM) and not the VM.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
 * };
 * const command = new ShutdownGatewayCommand(input);
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
export class ShutdownGatewayCommand extends $Command
  .classBuilder<
    ShutdownGatewayCommandInput,
    ShutdownGatewayCommandOutput,
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
  .s("StorageGateway_20130630", "ShutdownGateway", {})
  .n("StorageGatewayClient", "ShutdownGatewayCommand")
  .f(void 0, void 0)
  .ser(se_ShutdownGatewayCommand)
  .de(de_ShutdownGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ShutdownGatewayInput;
      output: ShutdownGatewayOutput;
    };
    sdk: {
      input: ShutdownGatewayCommandInput;
      output: ShutdownGatewayCommandOutput;
    };
  };
}
