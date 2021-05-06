import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DeleteWarmPoolAnswer, DeleteWarmPoolType } from "../models/models_0";
import {
  deserializeAws_queryDeleteWarmPoolCommand,
  serializeAws_queryDeleteWarmPoolCommand,
} from "../protocols/Aws_query";
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

export interface DeleteWarmPoolCommandInput extends DeleteWarmPoolType {}
export interface DeleteWarmPoolCommandOutput extends DeleteWarmPoolAnswer, __MetadataBearer {}

/**
 * <p>Deletes the warm pool for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteWarmPoolCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteWarmPoolCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DeleteWarmPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWarmPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteWarmPoolCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteWarmPoolCommand extends $Command<
  DeleteWarmPoolCommandInput,
  DeleteWarmPoolCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteWarmPoolCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWarmPoolCommandInput, DeleteWarmPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DeleteWarmPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWarmPoolType.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteWarmPoolAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWarmPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteWarmPoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWarmPoolCommandOutput> {
    return deserializeAws_queryDeleteWarmPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
