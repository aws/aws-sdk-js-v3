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
import { ProcessesType } from "../models/models_0";
import { de_DescribeScalingProcessTypesCommand, se_DescribeScalingProcessTypesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalingProcessTypesCommand}.
 */
export interface DescribeScalingProcessTypesCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeScalingProcessTypesCommand}.
 */
export interface DescribeScalingProcessTypesCommandOutput extends ProcessesType, __MetadataBearer {}

/**
 * @public
 * <p>Describes the scaling process types for use with the <a>ResumeProcesses</a>
 *             and <a>SuspendProcesses</a> APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeScalingProcessTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeScalingProcessTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = {};
 * const command = new DescribeScalingProcessTypesCommand(input);
 * const response = await client.send(command);
 * // { // ProcessesType
 * //   Processes: [ // Processes
 * //     { // ProcessType
 * //       ProcessName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeScalingProcessTypesCommandInput - {@link DescribeScalingProcessTypesCommandInput}
 * @returns {@link DescribeScalingProcessTypesCommandOutput}
 * @see {@link DescribeScalingProcessTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingProcessTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To describe the Auto Scaling process types
 * ```javascript
 * // This example describes the Auto Scaling process types.
 * const input = undefined;
 * const command = new DescribeScalingProcessTypesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Processes": [
 *     {
 *       "ProcessName": "AZRebalance"
 *     },
 *     {
 *       "ProcessName": "AddToLoadBalancer"
 *     },
 *     {
 *       "ProcessName": "AlarmNotification"
 *     },
 *     {
 *       "ProcessName": "HealthCheck"
 *     },
 *     {
 *       "ProcessName": "Launch"
 *     },
 *     {
 *       "ProcessName": "ReplaceUnhealthy"
 *     },
 *     {
 *       "ProcessName": "ScheduledActions"
 *     },
 *     {
 *       "ProcessName": "Terminate"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-scaling-process-types-1
 * ```
 *
 */
export class DescribeScalingProcessTypesCommand extends $Command<
  DescribeScalingProcessTypesCommandInput,
  DescribeScalingProcessTypesCommandOutput,
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
  constructor(readonly input: DescribeScalingProcessTypesCommandInput) {
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
  ): Handler<DescribeScalingProcessTypesCommandInput, DescribeScalingProcessTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScalingProcessTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeScalingProcessTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "DescribeScalingProcessTypes",
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
  private serialize(input: DescribeScalingProcessTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeScalingProcessTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScalingProcessTypesCommandOutput> {
    return de_DescribeScalingProcessTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
