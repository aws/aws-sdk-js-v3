import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSmartHomeAppliancesRequest, ListSmartHomeAppliancesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListSmartHomeAppliancesCommand,
  serializeAws_json1_1ListSmartHomeAppliancesCommand,
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

export type ListSmartHomeAppliancesCommandInput = ListSmartHomeAppliancesRequest;
export type ListSmartHomeAppliancesCommandOutput = ListSmartHomeAppliancesResponse & __MetadataBearer;

/**
 * <p>Lists all of the smart home appliances associated with a room.</p>
 */
export class ListSmartHomeAppliancesCommand extends $Command<
  ListSmartHomeAppliancesCommandInput,
  ListSmartHomeAppliancesCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSmartHomeAppliancesCommandInput) {
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
  ): Handler<ListSmartHomeAppliancesCommandInput, ListSmartHomeAppliancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListSmartHomeAppliancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSmartHomeAppliancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSmartHomeAppliancesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSmartHomeAppliancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSmartHomeAppliancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSmartHomeAppliancesCommandOutput> {
    return deserializeAws_json1_1ListSmartHomeAppliancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
