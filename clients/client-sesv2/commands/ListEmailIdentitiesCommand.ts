import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { ListEmailIdentitiesRequest, ListEmailIdentitiesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListEmailIdentitiesCommand,
  serializeAws_restJson1ListEmailIdentitiesCommand,
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

export type ListEmailIdentitiesCommandInput = ListEmailIdentitiesRequest;
export type ListEmailIdentitiesCommandOutput = ListEmailIdentitiesResponse & __MetadataBearer;

/**
 * <p>Returns a list of all of the email identities that are associated with your AWS
 *             account. An identity can be either an email address or a domain. This operation returns
 *             identities that are verified as well as those that aren't. This operation returns
 *             identities that are associated with Amazon SES and Amazon Pinpoint.</p>
 */
export class ListEmailIdentitiesCommand extends $Command<
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEmailIdentitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEmailIdentitiesCommandInput, ListEmailIdentitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "ListEmailIdentitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEmailIdentitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEmailIdentitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEmailIdentitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEmailIdentitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEmailIdentitiesCommandOutput> {
    return deserializeAws_restJson1ListEmailIdentitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
