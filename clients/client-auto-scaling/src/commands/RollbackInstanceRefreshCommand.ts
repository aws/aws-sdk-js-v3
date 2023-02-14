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
  RollbackInstanceRefreshAnswer,
  RollbackInstanceRefreshAnswerFilterSensitiveLog,
  RollbackInstanceRefreshType,
  RollbackInstanceRefreshTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryRollbackInstanceRefreshCommand,
  serializeAws_queryRollbackInstanceRefreshCommand,
} from "../protocols/Aws_query";

export interface RollbackInstanceRefreshCommandInput extends RollbackInstanceRefreshType {}
export interface RollbackInstanceRefreshCommandOutput extends RollbackInstanceRefreshAnswer, __MetadataBearer {}

/**
 * <p>Cancels an instance refresh that is in progress and rolls back any changes that it
 *             made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh.
 *             This restores your Auto Scaling group to the configuration that it was using before the start of
 *             the instance refresh. </p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh
 *                 feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group
 *             after you make configuration changes.</p>
 *          <p>A rollback is not supported in the following situations: </p>
 *          <ul>
 *             <li>
 *                <p>There is no desired configuration specified for the instance refresh.</p>
 *             </li>
 *             <li>
 *                <p>The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager
 *                     parameter instead of an AMI ID for the <code>ImageId</code> property.</p>
 *             </li>
 *             <li>
 *                <p>The Auto Scaling group uses the launch template's <code>$Latest</code> or
 *                         <code>$Default</code> version.</p>
 *             </li>
 *          </ul>
 *          <p>When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately
 *             begins replacing instances. You can check the status of this operation through the <a>DescribeInstanceRefreshes</a> API operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, RollbackInstanceRefreshCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, RollbackInstanceRefreshCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new RollbackInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RollbackInstanceRefreshCommandInput} for command's `input` shape.
 * @see {@link RollbackInstanceRefreshCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class RollbackInstanceRefreshCommand extends $Command<
  RollbackInstanceRefreshCommandInput,
  RollbackInstanceRefreshCommandOutput,
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

  constructor(readonly input: RollbackInstanceRefreshCommandInput) {
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
  ): Handler<RollbackInstanceRefreshCommandInput, RollbackInstanceRefreshCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RollbackInstanceRefreshCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "RollbackInstanceRefreshCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RollbackInstanceRefreshTypeFilterSensitiveLog,
      outputFilterSensitiveLog: RollbackInstanceRefreshAnswerFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RollbackInstanceRefreshCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRollbackInstanceRefreshCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RollbackInstanceRefreshCommandOutput> {
    return deserializeAws_queryRollbackInstanceRefreshCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
