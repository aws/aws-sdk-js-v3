// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListPositionConfigurationsRequest, ListPositionConfigurationsResponse } from "../models/models_1";
import { de_ListPositionConfigurationsCommand, se_ListPositionConfigurationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPositionConfigurationsCommand}.
 */
export interface ListPositionConfigurationsCommandInput extends ListPositionConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPositionConfigurationsCommand}.
 */
export interface ListPositionConfigurationsCommandOutput extends ListPositionConfigurationsResponse, __MetadataBearer {}

/**
 * <p>List position configurations for a given resource, such as positioning solvers.</p>
 *          <important>
 *             <p>This action is no longer supported. Calls to retrieve position information should
 *                 use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p>
 *          </important>
 *
 * @deprecated This operation is no longer supported.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListPositionConfigurationsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListPositionConfigurationsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // ListPositionConfigurationsRequest
 *   ResourceType: "WirelessDevice" || "WirelessGateway",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPositionConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPositionConfigurationsResponse
 * //   PositionConfigurationList: [ // PositionConfigurationList
 * //     { // PositionConfigurationItem
 * //       ResourceIdentifier: "STRING_VALUE",
 * //       ResourceType: "WirelessDevice" || "WirelessGateway",
 * //       Solvers: { // PositionSolverDetails
 * //         SemtechGnss: { // SemtechGnssDetail
 * //           Provider: "Semtech",
 * //           Type: "GNSS",
 * //           Status: "Enabled" || "Disabled",
 * //           Fec: "ROSE" || "NONE",
 * //         },
 * //       },
 * //       Destination: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPositionConfigurationsCommandInput - {@link ListPositionConfigurationsCommandInput}
 * @returns {@link ListPositionConfigurationsCommandOutput}
 * @see {@link ListPositionConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListPositionConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 * @public
 */
export class ListPositionConfigurationsCommand extends $Command
  .classBuilder<
    ListPositionConfigurationsCommandInput,
    ListPositionConfigurationsCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "ListPositionConfigurations", {})
  .n("IoTWirelessClient", "ListPositionConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListPositionConfigurationsCommand)
  .de(de_ListPositionConfigurationsCommand)
  .build() {}
