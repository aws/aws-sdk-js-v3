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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { AttachTrafficSourcesResultType, AttachTrafficSourcesType } from "../models/models_0";
import { de_AttachTrafficSourcesCommand, se_AttachTrafficSourcesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AttachTrafficSourcesCommand}.
 */
export interface AttachTrafficSourcesCommandInput extends AttachTrafficSourcesType {}
/**
 * @public
 *
 * The output of {@link AttachTrafficSourcesCommand}.
 */
export interface AttachTrafficSourcesCommandOutput extends AttachTrafficSourcesResultType, __MetadataBearer {}

/**
 * @public
 * <p>Attaches one or more traffic sources to the specified Auto Scaling group.</p>
 *          <p>You can use any of the following as traffic sources for an Auto Scaling group:</p>
 *          <ul>
 *             <li>
 *                <p>Application Load Balancer</p>
 *             </li>
 *             <li>
 *                <p>Classic Load Balancer</p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer</p>
 *             </li>
 *             <li>
 *                <p>Network Load Balancer</p>
 *             </li>
 *             <li>
 *                <p>VPC Lattice</p>
 *             </li>
 *          </ul>
 *          <p>This operation is additive and does not detach existing traffic sources from the Auto Scaling
 *             group. </p>
 *          <p>After the operation completes, use the <a>DescribeTrafficSources</a> API to
 *             return details about the state of the attachments between traffic sources and your Auto Scaling
 *             group. To detach a traffic source from the Auto Scaling group, call the <a>DetachTrafficSources</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachTrafficSourcesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachTrafficSourcesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // AttachTrafficSourcesType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   TrafficSources: [ // TrafficSources // required
 *     { // TrafficSourceIdentifier
 *       Identifier: "STRING_VALUE", // required
 *       Type: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AttachTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachTrafficSourcesCommandInput - {@link AttachTrafficSourcesCommandInput}
 * @returns {@link AttachTrafficSourcesCommandOutput}
 * @see {@link AttachTrafficSourcesCommandInput} for command's `input` shape.
 * @see {@link AttachTrafficSourcesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *  <p>The service-linked role is not yet ready for use.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To attach a target group to an Auto Scaling group
 * ```javascript
 * // This example attaches the specified target group to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "TrafficSources": [
 *     {
 *       "Identifier": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 *     }
 *   ]
 * };
 * const command = new AttachTrafficSourcesCommand(input);
 * await client.send(command);
 * // example id: to-attach-a-target-group-to-an-auto-scaling-group-1680036570089
 * ```
 *
 */
export class AttachTrafficSourcesCommand extends $Command<
  AttachTrafficSourcesCommandInput,
  AttachTrafficSourcesCommandOutput,
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
  constructor(readonly input: AttachTrafficSourcesCommandInput) {
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
  ): Handler<AttachTrafficSourcesCommandInput, AttachTrafficSourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachTrafficSourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "AttachTrafficSourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "AttachTrafficSources",
      },
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
  private serialize(input: AttachTrafficSourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AttachTrafficSourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachTrafficSourcesCommandOutput> {
    return de_AttachTrafficSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
