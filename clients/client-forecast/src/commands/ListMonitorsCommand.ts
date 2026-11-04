// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMonitorsRequest, ListMonitorsResponse } from "../models/models_0";
import { ListMonitors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMonitorsCommand}.
 */
export interface ListMonitorsCommandInput extends ListMonitorsRequest {}
/**
 * @public
 *
 * The output of {@link ListMonitorsCommand}.
 */
export interface ListMonitorsCommandOutput extends ListMonitorsResponse, __MetadataBearer {}

/**
 * Returns a list of monitors created with the CreateMonitor operation and CreateAutoPredictor operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the DescribeMonitor operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListMonitorsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListMonitorsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ListMonitorsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // Filters
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Condition: "IS" || "IS_NOT", // required
 *     },
 *   ],
 * };
 * const command = new ListMonitorsCommand(input);
 * const response = await client.send(command);
 * // { // ListMonitorsResponse
 * //   Monitors: [ // Monitors
 * //     { // MonitorSummary
 * //       MonitorArn: "STRING_VALUE",
 * //       MonitorName: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMonitorsCommandInput - {@link ListMonitorsCommandInput}
 * @returns {@link ListMonitorsCommandOutput}
 * @see {@link ListMonitorsCommandInput} for command's `input` shape.
 * @see {@link ListMonitorsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The token is not valid. Tokens expire after 24 hours.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class ListMonitorsCommand extends command<ListMonitorsCommandInput, ListMonitorsCommandOutput>(
  _ep0,
  _mw0,
  "ListMonitors",
  ListMonitors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMonitorsRequest;
      output: ListMonitorsResponse;
    };
    sdk: {
      input: ListMonitorsCommandInput;
      output: ListMonitorsCommandOutput;
    };
  };
}
