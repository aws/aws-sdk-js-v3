import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeAvailabilityOptionsRequest, DescribeAvailabilityOptionsResponse } from "../models/models_0";
import {
  deserializeAws_queryDescribeAvailabilityOptionsCommand,
  serializeAws_queryDescribeAvailabilityOptionsCommand,
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

export type DescribeAvailabilityOptionsCommandInput = DescribeAvailabilityOptionsRequest;
export type DescribeAvailabilityOptionsCommandOutput = DescribeAvailabilityOptionsResponse & __MetadataBearer;

/**
 * <p>Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class DescribeAvailabilityOptionsCommand extends $Command<
  DescribeAvailabilityOptionsCommandInput,
  DescribeAvailabilityOptionsCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAvailabilityOptionsCommandInput) {
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
  ): Handler<DescribeAvailabilityOptionsCommandInput, DescribeAvailabilityOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeAvailabilityOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAvailabilityOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAvailabilityOptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAvailabilityOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAvailabilityOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAvailabilityOptionsCommandOutput> {
    return deserializeAws_queryDescribeAvailabilityOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
