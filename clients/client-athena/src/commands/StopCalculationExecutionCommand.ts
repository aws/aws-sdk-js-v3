// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopCalculationExecutionRequest, StopCalculationExecutionResponse } from "../models/models_0";
import { StopCalculationExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopCalculationExecutionCommand}.
 */
export interface StopCalculationExecutionCommandInput extends StopCalculationExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StopCalculationExecutionCommand}.
 */
export interface StopCalculationExecutionCommandOutput extends StopCalculationExecutionResponse, __MetadataBearer {}

/**
 * Requests the cancellation of a calculation. A `StopCalculationExecution` call on a calculation that is already in a terminal state (for example, `STOPPED`, `FAILED`, or `COMPLETED`) succeeds but has no effect.
 *
 * > **Note:** Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StopCalculationExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StopCalculationExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // StopCalculationExecutionRequest
 *   CalculationExecutionId: "STRING_VALUE", // required
 * };
 * const command = new StopCalculationExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StopCalculationExecutionResponse
 * //   State: "CREATING" || "CREATED" || "QUEUED" || "RUNNING" || "CANCELING" || "CANCELED" || "COMPLETED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param StopCalculationExecutionCommandInput - {@link StopCalculationExecutionCommandInput}
 * @returns {@link StopCalculationExecutionCommandOutput}
 * @see {@link StopCalculationExecutionCommandInput} for command's `input` shape.
 * @see {@link StopCalculationExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates a platform issue, which may be due to a transient condition or outage.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource, such as a workgroup, was not found.
 *
 * @throws {@link AthenaServiceException}
 *
 * Base exception class for all service exceptions from Athena service.
 *
 * @public
 */
export class StopCalculationExecutionCommand extends command<StopCalculationExecutionCommandInput, StopCalculationExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StopCalculationExecution",
  StopCalculationExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopCalculationExecutionRequest;
      output: StopCalculationExecutionResponse;
    };
    sdk: {
      input: StopCalculationExecutionCommandInput;
      output: StopCalculationExecutionCommandOutput;
    };
  };
}
