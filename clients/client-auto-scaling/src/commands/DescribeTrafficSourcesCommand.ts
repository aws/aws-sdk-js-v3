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
import { DescribeTrafficSourcesRequest, DescribeTrafficSourcesResponse } from "../models/models_0";
import { de_DescribeTrafficSourcesCommand, se_DescribeTrafficSourcesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrafficSourcesCommand}.
 */
export interface DescribeTrafficSourcesCommandInput extends DescribeTrafficSourcesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrafficSourcesCommand}.
 */
export interface DescribeTrafficSourcesCommandOutput extends DescribeTrafficSourcesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the traffic sources for the specified Auto Scaling group.</p>
 *          <p>You can optionally provide a traffic source type. If you provide a traffic source
 *             type, then the results only include that traffic source type.</p>
 *          <p>If you do not provide a traffic source type, then the results include all the traffic
 *             sources for the specified Auto Scaling group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeTrafficSourcesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeTrafficSourcesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeTrafficSourcesRequest
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   TrafficSourceType: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrafficSourcesResponse
 * //   TrafficSources: [ // TrafficSourceStates
 * //     { // TrafficSourceState
 * //       TrafficSource: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       Identifier: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTrafficSourcesCommandInput - {@link DescribeTrafficSourcesCommandInput}
 * @returns {@link DescribeTrafficSourcesCommandOutput}
 * @see {@link DescribeTrafficSourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficSourcesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To describe the target groups for an Auto Scaling group
 * ```javascript
 * // This example describes the target groups attached to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group"
 * };
 * const command = new DescribeTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NextToken": "",
 *   "TrafficSources": [
 *     {
 *       "Identifier": "arn:aws:vpc-lattice:us-west-2:123456789012:targetgroup/tg-0e2f2665eEXAMPLE",
 *       "State": "InService",
 *       "Type": "vpc-lattice"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-target-groups-for-an-auto-scaling-group-1680040714521
 * ```
 *
 */
export class DescribeTrafficSourcesCommand extends $Command<
  DescribeTrafficSourcesCommandInput,
  DescribeTrafficSourcesCommandOutput,
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
  constructor(readonly input: DescribeTrafficSourcesCommandInput) {
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
  ): Handler<DescribeTrafficSourcesCommandInput, DescribeTrafficSourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrafficSourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeTrafficSourcesCommand";
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
  private serialize(input: DescribeTrafficSourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTrafficSourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTrafficSourcesCommandOutput> {
    return de_DescribeTrafficSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
