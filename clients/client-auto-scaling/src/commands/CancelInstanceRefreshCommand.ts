// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { CancelInstanceRefreshAnswer, CancelInstanceRefreshType } from "../models/models_0";
import { de_CancelInstanceRefreshCommand, se_CancelInstanceRefreshCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelInstanceRefreshCommand}.
 */
export interface CancelInstanceRefreshCommandInput extends CancelInstanceRefreshType {}
/**
 * @public
 *
 * The output of {@link CancelInstanceRefreshCommand}.
 */
export interface CancelInstanceRefreshCommandOutput extends CancelInstanceRefreshAnswer, __MetadataBearer {}

/**
 * @public
 * <p>Cancels an instance refresh or rollback that is in progress. If an instance refresh or
 *             rollback is not in progress, an <code>ActiveInstanceRefreshNotFound</code> error
 *             occurs.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh
 *                 feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group
 *             after you make configuration changes.</p>
 *          <p>When you cancel an instance refresh, this does not roll back any changes that it made.
 *             Use the <a>RollbackInstanceRefresh</a> API to roll back instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, CancelInstanceRefreshCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, CancelInstanceRefreshCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // CancelInstanceRefreshType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 * };
 * const command = new CancelInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * // { // CancelInstanceRefreshAnswer
 * //   InstanceRefreshId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelInstanceRefreshCommandInput - {@link CancelInstanceRefreshCommandInput}
 * @returns {@link CancelInstanceRefreshCommandOutput}
 * @see {@link CancelInstanceRefreshCommandInput} for command's `input` shape.
 * @see {@link CancelInstanceRefreshCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ActiveInstanceRefreshNotFoundFault} (client fault)
 *  <p>The request failed because an active instance refresh or rollback for the specified
 *             Auto Scaling group was not found.</p>
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To cancel an instance refresh
 * ```javascript
 * // This example cancels an instance refresh operation in progress.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group"
 * };
 * const command = new CancelInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceRefreshId": "08b91cf7-8fa6-48af-b6a6-d227f40f1b9b"
 * }
 * *\/
 * // example id: to-cancel-an-instance-refresh-1592960979817
 * ```
 *
 */
export class CancelInstanceRefreshCommand extends $Command<
  CancelInstanceRefreshCommandInput,
  CancelInstanceRefreshCommandOutput,
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelInstanceRefreshCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "CancelInstanceRefreshCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CancelInstanceRefreshCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelInstanceRefreshCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelInstanceRefreshCommandOutput> {
    return de_CancelInstanceRefreshCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
