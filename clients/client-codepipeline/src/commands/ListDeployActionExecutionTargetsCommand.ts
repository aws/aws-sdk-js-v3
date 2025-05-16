// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDeployActionExecutionTargetsInput, ListDeployActionExecutionTargetsOutput } from "../models/models_0";
import {
  de_ListDeployActionExecutionTargetsCommand,
  se_ListDeployActionExecutionTargetsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeployActionExecutionTargetsCommand}.
 */
export interface ListDeployActionExecutionTargetsCommandInput extends ListDeployActionExecutionTargetsInput {}
/**
 * @public
 *
 * The output of {@link ListDeployActionExecutionTargetsCommand}.
 */
export interface ListDeployActionExecutionTargetsCommandOutput
  extends ListDeployActionExecutionTargetsOutput,
    __MetadataBearer {}

/**
 * <p>Lists the targets for the deploy action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListDeployActionExecutionTargetsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListDeployActionExecutionTargetsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // ListDeployActionExecutionTargetsInput
 *   pipelineName: "STRING_VALUE",
 *   actionExecutionId: "STRING_VALUE", // required
 *   filters: [ // TargetFilterList
 *     { // TargetFilter
 *       name: "TARGET_STATUS",
 *       values: [ // TargetFilterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDeployActionExecutionTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeployActionExecutionTargetsOutput
 * //   targets: [ // DeployActionExecutionTargetList
 * //     { // DeployActionExecutionTarget
 * //       targetId: "STRING_VALUE",
 * //       targetType: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       events: [ // DeployTargetEventList
 * //         { // DeployTargetEvent
 * //           name: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //           startTime: new Date("TIMESTAMP"),
 * //           endTime: new Date("TIMESTAMP"),
 * //           context: { // DeployTargetEventContext
 * //             ssmCommandId: "STRING_VALUE",
 * //             message: "STRING_VALUE",
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
 * @param ListDeployActionExecutionTargetsCommandInput - {@link ListDeployActionExecutionTargetsCommandInput}
 * @returns {@link ListDeployActionExecutionTargetsCommandOutput}
 * @see {@link ListDeployActionExecutionTargetsCommandInput} for command's `input` shape.
 * @see {@link ListDeployActionExecutionTargetsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionExecutionNotFoundException} (client fault)
 *  <p>The action execution was not found.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format. Make sure that the next token
 *             you provide is the token returned by a previous call.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 *
 * @public
 */
export class ListDeployActionExecutionTargetsCommand extends $Command
  .classBuilder<
    ListDeployActionExecutionTargetsCommandInput,
    ListDeployActionExecutionTargetsCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodePipeline_20150709", "ListDeployActionExecutionTargets", {})
  .n("CodePipelineClient", "ListDeployActionExecutionTargetsCommand")
  .f(void 0, void 0)
  .ser(se_ListDeployActionExecutionTargetsCommand)
  .de(de_ListDeployActionExecutionTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeployActionExecutionTargetsInput;
      output: ListDeployActionExecutionTargetsOutput;
    };
    sdk: {
      input: ListDeployActionExecutionTargetsCommandInput;
      output: ListDeployActionExecutionTargetsCommandOutput;
    };
  };
}
