// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { GetExperimentRequest, GetExperimentResponse } from "../models/models_0";
import { de_GetExperimentCommand, se_GetExperimentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExperimentCommand}.
 */
export interface GetExperimentCommandInput extends GetExperimentRequest {}
/**
 * @public
 *
 * The output of {@link GetExperimentCommand}.
 */
export interface GetExperimentCommandOutput extends GetExperimentResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetExperimentCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetExperimentCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const input = { // GetExperimentRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetExperimentCommand(input);
 * const response = await client.send(command);
 * // { // GetExperimentResponse
 * //   experiment: { // Experiment
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     experimentTemplateId: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     state: { // ExperimentState
 * //       status: "pending" || "initiating" || "running" || "completed" || "stopping" || "stopped" || "failed",
 * //       reason: "STRING_VALUE",
 * //     },
 * //     targets: { // ExperimentTargetMap
 * //       "<keys>": { // ExperimentTarget
 * //         resourceType: "STRING_VALUE",
 * //         resourceArns: [ // ResourceArnList
 * //           "STRING_VALUE",
 * //         ],
 * //         resourceTags: { // TagMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         filters: [ // ExperimentTargetFilterList
 * //           { // ExperimentTargetFilter
 * //             path: "STRING_VALUE",
 * //             values: [ // ExperimentTargetFilterValues
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         selectionMode: "STRING_VALUE",
 * //         parameters: { // ExperimentTargetParameterMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     actions: { // ExperimentActionMap
 * //       "<keys>": { // ExperimentAction
 * //         actionId: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         parameters: { // ExperimentActionParameterMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         targets: { // ExperimentActionTargetMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         startAfter: [ // ExperimentActionStartAfterList
 * //           "STRING_VALUE",
 * //         ],
 * //         state: { // ExperimentActionState
 * //           status: "pending" || "initiating" || "running" || "completed" || "cancelled" || "stopping" || "stopped" || "failed" || "skipped",
 * //           reason: "STRING_VALUE",
 * //         },
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     stopConditions: [ // ExperimentStopConditionList
 * //       { // ExperimentStopCondition
 * //         source: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     creationTime: new Date("TIMESTAMP"),
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     tags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     logConfiguration: { // ExperimentLogConfiguration
 * //       cloudWatchLogsConfiguration: { // ExperimentCloudWatchLogsLogConfiguration
 * //         logGroupArn: "STRING_VALUE",
 * //       },
 * //       s3Configuration: { // ExperimentS3LogConfiguration
 * //         bucketName: "STRING_VALUE",
 * //         prefix: "STRING_VALUE",
 * //       },
 * //       logSchemaVersion: Number("int"),
 * //     },
 * //     experimentOptions: { // ExperimentOptions
 * //       accountTargeting: "single-account" || "multi-account",
 * //       emptyTargetResolutionMode: "fail" || "skip",
 * //       actionsMode: "skip-all" || "run-all",
 * //     },
 * //     targetAccountConfigurationsCount: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExperimentCommandInput - {@link GetExperimentCommandInput}
 * @returns {@link GetExperimentCommandOutput}
 * @see {@link GetExperimentCommandInput} for command's `input` shape.
 * @see {@link GetExperimentCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 * @public
 */
export class GetExperimentCommand extends $Command
  .classBuilder<
    GetExperimentCommandInput,
    GetExperimentCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FaultInjectionSimulator", "GetExperiment", {})
  .n("FisClient", "GetExperimentCommand")
  .f(void 0, void 0)
  .ser(se_GetExperimentCommand)
  .de(de_GetExperimentCommand)
  .build() {}
