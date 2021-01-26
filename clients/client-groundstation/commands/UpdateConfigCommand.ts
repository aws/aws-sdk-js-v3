import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ConfigIdResponse, UpdateConfigRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateConfigCommand,
  serializeAws_restJson1UpdateConfigCommand,
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

export type UpdateConfigCommandInput = UpdateConfigRequest;
export type UpdateConfigCommandOutput = ConfigIdResponse & __MetadataBearer;

/**
 * <p>Updates the <code>Config</code> used when scheduling contacts.</p>
 *          <p>Updating a <code>Config</code> will not update the execution parameters
 *          for existing future contacts scheduled with this <code>Config</code>.</p>
 */
export class UpdateConfigCommand extends $Command<
  UpdateConfigCommandInput,
  UpdateConfigCommandOutput,
  GroundStationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConfigCommandInput, UpdateConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "UpdateConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigIdResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConfigCommandOutput> {
    return deserializeAws_restJson1UpdateConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
