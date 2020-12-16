import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { CreateDomainAssociationRequest, CreateDomainAssociationResult } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDomainAssociationCommand,
  serializeAws_restJson1CreateDomainAssociationCommand,
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

export type CreateDomainAssociationCommandInput = CreateDomainAssociationRequest;
export type CreateDomainAssociationCommandOutput = CreateDomainAssociationResult & __MetadataBearer;

/**
 * <p> Creates a new domain association for an Amplify app. This action associates a custom
 *             domain with the Amplify app </p>
 */
export class CreateDomainAssociationCommand extends $Command<
  CreateDomainAssociationCommandInput,
  CreateDomainAssociationCommandOutput,
  AmplifyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDomainAssociationCommandInput) {
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
  ): Handler<CreateDomainAssociationCommandInput, CreateDomainAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "CreateDomainAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDomainAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDomainAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDomainAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDomainAssociationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDomainAssociationCommandOutput> {
    return deserializeAws_restJson1CreateDomainAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
