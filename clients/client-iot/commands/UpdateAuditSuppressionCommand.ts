import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateAuditSuppressionRequest, UpdateAuditSuppressionResponse } from "../models/models_2";
import {
  deserializeAws_restJson1UpdateAuditSuppressionCommand,
  serializeAws_restJson1UpdateAuditSuppressionCommand,
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

export type UpdateAuditSuppressionCommandInput = UpdateAuditSuppressionRequest;
export type UpdateAuditSuppressionCommandOutput = UpdateAuditSuppressionResponse & __MetadataBearer;

/**
 * <p>
 *       Updates a Device Defender audit suppression.
 *     </p>
 */
export class UpdateAuditSuppressionCommand extends $Command<
  UpdateAuditSuppressionCommandInput,
  UpdateAuditSuppressionCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAuditSuppressionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAuditSuppressionCommandInput, UpdateAuditSuppressionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateAuditSuppressionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAuditSuppressionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAuditSuppressionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAuditSuppressionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAuditSuppressionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAuditSuppressionCommandOutput> {
    return deserializeAws_restJson1UpdateAuditSuppressionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
