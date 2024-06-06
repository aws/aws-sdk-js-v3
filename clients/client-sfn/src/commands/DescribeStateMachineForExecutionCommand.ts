// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeStateMachineForExecutionInput,
  DescribeStateMachineForExecutionOutput,
  DescribeStateMachineForExecutionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeStateMachineForExecutionCommand,
  se_DescribeStateMachineForExecutionCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStateMachineForExecutionCommand}.
 */
export interface DescribeStateMachineForExecutionCommandInput extends DescribeStateMachineForExecutionInput {}
/**
 * @public
 *
 * The output of {@link DescribeStateMachineForExecutionCommand}.
 */
export interface DescribeStateMachineForExecutionCommandOutput
  extends DescribeStateMachineForExecutionOutput,
    __MetadataBearer {}

/**
 * <p>Provides information about a state machine's definition, its execution role ARN, and
 *       configuration. If a Map Run dispatched the execution, this action returns the Map Run
 *       Amazon Resource Name (ARN) in the response.
 *       The
 *       state machine returned is the state machine associated with the
 *       Map Run.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeStateMachineForExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeStateMachineForExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // DescribeStateMachineForExecutionInput
 *   executionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeStateMachineForExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStateMachineForExecutionOutput
 * //   stateMachineArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   definition: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   updateDate: new Date("TIMESTAMP"), // required
 * //   loggingConfiguration: { // LoggingConfiguration
 * //     level: "ALL" || "ERROR" || "FATAL" || "OFF",
 * //     includeExecutionData: true || false,
 * //     destinations: [ // LogDestinationList
 * //       { // LogDestination
 * //         cloudWatchLogsLogGroup: { // CloudWatchLogsLogGroup
 * //           logGroupArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   tracingConfiguration: { // TracingConfiguration
 * //     enabled: true || false,
 * //   },
 * //   mapRunArn: "STRING_VALUE",
 * //   label: "STRING_VALUE",
 * //   revisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStateMachineForExecutionCommandInput - {@link DescribeStateMachineForExecutionCommandInput}
 * @returns {@link DescribeStateMachineForExecutionCommandOutput}
 * @see {@link DescribeStateMachineForExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeStateMachineForExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ExecutionDoesNotExist} (client fault)
 *  <p>The specified execution does not exist.</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 * @public
 */
export class DescribeStateMachineForExecutionCommand extends $Command
  .classBuilder<
    DescribeStateMachineForExecutionCommandInput,
    DescribeStateMachineForExecutionCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "DescribeStateMachineForExecution", {})
  .n("SFNClient", "DescribeStateMachineForExecutionCommand")
  .f(void 0, DescribeStateMachineForExecutionOutputFilterSensitiveLog)
  .ser(se_DescribeStateMachineForExecutionCommand)
  .de(de_DescribeStateMachineForExecutionCommand)
  .build() {}
