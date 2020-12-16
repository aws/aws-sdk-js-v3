import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { EnableMFADeviceRequest } from "../models/models_0";
import {
  deserializeAws_queryEnableMFADeviceCommand,
  serializeAws_queryEnableMFADeviceCommand,
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

export type EnableMFADeviceCommandInput = EnableMFADeviceRequest;
export type EnableMFADeviceCommandOutput = __MetadataBearer;

/**
 * <p>Enables the specified MFA device and associates it with the specified IAM user. When
 *          enabled, the MFA device is required for every subsequent login by the IAM user associated
 *          with the device.</p>
 */
export class EnableMFADeviceCommand extends $Command<
  EnableMFADeviceCommandInput,
  EnableMFADeviceCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableMFADeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableMFADeviceCommandInput, EnableMFADeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "EnableMFADeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableMFADeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableMFADeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryEnableMFADeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableMFADeviceCommandOutput> {
    return deserializeAws_queryEnableMFADeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
