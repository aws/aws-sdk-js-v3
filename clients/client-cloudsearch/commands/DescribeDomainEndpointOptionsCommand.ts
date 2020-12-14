import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeDomainEndpointOptionsRequest, DescribeDomainEndpointOptionsResponse } from "../models/models_0";
import {
  deserializeAws_queryDescribeDomainEndpointOptionsCommand,
  serializeAws_queryDescribeDomainEndpointOptionsCommand,
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

export type DescribeDomainEndpointOptionsCommandInput = DescribeDomainEndpointOptionsRequest;
export type DescribeDomainEndpointOptionsCommandOutput = DescribeDomainEndpointOptionsResponse & __MetadataBearer;

/**
 * <p>Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class DescribeDomainEndpointOptionsCommand extends $Command<
  DescribeDomainEndpointOptionsCommandInput,
  DescribeDomainEndpointOptionsCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDomainEndpointOptionsCommandInput) {
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
  ): Handler<DescribeDomainEndpointOptionsCommandInput, DescribeDomainEndpointOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeDomainEndpointOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDomainEndpointOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDomainEndpointOptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDomainEndpointOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDomainEndpointOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDomainEndpointOptionsCommandOutput> {
    return deserializeAws_queryDescribeDomainEndpointOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
