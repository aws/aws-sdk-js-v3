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
import {
  ActivitiesType,
  ActivitiesTypeFilterSensitiveLog,
  DescribeScalingActivitiesType,
  DescribeScalingActivitiesTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeScalingActivitiesCommand,
  serializeAws_queryDescribeScalingActivitiesCommand,
} from "../protocols/Aws_query";

export interface DescribeScalingActivitiesCommandInput extends DescribeScalingActivitiesType {}
export interface DescribeScalingActivitiesCommandOutput extends ActivitiesType, __MetadataBearer {}

/**
 * <p>Gets information about the scaling activities in the account and Region.</p>
 *          <p>When scaling events occur, you see a record of the scaling activity in the scaling
 *             activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling
 *                 activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the
 *             response is <code>Successful</code>. If an attempt to launch instances failed, the
 *                 <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and
 *             the <code>StatusMessage</code> element in the response indicates the cause of the
 *             failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeScalingActivitiesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeScalingActivitiesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeScalingActivitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingActivitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingActivitiesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DescribeScalingActivitiesCommand extends $Command<
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
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

  constructor(readonly input: DescribeScalingActivitiesCommandInput) {
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
  ): Handler<DescribeScalingActivitiesCommandInput, DescribeScalingActivitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScalingActivitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeScalingActivitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScalingActivitiesTypeFilterSensitiveLog,
      outputFilterSensitiveLog: ActivitiesTypeFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScalingActivitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeScalingActivitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScalingActivitiesCommandOutput> {
    return deserializeAws_queryDescribeScalingActivitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
