// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  RespondActivityTaskCompletedInput,
  RespondActivityTaskCompletedInputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0RespondActivityTaskCompletedCommand,
  serializeAws_json1_0RespondActivityTaskCompletedCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

export interface RespondActivityTaskCompletedCommandInput extends RespondActivityTaskCompletedInput {}
export interface RespondActivityTaskCompletedCommandOutput extends __MetadataBearer {}

/**
 * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified
 *       by the <code>taskToken</code> completed successfully with a <code>result</code> (if provided).
 *       The <code>result</code> appears in the <code>ActivityTaskCompleted</code> event in the
 *       workflow history.</p>
 *
 *          <important>
 *             <p>If the requested task doesn't complete successfully, use <a>RespondActivityTaskFailed</a> instead. If the worker finds that the task is
 *         canceled through the <code>canceled</code> flag returned by <a>RecordActivityTaskHeartbeat</a>, it should cancel the task, clean up and then call
 *           <a>RespondActivityTaskCanceled</a>.</p>
 *          </important>
 *
 *          <p>A task is considered open from the time that it is scheduled until it is closed.
 *       Therefore a task is reported as open while a worker is processing it. A task is closed after
 *       it has been specified in a call to RespondActivityTaskCompleted, <a>RespondActivityTaskCanceled</a>, <a>RespondActivityTaskFailed</a>, or the
 *       task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, RespondActivityTaskCompletedCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RespondActivityTaskCompletedCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new RespondActivityTaskCompletedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RespondActivityTaskCompletedCommandInput} for command's `input` shape.
 * @see {@link RespondActivityTaskCompletedCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 */
export class RespondActivityTaskCompletedCommand extends $Command<
  RespondActivityTaskCompletedCommandInput,
  RespondActivityTaskCompletedCommandOutput,
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

  constructor(readonly input: RespondActivityTaskCompletedCommandInput) {
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
  ): Handler<RespondActivityTaskCompletedCommandInput, RespondActivityTaskCompletedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RespondActivityTaskCompletedCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "RespondActivityTaskCompletedCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RespondActivityTaskCompletedInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RespondActivityTaskCompletedCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0RespondActivityTaskCompletedCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RespondActivityTaskCompletedCommandOutput> {
    return deserializeAws_json1_0RespondActivityTaskCompletedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
