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

import { DescribeWorkflowTypeInput, WorkflowTypeDetail } from "../models/models_0";
import { de_DescribeWorkflowTypeCommand, se_DescribeWorkflowTypeCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkflowTypeCommand}.
 */
export interface DescribeWorkflowTypeCommandInput extends DescribeWorkflowTypeInput {}
/**
 * @public
 *
 * The output of {@link DescribeWorkflowTypeCommand}.
 */
export interface DescribeWorkflowTypeCommandOutput extends WorkflowTypeDetail, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the specified <i>workflow type</i>. This
 *       includes configuration settings specified when the type was registered and other information
 *       such as creation date, current status, etc.</p>
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
 * import { SWFClient, DescribeWorkflowTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DescribeWorkflowTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const input = { // DescribeWorkflowTypeInput
 *   domain: "STRING_VALUE", // required
 *   workflowType: { // WorkflowType
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DescribeWorkflowTypeCommand(input);
 * const response = await client.send(command);
 * // { // WorkflowTypeDetail
 * //   typeInfo: { // WorkflowTypeInfo
 * //     workflowType: { // WorkflowType
 * //       name: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //     status: "REGISTERED" || "DEPRECATED", // required
 * //     description: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"), // required
 * //     deprecationDate: new Date("TIMESTAMP"),
 * //   },
 * //   configuration: { // WorkflowTypeConfiguration
 * //     defaultTaskStartToCloseTimeout: "STRING_VALUE",
 * //     defaultExecutionStartToCloseTimeout: "STRING_VALUE",
 * //     defaultTaskList: { // TaskList
 * //       name: "STRING_VALUE", // required
 * //     },
 * //     defaultTaskPriority: "STRING_VALUE",
 * //     defaultChildPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON",
 * //     defaultLambdaRole: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWorkflowTypeCommandInput - {@link DescribeWorkflowTypeCommandInput}
 * @returns {@link DescribeWorkflowTypeCommandOutput}
 * @see {@link DescribeWorkflowTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkflowTypeCommandOutput} for command's `response` shape.
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
export class DescribeWorkflowTypeCommand extends $Command<
  DescribeWorkflowTypeCommandInput,
  DescribeWorkflowTypeCommandOutput,
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
  constructor(readonly input: DescribeWorkflowTypeCommandInput) {
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
  ): Handler<DescribeWorkflowTypeCommandInput, DescribeWorkflowTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorkflowTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "DescribeWorkflowTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleWorkflowService",
        operation: "DescribeWorkflowType",
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
  private serialize(input: DescribeWorkflowTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeWorkflowTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkflowTypeCommandOutput> {
    return de_DescribeWorkflowTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
