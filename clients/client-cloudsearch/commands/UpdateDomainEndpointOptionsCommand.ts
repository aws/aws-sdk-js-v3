import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { UpdateDomainEndpointOptionsRequest, UpdateDomainEndpointOptionsResponse } from "../models/models_0";
import {
  deserializeAws_queryUpdateDomainEndpointOptionsCommand,
  serializeAws_queryUpdateDomainEndpointOptionsCommand,
} from "../protocols/Aws_query";
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

export type UpdateDomainEndpointOptionsCommandInput = UpdateDomainEndpointOptionsRequest;
export type UpdateDomainEndpointOptionsCommandOutput = UpdateDomainEndpointOptionsResponse & __MetadataBearer;

/**
 * <p>Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class UpdateDomainEndpointOptionsCommand extends $Command<
  UpdateDomainEndpointOptionsCommandInput,
  UpdateDomainEndpointOptionsCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDomainEndpointOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDomainEndpointOptionsCommandInput, UpdateDomainEndpointOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "UpdateDomainEndpointOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDomainEndpointOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDomainEndpointOptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDomainEndpointOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateDomainEndpointOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDomainEndpointOptionsCommandOutput> {
    return deserializeAws_queryUpdateDomainEndpointOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
