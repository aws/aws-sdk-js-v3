import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { CountPendingActivityTasksInput, PendingTaskCount } from "../models/models_0";
import {
  deserializeAws_json1_0CountPendingActivityTasksCommand,
  serializeAws_json1_0CountPendingActivityTasksCommand,
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

export type CountPendingActivityTasksCommandInput = CountPendingActivityTasksInput;
export type CountPendingActivityTasksCommandOutput = PendingTaskCount & __MetadataBearer;

/**
 * <p>Returns the estimated number of activity tasks in the specified task list. The count
 *       returned is an approximation and isn't guaranteed to be exact. If you specify a task list that
 *       no activity task was ever scheduled in then <code>0</code> is returned.</p>
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
export class CountPendingActivityTasksCommand extends $Command<
  CountPendingActivityTasksCommandInput,
  CountPendingActivityTasksCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CountPendingActivityTasksCommandInput) {
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
  ): Handler<CountPendingActivityTasksCommandInput, CountPendingActivityTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "CountPendingActivityTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CountPendingActivityTasksInput.filterSensitiveLog,
      outputFilterSensitiveLog: PendingTaskCount.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CountPendingActivityTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CountPendingActivityTasksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CountPendingActivityTasksCommandOutput> {
    return deserializeAws_json1_0CountPendingActivityTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
