import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import { ClaimDevicesByClaimCodeRequest, ClaimDevicesByClaimCodeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ClaimDevicesByClaimCodeCommand,
  serializeAws_restJson1ClaimDevicesByClaimCodeCommand,
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

export type ClaimDevicesByClaimCodeCommandInput = ClaimDevicesByClaimCodeRequest;
export type ClaimDevicesByClaimCodeCommandOutput = ClaimDevicesByClaimCodeResponse & __MetadataBearer;

/**
 * <p>Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 *  received a claim code with the device(s).</p>
 */
export class ClaimDevicesByClaimCodeCommand extends $Command<
  ClaimDevicesByClaimCodeCommandInput,
  ClaimDevicesByClaimCodeCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ClaimDevicesByClaimCodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickDevicesServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ClaimDevicesByClaimCodeCommandInput, ClaimDevicesByClaimCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "ClaimDevicesByClaimCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ClaimDevicesByClaimCodeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ClaimDevicesByClaimCodeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ClaimDevicesByClaimCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ClaimDevicesByClaimCodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ClaimDevicesByClaimCodeCommandOutput> {
    return deserializeAws_restJson1ClaimDevicesByClaimCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
