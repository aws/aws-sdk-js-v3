import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { UpdateSubscriberRequest, UpdateSubscriberResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateSubscriberCommand,
  serializeAws_json1_1UpdateSubscriberCommand,
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

export interface UpdateSubscriberCommandInput extends UpdateSubscriberRequest {}
export interface UpdateSubscriberCommandOutput extends UpdateSubscriberResponse, __MetadataBearer {}

/**
 * <p>Updates a subscriber.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, UpdateSubscriberCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, UpdateSubscriberCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new UpdateSubscriberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSubscriberCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriberCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateSubscriberCommand extends $Command<
  UpdateSubscriberCommandInput,
  UpdateSubscriberCommandOutput,
  BudgetsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSubscriberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "UpdateSubscriberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSubscriberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSubscriberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSubscriberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSubscriberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSubscriberCommandOutput> {
    return deserializeAws_json1_1UpdateSubscriberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
