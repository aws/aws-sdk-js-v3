import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateDomainEntryRequest, CreateDomainEntryResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDomainEntryCommand,
  serializeAws_json1_1CreateDomainEntryCommand,
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

export type CreateDomainEntryCommandInput = CreateDomainEntryRequest;
export type CreateDomainEntryCommandOutput = CreateDomainEntryResult & __MetadataBearer;

/**
 * <p>Creates one of the following domain name system (DNS) records in a domain DNS zone:
 *       Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority
 *       (SOA), service locator (SRV), or text (TXT).</p>
 *
 *
 *
 *          <p>The <code>create domain entry</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>domain name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class CreateDomainEntryCommand extends $Command<
  CreateDomainEntryCommandInput,
  CreateDomainEntryCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDomainEntryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDomainEntryCommandInput, CreateDomainEntryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateDomainEntryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDomainEntryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDomainEntryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDomainEntryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDomainEntryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDomainEntryCommandOutput> {
    return deserializeAws_json1_1CreateDomainEntryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
