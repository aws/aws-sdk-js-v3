// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFlowExecutionRecordsRequest, DescribeFlowExecutionRecordsResponse } from "../models/models_0";
import {
  de_DescribeFlowExecutionRecordsCommand,
  se_DescribeFlowExecutionRecordsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlowExecutionRecordsCommand}.
 */
export interface DescribeFlowExecutionRecordsCommandInput extends DescribeFlowExecutionRecordsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlowExecutionRecordsCommand}.
 */
export interface DescribeFlowExecutionRecordsCommandOutput
  extends DescribeFlowExecutionRecordsResponse,
    __MetadataBearer {}

/**
 * <p> Fetches the execution history of the flow. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeFlowExecutionRecordsCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeFlowExecutionRecordsCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = { // DescribeFlowExecutionRecordsRequest
 *   flowName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFlowExecutionRecordsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlowExecutionRecordsResponse
 * //   flowExecutions: [ // FlowExecutionList
 * //     { // ExecutionRecord
 * //       executionId: "STRING_VALUE",
 * //       executionStatus: "InProgress" || "Successful" || "Error" || "CancelStarted" || "Canceled",
 * //       executionResult: { // ExecutionResult
 * //         errorInfo: { // ErrorInfo
 * //           putFailuresCount: Number("long"),
 * //           executionMessage: "STRING_VALUE",
 * //         },
 * //         bytesProcessed: Number("long"),
 * //         bytesWritten: Number("long"),
 * //         recordsProcessed: Number("long"),
 * //         numParallelProcesses: Number("long"),
 * //         maxPageSize: Number("long"),
 * //       },
 * //       startedAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       dataPullStartTime: new Date("TIMESTAMP"),
 * //       dataPullEndTime: new Date("TIMESTAMP"),
 * //       metadataCatalogDetails: [ // MetadataCatalogDetails
 * //         { // MetadataCatalogDetail
 * //           catalogType: "GLUE",
 * //           tableName: "STRING_VALUE",
 * //           tableRegistrationOutput: { // RegistrationOutput
 * //             message: "STRING_VALUE",
 * //             result: "STRING_VALUE",
 * //             status: "InProgress" || "Successful" || "Error" || "CancelStarted" || "Canceled",
 * //           },
 * //           partitionRegistrationOutput: {
 * //             message: "STRING_VALUE",
 * //             result: "STRING_VALUE",
 * //             status: "InProgress" || "Successful" || "Error" || "CancelStarted" || "Canceled",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFlowExecutionRecordsCommandInput - {@link DescribeFlowExecutionRecordsCommandInput}
 * @returns {@link DescribeFlowExecutionRecordsCommandOutput}
 * @see {@link DescribeFlowExecutionRecordsCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowExecutionRecordsCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 * @public
 */
export class DescribeFlowExecutionRecordsCommand extends $Command
  .classBuilder<
    DescribeFlowExecutionRecordsCommandInput,
    DescribeFlowExecutionRecordsCommandOutput,
    AppflowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppflowClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SandstoneConfigurationServiceLambda", "DescribeFlowExecutionRecords", {})
  .n("AppflowClient", "DescribeFlowExecutionRecordsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFlowExecutionRecordsCommand)
  .de(de_DescribeFlowExecutionRecordsCommand)
  .build() {}
