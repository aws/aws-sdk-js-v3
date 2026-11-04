// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateGatewaySoftwareNowInput, UpdateGatewaySoftwareNowOutput } from "../models/models_0";
import { UpdateGatewaySoftwareNow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateGatewaySoftwareNowCommand}.
 */
export interface UpdateGatewaySoftwareNowCommandInput extends UpdateGatewaySoftwareNowInput {}
/**
 * @public
 *
 * The output of {@link UpdateGatewaySoftwareNowCommand}.
 */
export interface UpdateGatewaySoftwareNowCommandOutput extends UpdateGatewaySoftwareNowOutput, __MetadataBearer {}

/**
 * Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.
 *
 * > **Note:** When you make this request, you get a `200 OK` success response immediately. However, it might take some time for the update to complete. You can call DescribeGatewayInformation to verify the gateway is in the `STATE_RUNNING` state.
 *
 * > **Important:** A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see [Customizing your Windows iSCSI settings](https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings) and [Customizing your Linux iSCSI settings](https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings), respectively.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateGatewaySoftwareNowCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateGatewaySoftwareNowCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateGatewaySoftwareNowInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new UpdateGatewaySoftwareNowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewaySoftwareNowOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGatewaySoftwareNowCommandInput - {@link UpdateGatewaySoftwareNowCommandInput}
 * @returns {@link UpdateGatewaySoftwareNowCommandOutput}
 * @see {@link UpdateGatewaySoftwareNowCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewaySoftwareNowCommandOutput} for command's `response` shape.
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
 * @example To update a gateway's VM software
 * ```javascript
 * // Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new UpdateGatewaySoftwareNowCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateGatewaySoftwareNowCommand extends command<UpdateGatewaySoftwareNowCommandInput, UpdateGatewaySoftwareNowCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGatewaySoftwareNow",
  UpdateGatewaySoftwareNow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGatewaySoftwareNowInput;
      output: UpdateGatewaySoftwareNowOutput;
    };
    sdk: {
      input: UpdateGatewaySoftwareNowCommandInput;
      output: UpdateGatewaySoftwareNowCommandOutput;
    };
  };
}
