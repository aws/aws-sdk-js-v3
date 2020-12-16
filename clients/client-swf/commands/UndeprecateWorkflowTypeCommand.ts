import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { UndeprecateWorkflowTypeInput } from "../models/models_0";
import {
  deserializeAws_json1_0UndeprecateWorkflowTypeCommand,
  serializeAws_json1_0UndeprecateWorkflowTypeCommand,
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

export type UndeprecateWorkflowTypeCommandInput = UndeprecateWorkflowTypeInput;
export type UndeprecateWorkflowTypeCommandOutput = __MetadataBearer;

/**
 * <p>Undeprecates a previously deprecated <i>workflow type</i>. After a workflow type has
 *       been undeprecated, you can create new executions of that type. </p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not
 *         exactly reflect recent updates and changes.</p>
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
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with
 *           the appropriate keys.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>workflowType.name</code>: String constraint. The key is
 *               <code>swf:workflowType.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>workflowType.version</code>: String constraint. The key is
 *               <code>swf:workflowType.version</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 */
export class UndeprecateWorkflowTypeCommand extends $Command<
  UndeprecateWorkflowTypeCommandInput,
  UndeprecateWorkflowTypeCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UndeprecateWorkflowTypeCommandInput) {
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
  ): Handler<UndeprecateWorkflowTypeCommandInput, UndeprecateWorkflowTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "UndeprecateWorkflowTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UndeprecateWorkflowTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UndeprecateWorkflowTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UndeprecateWorkflowTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UndeprecateWorkflowTypeCommandOutput> {
    return deserializeAws_json1_0UndeprecateWorkflowTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
