import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { DeleteDomainAssociationRequest, DeleteDomainAssociationResult } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDomainAssociationCommand,
  serializeAws_restJson1DeleteDomainAssociationCommand,
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

export interface DeleteDomainAssociationCommandInput extends DeleteDomainAssociationRequest {}
export interface DeleteDomainAssociationCommandOutput extends DeleteDomainAssociationResult, __MetadataBearer {}

/**
 * <p> Deletes a domain association for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteDomainAssociationCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteDomainAssociationCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new DeleteDomainAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteDomainAssociationCommand extends $Command<
  DeleteDomainAssociationCommandInput,
  DeleteDomainAssociationCommandOutput,
  AmplifyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDomainAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDomainAssociationCommandInput, DeleteDomainAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "DeleteDomainAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDomainAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDomainAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDomainAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDomainAssociationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDomainAssociationCommandOutput> {
    return deserializeAws_restJson1DeleteDomainAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
