import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import { FinalizeDeviceClaimRequest, FinalizeDeviceClaimResponse } from "../models/models_0";
import {
  deserializeAws_restJson1FinalizeDeviceClaimCommand,
  serializeAws_restJson1FinalizeDeviceClaimCommand,
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

export type FinalizeDeviceClaimCommandInput = FinalizeDeviceClaimRequest;
export type FinalizeDeviceClaimCommandOutput = FinalizeDeviceClaimResponse & __MetadataBearer;

/**
 * <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
 *  and finalizing the claim. For a device of type button, a device event can
 *  be published by simply clicking the device.</p>
 *  </note>
 */
export class FinalizeDeviceClaimCommand extends $Command<
  FinalizeDeviceClaimCommandInput,
  FinalizeDeviceClaimCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FinalizeDeviceClaimCommandInput) {
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
  ): Handler<FinalizeDeviceClaimCommandInput, FinalizeDeviceClaimCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "FinalizeDeviceClaimCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: FinalizeDeviceClaimRequest.filterSensitiveLog,
      outputFilterSensitiveLog: FinalizeDeviceClaimResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FinalizeDeviceClaimCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1FinalizeDeviceClaimCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FinalizeDeviceClaimCommandOutput> {
    return deserializeAws_restJson1FinalizeDeviceClaimCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
