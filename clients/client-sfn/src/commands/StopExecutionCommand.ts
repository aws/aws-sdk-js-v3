// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopExecutionInput, StopExecutionOutput } from "../models/models_0";
import { StopExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopExecutionCommand}.
 */
export interface StopExecutionCommandInput extends StopExecutionInput {}
/**
 * @public
 *
 * The output of {@link StopExecutionCommand}.
 */
export interface StopExecutionCommandOutput extends StopExecutionOutput, __MetadataBearer {}

/**
 * Stops an execution.
 *
 * This API action is not supported by `EXPRESS` state machines.
 *
 * For an execution with encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role.
 *
 * A caller can stop an execution without using any KMS permissions in the execution role if the caller provides a null value for both `error` and `cause` fields because no data needs to be encrypted.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StopExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StopExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // StopExecutionInput
 *   executionArn: "STRING_VALUE", // required
 *   error: "STRING_VALUE",
 *   cause: "STRING_VALUE",
 * };
 * const command = new StopExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StopExecutionOutput
 * //   stopDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StopExecutionCommandInput - {@link StopExecutionCommandInput}
 * @returns {@link StopExecutionCommandOutput}
 * @see {@link StopExecutionCommandInput} for command's `input` shape.
 * @see {@link StopExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ExecutionDoesNotExist} (client fault)
 *
 * The specified execution does not exist.
 *
 * @throws {@link InvalidArn} (client fault)
 *
 * The provided Amazon Resource Name (ARN) is not valid.
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
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class StopExecutionCommand extends command<StopExecutionCommandInput, StopExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StopExecution",
  StopExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopExecutionInput;
      output: StopExecutionOutput;
    };
    sdk: {
      input: StopExecutionCommandInput;
      output: StopExecutionCommandOutput;
    };
  };
}
