// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDestinationsRequest, ListDestinationsResponse } from "../models/models_0";
import { ListDestinations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDestinationsCommand}.
 */
export interface ListDestinationsCommandInput extends ListDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDestinationsCommand}.
 */
export interface ListDestinationsCommandOutput extends ListDestinationsResponse, __MetadataBearer {}

/**
 * <p>Lists the destinations registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListDestinationsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListDestinationsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // ListDestinationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDestinationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   DestinationList: [ // DestinationList
 * //     { // Destinations
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ExpressionType: "RuleName" || "MqttTopic",
 * //       Expression: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDestinationsCommandInput - {@link ListDestinationsCommandInput}
 * @returns {@link ListDestinationsCommandOutput}
 * @see {@link ListDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListDestinationsCommandOutput} for command's `response` shape.
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
export class ListDestinationsCommand extends command<ListDestinationsCommandInput, ListDestinationsCommandOutput>(
  _ep0,
  _mw0,
  "ListDestinations",
  ListDestinations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDestinationsRequest;
      output: ListDestinationsResponse;
    };
    sdk: {
      input: ListDestinationsCommandInput;
      output: ListDestinationsCommandOutput;
    };
  };
}
