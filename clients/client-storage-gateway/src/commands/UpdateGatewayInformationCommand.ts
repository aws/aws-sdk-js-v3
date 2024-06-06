// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGatewayInformationInput, UpdateGatewayInformationOutput } from "../models/models_0";
import { de_UpdateGatewayInformationCommand, se_UpdateGatewayInformationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGatewayInformationCommand}.
 */
export interface UpdateGatewayInformationCommandInput extends UpdateGatewayInformationInput {}
/**
 * @public
 *
 * The output of {@link UpdateGatewayInformationCommand}.
 */
export interface UpdateGatewayInformationCommandOutput extends UpdateGatewayInformationOutput, __MetadataBearer {}

/**
 * <p>Updates a gateway's metadata, which includes the gateway's name and time zone.
 *          To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in
 *          your request.</p>
 *          <note>
 *             <p>For gateways activated after September 2, 2015, the gateway's ARN contains the
 *             gateway ID rather than the gateway name. However, changing the name of the gateway has
 *             no effect on the gateway's ARN.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateGatewayInformationCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateGatewayInformationCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateGatewayInformationInput
 *   GatewayARN: "STRING_VALUE", // required
 *   GatewayName: "STRING_VALUE",
 *   GatewayTimezone: "STRING_VALUE",
 *   CloudWatchLogGroupARN: "STRING_VALUE",
 *   GatewayCapacity: "Small" || "Medium" || "Large",
 * };
 * const command = new UpdateGatewayInformationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewayInformationOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   GatewayName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGatewayInformationCommandInput - {@link UpdateGatewayInformationCommandInput}
 * @returns {@link UpdateGatewayInformationCommandOutput}
 * @see {@link UpdateGatewayInformationCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayInformationCommandOutput} for command's `response` shape.
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
 * @example To update a gateway's metadata
 * ```javascript
 * // Updates a gateway's metadata, which includes the gateway's name and time zone.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "GatewayName": "MyGateway2",
 *   "GatewayTimezone": "GMT-12:00"
 * };
 * const command = new UpdateGatewayInformationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "GatewayName": ""
 * }
 * *\/
 * // example id: to-update-a-gateways-metadata-1472151688693
 * ```
 *
 */
export class UpdateGatewayInformationCommand extends $Command
  .classBuilder<
    UpdateGatewayInformationCommandInput,
    UpdateGatewayInformationCommandOutput,
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
  .s("StorageGateway_20130630", "UpdateGatewayInformation", {})
  .n("StorageGatewayClient", "UpdateGatewayInformationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGatewayInformationCommand)
  .de(de_UpdateGatewayInformationCommand)
  .build() {}
