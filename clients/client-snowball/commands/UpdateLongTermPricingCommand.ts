import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { UpdateLongTermPricingRequest, UpdateLongTermPricingResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateLongTermPricingCommand,
  serializeAws_json1_1UpdateLongTermPricingCommand,
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

export interface UpdateLongTermPricingCommandInput extends UpdateLongTermPricingRequest {}
export interface UpdateLongTermPricingCommandOutput extends UpdateLongTermPricingResult, __MetadataBearer {}

/**
 * <p>Updates the long term pricing type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new UpdateLongTermPricingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link UpdateLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateLongTermPricingCommand extends $Command<
  UpdateLongTermPricingCommandInput,
  UpdateLongTermPricingCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateLongTermPricingCommandInput) {
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
  ): Handler<UpdateLongTermPricingCommandInput, UpdateLongTermPricingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "UpdateLongTermPricingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLongTermPricingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateLongTermPricingResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLongTermPricingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateLongTermPricingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLongTermPricingCommandOutput> {
    return deserializeAws_json1_1UpdateLongTermPricingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
