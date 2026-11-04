// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDeployActionExecutionTargetsInput, ListDeployActionExecutionTargetsOutput } from "../models/models_0";
import { ListDeployActionExecutionTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListDeployActionExecutionTargetsCommandOutput extends ListDeployActionExecutionTargetsOutput, __MetadataBearer {}

/**
 * Lists the targets for the deploy action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListDeployActionExecutionTargetsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListDeployActionExecutionTargetsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
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
 *
 * The action execution was not found.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The next token was specified in an invalid format. Make sure that the next token you provide is the token returned by a previous call.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *
 * The pipeline was specified in an invalid format or cannot be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The validation was specified in an invalid format.
 *
 * @throws {@link CodePipelineServiceException}
 *
 * Base exception class for all service exceptions from CodePipeline service.
 *
 * @public
 */
export class ListDeployActionExecutionTargetsCommand extends command<ListDeployActionExecutionTargetsCommandInput, ListDeployActionExecutionTargetsCommandOutput>(
  _ep0,
  _mw0,
  "ListDeployActionExecutionTargets",
  ListDeployActionExecutionTargets$
) {
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
