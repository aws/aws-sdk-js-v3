// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetNetworkTelemetryRequest, GetNetworkTelemetryResponse } from "../models/models_0";
import { GetNetworkTelemetry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetNetworkTelemetryCommand}.
 */
export interface GetNetworkTelemetryCommandInput extends GetNetworkTelemetryRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkTelemetryCommand}.
 */
export interface GetNetworkTelemetryCommandOutput extends GetNetworkTelemetryResponse, __MetadataBearer {}

/**
 * Gets the network telemetry of the specified global network.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetNetworkTelemetryCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetNetworkTelemetryCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetNetworkTelemetryRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   CoreNetworkId: "STRING_VALUE",
 *   RegisteredGatewayArn: "STRING_VALUE",
 *   AwsRegion: "STRING_VALUE",
 *   AccountId: "STRING_VALUE",
 *   ResourceType: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetNetworkTelemetryCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkTelemetryResponse
 * //   NetworkTelemetry: [ // NetworkTelemetryList
 * //     { // NetworkTelemetry
 * //       RegisteredGatewayArn: "STRING_VALUE",
 * //       CoreNetworkId: "STRING_VALUE",
 * //       AwsRegion: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       Address: "STRING_VALUE",
 * //       Health: { // ConnectionHealth
 * //         Type: "BGP" || "IPSEC",
 * //         Status: "UP" || "DOWN",
 * //         Timestamp: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNetworkTelemetryCommandInput - {@link GetNetworkTelemetryCommandInput}
 * @returns {@link GetNetworkTelemetryCommandOutput}
 * @see {@link GetNetworkTelemetryCommandInput} for command's `input` shape.
 * @see {@link GetNetworkTelemetryCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class GetNetworkTelemetryCommand extends command<GetNetworkTelemetryCommandInput, GetNetworkTelemetryCommandOutput>(
  _ep0,
  _mw0,
  "GetNetworkTelemetry",
  GetNetworkTelemetry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkTelemetryRequest;
      output: GetNetworkTelemetryResponse;
    };
    sdk: {
      input: GetNetworkTelemetryCommandInput;
      output: GetNetworkTelemetryCommandOutput;
    };
  };
}
