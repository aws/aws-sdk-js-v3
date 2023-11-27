// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { RedriveExecutionInput, RedriveExecutionOutput } from "../models/models_0";
import { de_RedriveExecutionCommand, se_RedriveExecutionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RedriveExecutionCommand}.
 */
export interface RedriveExecutionCommandInput extends RedriveExecutionInput {}
/**
 * @public
 *
 * The output of {@link RedriveExecutionCommand}.
 */
export interface RedriveExecutionCommandOutput extends RedriveExecutionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the last 14 days. These include failed, aborted, or timed out executions. When you <a href="https://docs.aws.amazon.com/step-functions/latest/dg/redrive-executions.html">redrive</a> an execution, it continues the failed execution from the unsuccessful step and uses the same input. Step Functions preserves the results and execution history of the successful steps, and doesn't rerun these steps when you redrive an execution. Redriven executions use the same state machine definition and execution ARN as the original execution attempt.</p>
 *          <p>For workflows that include an <a href="https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-map-state.html">Inline Map</a> or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-parallel-state.html">Parallel</a> state, <code>RedriveExecution</code> API action reschedules and redrives only the iterations and branches that failed or aborted.</p>
 *          <p>To redrive a workflow that includes a Distributed Map state whose Map Run failed, you must redrive the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/use-dist-map-orchestrate-large-scale-parallel-workloads.html#dist-map-orchestrate-parallel-workloads-key-terms">parent workflow</a>. The parent workflow redrives all the unsuccessful states, including a failed Map Run. If a Map Run was not started in the original execution attempt, the redriven parent workflow starts the Map Run.</p>
 *          <note>
 *             <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 *             <p>However, you can restart the unsuccessful executions of Express child workflows in a Distributed Map by redriving its Map Run. When you redrive a Map Run, the Express child workflows are rerun using the <a>StartExecution</a> API action. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/redrive-map-run.html">Redriving Map Runs</a>.</p>
 *          </note>
 *          <p>You can redrive executions if your original execution meets the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>The execution status isn't <code>SUCCEEDED</code>.</p>
 *             </li>
 *             <li>
 *                <p>Your workflow execution has not exceeded the redrivable period of 14 days. Redrivable period refers to the time during which you can redrive a given execution. This period starts from the day a state machine completes its execution.</p>
 *             </li>
 *             <li>
 *                <p>The workflow execution has not exceeded the maximum open time of one year. For more information about state machine quotas, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits-overview.html#service-limits-state-machine-executions">Quotas related to state machine executions</a>.</p>
 *             </li>
 *             <li>
 *                <p>The execution event history count is less than 24,999. Redriven executions append their event history to the existing event history. Make sure your workflow execution contains less than 24,999 events to accommodate the <code>ExecutionRedriven</code> history event and at least one other history event.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, RedriveExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, RedriveExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // RedriveExecutionInput
 *   executionArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RedriveExecutionCommand(input);
 * const response = await client.send(command);
 * // { // RedriveExecutionOutput
 * //   redriveDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param RedriveExecutionCommandInput - {@link RedriveExecutionCommandInput}
 * @returns {@link RedriveExecutionCommandOutput}
 * @see {@link RedriveExecutionCommandInput} for command's `input` shape.
 * @see {@link RedriveExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ExecutionDoesNotExist} (client fault)
 *  <p>The specified execution does not exist.</p>
 *
 * @throws {@link ExecutionLimitExceeded} (client fault)
 *  <p>The maximum number of running executions has been reached. Running executions must end or
 *       be stopped before a new execution can be started.</p>
 *
 * @throws {@link ExecutionNotRedrivable} (client fault)
 *  <p>The execution Amazon Resource Name (ARN) that you specified for <code>executionArn</code> cannot be redriven.</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class RedriveExecutionCommand extends $Command<
  RedriveExecutionCommandInput,
  RedriveExecutionCommandOutput,
  SFNClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: RedriveExecutionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RedriveExecutionCommandInput, RedriveExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RedriveExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "RedriveExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStepFunctions",
        operation: "RedriveExecution",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: RedriveExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RedriveExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RedriveExecutionCommandOutput> {
    return de_RedriveExecutionCommand(output, context);
  }
}
