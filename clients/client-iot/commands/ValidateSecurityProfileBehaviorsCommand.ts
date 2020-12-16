import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ValidateSecurityProfileBehaviorsRequest, ValidateSecurityProfileBehaviorsResponse } from "../models/models_2";
import {
  deserializeAws_restJson1ValidateSecurityProfileBehaviorsCommand,
  serializeAws_restJson1ValidateSecurityProfileBehaviorsCommand,
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

export type ValidateSecurityProfileBehaviorsCommandInput = ValidateSecurityProfileBehaviorsRequest;
export type ValidateSecurityProfileBehaviorsCommandOutput = ValidateSecurityProfileBehaviorsResponse & __MetadataBearer;

/**
 * <p>Validates a Device Defender security profile behaviors specification.</p>
 */
export class ValidateSecurityProfileBehaviorsCommand extends $Command<
  ValidateSecurityProfileBehaviorsCommandInput,
  ValidateSecurityProfileBehaviorsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ValidateSecurityProfileBehaviorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ValidateSecurityProfileBehaviorsCommandInput, ValidateSecurityProfileBehaviorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ValidateSecurityProfileBehaviorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateSecurityProfileBehaviorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ValidateSecurityProfileBehaviorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ValidateSecurityProfileBehaviorsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ValidateSecurityProfileBehaviorsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidateSecurityProfileBehaviorsCommandOutput> {
    return deserializeAws_restJson1ValidateSecurityProfileBehaviorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
