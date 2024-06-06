// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartSyncExecutionInput,
  StartSyncExecutionInputFilterSensitiveLog,
  StartSyncExecutionOutput,
  StartSyncExecutionOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_StartSyncExecutionCommand, se_StartSyncExecutionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSyncExecutionCommand}.
 */
export interface StartSyncExecutionCommandInput extends StartSyncExecutionInput {}
/**
 * @public
 *
 * The output of {@link StartSyncExecutionCommand}.
 */
export interface StartSyncExecutionCommandOutput extends StartSyncExecutionOutput, __MetadataBearer {}

/**
 * <p>Starts a Synchronous Express state machine execution. <code>StartSyncExecution</code>
 * 			  is not available for <code>STANDARD</code> workflows.</p>
 *          <note>
 *             <p>
 *                <code>StartSyncExecution</code> will return a <code>200 OK</code> response, even if your
 *         execution fails, because the status code in the API response doesn't reflect function
 *         errors. Error codes are reserved for errors that prevent your execution from running, such
 *         as permissions errors, limit errors, or issues with your state machine code and
 *         configuration. </p>
 *          </note>
 *          <note>
 *             <p>This API action isn't logged in CloudTrail.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StartSyncExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StartSyncExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // StartSyncExecutionInput
 *   stateMachineArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   input: "STRING_VALUE",
 *   traceHeader: "STRING_VALUE",
 * };
 * const command = new StartSyncExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartSyncExecutionOutput
 * //   executionArn: "STRING_VALUE", // required
 * //   stateMachineArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   startDate: new Date("TIMESTAMP"), // required
 * //   stopDate: new Date("TIMESTAMP"), // required
 * //   status: "SUCCEEDED" || "FAILED" || "TIMED_OUT", // required
 * //   error: "STRING_VALUE",
 * //   cause: "STRING_VALUE",
 * //   input: "STRING_VALUE",
 * //   inputDetails: { // CloudWatchEventsExecutionDataDetails
 * //     included: true || false,
 * //   },
 * //   output: "STRING_VALUE",
 * //   outputDetails: {
 * //     included: true || false,
 * //   },
 * //   traceHeader: "STRING_VALUE",
 * //   billingDetails: { // BillingDetails
 * //     billedMemoryUsedInMB: Number("long"),
 * //     billedDurationInMilliseconds: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StartSyncExecutionCommandInput - {@link StartSyncExecutionCommandInput}
 * @returns {@link StartSyncExecutionCommandOutput}
 * @see {@link StartSyncExecutionCommandInput} for command's `input` shape.
 * @see {@link StartSyncExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link InvalidExecutionInput} (client fault)
 *  <p>The provided JSON input data is not valid.</p>
 *
 * @throws {@link InvalidName} (client fault)
 *  <p>The provided name is not valid.</p>
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *  <p>The specified state machine is being deleted.</p>
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *  <p>The specified state machine does not exist.</p>
 *
 * @throws {@link StateMachineTypeNotSupported} (client fault)
 *  <p></p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 * @public
 */
export class StartSyncExecutionCommand extends $Command
  .classBuilder<
    StartSyncExecutionCommandInput,
    StartSyncExecutionCommandOutput,
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
  .s("AWSStepFunctions", "StartSyncExecution", {})
  .n("SFNClient", "StartSyncExecutionCommand")
  .f(StartSyncExecutionInputFilterSensitiveLog, StartSyncExecutionOutputFilterSensitiveLog)
  .ser(se_StartSyncExecutionCommand)
  .de(de_StartSyncExecutionCommand)
  .build() {}
