import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { CancelInstanceRefreshAnswer, CancelInstanceRefreshType } from "../models/models_0";
import {
  deserializeAws_queryCancelInstanceRefreshCommand,
  serializeAws_queryCancelInstanceRefreshCommand,
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

export interface CancelInstanceRefreshCommandInput extends CancelInstanceRefreshType {}
export interface CancelInstanceRefreshCommandOutput extends CancelInstanceRefreshAnswer, __MetadataBearer {}

/**
 * <p>Cancels an instance refresh operation in progress. Cancellation does not roll back any
 *             replacements that have already been completed, but it prevents new replacements from
 *             being started. </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">Replacing Auto Scaling instances
 *                 based on an instance refresh</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, CancelInstanceRefreshCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, CancelInstanceRefreshCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new CancelInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelInstanceRefreshCommandInput} for command's `input` shape.
 * @see {@link CancelInstanceRefreshCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CancelInstanceRefreshCommand extends $Command<
  CancelInstanceRefreshCommandInput,
  CancelInstanceRefreshCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelInstanceRefreshCommandInput) {
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
  ): Handler<CancelInstanceRefreshCommandInput, CancelInstanceRefreshCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "CancelInstanceRefreshCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelInstanceRefreshType.filterSensitiveLog,
      outputFilterSensitiveLog: CancelInstanceRefreshAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelInstanceRefreshCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCancelInstanceRefreshCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelInstanceRefreshCommandOutput> {
    return deserializeAws_queryCancelInstanceRefreshCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
