// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRumMetricsDestinationsRequest, ListRumMetricsDestinationsResponse } from "../models/models_0";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";
import { ListRumMetricsDestinations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of destinations that you have created to receive RUM extended metrics,
 *          for the specified app monitor.</p>
 *          <p>For more information about extended metrics, see <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_AddRumMetrcs.html">AddRumMetrics</a>.</p>
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
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 *
 * @public
 */
export class ListRumMetricsDestinationsCommand extends $Command
  .classBuilder<
    ListRumMetricsDestinationsCommandInput,
    ListRumMetricsDestinationsCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RUM", "ListRumMetricsDestinations", {})
  .n("RUMClient", "ListRumMetricsDestinationsCommand")
  .sc(ListRumMetricsDestinations)
  .build() {
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
