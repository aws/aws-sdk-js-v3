// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTelemetryPipelinesInput, ListTelemetryPipelinesOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { ListTelemetryPipelines } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTelemetryPipelinesCommand}.
 */
export interface ListTelemetryPipelinesCommandInput extends ListTelemetryPipelinesInput {}
/**
 * @public
 *
 * The output of {@link ListTelemetryPipelinesCommand}.
 */
export interface ListTelemetryPipelinesCommandOutput extends ListTelemetryPipelinesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of telemetry pipelines in your account. Returns up to 100 results. If more than 100 telemetry pipelines exist, include the <code>NextToken</code> value from the response to retrieve the next set of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, ListTelemetryPipelinesCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, ListTelemetryPipelinesCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // ListTelemetryPipelinesInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTelemetryPipelinesCommand(input);
 * const response = await client.send(command);
 * // { // ListTelemetryPipelinesOutput
 * //   PipelineSummaries: [ // TelemetryPipelineSummaries
 * //     { // TelemetryPipelineSummary
 * //       CreatedTimeStamp: Number("long"),
 * //       LastUpdateTimeStamp: Number("long"),
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //       Tags: { // TagMapOutput
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ConfigurationSummary: { // ConfigurationSummary
 * //         Sources: [ // Sources
 * //           { // Source
 * //             Type: "STRING_VALUE",
 * //           },
 * //         ],
 * //         DataSources: [ // DataSources
 * //           { // DataSource
 * //             Name: "STRING_VALUE",
 * //             Type: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Processors: [ // Processors
 * //           "STRING_VALUE",
 * //         ],
 * //         ProcessorCount: Number("int"),
 * //         Sinks: [ // Sinks
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTelemetryPipelinesCommandInput - {@link ListTelemetryPipelinesCommandInput}
 * @returns {@link ListTelemetryPipelinesCommandOutput}
 * @see {@link ListTelemetryPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListTelemetryPipelinesCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> The request throughput limit was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Indicates input validation failed. Check your request parameters and retry the request. </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class ListTelemetryPipelinesCommand extends $Command
  .classBuilder<
    ListTelemetryPipelinesCommandInput,
    ListTelemetryPipelinesCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "ListTelemetryPipelines", {})
  .n("ObservabilityAdminClient", "ListTelemetryPipelinesCommand")
  .sc(ListTelemetryPipelines)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTelemetryPipelinesInput;
      output: ListTelemetryPipelinesOutput;
    };
    sdk: {
      input: ListTelemetryPipelinesCommandInput;
      output: ListTelemetryPipelinesCommandOutput;
    };
  };
}
