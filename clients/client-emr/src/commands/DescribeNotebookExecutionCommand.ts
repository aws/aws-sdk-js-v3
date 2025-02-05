// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNotebookExecutionInput, DescribeNotebookExecutionOutput } from "../models/models_0";
import { de_DescribeNotebookExecutionCommand, se_DescribeNotebookExecutionCommand } from "../protocols/Aws_json1_1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "DescribeNotebookExecution", {})
  .n("EMRClient", "DescribeNotebookExecutionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeNotebookExecutionCommand)
  .de(de_DescribeNotebookExecutionCommand)
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
