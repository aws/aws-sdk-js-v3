// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDevicesRequest, GetDevicesResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { GetDevices } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDevicesCommand}.
 */
export interface GetDevicesCommandInput extends GetDevicesRequest {}
/**
 * @public
 *
 * The output of {@link GetDevicesCommand}.
 */
export interface GetDevicesCommandOutput extends GetDevicesResponse, __MetadataBearer {}

/**
 * <p>Gets information about one or more of your devices in a global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetDevicesCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetDevicesCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetDevicesRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   DeviceIds: [ // DeviceIdList
 *     "STRING_VALUE",
 *   ],
 *   SiteId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetDevicesCommand(input);
 * const response = await client.send(command);
 * // { // GetDevicesResponse
 * //   Devices: [ // DeviceList
 * //     { // Device
 * //       DeviceId: "STRING_VALUE",
 * //       DeviceArn: "STRING_VALUE",
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       AWSLocation: { // AWSLocation
 * //         Zone: "STRING_VALUE",
 * //         SubnetArn: "STRING_VALUE",
 * //       },
 * //       Description: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Vendor: "STRING_VALUE",
 * //       Model: "STRING_VALUE",
 * //       SerialNumber: "STRING_VALUE",
 * //       Location: { // Location
 * //         Address: "STRING_VALUE",
 * //         Latitude: "STRING_VALUE",
 * //         Longitude: "STRING_VALUE",
 * //       },
 * //       SiteId: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       State: "PENDING" || "AVAILABLE" || "DELETING" || "UPDATING",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDevicesCommandInput - {@link GetDevicesCommandInput}
 * @returns {@link GetDevicesCommandOutput}
 * @see {@link GetDevicesCommandInput} for command's `input` shape.
 * @see {@link GetDevicesCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetDevicesCommand extends $Command
  .classBuilder<
    GetDevicesCommandInput,
    GetDevicesCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "GetDevices", {})
  .n("NetworkManagerClient", "GetDevicesCommand")
  .sc(GetDevices)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDevicesRequest;
      output: GetDevicesResponse;
    };
    sdk: {
      input: GetDevicesCommandInput;
      output: GetDevicesCommandOutput;
    };
  };
}
