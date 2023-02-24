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
  Run,
  RunFilterSensitiveLog,
  StartWorkflowExecutionInput,
  StartWorkflowExecutionInputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0StartWorkflowExecutionCommand,
  serializeAws_json1_0StartWorkflowExecutionCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

export interface StartWorkflowExecutionCommandInput extends StartWorkflowExecutionInput {}
export interface StartWorkflowExecutionCommandOutput extends Run, __MetadataBearer {}

/**
 * <p>Starts an execution of the workflow type in the specified domain using the provided
 *         <code>workflowId</code> and input data.</p>
 *
 *          <p>This action returns the newly started workflow execution.</p>
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
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with
 *           the appropriate keys.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.0</code>: The key is <code>swf:tagList.member.0</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.1</code>: The key is <code>swf:tagList.member.1</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.2</code>: The key is <code>swf:tagList.member.2</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.3</code>: The key is <code>swf:tagList.member.3</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>tagList.member.4</code>: The key is <code>swf:tagList.member.4</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>taskList</code>: String constraint. The key is
 *               <code>swf:taskList.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>workflowType.name</code>: String constraint. The key is
 *                 <code>swf:workflowType.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>workflowType.version</code>: String constraint. The key is
 *                 <code>swf:workflowType.version</code>.</p>
 *                   </li>
 *                </ul>
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
 * import { SWFClient, StartWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, StartWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new StartWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link StartWorkflowExecutionCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 */
export class StartWorkflowExecutionCommand extends $Command<
  StartWorkflowExecutionCommandInput,
  StartWorkflowExecutionCommandOutput,
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

  constructor(readonly input: StartWorkflowExecutionCommandInput) {
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
  ): Handler<StartWorkflowExecutionCommandInput, StartWorkflowExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartWorkflowExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "StartWorkflowExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartWorkflowExecutionInputFilterSensitiveLog,
      outputFilterSensitiveLog: RunFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartWorkflowExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0StartWorkflowExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartWorkflowExecutionCommandOutput> {
    return deserializeAws_json1_0StartWorkflowExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
