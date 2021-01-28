import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { UpdateJobShipmentStateRequest, UpdateJobShipmentStateResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateJobShipmentStateCommand,
  serializeAws_json1_1UpdateJobShipmentStateCommand,
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

export type UpdateJobShipmentStateCommandInput = UpdateJobShipmentStateRequest;
export type UpdateJobShipmentStateCommandOutput = UpdateJobShipmentStateResult & __MetadataBearer;

/**
 * <p>Updates the state when a the shipment states changes to a different state.</p>
 */
export class UpdateJobShipmentStateCommand extends $Command<
  UpdateJobShipmentStateCommandInput,
  UpdateJobShipmentStateCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateJobShipmentStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJobShipmentStateCommandInput, UpdateJobShipmentStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "UpdateJobShipmentStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateJobShipmentStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateJobShipmentStateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateJobShipmentStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateJobShipmentStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateJobShipmentStateCommandOutput> {
    return deserializeAws_json1_1UpdateJobShipmentStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
