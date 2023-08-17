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

import { SendWorkflowStepStateRequest, SendWorkflowStepStateResponse } from "../models/models_0";
import { de_SendWorkflowStepStateCommand, se_SendWorkflowStepStateCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendWorkflowStepStateCommand}.
 */
export interface SendWorkflowStepStateCommandInput extends SendWorkflowStepStateRequest {}
/**
 * @public
 *
 * The output of {@link SendWorkflowStepStateCommand}.
 */
export interface SendWorkflowStepStateCommandOutput extends SendWorkflowStepStateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sends a callback for asynchronous custom steps.</p>
 *          <p>
 *       The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow.
 *       You must include those with their callback as well as providing a status.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, SendWorkflowStepStateCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, SendWorkflowStepStateCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // SendWorkflowStepStateRequest
 *   WorkflowId: "STRING_VALUE", // required
 *   ExecutionId: "STRING_VALUE", // required
 *   Token: "STRING_VALUE", // required
 *   Status: "SUCCESS" || "FAILURE", // required
 * };
 * const command = new SendWorkflowStepStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendWorkflowStepStateCommandInput - {@link SendWorkflowStepStateCommandInput}
 * @returns {@link SendWorkflowStepStateCommandOutput}
 * @see {@link SendWorkflowStepStateCommandInput} for command's `input` shape.
 * @see {@link SendWorkflowStepStateCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 */
export class SendWorkflowStepStateCommand extends $Command<
  SendWorkflowStepStateCommandInput,
  SendWorkflowStepStateCommandOutput,
  TransferClientResolvedConfig
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
  constructor(readonly input: SendWorkflowStepStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendWorkflowStepStateCommandInput, SendWorkflowStepStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendWorkflowStepStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "SendWorkflowStepStateCommand";
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
  private serialize(input: SendWorkflowStepStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendWorkflowStepStateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendWorkflowStepStateCommandOutput> {
    return de_SendWorkflowStepStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
