import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DeleteIntegrationAssociationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteIntegrationAssociationCommand,
  serializeAws_restJson1DeleteIntegrationAssociationCommand,
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

export interface DeleteIntegrationAssociationCommandInput extends DeleteIntegrationAssociationRequest {}
export interface DeleteIntegrationAssociationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an AppIntegration association from an Amazon Connect instance. The association must not have
 *    any use cases associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteIntegrationAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteIntegrationAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DeleteIntegrationAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntegrationAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationAssociationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteIntegrationAssociationCommand extends $Command<
  DeleteIntegrationAssociationCommandInput,
  DeleteIntegrationAssociationCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteIntegrationAssociationCommandInput) {
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
  ): Handler<DeleteIntegrationAssociationCommandInput, DeleteIntegrationAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DeleteIntegrationAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteIntegrationAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteIntegrationAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteIntegrationAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteIntegrationAssociationCommandOutput> {
    return deserializeAws_restJson1DeleteIntegrationAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
