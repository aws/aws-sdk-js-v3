import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateContactFlowContentRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateContactFlowContentCommand,
  serializeAws_restJson1UpdateContactFlowContentCommand,
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

export interface UpdateContactFlowContentCommandInput extends UpdateContactFlowContentRequest {}
export interface UpdateContactFlowContentCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the specified contact flow.</p>
 *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowContentCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowContentCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateContactFlowContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContactFlowContentCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowContentCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateContactFlowContentCommand extends $Command<
  UpdateContactFlowContentCommandInput,
  UpdateContactFlowContentCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateContactFlowContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateContactFlowContentCommandInput, UpdateContactFlowContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateContactFlowContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateContactFlowContentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateContactFlowContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateContactFlowContentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateContactFlowContentCommandOutput> {
    return deserializeAws_restJson1UpdateContactFlowContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
