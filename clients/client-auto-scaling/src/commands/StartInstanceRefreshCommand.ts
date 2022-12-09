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
  StartInstanceRefreshAnswer,
  StartInstanceRefreshAnswerFilterSensitiveLog,
  StartInstanceRefreshType,
  StartInstanceRefreshTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryStartInstanceRefreshCommand,
  serializeAws_queryStartInstanceRefreshCommand,
} from "../protocols/Aws_query";

export interface StartInstanceRefreshCommandInput extends StartInstanceRefreshType {}
export interface StartInstanceRefreshCommandOutput extends StartInstanceRefreshAnswer, __MetadataBearer {}

/**
 * <p>Starts a new instance refresh operation. An instance refresh performs a rolling
 *             replacement of all or some instances in an Auto Scaling group. Each instance is terminated first
 *             and then replaced, which temporarily reduces the capacity available within your Auto Scaling
 *             group.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh
 *                 feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group.
 *             This feature is helpful, for example, when you have a new AMI or a new user data script.
 *             You just need to create a new launch template that specifies the new AMI or user data
 *             script. Then start an instance refresh to immediately begin the process of updating
 *             instances in the group. </p>
 *          <p>If the call succeeds, it creates a new instance refresh request with a unique ID that
 *             you can use to track its progress. To query its status, call the <a>DescribeInstanceRefreshes</a> API. To describe the instance refreshes that
 *             have already run, call the <a>DescribeInstanceRefreshes</a> API. To cancel an
 *             instance refresh operation in progress, use the <a>CancelInstanceRefresh</a>
 *             API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, StartInstanceRefreshCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, StartInstanceRefreshCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new StartInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartInstanceRefreshCommandInput} for command's `input` shape.
 * @see {@link StartInstanceRefreshCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class StartInstanceRefreshCommand extends $Command<
  StartInstanceRefreshCommandInput,
  StartInstanceRefreshCommandOutput,
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

  constructor(readonly input: StartInstanceRefreshCommandInput) {
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
  ): Handler<StartInstanceRefreshCommandInput, StartInstanceRefreshCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartInstanceRefreshCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "StartInstanceRefreshCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartInstanceRefreshTypeFilterSensitiveLog,
      outputFilterSensitiveLog: StartInstanceRefreshAnswerFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartInstanceRefreshCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStartInstanceRefreshCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartInstanceRefreshCommandOutput> {
    return deserializeAws_queryStartInstanceRefreshCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
