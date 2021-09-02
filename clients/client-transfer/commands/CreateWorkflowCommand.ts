import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { CreateWorkflowRequest, CreateWorkflowResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateWorkflowCommand,
  serializeAws_json1_1CreateWorkflowCommand,
} from "../protocols/Aws_json1_1";
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

export interface CreateWorkflowCommandInput extends CreateWorkflowRequest {}
export interface CreateWorkflowCommandOutput extends CreateWorkflowResponse, __MetadataBearer {}

/**
 * <p>
 *       Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes.
 *       After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateWorkflowCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateWorkflowCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new CreateWorkflowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkflowCommandInput} for command's `input` shape.
 * @see {@link CreateWorkflowCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateWorkflowCommand extends $Command<
  CreateWorkflowCommandInput,
  CreateWorkflowCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWorkflowCommandInput) {
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
  ): Handler<CreateWorkflowCommandInput, CreateWorkflowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "CreateWorkflowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkflowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkflowResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorkflowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWorkflowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkflowCommandOutput> {
    return deserializeAws_json1_1CreateWorkflowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
