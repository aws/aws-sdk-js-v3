import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { UpdateDomainAssociationRequest, UpdateDomainAssociationResult } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDomainAssociationCommand,
  serializeAws_restJson1UpdateDomainAssociationCommand,
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

export type UpdateDomainAssociationCommandInput = UpdateDomainAssociationRequest;
export type UpdateDomainAssociationCommandOutput = UpdateDomainAssociationResult & __MetadataBearer;

/**
 * <p> Creates a new domain association for an Amplify app.</p>
 */
export class UpdateDomainAssociationCommand extends $Command<
  UpdateDomainAssociationCommandInput,
  UpdateDomainAssociationCommandOutput,
  AmplifyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDomainAssociationCommandInput) {
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
  ): Handler<UpdateDomainAssociationCommandInput, UpdateDomainAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "UpdateDomainAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDomainAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDomainAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDomainAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDomainAssociationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDomainAssociationCommandOutput> {
    return deserializeAws_restJson1UpdateDomainAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
