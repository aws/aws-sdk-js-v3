import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { CreateDomainRequest, CreateDomainResult } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDomainCommand,
  serializeAws_restJson1CreateDomainCommand,
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

export type CreateDomainCommandInput = CreateDomainRequest;
export type CreateDomainCommandOutput = CreateDomainResult & __MetadataBearer;

/**
 * <p>
 *       Creates a domain. CodeArtifact <i>domains</i> make it easier to manage multiple repositories across an
 *         organization. You can use a domain to apply permissions across many
 *         repositories owned by different AWS accounts. An asset is stored only once
 *         in a domain, even if it's in multiple repositories.
 *     </p>
 *
 *          <p>Although you can have multiple domains, we recommend a single production domain that contains all
 *         published artifacts so that your development teams can find and share packages. You can use a second
 *         pre-production domain to test changes to the production domain configuration.
 *       </p>
 */
export class CreateDomainCommand extends $Command<
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDomainCommandInput, CreateDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "CreateDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDomainResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDomainCommandOutput> {
    return deserializeAws_restJson1CreateDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
