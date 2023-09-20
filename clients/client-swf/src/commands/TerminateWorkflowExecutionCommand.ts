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

import { TerminateWorkflowExecutionInput } from "../models/models_0";
import { de_TerminateWorkflowExecutionCommand, se_TerminateWorkflowExecutionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TerminateWorkflowExecutionCommand}.
 */
export interface TerminateWorkflowExecutionCommandInput extends TerminateWorkflowExecutionInput {}
/**
 * @public
 *
 * The output of {@link TerminateWorkflowExecutionCommand}.
 */
export interface TerminateWorkflowExecutionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Records a <code>WorkflowExecutionTerminated</code> event and forces closure of the
 *       workflow execution identified by the given domain, runId, and workflowId. The child policy,
 *       registered with the workflow type or specified when starting this execution, is applied to any
 *       open child workflow executions of this workflow execution.</p>
 *          <important>
 *             <p>If the identified workflow execution was in progress, it is terminated
 *         immediately.</p>
 *          </important>
 *          <note>
 *             <p>If a runId isn't specified, then the <code>WorkflowExecutionTerminated</code> event
 *         is recorded in the history of the current open workflow with the matching workflowId in the
 *         domain.</p>
 *          </note>
 *          <note>
 *             <p>You should consider using <a>RequestCancelWorkflowExecution</a> action
 *         instead because it allows the workflow to gracefully close while <a>TerminateWorkflowExecution</a> doesn't.</p>
 *          </note>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, TerminateWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, TerminateWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const input = { // TerminateWorkflowExecutionInput
 *   domain: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   runId: "STRING_VALUE",
 *   reason: "STRING_VALUE",
 *   details: "STRING_VALUE",
 *   childPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON",
 * };
 * const command = new TerminateWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TerminateWorkflowExecutionCommandInput - {@link TerminateWorkflowExecutionCommandInput}
 * @returns {@link TerminateWorkflowExecutionCommandOutput}
 * @see {@link TerminateWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link TerminateWorkflowExecutionCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *  <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 *
 * @throws {@link SWFServiceException}
 * <p>Base exception class for all service exceptions from SWF service.</p>
 *
 */
export class TerminateWorkflowExecutionCommand extends $Command<
  TerminateWorkflowExecutionCommandInput,
  TerminateWorkflowExecutionCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
  constructor(readonly input: TerminateWorkflowExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TerminateWorkflowExecutionCommandInput, TerminateWorkflowExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TerminateWorkflowExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "TerminateWorkflowExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleWorkflowService",
        operation: "TerminateWorkflowExecution",
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
  private serialize(input: TerminateWorkflowExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TerminateWorkflowExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TerminateWorkflowExecutionCommandOutput> {
    return de_TerminateWorkflowExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
