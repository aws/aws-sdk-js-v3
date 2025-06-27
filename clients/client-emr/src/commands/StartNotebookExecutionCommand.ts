// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartNotebookExecutionInput, StartNotebookExecutionOutput } from "../models/models_0";
import { de_StartNotebookExecutionCommand, se_StartNotebookExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartNotebookExecutionCommand}.
 */
export interface StartNotebookExecutionCommandInput extends StartNotebookExecutionInput {}
/**
 * @public
 *
 * The output of {@link StartNotebookExecutionCommand}.
 */
export interface StartNotebookExecutionCommandOutput extends StartNotebookExecutionOutput, __MetadataBearer {}

/**
 * <p>Starts a notebook execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, StartNotebookExecutionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, StartNotebookExecutionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // StartNotebookExecutionInput
 *   EditorId: "STRING_VALUE",
 *   RelativePath: "STRING_VALUE",
 *   NotebookExecutionName: "STRING_VALUE",
 *   NotebookParams: "STRING_VALUE",
 *   ExecutionEngine: { // ExecutionEngineConfig
 *     Id: "STRING_VALUE", // required
 *     Type: "EMR",
 *     MasterInstanceSecurityGroupId: "STRING_VALUE",
 *     ExecutionRoleArn: "STRING_VALUE",
 *   },
 *   ServiceRole: "STRING_VALUE", // required
 *   NotebookInstanceSecurityGroupId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   NotebookS3Location: { // NotebookS3LocationFromInput
 *     Bucket: "STRING_VALUE",
 *     Key: "STRING_VALUE",
 *   },
 *   OutputNotebookS3Location: { // OutputNotebookS3LocationFromInput
 *     Bucket: "STRING_VALUE",
 *     Key: "STRING_VALUE",
 *   },
 *   OutputNotebookFormat: "HTML",
 *   EnvironmentVariables: { // EnvironmentVariablesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartNotebookExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartNotebookExecutionOutput
 * //   NotebookExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartNotebookExecutionCommandInput - {@link StartNotebookExecutionCommandInput}
 * @returns {@link StartNotebookExecutionCommandOutput}
 * @see {@link StartNotebookExecutionCommandInput} for command's `input` shape.
 * @see {@link StartNotebookExecutionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
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
export class StartNotebookExecutionCommand extends $Command
  .classBuilder<
    StartNotebookExecutionCommandInput,
    StartNotebookExecutionCommandOutput,
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
  .s("ElasticMapReduce", "StartNotebookExecution", {})
  .n("EMRClient", "StartNotebookExecutionCommand")
  .f(void 0, void 0)
  .ser(se_StartNotebookExecutionCommand)
  .de(de_StartNotebookExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartNotebookExecutionInput;
      output: StartNotebookExecutionOutput;
    };
    sdk: {
      input: StartNotebookExecutionCommandInput;
      output: StartNotebookExecutionCommandOutput;
    };
  };
}
