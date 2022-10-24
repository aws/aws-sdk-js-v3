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
  RespondDecisionTaskCompletedInput,
  RespondDecisionTaskCompletedInputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0RespondDecisionTaskCompletedCommand,
  serializeAws_json1_0RespondDecisionTaskCompletedCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

export interface RespondDecisionTaskCompletedCommandInput extends RespondDecisionTaskCompletedInput {}
export interface RespondDecisionTaskCompletedCommandOutput extends __MetadataBearer {}

/**
 * <p>Used by deciders to tell the service that the <a>DecisionTask</a> identified
 *       by the <code>taskToken</code> has successfully completed. The <code>decisions</code> argument
 *       specifies the list of decisions made while processing the task.</p>
 *
 *          <p>A <code>DecisionTaskCompleted</code> event is added to the workflow history. The
 *         <code>executionContext</code> specified is attached to the event in the workflow execution
 *       history.</p>
 *
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *
 *          <p>If an IAM policy grants permission to use <code>RespondDecisionTaskCompleted</code>, it
 *       can express permissions for the list of decisions in the <code>decisions</code> parameter.
 *       Each of the decisions has one or more parameters, much like a regular API call. To allow for
 *       policies to be as readable as possible, you can express permissions on decisions as if they
 *       were actual API calls, including applying conditions to some parameters. For more information,
 *       see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using
 *         IAM to Manage Access to Amazon SWF Workflows</a> in the
 *       <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, RespondDecisionTaskCompletedCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RespondDecisionTaskCompletedCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new RespondDecisionTaskCompletedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RespondDecisionTaskCompletedCommandInput} for command's `input` shape.
 * @see {@link RespondDecisionTaskCompletedCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 */
export class RespondDecisionTaskCompletedCommand extends $Command<
  RespondDecisionTaskCompletedCommandInput,
  RespondDecisionTaskCompletedCommandOutput,
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

  constructor(readonly input: RespondDecisionTaskCompletedCommandInput) {
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
  ): Handler<RespondDecisionTaskCompletedCommandInput, RespondDecisionTaskCompletedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RespondDecisionTaskCompletedCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "RespondDecisionTaskCompletedCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RespondDecisionTaskCompletedInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RespondDecisionTaskCompletedCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0RespondDecisionTaskCompletedCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RespondDecisionTaskCompletedCommandOutput> {
    return deserializeAws_json1_0RespondDecisionTaskCompletedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
