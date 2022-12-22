// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeAdjustmentTypesAnswer, DescribeAdjustmentTypesAnswerFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryDescribeAdjustmentTypesCommand,
  serializeAws_queryDescribeAdjustmentTypesCommand,
} from "../protocols/Aws_query";

export interface DescribeAdjustmentTypesCommandInput {}
export interface DescribeAdjustmentTypesCommandOutput extends DescribeAdjustmentTypesAnswer, __MetadataBearer {}

/**
 * <p>Describes the available adjustment types for step scaling and simple scaling
 *             policies.</p>
 *          <p>The following adjustment types are supported:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ChangeInCapacity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExactCapacity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PercentChangeInCapacity</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAdjustmentTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAdjustmentTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeAdjustmentTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAdjustmentTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAdjustmentTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DescribeAdjustmentTypesCommand extends $Command<
  DescribeAdjustmentTypesCommandInput,
  DescribeAdjustmentTypesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DescribeAdjustmentTypesCommandInput) {
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
  ): Handler<DescribeAdjustmentTypesCommandInput, DescribeAdjustmentTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAdjustmentTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeAdjustmentTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeAdjustmentTypesAnswerFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAdjustmentTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAdjustmentTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAdjustmentTypesCommandOutput> {
    return deserializeAws_queryDescribeAdjustmentTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
