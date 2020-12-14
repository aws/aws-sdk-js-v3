import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { StartSmartHomeApplianceDiscoveryRequest, StartSmartHomeApplianceDiscoveryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand,
  serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand,
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

export type StartSmartHomeApplianceDiscoveryCommandInput = StartSmartHomeApplianceDiscoveryRequest;
export type StartSmartHomeApplianceDiscoveryCommandOutput = StartSmartHomeApplianceDiscoveryResponse & __MetadataBearer;

/**
 * <p>Initiates the discovery of any smart home appliances associated with the
 *          room.</p>
 */
export class StartSmartHomeApplianceDiscoveryCommand extends $Command<
  StartSmartHomeApplianceDiscoveryCommandInput,
  StartSmartHomeApplianceDiscoveryCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartSmartHomeApplianceDiscoveryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSmartHomeApplianceDiscoveryCommandInput, StartSmartHomeApplianceDiscoveryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "StartSmartHomeApplianceDiscoveryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSmartHomeApplianceDiscoveryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartSmartHomeApplianceDiscoveryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartSmartHomeApplianceDiscoveryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartSmartHomeApplianceDiscoveryCommandOutput> {
    return deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
