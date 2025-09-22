// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ActivateGatewayInput, ActivateGatewayOutput } from "../models/models_0";
import { ActivateGateway } from "../schemas/schemas_38_File";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ActivateGatewayCommand}.
 */
export interface ActivateGatewayCommandInput extends ActivateGatewayInput {}
/**
 * @public
 *
 * The output of {@link ActivateGatewayCommand}.
 */
export interface ActivateGatewayCommandOutput extends ActivateGatewayOutput, __MetadataBearer {}

/**
 * <p>Activates the gateway you previously deployed on your host. In the activation process,
 *          you specify information such as the Amazon Web Services Region that you want to use for
 *          storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot
 *          schedule window, an activation key, and a name for your gateway. The activation process
 *          also associates your gateway with your account. For more information, see <a>UpdateGatewayInformation</a>.</p>
 *          <note>
 *             <p>You must turn on the gateway VM before you can activate your gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ActivateGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ActivateGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // ActivateGatewayInput
 *   ActivationKey: "STRING_VALUE", // required
 *   GatewayName: "STRING_VALUE", // required
 *   GatewayTimezone: "STRING_VALUE", // required
 *   GatewayRegion: "STRING_VALUE", // required
 *   GatewayType: "STRING_VALUE",
 *   TapeDriveType: "STRING_VALUE",
 *   MediumChangerType: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ActivateGatewayCommand(input);
 * const response = await client.send(command);
 * // { // ActivateGatewayOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ActivateGatewayCommandInput - {@link ActivateGatewayCommandInput}
 * @returns {@link ActivateGatewayCommandOutput}
 * @see {@link ActivateGatewayCommandInput} for command's `input` shape.
 * @see {@link ActivateGatewayCommandOutput} for command's `response` shape.
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
 * @example To activate the gateway
 * ```javascript
 * // Activates the gateway you previously deployed on your host.
 * const input = {
 *   ActivationKey: "29AV1-3OFV9-VVIUB-NKT0I-LRO6V",
 *   GatewayName: "My_Gateway",
 *   GatewayRegion: "us-east-1",
 *   GatewayTimezone: "GMT-12:00",
 *   GatewayType: "STORED",
 *   MediumChangerType: "AWS-Gateway-VTL",
 *   TapeDriveType: "IBM-ULT3580-TD5"
 * };
 * const command = new ActivateGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ActivateGatewayCommand extends $Command
  .classBuilder<
    ActivateGatewayCommandInput,
    ActivateGatewayCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "ActivateGateway", {})
  .n("StorageGatewayClient", "ActivateGatewayCommand")
  .sc(ActivateGateway)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivateGatewayInput;
      output: ActivateGatewayOutput;
    };
    sdk: {
      input: ActivateGatewayCommandInput;
      output: ActivateGatewayCommandOutput;
    };
  };
}
