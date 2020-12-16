import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateVPCEConfigurationRequest, UpdateVPCEConfigurationResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateVPCEConfigurationCommand,
  serializeAws_json1_1UpdateVPCEConfigurationCommand,
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

export type UpdateVPCEConfigurationCommandInput = UpdateVPCEConfigurationRequest;
export type UpdateVPCEConfigurationCommandOutput = UpdateVPCEConfigurationResult & __MetadataBearer;

/**
 * <p>Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>
 */
export class UpdateVPCEConfigurationCommand extends $Command<
  UpdateVPCEConfigurationCommandInput,
  UpdateVPCEConfigurationCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateVPCEConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVPCEConfigurationCommandInput, UpdateVPCEConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "UpdateVPCEConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVPCEConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVPCEConfigurationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVPCEConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateVPCEConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVPCEConfigurationCommandOutput> {
    return deserializeAws_json1_1UpdateVPCEConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
