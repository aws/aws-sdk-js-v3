import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateTagsForDomainRequest, UpdateTagsForDomainResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateTagsForDomainCommand,
  serializeAws_json1_1UpdateTagsForDomainCommand,
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

export type UpdateTagsForDomainCommandInput = UpdateTagsForDomainRequest;
export type UpdateTagsForDomainCommandOutput = UpdateTagsForDomainResponse & __MetadataBearer;

/**
 * <p>This operation adds or updates tags for a specified domain.</p>
 * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
 */
export class UpdateTagsForDomainCommand extends $Command<
  UpdateTagsForDomainCommandInput,
  UpdateTagsForDomainCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTagsForDomainCommandInput) {
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
  ): Handler<UpdateTagsForDomainCommandInput, UpdateTagsForDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "UpdateTagsForDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTagsForDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTagsForDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTagsForDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateTagsForDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTagsForDomainCommandOutput> {
    return deserializeAws_json1_1UpdateTagsForDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
