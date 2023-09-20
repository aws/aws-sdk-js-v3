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
import { ScalingProcessQuery } from "../models/models_0";
import { de_ResumeProcessesCommand, se_ResumeProcessesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResumeProcessesCommand}.
 */
export interface ResumeProcessesCommandInput extends ScalingProcessQuery {}
/**
 * @public
 *
 * The output of {@link ResumeProcessesCommand}.
 */
export interface ResumeProcessesCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Resumes the specified suspended auto scaling processes, or all suspended process, for
 *             the specified Auto Scaling group.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and
 *                 resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, ResumeProcessesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, ResumeProcessesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // ScalingProcessQuery
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ScalingProcesses: [ // ProcessNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ResumeProcessesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResumeProcessesCommandInput - {@link ResumeProcessesCommandInput}
 * @returns {@link ResumeProcessesCommandOutput}
 * @see {@link ResumeProcessesCommandInput} for command's `input` shape.
 * @see {@link ResumeProcessesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ResourceInUseFault} (client fault)
 *  <p>The operation can't be performed because the resource is in use.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To resume Auto Scaling processes
 * ```javascript
 * // This example resumes the specified suspended scaling process for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "ScalingProcesses": [
 *     "AlarmNotification"
 *   ]
 * };
 * const command = new ResumeProcessesCommand(input);
 * await client.send(command);
 * // example id: autoscaling-resume-processes-1
 * ```
 *
 */
export class ResumeProcessesCommand extends $Command<
  ResumeProcessesCommandInput,
  ResumeProcessesCommandOutput,
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
  constructor(readonly input: ResumeProcessesCommandInput) {
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
  ): Handler<ResumeProcessesCommandInput, ResumeProcessesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResumeProcessesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "ResumeProcessesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "ResumeProcesses",
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
  private serialize(input: ResumeProcessesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResumeProcessesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResumeProcessesCommandOutput> {
    return de_ResumeProcessesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
