// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import {
  ListDecoderManifestNetworkInterfacesRequest,
  ListDecoderManifestNetworkInterfacesResponse,
} from "../models/models_0";
import { ListDecoderManifestNetworkInterfaces } from "../schemas/schemas_3_DecoderManifest";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDecoderManifestNetworkInterfacesCommand}.
 */
export interface ListDecoderManifestNetworkInterfacesCommandInput extends ListDecoderManifestNetworkInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link ListDecoderManifestNetworkInterfacesCommand}.
 */
export interface ListDecoderManifestNetworkInterfacesCommandOutput
  extends ListDecoderManifestNetworkInterfacesResponse,
    __MetadataBearer {}

/**
 * <p> Lists the network interfaces specified in a decoder manifest. </p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListDecoderManifestNetworkInterfacesCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListDecoderManifestNetworkInterfacesCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListDecoderManifestNetworkInterfacesRequest
 *   name: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDecoderManifestNetworkInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // ListDecoderManifestNetworkInterfacesResponse
 * //   networkInterfaces: [ // NetworkInterfaces
 * //     { // NetworkInterface
 * //       interfaceId: "STRING_VALUE", // required
 * //       type: "CAN_INTERFACE" || "OBD_INTERFACE" || "VEHICLE_MIDDLEWARE" || "CUSTOM_DECODING_INTERFACE", // required
 * //       canInterface: { // CanInterface
 * //         name: "STRING_VALUE", // required
 * //         protocolName: "STRING_VALUE",
 * //         protocolVersion: "STRING_VALUE",
 * //       },
 * //       obdInterface: { // ObdInterface
 * //         name: "STRING_VALUE", // required
 * //         requestMessageId: Number("int"), // required
 * //         obdStandard: "STRING_VALUE",
 * //         pidRequestIntervalSeconds: Number("int"),
 * //         dtcRequestIntervalSeconds: Number("int"),
 * //         useExtendedIds: true || false,
 * //         hasTransmissionEcu: true || false,
 * //       },
 * //       vehicleMiddleware: { // VehicleMiddleware
 * //         name: "STRING_VALUE", // required
 * //         protocolName: "ROS_2", // required
 * //       },
 * //       customDecodingInterface: { // CustomDecodingInterface
 * //         name: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDecoderManifestNetworkInterfacesCommandInput - {@link ListDecoderManifestNetworkInterfacesCommandInput}
 * @returns {@link ListDecoderManifestNetworkInterfacesCommandOutput}
 * @see {@link ListDecoderManifestNetworkInterfacesCommandInput} for command's `input` shape.
 * @see {@link ListDecoderManifestNetworkInterfacesCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class ListDecoderManifestNetworkInterfacesCommand extends $Command
  .classBuilder<
    ListDecoderManifestNetworkInterfacesCommandInput,
    ListDecoderManifestNetworkInterfacesCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "ListDecoderManifestNetworkInterfaces", {})
  .n("IoTFleetWiseClient", "ListDecoderManifestNetworkInterfacesCommand")
  .sc(ListDecoderManifestNetworkInterfaces)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDecoderManifestNetworkInterfacesRequest;
      output: ListDecoderManifestNetworkInterfacesResponse;
    };
    sdk: {
      input: ListDecoderManifestNetworkInterfacesCommandInput;
      output: ListDecoderManifestNetworkInterfacesCommandOutput;
    };
  };
}
