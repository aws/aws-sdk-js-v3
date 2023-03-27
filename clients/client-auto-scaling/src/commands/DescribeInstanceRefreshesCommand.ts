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
import { DescribeInstanceRefreshesAnswer, DescribeInstanceRefreshesType } from "../models/models_0";
import {
  deserializeAws_queryDescribeInstanceRefreshesCommand,
  serializeAws_queryDescribeInstanceRefreshesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeInstanceRefreshesCommand}.
 */
export interface DescribeInstanceRefreshesCommandInput extends DescribeInstanceRefreshesType {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceRefreshesCommand}.
 */
export interface DescribeInstanceRefreshesCommandOutput extends DescribeInstanceRefreshesAnswer, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the instance refreshes for the specified Auto Scaling group.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh
 *                 feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group
 *             after you make configuration changes.</p>
 *          <p>To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information
 *             about the instance refreshes you previously initiated, including their status, start
 *             time, end time, the percentage of the instance refresh that is complete, and the number
 *             of instances remaining to update before the instance refresh is complete. If a rollback
 *             is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information
 *             about the rollback of the instance refresh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeInstanceRefreshesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeInstanceRefreshesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeInstanceRefreshesType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   InstanceRefreshIds: [ // InstanceRefreshIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeInstanceRefreshesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeInstanceRefreshesCommandInput - {@link DescribeInstanceRefreshesCommandInput}
 * @returns {@link DescribeInstanceRefreshesCommandOutput}
 * @see {@link DescribeInstanceRefreshesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceRefreshesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 *
 * @example To list instance refreshes
 * ```javascript
 * // This example describes the instance refreshes for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group"
 * };
 * const command = new DescribeInstanceRefreshesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceRefreshes": [
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "InstanceRefreshId": "08b91cf7-8fa6-48af-b6a6-d227f40f1b9b",
 *       "InstancesToUpdate": 5,
 *       "PercentageComplete": 0,
 *       "StartTime": "2020-06-02T18:11:27Z",
 *       "Status": "InProgress"
 *     },
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "EndTime": "2020-06-02T16:53:37Z",
 *       "InstanceRefreshId": "dd7728d0-5bc4-4575-96a3-1b2c52bf8bb1",
 *       "InstancesToUpdate": 0,
 *       "PercentageComplete": 100,
 *       "StartTime": "2020-06-02T16:43:19Z",
 *       "Status": "Successful"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-instance-refreshes-1592959593746
 * ```
 *
 */
export class DescribeInstanceRefreshesCommand extends $Command<
  DescribeInstanceRefreshesCommandInput,
  DescribeInstanceRefreshesCommandOutput,
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
  constructor(readonly input: DescribeInstanceRefreshesCommandInput) {
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
  ): Handler<DescribeInstanceRefreshesCommandInput, DescribeInstanceRefreshesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceRefreshesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeInstanceRefreshesCommand";
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
  private serialize(input: DescribeInstanceRefreshesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeInstanceRefreshesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceRefreshesCommandOutput> {
    return deserializeAws_queryDescribeInstanceRefreshesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
