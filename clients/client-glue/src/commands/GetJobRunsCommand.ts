// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobRunsRequest, GetJobRunsResponse } from "../models/models_2";
import { de_GetJobRunsCommand, se_GetJobRunsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobRunsCommand}.
 */
export interface GetJobRunsCommandInput extends GetJobRunsRequest {}
/**
 * @public
 *
 * The output of {@link GetJobRunsCommand}.
 */
export interface GetJobRunsCommandOutput extends GetJobRunsResponse, __MetadataBearer {}

/**
 * <p>Retrieves metadata for all runs of a given job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetJobRunsRequest
 *   JobName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetJobRunsCommand(input);
 * const response = await client.send(command);
 * // { // GetJobRunsResponse
 * //   JobRuns: [ // JobRunList
 * //     { // JobRun
 * //       Id: "STRING_VALUE",
 * //       Attempt: Number("int"),
 * //       PreviousRunId: "STRING_VALUE",
 * //       TriggerName: "STRING_VALUE",
 * //       JobName: "STRING_VALUE",
 * //       JobMode: "SCRIPT" || "VISUAL" || "NOTEBOOK",
 * //       JobRunQueuingEnabled: true || false,
 * //       StartedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       CompletedOn: new Date("TIMESTAMP"),
 * //       JobRunState: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING" || "EXPIRED",
 * //       Arguments: { // GenericMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ErrorMessage: "STRING_VALUE",
 * //       PredecessorRuns: [ // PredecessorList
 * //         { // Predecessor
 * //           JobName: "STRING_VALUE",
 * //           RunId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AllocatedCapacity: Number("int"),
 * //       ExecutionTime: Number("int"),
 * //       Timeout: Number("int"),
 * //       MaxCapacity: Number("double"),
 * //       WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //       NumberOfWorkers: Number("int"),
 * //       SecurityConfiguration: "STRING_VALUE",
 * //       LogGroupName: "STRING_VALUE",
 * //       NotificationProperty: { // NotificationProperty
 * //         NotifyDelayAfter: Number("int"),
 * //       },
 * //       GlueVersion: "STRING_VALUE",
 * //       DPUSeconds: Number("double"),
 * //       ExecutionClass: "FLEX" || "STANDARD",
 * //       MaintenanceWindow: "STRING_VALUE",
 * //       ProfileName: "STRING_VALUE",
 * //       StateDetail: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetJobRunsCommandInput - {@link GetJobRunsCommandInput}
 * @returns {@link GetJobRunsCommandOutput}
 * @see {@link GetJobRunsCommandInput} for command's `input` shape.
 * @see {@link GetJobRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class GetJobRunsCommand extends $Command
  .classBuilder<
    GetJobRunsCommandInput,
    GetJobRunsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetJobRuns", {})
  .n("GlueClient", "GetJobRunsCommand")
  .f(void 0, void 0)
  .ser(se_GetJobRunsCommand)
  .de(de_GetJobRunsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobRunsRequest;
      output: GetJobRunsResponse;
    };
    sdk: {
      input: GetJobRunsCommandInput;
      output: GetJobRunsCommandOutput;
    };
  };
}
