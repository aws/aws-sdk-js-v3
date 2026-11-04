// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRumMetricsDestinationsRequest, ListRumMetricsDestinationsResponse } from "../models/models_0";
import { ListRumMetricsDestinations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRumMetricsDestinationsCommand}.
 */
export interface ListRumMetricsDestinationsCommandInput extends ListRumMetricsDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRumMetricsDestinationsCommand}.
 */
export interface ListRumMetricsDestinationsCommandOutput extends ListRumMetricsDestinationsResponse, __MetadataBearer {}

/**
 * Returns a list of destinations that you have created to receive RUM extended metrics, for the specified app monitor.
 *
 * For more information about extended metrics, see [AddRumMetrics](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_AddRumMetrcs.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, ListRumMetricsDestinationsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, ListRumMetricsDestinationsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // ListRumMetricsDestinationsRequest
 *   AppMonitorName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRumMetricsDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRumMetricsDestinationsResponse
 * //   Destinations: [ // MetricDestinationSummaryList
 * //     { // MetricDestinationSummary
 * //       Destination: "STRING_VALUE",
 * //       DestinationArn: "STRING_VALUE",
 * //       IamRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRumMetricsDestinationsCommandInput - {@link ListRumMetricsDestinationsCommandInput}
 * @returns {@link ListRumMetricsDestinationsCommandOutput}
 * @see {@link ListRumMetricsDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListRumMetricsDestinationsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service exception.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the arguments for the request is not valid.
 *
 * @throws {@link RUMServiceException}
 *
 * Base exception class for all service exceptions from RUM service.
 *
 * @public
 */
export class ListRumMetricsDestinationsCommand extends command<ListRumMetricsDestinationsCommandInput, ListRumMetricsDestinationsCommandOutput>(
  _ep0,
  _mw0,
  "ListRumMetricsDestinations",
  ListRumMetricsDestinations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRumMetricsDestinationsRequest;
      output: ListRumMetricsDestinationsResponse;
    };
    sdk: {
      input: ListRumMetricsDestinationsCommandInput;
      output: ListRumMetricsDestinationsCommandOutput;
    };
  };
}
