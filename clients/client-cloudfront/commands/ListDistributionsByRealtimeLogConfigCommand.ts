import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  ListDistributionsByRealtimeLogConfigRequest,
  ListDistributionsByRealtimeLogConfigResult,
} from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand,
  serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand,
} from "../protocols/Aws_restXml";
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

export type ListDistributionsByRealtimeLogConfigCommandInput = ListDistributionsByRealtimeLogConfigRequest;
export type ListDistributionsByRealtimeLogConfigCommandOutput = ListDistributionsByRealtimeLogConfigResult &
  __MetadataBearer;

/**
 * <p>Gets a list of distributions that have a cache behavior that’s associated with the specified
 * 			real-time log configuration.</p>
 * 		       <p>You can specify the real-time log configuration by its name or its Amazon Resource Name
 * 			(ARN). You must provide at least one. If you provide both, CloudFront uses the name to
 * 			identify the real-time log configuration to list distributions for.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request. </p>
 */
export class ListDistributionsByRealtimeLogConfigCommand extends $Command<
  ListDistributionsByRealtimeLogConfigCommandInput,
  ListDistributionsByRealtimeLogConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDistributionsByRealtimeLogConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDistributionsByRealtimeLogConfigCommandInput, ListDistributionsByRealtimeLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListDistributionsByRealtimeLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDistributionsByRealtimeLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsByRealtimeLogConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDistributionsByRealtimeLogConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDistributionsByRealtimeLogConfigCommandOutput> {
    return deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
