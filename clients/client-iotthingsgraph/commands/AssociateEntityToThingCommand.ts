import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { AssociateEntityToThingRequest, AssociateEntityToThingResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateEntityToThingCommand,
  serializeAws_json1_1AssociateEntityToThingCommand,
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

export type AssociateEntityToThingCommandInput = AssociateEntityToThingRequest;
export type AssociateEntityToThingCommandOutput = AssociateEntityToThingResponse & __MetadataBearer;

/**
 * <p>Associates a device with a concrete thing that is in the user's registry.</p>
 *          <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>
 */
export class AssociateEntityToThingCommand extends $Command<
  AssociateEntityToThingCommandInput,
  AssociateEntityToThingCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateEntityToThingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateEntityToThingCommandInput, AssociateEntityToThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "AssociateEntityToThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateEntityToThingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateEntityToThingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateEntityToThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateEntityToThingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateEntityToThingCommandOutput> {
    return deserializeAws_json1_1AssociateEntityToThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
