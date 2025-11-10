// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartSyncExecutionInput, StartSyncExecutionOutput } from "../models/models_0";
import { StartSyncExecution } from "../schemas/schemas_0";
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
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // StartSyncExecutionInput
 *   stateMachineArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   input: "STRING_VALUE",
 *   traceHeader: "STRING_VALUE",
 *   includedData: "ALL_DATA" || "METADATA_ONLY",
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
 * @throws {@link KmsAccessDeniedException} (client fault)
 *  <p>Either your KMS key policy or API caller does not have the required permissions.</p>
 *
 * @throws {@link KmsInvalidStateException} (client fault)
 *  <p>The KMS key is not in valid state, for example: Disabled or Deleted.</p>
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *  <p>Received when KMS returns <code>ThrottlingException</code> for a KMS call that Step Functions makes on behalf of the caller.</p>
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *  <p>The specified state machine is being deleted.</p>
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *  <p>The specified state machine does not exist.</p>
 *
 * @throws {@link StateMachineTypeNotSupported} (client fault)
 *  <p>State machine type is not supported.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStepFunctions", "StartSyncExecution", {})
  .n("SFNClient", "StartSyncExecutionCommand")
  .sc(StartSyncExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSyncExecutionInput;
      output: StartSyncExecutionOutput;
    };
    sdk: {
      input: StartSyncExecutionCommandInput;
      output: StartSyncExecutionCommandOutput;
    };
  };
}
