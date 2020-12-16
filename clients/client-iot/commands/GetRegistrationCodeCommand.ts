import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetRegistrationCodeRequest, GetRegistrationCodeResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetRegistrationCodeCommand,
  serializeAws_restJson1GetRegistrationCodeCommand,
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

export type GetRegistrationCodeCommandInput = GetRegistrationCodeRequest;
export type GetRegistrationCodeCommandOutput = GetRegistrationCodeResponse & __MetadataBearer;

/**
 * <p>Gets a registration code used to register a CA certificate with AWS IoT.</p>
 */
export class GetRegistrationCodeCommand extends $Command<
  GetRegistrationCodeCommandInput,
  GetRegistrationCodeCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRegistrationCodeCommandInput) {
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
  ): Handler<GetRegistrationCodeCommandInput, GetRegistrationCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetRegistrationCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRegistrationCodeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRegistrationCodeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRegistrationCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRegistrationCodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRegistrationCodeCommandOutput> {
    return deserializeAws_restJson1GetRegistrationCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
