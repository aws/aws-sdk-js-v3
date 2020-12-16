import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { UpdateAvailabilityOptionsRequest, UpdateAvailabilityOptionsResponse } from "../models/models_0";
import {
  deserializeAws_queryUpdateAvailabilityOptionsCommand,
  serializeAws_queryUpdateAvailabilityOptionsCommand,
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

export type UpdateAvailabilityOptionsCommandInput = UpdateAvailabilityOptionsRequest;
export type UpdateAvailabilityOptionsCommandOutput = UpdateAvailabilityOptionsResponse & __MetadataBearer;

/**
 * <p>Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class UpdateAvailabilityOptionsCommand extends $Command<
  UpdateAvailabilityOptionsCommandInput,
  UpdateAvailabilityOptionsCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAvailabilityOptionsCommandInput) {
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
  ): Handler<UpdateAvailabilityOptionsCommandInput, UpdateAvailabilityOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "UpdateAvailabilityOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAvailabilityOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAvailabilityOptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAvailabilityOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateAvailabilityOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAvailabilityOptionsCommandOutput> {
    return deserializeAws_queryUpdateAvailabilityOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
