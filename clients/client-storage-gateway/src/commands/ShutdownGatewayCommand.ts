// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ShutdownGatewayInput, ShutdownGatewayOutput } from "../models/models_0";
import { ShutdownGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request.
 *
 * > **Note:** This API action cannot be used to shut down S3 File Gateway or FSx File Gateway.
 *
 * The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM.
 *
 * > **Note:** If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions.
 *
 * After the gateway is shutdown, you cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken.
 *
 * > **Note:** When you make a shutdown request, you will get a `200 OK` success response immediately. However, it might take some time for the gateway to shut down. You can call the DescribeGatewayInformation API to check the status. For more information, see ActivateGateway.
 *
 * If do not intend to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges associated with the gateway.
 *
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
 *
 * An internal server error has occurred during the request. For more information, see the error and message fields.
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *
 * An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.
 *
 * @throws {@link StorageGatewayServiceException}
 *
 * Base exception class for all service exceptions from StorageGateway service.
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
export class ShutdownGatewayCommand extends command<ShutdownGatewayCommandInput, ShutdownGatewayCommandOutput>(
  _ep0,
  _mw0,
  "ShutdownGateway",
  ShutdownGateway$
) {
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
