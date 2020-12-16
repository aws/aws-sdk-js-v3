import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import {
  AssociateWebsiteAuthorizationProviderRequest,
  AssociateWebsiteAuthorizationProviderResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand,
  serializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand,
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

export type AssociateWebsiteAuthorizationProviderCommandInput = AssociateWebsiteAuthorizationProviderRequest;
export type AssociateWebsiteAuthorizationProviderCommandOutput = AssociateWebsiteAuthorizationProviderResponse &
  __MetadataBearer;

/**
 * <p>Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.</p>
 */
export class AssociateWebsiteAuthorizationProviderCommand extends $Command<
  AssociateWebsiteAuthorizationProviderCommandInput,
  AssociateWebsiteAuthorizationProviderCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateWebsiteAuthorizationProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateWebsiteAuthorizationProviderCommandInput, AssociateWebsiteAuthorizationProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "AssociateWebsiteAuthorizationProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateWebsiteAuthorizationProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateWebsiteAuthorizationProviderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateWebsiteAuthorizationProviderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateWebsiteAuthorizationProviderCommandOutput> {
    return deserializeAws_restJson1AssociateWebsiteAuthorizationProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
