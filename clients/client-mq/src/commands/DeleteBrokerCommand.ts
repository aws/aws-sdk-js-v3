import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { DeleteBrokerRequest, DeleteBrokerResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBrokerCommand,
  serializeAws_restJson1DeleteBrokerCommand,
} from "../protocols/Aws_restJson1";
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

export interface DeleteBrokerCommandInput extends DeleteBrokerRequest {}
export interface DeleteBrokerCommandOutput extends DeleteBrokerResponse, __MetadataBearer {}

/**
 * <p>Deletes a broker. Note: This API is asynchronous.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DeleteBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DeleteBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DeleteBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBrokerCommandInput} for command's `input` shape.
 * @see {@link DeleteBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteBrokerCommand extends $Command<
  DeleteBrokerCommandInput,
  DeleteBrokerCommandOutput,
  MqClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBrokerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBrokerCommandInput, DeleteBrokerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "DeleteBrokerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBrokerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBrokerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBrokerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBrokerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBrokerCommandOutput> {
    return deserializeAws_restJson1DeleteBrokerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
