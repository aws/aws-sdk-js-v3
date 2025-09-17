// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDeviceRequest, DeleteDeviceResponse, DeleteDeviceResponseFilterSensitiveLog } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_DeleteDeviceCommand, se_DeleteDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeviceCommand}.
 */
export interface DeleteDeviceCommandInput extends DeleteDeviceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeviceCommand}.
 */
export interface DeleteDeviceCommandOutput extends DeleteDeviceResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing device. You must first disassociate the device from any links and
 *             customer gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteDeviceCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteDeviceCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteDeviceRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeviceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDeviceResponse
 * //   Device: { // Device
 * //     DeviceId: "STRING_VALUE",
 * //     DeviceArn: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     AWSLocation: { // AWSLocation
 * //       Zone: "STRING_VALUE",
 * //       SubnetArn: "STRING_VALUE",
 * //     },
 * //     Description: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     Vendor: "STRING_VALUE",
 * //     Model: "STRING_VALUE",
 * //     SerialNumber: "STRING_VALUE",
 * //     Location: { // Location
 * //       Address: "STRING_VALUE",
 * //       Latitude: "STRING_VALUE",
 * //       Longitude: "STRING_VALUE",
 * //     },
 * //     SiteId: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "UPDATING",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDeviceCommandInput - {@link DeleteDeviceCommandInput}
 * @returns {@link DeleteDeviceCommandOutput}
 * @see {@link DeleteDeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class DeleteDeviceCommand extends $Command
  .classBuilder<
    DeleteDeviceCommandInput,
    DeleteDeviceCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "DeleteDevice", {})
  .n("NetworkManagerClient", "DeleteDeviceCommand")
  .f(void 0, DeleteDeviceResponseFilterSensitiveLog)
  .ser(se_DeleteDeviceCommand)
  .de(de_DeleteDeviceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeviceRequest;
      output: DeleteDeviceResponse;
    };
    sdk: {
      input: DeleteDeviceCommandInput;
      output: DeleteDeviceCommandOutput;
    };
  };
}
