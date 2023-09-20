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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { CancelFlowExecutionsRequest, CancelFlowExecutionsResponse } from "../models/models_0";
import { de_CancelFlowExecutionsCommand, se_CancelFlowExecutionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelFlowExecutionsCommand}.
 */
export interface CancelFlowExecutionsCommandInput extends CancelFlowExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link CancelFlowExecutionsCommand}.
 */
export interface CancelFlowExecutionsCommandOutput extends CancelFlowExecutionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Cancels active runs for a flow.</p>
 *          <p>You can cancel all of the active runs for a flow, or you can cancel specific runs by
 *       providing their IDs.</p>
 *          <p>You can cancel a flow run only when the run is in progress. You can't cancel a run that
 *       has already completed or failed. You also can't cancel a run that's scheduled to occur but
 *       hasn't started yet. To prevent a scheduled run, you can deactivate the flow with the
 *         <code>StopFlow</code> action.</p>
 *          <p>You cannot resume a run after you cancel it.</p>
 *          <p>When you send your request, the status for each run becomes <code>CancelStarted</code>.
 *       When the cancellation completes, the status becomes <code>Canceled</code>.</p>
 *          <note>
 *             <p>When you cancel a run, you still incur charges for any data that the run already
 *         processed before the cancellation. If the run had already written some data to the flow
 *         destination, then that data remains in the destination. If you configured the flow to use a
 *         batch API (such as the Salesforce Bulk API 2.0), then the run will finish reading or writing
 *         its entire batch of data after the cancellation. For these operations, the data processing
 *         charges for Amazon AppFlow apply. For the pricing information, see <a href="http://aws.amazon.com/appflow/pricing/">Amazon AppFlow pricing</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, CancelFlowExecutionsCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, CancelFlowExecutionsCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = { // CancelFlowExecutionsRequest
 *   flowName: "STRING_VALUE", // required
 *   executionIds: [ // ExecutionIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CancelFlowExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // CancelFlowExecutionsResponse
 * //   invalidExecutions: [ // ExecutionIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CancelFlowExecutionsCommandInput - {@link CancelFlowExecutionsCommandInput}
 * @returns {@link CancelFlowExecutionsCommandOutput}
 * @see {@link CancelFlowExecutionsCommandInput} for command's `input` shape.
 * @see {@link CancelFlowExecutionsCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>AppFlow/Requester has invalid or missing permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>API calls have exceeded the maximum allowed API request rate per account and per Region.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 */
export class CancelFlowExecutionsCommand extends $Command<
  CancelFlowExecutionsCommandInput,
  CancelFlowExecutionsCommandOutput,
  AppflowClientResolvedConfig
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
  constructor(readonly input: CancelFlowExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelFlowExecutionsCommandInput, CancelFlowExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelFlowExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "CancelFlowExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SandstoneConfigurationServiceLambda",
        operation: "CancelFlowExecutions",
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
  private serialize(input: CancelFlowExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelFlowExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelFlowExecutionsCommandOutput> {
    return de_CancelFlowExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
