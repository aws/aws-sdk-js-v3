// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetNetworkTelemetryRequest, GetNetworkTelemetryResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetNetworkTelemetryCommand, se_GetNetworkTelemetryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets the network telemetry of the specified global network.</p>
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
export class GetNetworkTelemetryCommand extends $Command
  .classBuilder<
    GetNetworkTelemetryCommandInput,
    GetNetworkTelemetryCommandOutput,
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
  .s("NetworkManager", "GetNetworkTelemetry", {})
  .n("NetworkManagerClient", "GetNetworkTelemetryCommand")
  .f(void 0, void 0)
  .ser(se_GetNetworkTelemetryCommand)
  .de(de_GetNetworkTelemetryCommand)
  .build() {
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
