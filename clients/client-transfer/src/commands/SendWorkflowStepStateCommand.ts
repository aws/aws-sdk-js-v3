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
  SendWorkflowStepStateRequest,
  SendWorkflowStepStateRequestFilterSensitiveLog,
  SendWorkflowStepStateResponse,
  SendWorkflowStepStateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SendWorkflowStepStateCommand,
  serializeAws_json1_1SendWorkflowStepStateCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

export interface SendWorkflowStepStateCommandInput extends SendWorkflowStepStateRequest {}
export interface SendWorkflowStepStateCommandOutput extends SendWorkflowStepStateResponse, __MetadataBearer {}

/**
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
 * const command = new SendWorkflowStepStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendWorkflowStepStateCommandInput} for command's `input` shape.
 * @see {@link SendWorkflowStepStateCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
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
      inputFilterSensitiveLog: SendWorkflowStepStateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendWorkflowStepStateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendWorkflowStepStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SendWorkflowStepStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendWorkflowStepStateCommandOutput> {
    return deserializeAws_json1_1SendWorkflowStepStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
