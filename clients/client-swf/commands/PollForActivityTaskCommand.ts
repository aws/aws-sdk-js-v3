import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { ActivityTask, PollForActivityTaskInput } from "../models/models_0";
import {
  deserializeAws_json1_0PollForActivityTaskCommand,
  serializeAws_json1_0PollForActivityTaskCommand,
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

export type PollForActivityTaskCommandInput = PollForActivityTaskInput;
export type PollForActivityTaskCommandOutput = ActivityTask & __MetadataBearer;

/**
 * <p>Used by workers to get an <a>ActivityTask</a> from the specified activity
 *         <code>taskList</code>. This initiates a long poll, where the service holds the HTTP
 *       connection open and responds as soon as a task becomes available. The maximum time the service
 *       holds on to the request before responding is 60 seconds. If no task is available within 60
 *       seconds, the poll returns an empty result. An empty result, in this context, means that an
 *       ActivityTask is returned, but that the value of taskToken is an empty string. If a task is
 *       returned, the worker should use its type to identify and process it correctly.</p>
 *          <important>
 *             <p>Workers should set their client side socket timeout to at least 70 seconds (10
 *         seconds higher than the maximum time service may hold the poll request).</p>
 *          </important>
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
 *                <p>Constrain the <code>taskList.name</code> parameter by using a
 *             <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the
 *           action to access only certain task lists.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 */
export class PollForActivityTaskCommand extends $Command<
  PollForActivityTaskCommandInput,
  PollForActivityTaskCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PollForActivityTaskCommandInput) {
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
  ): Handler<PollForActivityTaskCommandInput, PollForActivityTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "PollForActivityTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PollForActivityTaskInput.filterSensitiveLog,
      outputFilterSensitiveLog: ActivityTask.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PollForActivityTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0PollForActivityTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PollForActivityTaskCommandOutput> {
    return deserializeAws_json1_0PollForActivityTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
