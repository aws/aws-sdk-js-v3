import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DissociateEntityFromThingRequest, DissociateEntityFromThingResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DissociateEntityFromThingCommand,
  serializeAws_json1_1DissociateEntityFromThingCommand,
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

export type DissociateEntityFromThingCommandInput = DissociateEntityFromThingRequest;
export type DissociateEntityFromThingCommandOutput = DissociateEntityFromThingResponse & __MetadataBearer;

/**
 * <p>Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only
 *          one entity of a particular type can be associated with a thing.</p>
 */
export class DissociateEntityFromThingCommand extends $Command<
  DissociateEntityFromThingCommandInput,
  DissociateEntityFromThingCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DissociateEntityFromThingCommandInput) {
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
  ): Handler<DissociateEntityFromThingCommandInput, DissociateEntityFromThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "DissociateEntityFromThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DissociateEntityFromThingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DissociateEntityFromThingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DissociateEntityFromThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DissociateEntityFromThingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DissociateEntityFromThingCommandOutput> {
    return deserializeAws_json1_1DissociateEntityFromThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
