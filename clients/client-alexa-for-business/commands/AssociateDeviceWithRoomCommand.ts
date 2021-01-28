import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateDeviceWithRoomRequest, AssociateDeviceWithRoomResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateDeviceWithRoomCommand,
  serializeAws_json1_1AssociateDeviceWithRoomCommand,
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

export type AssociateDeviceWithRoomCommandInput = AssociateDeviceWithRoomRequest;
export type AssociateDeviceWithRoomCommandOutput = AssociateDeviceWithRoomResponse & __MetadataBearer;

/**
 * <p>Associates a device with a given room. This applies all the settings from the room
 *          profile to the device, and all the skills in any skill groups added to that room. This
 *          operation requires the device to be online, or else a manual sync is required. </p>
 */
export class AssociateDeviceWithRoomCommand extends $Command<
  AssociateDeviceWithRoomCommandInput,
  AssociateDeviceWithRoomCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateDeviceWithRoomCommandInput) {
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
  ): Handler<AssociateDeviceWithRoomCommandInput, AssociateDeviceWithRoomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "AssociateDeviceWithRoomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDeviceWithRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateDeviceWithRoomResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateDeviceWithRoomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateDeviceWithRoomCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateDeviceWithRoomCommandOutput> {
    return deserializeAws_json1_1AssociateDeviceWithRoomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
