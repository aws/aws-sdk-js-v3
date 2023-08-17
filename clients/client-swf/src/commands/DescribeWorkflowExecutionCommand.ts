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
} from "@smithy/types";

import { DescribeWorkflowExecutionInput, WorkflowExecutionDetail } from "../models/models_0";
import { de_DescribeWorkflowExecutionCommand, se_DescribeWorkflowExecutionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkflowExecutionCommand}.
 */
export interface DescribeWorkflowExecutionCommandInput extends DescribeWorkflowExecutionInput {}
/**
 * @public
 *
 * The output of {@link DescribeWorkflowExecutionCommand}.
 */
export interface DescribeWorkflowExecutionCommandOutput extends WorkflowExecutionDetail, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the specified workflow execution including its type and some
 *       statistics.</p>
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
 * import { SWFClient, DescribeWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DescribeWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const input = { // DescribeWorkflowExecutionInput
 *   domain: "STRING_VALUE", // required
 *   execution: { // WorkflowExecution
 *     workflowId: "STRING_VALUE", // required
 *     runId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DescribeWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * // { // WorkflowExecutionDetail
 * //   executionInfo: { // WorkflowExecutionInfo
 * //     execution: { // WorkflowExecution
 * //       workflowId: "STRING_VALUE", // required
 * //       runId: "STRING_VALUE", // required
 * //     },
 * //     workflowType: { // WorkflowType
 * //       name: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //     startTimestamp: new Date("TIMESTAMP"), // required
 * //     closeTimestamp: new Date("TIMESTAMP"),
 * //     executionStatus: "OPEN" || "CLOSED", // required
 * //     closeStatus: "COMPLETED" || "FAILED" || "CANCELED" || "TERMINATED" || "CONTINUED_AS_NEW" || "TIMED_OUT",
 * //     parent: {
 * //       workflowId: "STRING_VALUE", // required
 * //       runId: "STRING_VALUE", // required
 * //     },
 * //     tagList: [ // TagList
 * //       "STRING_VALUE",
 * //     ],
 * //     cancelRequested: true || false,
 * //   },
 * //   executionConfiguration: { // WorkflowExecutionConfiguration
 * //     taskStartToCloseTimeout: "STRING_VALUE", // required
 * //     executionStartToCloseTimeout: "STRING_VALUE", // required
 * //     taskList: { // TaskList
 * //       name: "STRING_VALUE", // required
 * //     },
 * //     taskPriority: "STRING_VALUE",
 * //     childPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON", // required
 * //     lambdaRole: "STRING_VALUE",
 * //   },
 * //   openCounts: { // WorkflowExecutionOpenCounts
 * //     openActivityTasks: Number("int"), // required
 * //     openDecisionTasks: Number("int"), // required
 * //     openTimers: Number("int"), // required
 * //     openChildWorkflowExecutions: Number("int"), // required
 * //     openLambdaFunctions: Number("int"),
 * //   },
 * //   latestActivityTaskTimestamp: new Date("TIMESTAMP"),
 * //   latestExecutionContext: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkflowExecutionCommandInput - {@link DescribeWorkflowExecutionCommandInput}
 * @returns {@link DescribeWorkflowExecutionCommandOutput}
 * @see {@link DescribeWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkflowExecutionCommandOutput} for command's `response` shape.
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
export class DescribeWorkflowExecutionCommand extends $Command<
  DescribeWorkflowExecutionCommandInput,
  DescribeWorkflowExecutionCommandOutput,
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
  constructor(readonly input: DescribeWorkflowExecutionCommandInput) {
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
  ): Handler<DescribeWorkflowExecutionCommandInput, DescribeWorkflowExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorkflowExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "DescribeWorkflowExecutionCommand";
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
  private serialize(input: DescribeWorkflowExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeWorkflowExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorkflowExecutionCommandOutput> {
    return de_DescribeWorkflowExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
