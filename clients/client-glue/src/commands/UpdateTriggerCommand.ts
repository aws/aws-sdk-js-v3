import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateTriggerRequest, UpdateTriggerResponse } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateTriggerCommand,
  serializeAws_json1_1UpdateTriggerCommand,
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

export interface UpdateTriggerCommandInput extends UpdateTriggerRequest {}
export interface UpdateTriggerCommandOutput extends UpdateTriggerResponse, __MetadataBearer {}

/**
 * <p>Updates a trigger definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateTriggerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTriggerCommandInput} for command's `input` shape.
 * @see {@link UpdateTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateTriggerCommand extends $Command<
  UpdateTriggerCommandInput,
  UpdateTriggerCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTriggerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTriggerCommandInput, UpdateTriggerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateTriggerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTriggerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTriggerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTriggerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateTriggerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTriggerCommandOutput> {
    return deserializeAws_json1_1UpdateTriggerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
