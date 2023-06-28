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

import { ListClosedWorkflowExecutionsInput, WorkflowExecutionInfos } from "../models/models_0";
import {
  de_ListClosedWorkflowExecutionsCommand,
  se_ListClosedWorkflowExecutionsCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListClosedWorkflowExecutionsCommand}.
 */
export interface ListClosedWorkflowExecutionsCommandInput extends ListClosedWorkflowExecutionsInput {}
/**
 * @public
 *
 * The output of {@link ListClosedWorkflowExecutionsCommand}.
 */
export interface ListClosedWorkflowExecutionsCommandOutput extends WorkflowExecutionInfos, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of closed workflow executions in the specified domain that meet the
 *       filtering criteria. The results may be split into multiple pages. To retrieve subsequent
 *       pages, make the call again using the nextPageToken returned by the initial call.</p>
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
 *                         <code>tagFilter.tag</code>: String constraint. The key is
 *                 <code>swf:tagFilter.tag</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>typeFilter.name</code>: String constraint. The key is
 *                 <code>swf:typeFilter.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>typeFilter.version</code>: String constraint. The key is
 *                 <code>swf:typeFilter.version</code>.</p>
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
 * import { SWFClient, ListClosedWorkflowExecutionsCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, ListClosedWorkflowExecutionsCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const input = { // ListClosedWorkflowExecutionsInput
 *   domain: "STRING_VALUE", // required
 *   startTimeFilter: { // ExecutionTimeFilter
 *     oldestDate: new Date("TIMESTAMP"), // required
 *     latestDate: new Date("TIMESTAMP"),
 *   },
 *   closeTimeFilter: {
 *     oldestDate: new Date("TIMESTAMP"), // required
 *     latestDate: new Date("TIMESTAMP"),
 *   },
 *   executionFilter: { // WorkflowExecutionFilter
 *     workflowId: "STRING_VALUE", // required
 *   },
 *   closeStatusFilter: { // CloseStatusFilter
 *     status: "COMPLETED" || "FAILED" || "CANCELED" || "TERMINATED" || "CONTINUED_AS_NEW" || "TIMED_OUT", // required
 *   },
 *   typeFilter: { // WorkflowTypeFilter
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE",
 *   },
 *   tagFilter: { // TagFilter
 *     tag: "STRING_VALUE", // required
 *   },
 *   nextPageToken: "STRING_VALUE",
 *   maximumPageSize: Number("int"),
 *   reverseOrder: true || false,
 * };
 * const command = new ListClosedWorkflowExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // WorkflowExecutionInfos
 * //   executionInfos: [ // WorkflowExecutionInfoList // required
 * //     { // WorkflowExecutionInfo
 * //       execution: { // WorkflowExecution
 * //         workflowId: "STRING_VALUE", // required
 * //         runId: "STRING_VALUE", // required
 * //       },
 * //       workflowType: { // WorkflowType
 * //         name: "STRING_VALUE", // required
 * //         version: "STRING_VALUE", // required
 * //       },
 * //       startTimestamp: new Date("TIMESTAMP"), // required
 * //       closeTimestamp: new Date("TIMESTAMP"),
 * //       executionStatus: "OPEN" || "CLOSED", // required
 * //       closeStatus: "COMPLETED" || "FAILED" || "CANCELED" || "TERMINATED" || "CONTINUED_AS_NEW" || "TIMED_OUT",
 * //       parent: {
 * //         workflowId: "STRING_VALUE", // required
 * //         runId: "STRING_VALUE", // required
 * //       },
 * //       tagList: [ // TagList
 * //         "STRING_VALUE",
 * //       ],
 * //       cancelRequested: true || false,
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClosedWorkflowExecutionsCommandInput - {@link ListClosedWorkflowExecutionsCommandInput}
 * @returns {@link ListClosedWorkflowExecutionsCommandOutput}
 * @see {@link ListClosedWorkflowExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListClosedWorkflowExecutionsCommandOutput} for command's `response` shape.
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
export class ListClosedWorkflowExecutionsCommand extends $Command<
  ListClosedWorkflowExecutionsCommandInput,
  ListClosedWorkflowExecutionsCommandOutput,
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
  constructor(readonly input: ListClosedWorkflowExecutionsCommandInput) {
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
  ): Handler<ListClosedWorkflowExecutionsCommandInput, ListClosedWorkflowExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListClosedWorkflowExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "ListClosedWorkflowExecutionsCommand";
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
  private serialize(input: ListClosedWorkflowExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListClosedWorkflowExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListClosedWorkflowExecutionsCommandOutput> {
    return de_ListClosedWorkflowExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
