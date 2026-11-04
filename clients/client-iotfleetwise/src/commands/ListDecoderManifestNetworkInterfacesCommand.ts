// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDecoderManifestNetworkInterfacesRequest,
  ListDecoderManifestNetworkInterfacesResponse,
} from "../models/models_0";
import { ListDecoderManifestNetworkInterfaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListDecoderManifestNetworkInterfacesCommandOutput extends ListDecoderManifestNetworkInterfacesResponse, __MetadataBearer {}

/**
 * Lists the network interfaces specified in a decoder manifest.
 *
 * > **Note:** This API operation uses pagination. Specify the `nextToken` parameter in the request to return more results.
 *
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class ListDecoderManifestNetworkInterfacesCommand extends command<ListDecoderManifestNetworkInterfacesCommandInput, ListDecoderManifestNetworkInterfacesCommandOutput>(
  _ep0,
  _mw0,
  "ListDecoderManifestNetworkInterfaces",
  ListDecoderManifestNetworkInterfaces$
) {
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
