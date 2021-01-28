import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ForgetSmartHomeAppliancesRequest, ForgetSmartHomeAppliancesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ForgetSmartHomeAppliancesCommand,
  serializeAws_json1_1ForgetSmartHomeAppliancesCommand,
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

export type ForgetSmartHomeAppliancesCommandInput = ForgetSmartHomeAppliancesRequest;
export type ForgetSmartHomeAppliancesCommandOutput = ForgetSmartHomeAppliancesResponse & __MetadataBearer;

/**
 * <p>Forgets smart home appliances associated to a room.</p>
 */
export class ForgetSmartHomeAppliancesCommand extends $Command<
  ForgetSmartHomeAppliancesCommandInput,
  ForgetSmartHomeAppliancesCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ForgetSmartHomeAppliancesCommandInput) {
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
  ): Handler<ForgetSmartHomeAppliancesCommandInput, ForgetSmartHomeAppliancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ForgetSmartHomeAppliancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ForgetSmartHomeAppliancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ForgetSmartHomeAppliancesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ForgetSmartHomeAppliancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ForgetSmartHomeAppliancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ForgetSmartHomeAppliancesCommandOutput> {
    return deserializeAws_json1_1ForgetSmartHomeAppliancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
