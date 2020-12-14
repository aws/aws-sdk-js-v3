import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import {
  PutConfigurationSetReputationOptionsRequest,
  PutConfigurationSetReputationOptionsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand,
  serializeAws_restJson1PutConfigurationSetReputationOptionsCommand,
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

export type PutConfigurationSetReputationOptionsCommandInput = PutConfigurationSetReputationOptionsRequest;
export type PutConfigurationSetReputationOptionsCommandOutput = PutConfigurationSetReputationOptionsResponse &
  __MetadataBearer;

/**
 * <p>Enable or disable collection of reputation metrics for emails that you send using a
 *             particular configuration set in a specific AWS Region.</p>
 */
export class PutConfigurationSetReputationOptionsCommand extends $Command<
  PutConfigurationSetReputationOptionsCommandInput,
  PutConfigurationSetReputationOptionsCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutConfigurationSetReputationOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutConfigurationSetReputationOptionsCommandInput, PutConfigurationSetReputationOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutConfigurationSetReputationOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConfigurationSetReputationOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutConfigurationSetReputationOptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutConfigurationSetReputationOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutConfigurationSetReputationOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutConfigurationSetReputationOptionsCommandOutput> {
    return deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
