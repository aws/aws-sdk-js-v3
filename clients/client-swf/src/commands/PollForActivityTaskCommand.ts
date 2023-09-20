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

import { ActivityTask, PollForActivityTaskInput } from "../models/models_0";
import { de_PollForActivityTaskCommand, se_PollForActivityTaskCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PollForActivityTaskCommand}.
 */
export interface PollForActivityTaskCommandInput extends PollForActivityTaskInput {}
/**
 * @public
 *
 * The output of {@link PollForActivityTaskCommand}.
 */
export interface PollForActivityTaskCommandOutput extends ActivityTask, __MetadataBearer {}

/**
 * @public
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, PollForActivityTaskCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, PollForActivityTaskCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const input = { // PollForActivityTaskInput
 *   domain: "STRING_VALUE", // required
 *   taskList: { // TaskList
 *     name: "STRING_VALUE", // required
 *   },
 *   identity: "STRING_VALUE",
 * };
 * const command = new PollForActivityTaskCommand(input);
 * const response = await client.send(command);
 * // { // ActivityTask
 * //   taskToken: "STRING_VALUE", // required
 * //   activityId: "STRING_VALUE", // required
 * //   startedEventId: Number("long"), // required
 * //   workflowExecution: { // WorkflowExecution
 * //     workflowId: "STRING_VALUE", // required
 * //     runId: "STRING_VALUE", // required
 * //   },
 * //   activityType: { // ActivityType
 * //     name: "STRING_VALUE", // required
 * //     version: "STRING_VALUE", // required
 * //   },
 * //   input: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PollForActivityTaskCommandInput - {@link PollForActivityTaskCommandInput}
 * @returns {@link PollForActivityTaskCommandOutput}
 * @see {@link PollForActivityTaskCommandInput} for command's `input` shape.
 * @see {@link PollForActivityTaskCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
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
export class PollForActivityTaskCommand extends $Command<
  PollForActivityTaskCommandInput,
  PollForActivityTaskCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PollForActivityTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "PollForActivityTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleWorkflowService",
        operation: "PollForActivityTask",
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
  private serialize(input: PollForActivityTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PollForActivityTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PollForActivityTaskCommandOutput> {
    return de_PollForActivityTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
