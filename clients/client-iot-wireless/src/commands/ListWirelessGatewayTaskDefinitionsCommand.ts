// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type {
  ListWirelessGatewayTaskDefinitionsRequest,
  ListWirelessGatewayTaskDefinitionsResponse,
} from "../models/models_0";
import { ListWirelessGatewayTaskDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWirelessGatewayTaskDefinitionsCommand}.
 */
export interface ListWirelessGatewayTaskDefinitionsCommandInput extends ListWirelessGatewayTaskDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWirelessGatewayTaskDefinitionsCommand}.
 */
export interface ListWirelessGatewayTaskDefinitionsCommandOutput extends ListWirelessGatewayTaskDefinitionsResponse, __MetadataBearer {}

/**
 * <p>List the wireless gateway tasks definitions registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListWirelessGatewayTaskDefinitionsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListWirelessGatewayTaskDefinitionsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // ListWirelessGatewayTaskDefinitionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   TaskDefinitionType: "UPDATE",
 * };
 * const command = new ListWirelessGatewayTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWirelessGatewayTaskDefinitionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   TaskDefinitions: [ // WirelessGatewayTaskDefinitionList
 * //     { // UpdateWirelessGatewayTaskEntry
 * //       Id: "STRING_VALUE",
 * //       LoRaWAN: { // LoRaWANUpdateGatewayTaskEntry
 * //         CurrentVersion: { // LoRaWANGatewayVersion
 * //           PackageVersion: "STRING_VALUE",
 * //           Model: "STRING_VALUE",
 * //           Station: "STRING_VALUE",
 * //         },
 * //         UpdateVersion: {
 * //           PackageVersion: "STRING_VALUE",
 * //           Model: "STRING_VALUE",
 * //           Station: "STRING_VALUE",
 * //         },
 * //       },
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWirelessGatewayTaskDefinitionsCommandInput - {@link ListWirelessGatewayTaskDefinitionsCommandInput}
 * @returns {@link ListWirelessGatewayTaskDefinitionsCommandOutput}
 * @see {@link ListWirelessGatewayTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListWirelessGatewayTaskDefinitionsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListWirelessGatewayTaskDefinitionsCommand extends $Command
  .classBuilder<
    ListWirelessGatewayTaskDefinitionsCommandInput,
    ListWirelessGatewayTaskDefinitionsCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "ListWirelessGatewayTaskDefinitions", {})
  .n("IoTWirelessClient", "ListWirelessGatewayTaskDefinitionsCommand")
  .sc(ListWirelessGatewayTaskDefinitions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWirelessGatewayTaskDefinitionsRequest;
      output: ListWirelessGatewayTaskDefinitionsResponse;
    };
    sdk: {
      input: ListWirelessGatewayTaskDefinitionsCommandInput;
      output: ListWirelessGatewayTaskDefinitionsCommandOutput;
    };
  };
}
