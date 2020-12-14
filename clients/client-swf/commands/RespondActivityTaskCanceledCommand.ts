import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RespondActivityTaskCanceledInput } from "../models/models_0";
import {
  deserializeAws_json1_0RespondActivityTaskCanceledCommand,
  serializeAws_json1_0RespondActivityTaskCanceledCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type RespondActivityTaskCanceledCommandInput = RespondActivityTaskCanceledInput;
export type RespondActivityTaskCanceledCommandOutput = __MetadataBearer;

/**
 * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified
 *       by the <code>taskToken</code> was successfully canceled. Additional <code>details</code> can
 *       be provided using the <code>details</code> argument.</p>
 *
 *          <p>These <code>details</code> (if provided) appear in the
 *         <code>ActivityTaskCanceled</code> event added to the workflow history.</p>
 *
 *          <important>
 *             <p>Only use this operation if the <code>canceled</code> flag of a <a>RecordActivityTaskHeartbeat</a> request returns <code>true</code> and if the
 *         activity can be safely undone or abandoned.</p>
 *          </important>
 *
 *          <p>A task is considered open from the time that it is scheduled until it is closed.
 *       Therefore a task is reported as open while a worker is processing it. A task is closed after
 *       it has been specified in a call to <a>RespondActivityTaskCompleted</a>,
 *       RespondActivityTaskCanceled, <a>RespondActivityTaskFailed</a>, or the task has
 *         <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed
 *         out</a>.</p>
 *
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
 */
export class RespondActivityTaskCanceledCommand extends $Command<
  RespondActivityTaskCanceledCommandInput,
  RespondActivityTaskCanceledCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RespondActivityTaskCanceledCommandInput) {
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
  ): Handler<RespondActivityTaskCanceledCommandInput, RespondActivityTaskCanceledCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "RespondActivityTaskCanceledCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RespondActivityTaskCanceledInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RespondActivityTaskCanceledCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0RespondActivityTaskCanceledCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RespondActivityTaskCanceledCommandOutput> {
    return deserializeAws_json1_0RespondActivityTaskCanceledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
