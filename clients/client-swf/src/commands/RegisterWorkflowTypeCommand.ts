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

import { RegisterWorkflowTypeInput } from "../models/models_0";
import {
  deserializeAws_json1_0RegisterWorkflowTypeCommand,
  serializeAws_json1_0RegisterWorkflowTypeCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 *
 * The input for {@link RegisterWorkflowTypeCommand}.
 */
export interface RegisterWorkflowTypeCommandInput extends RegisterWorkflowTypeInput {}
/**
 * @public
 *
 * The output of {@link RegisterWorkflowTypeCommand}.
 */
export interface RegisterWorkflowTypeCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Registers a new <i>workflow type</i> and its configuration settings in
 *       the specified domain.</p>
 *          <p>The retention period for the workflow history is set by the <a>RegisterDomain</a> action.</p>
 *          <important>
 *             <p>If the type already exists, then a <code>TypeAlreadyExists</code> fault is returned.
 *         You cannot change the configuration settings of a workflow type once it is registered and it
 *         must be registered as a new version.</p>
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
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with
 *           the appropriate keys.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>defaultTaskList.name</code>: String constraint. The key is
 *                 <code>swf:defaultTaskList.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>name</code>: String constraint. The key is <code>swf:name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>version</code>: String constraint. The key is
 *               <code>swf:version</code>.</p>
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
 * import { SWFClient, RegisterWorkflowTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RegisterWorkflowTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new RegisterWorkflowTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RegisterWorkflowTypeCommandInput - {@link RegisterWorkflowTypeCommandInput}
 * @returns {@link RegisterWorkflowTypeCommandOutput}
 * @see {@link RegisterWorkflowTypeCommandInput} for command's `input` shape.
 * @see {@link RegisterWorkflowTypeCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link TypeAlreadyExistsFault} (client fault)
 *  <p>Returned if the type already exists in the specified domain. You may get this fault if you are registering a type that is either already registered or deprecated, or if you undeprecate a type that is currently registered.</p>
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *  <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 *
 *
 */
export class RegisterWorkflowTypeCommand extends $Command<
  RegisterWorkflowTypeCommandInput,
  RegisterWorkflowTypeCommandOutput,
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
  constructor(readonly input: RegisterWorkflowTypeCommandInput) {
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
  ): Handler<RegisterWorkflowTypeCommandInput, RegisterWorkflowTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterWorkflowTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "RegisterWorkflowTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: RegisterWorkflowTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0RegisterWorkflowTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterWorkflowTypeCommandOutput> {
    return deserializeAws_json1_0RegisterWorkflowTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
