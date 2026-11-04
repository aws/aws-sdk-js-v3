// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartSyncExecutionInput, StartSyncExecutionOutput } from "../models/models_0";
import { StartSyncExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts a Synchronous Express state machine execution. `StartSyncExecution` is not available for `STANDARD` workflows.
 *
 * > **Note:** `StartSyncExecution` will return a `200 OK` response, even if your execution fails, because the status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your execution from running, such as permissions errors, limit errors, or issues with your state machine code and configuration.
 *
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
 *
 * The provided Amazon Resource Name (ARN) is not valid.
 *
 * @throws {@link InvalidExecutionInput} (client fault)
 *
 * The provided JSON input data is not valid.
 *
 * @throws {@link InvalidName} (client fault)
 *
 * The provided name is not valid.
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *
 * Either your KMS key policy or API caller does not have the required permissions.
 *
 * @throws {@link KmsInvalidStateException} (client fault)
 *
 * The KMS key is not in valid state, for example: Disabled or Deleted.
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *
 * Received when KMS returns `ThrottlingException` for a KMS call that Step Functions makes on behalf of the caller.
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *
 * The specified state machine is being deleted.
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *
 * The specified state machine does not exist.
 *
 * @throws {@link StateMachineTypeNotSupported} (client fault)
 *
 * State machine type is not supported.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class StartSyncExecutionCommand extends command<StartSyncExecutionCommandInput, StartSyncExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StartSyncExecution",
  StartSyncExecution$
) {
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
