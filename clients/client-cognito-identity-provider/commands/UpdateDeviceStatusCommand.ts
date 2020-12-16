import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { UpdateDeviceStatusRequest, UpdateDeviceStatusResponse } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateDeviceStatusCommand,
  serializeAws_json1_1UpdateDeviceStatusCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

export type UpdateDeviceStatusCommandInput = UpdateDeviceStatusRequest;
export type UpdateDeviceStatusCommandOutput = UpdateDeviceStatusResponse & __MetadataBearer;

/**
 * <p>Updates the device status.</p>
 */
export class UpdateDeviceStatusCommand extends $Command<
  UpdateDeviceStatusCommandInput,
  UpdateDeviceStatusCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDeviceStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDeviceStatusCommandInput, UpdateDeviceStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "UpdateDeviceStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDeviceStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDeviceStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDeviceStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDeviceStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDeviceStatusCommandOutput> {
    return deserializeAws_json1_1UpdateDeviceStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
