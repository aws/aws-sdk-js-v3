import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { ResendContactReachabilityEmailRequest, ResendContactReachabilityEmailResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ResendContactReachabilityEmailCommand,
  serializeAws_json1_1ResendContactReachabilityEmailCommand,
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

export type ResendContactReachabilityEmailCommandInput = ResendContactReachabilityEmailRequest;
export type ResendContactReachabilityEmailCommandOutput = ResendContactReachabilityEmailResponse & __MetadataBearer;

/**
 * <p>For operations that require confirmation that the email address for the registrant contact is valid,
 * 			such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.</p>
 */
export class ResendContactReachabilityEmailCommand extends $Command<
  ResendContactReachabilityEmailCommandInput,
  ResendContactReachabilityEmailCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResendContactReachabilityEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResendContactReachabilityEmailCommandInput, ResendContactReachabilityEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "ResendContactReachabilityEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResendContactReachabilityEmailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResendContactReachabilityEmailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ResendContactReachabilityEmailCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ResendContactReachabilityEmailCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResendContactReachabilityEmailCommandOutput> {
    return deserializeAws_json1_1ResendContactReachabilityEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
