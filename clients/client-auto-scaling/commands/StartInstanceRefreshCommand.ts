import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { StartInstanceRefreshAnswer, StartInstanceRefreshType } from "../models/models_0";
import {
  deserializeAws_queryStartInstanceRefreshCommand,
  serializeAws_queryStartInstanceRefreshCommand,
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

export type StartInstanceRefreshCommandInput = StartInstanceRefreshType;
export type StartInstanceRefreshCommandOutput = StartInstanceRefreshAnswer & __MetadataBearer;

/**
 * <p>Starts a new instance refresh operation, which triggers a rolling replacement of all
 *             previously launched instances in the Auto Scaling group with a new group of instances.</p>
 *         <p>If successful, this call creates a new instance refresh request with a unique ID that
 *             you can use to track its progress. To query its status, call the <a>DescribeInstanceRefreshes</a> API. To describe the instance refreshes that
 *             have already run, call the <a>DescribeInstanceRefreshes</a> API. To cancel an
 *             instance refresh operation in progress, use the <a>CancelInstanceRefresh</a>
 *             API. </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">Replacing Auto Scaling Instances
 *                 Based on an Instance Refresh</a>.</p>
 */
export class StartInstanceRefreshCommand extends $Command<
  StartInstanceRefreshCommandInput,
  StartInstanceRefreshCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "StartInstanceRefreshCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartInstanceRefreshType.filterSensitiveLog,
      outputFilterSensitiveLog: StartInstanceRefreshAnswer.filterSensitiveLog,
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
