import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  AssociateDeviceWithNetworkProfileRequest,
  AssociateDeviceWithNetworkProfileResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand,
  serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand,
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

export type AssociateDeviceWithNetworkProfileCommandInput = AssociateDeviceWithNetworkProfileRequest;
export type AssociateDeviceWithNetworkProfileCommandOutput = AssociateDeviceWithNetworkProfileResponse &
  __MetadataBearer;

/**
 * <p>Associates a device with the specified network profile.</p>
 */
export class AssociateDeviceWithNetworkProfileCommand extends $Command<
  AssociateDeviceWithNetworkProfileCommandInput,
  AssociateDeviceWithNetworkProfileCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateDeviceWithNetworkProfileCommandInput) {
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
  ): Handler<AssociateDeviceWithNetworkProfileCommandInput, AssociateDeviceWithNetworkProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "AssociateDeviceWithNetworkProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDeviceWithNetworkProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateDeviceWithNetworkProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateDeviceWithNetworkProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateDeviceWithNetworkProfileCommandOutput> {
    return deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
