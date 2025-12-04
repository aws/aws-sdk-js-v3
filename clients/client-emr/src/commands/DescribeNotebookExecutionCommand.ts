// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeNotebookExecutionInput, DescribeNotebookExecutionOutput } from "../models/models_0";
import { DescribeNotebookExecution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNotebookExecutionCommand}.
 */
export interface DescribeNotebookExecutionCommandInput extends DescribeNotebookExecutionInput {}
/**
 * @public
 *
 * The output of {@link DescribeNotebookExecutionCommand}.
 */
export interface DescribeNotebookExecutionCommandOutput extends DescribeNotebookExecutionOutput, __MetadataBearer {}

/**
 * <p>Provides details of a notebook execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeNotebookExecutionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeNotebookExecutionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // DescribeNotebookExecutionInput
 *   NotebookExecutionId: "STRING_VALUE", // required
 * };
 * const command = new DescribeNotebookExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotebookExecutionOutput
 * //   NotebookExecution: { // NotebookExecution
 * //     NotebookExecutionId: "STRING_VALUE",
 * //     EditorId: "STRING_VALUE",
 * //     ExecutionEngine: { // ExecutionEngineConfig
 * //       Id: "STRING_VALUE", // required
 * //       Type: "EMR",
 * //       MasterInstanceSecurityGroupId: "STRING_VALUE",
 * //       ExecutionRoleArn: "STRING_VALUE",
 * //     },
 * //     NotebookExecutionName: "STRING_VALUE",
 * //     NotebookParams: "STRING_VALUE",
 * //     Status: "START_PENDING" || "STARTING" || "RUNNING" || "FINISHING" || "FINISHED" || "FAILING" || "FAILED" || "STOP_PENDING" || "STOPPING" || "STOPPED",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Arn: "STRING_VALUE",
 * //     OutputNotebookURI: "STRING_VALUE",
 * //     LastStateChangeReason: "STRING_VALUE",
 * //     NotebookInstanceSecurityGroupId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     NotebookS3Location: { // NotebookS3LocationForOutput
 * //       Bucket: "STRING_VALUE",
 * //       Key: "STRING_VALUE",
 * //     },
 * //     OutputNotebookS3Location: { // OutputNotebookS3LocationForOutput
 * //       Bucket: "STRING_VALUE",
 * //       Key: "STRING_VALUE",
 * //     },
 * //     OutputNotebookFormat: "HTML",
 * //     EnvironmentVariables: { // EnvironmentVariablesMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeNotebookExecutionCommandInput - {@link DescribeNotebookExecutionCommandInput}
 * @returns {@link DescribeNotebookExecutionCommandOutput}
 * @see {@link DescribeNotebookExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeNotebookExecutionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class DescribeNotebookExecutionCommand extends $Command
  .classBuilder<
    DescribeNotebookExecutionCommandInput,
    DescribeNotebookExecutionCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "DescribeNotebookExecution", {})
  .n("EMRClient", "DescribeNotebookExecutionCommand")
  .sc(DescribeNotebookExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNotebookExecutionInput;
      output: DescribeNotebookExecutionOutput;
    };
    sdk: {
      input: DescribeNotebookExecutionCommandInput;
      output: DescribeNotebookExecutionCommandOutput;
    };
  };
}
