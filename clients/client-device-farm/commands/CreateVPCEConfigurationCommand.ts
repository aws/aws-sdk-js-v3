import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateVPCEConfigurationRequest, CreateVPCEConfigurationResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateVPCEConfigurationCommand,
  serializeAws_json1_1CreateVPCEConfigurationCommand,
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

export type CreateVPCEConfigurationCommandInput = CreateVPCEConfigurationRequest;
export type CreateVPCEConfigurationCommandOutput = CreateVPCEConfigurationResult & __MetadataBearer;

/**
 * <p>Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud
 *             (VPC) endpoint.</p>
 */
export class CreateVPCEConfigurationCommand extends $Command<
  CreateVPCEConfigurationCommandInput,
  CreateVPCEConfigurationCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVPCEConfigurationCommandInput) {
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
  ): Handler<CreateVPCEConfigurationCommandInput, CreateVPCEConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "CreateVPCEConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVPCEConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVPCEConfigurationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVPCEConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateVPCEConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVPCEConfigurationCommandOutput> {
    return deserializeAws_json1_1CreateVPCEConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
