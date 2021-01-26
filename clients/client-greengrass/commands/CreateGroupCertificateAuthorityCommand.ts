import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateGroupCertificateAuthorityRequest, CreateGroupCertificateAuthorityResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateGroupCertificateAuthorityCommand,
  serializeAws_restJson1CreateGroupCertificateAuthorityCommand,
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

export type CreateGroupCertificateAuthorityCommandInput = CreateGroupCertificateAuthorityRequest;
export type CreateGroupCertificateAuthorityCommandOutput = CreateGroupCertificateAuthorityResponse & __MetadataBearer;

/**
 * Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
 */
export class CreateGroupCertificateAuthorityCommand extends $Command<
  CreateGroupCertificateAuthorityCommandInput,
  CreateGroupCertificateAuthorityCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGroupCertificateAuthorityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGroupCertificateAuthorityCommandInput, CreateGroupCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateGroupCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGroupCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGroupCertificateAuthorityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateGroupCertificateAuthorityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateGroupCertificateAuthorityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateGroupCertificateAuthorityCommandOutput> {
    return deserializeAws_restJson1CreateGroupCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
