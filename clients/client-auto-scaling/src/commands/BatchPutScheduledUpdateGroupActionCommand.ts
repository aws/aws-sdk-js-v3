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
import { BatchPutScheduledUpdateGroupActionAnswer, BatchPutScheduledUpdateGroupActionType } from "../models/models_0";
import {
  de_BatchPutScheduledUpdateGroupActionCommand,
  se_BatchPutScheduledUpdateGroupActionCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchPutScheduledUpdateGroupActionCommand}.
 */
export interface BatchPutScheduledUpdateGroupActionCommandInput extends BatchPutScheduledUpdateGroupActionType {}
/**
 * @public
 *
 * The output of {@link BatchPutScheduledUpdateGroupActionCommand}.
 */
export interface BatchPutScheduledUpdateGroupActionCommandOutput
  extends BatchPutScheduledUpdateGroupActionAnswer,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates one or more scheduled scaling actions for an Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, BatchPutScheduledUpdateGroupActionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, BatchPutScheduledUpdateGroupActionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // BatchPutScheduledUpdateGroupActionType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ScheduledUpdateGroupActions: [ // ScheduledUpdateGroupActionRequests // required
 *     { // ScheduledUpdateGroupActionRequest
 *       ScheduledActionName: "STRING_VALUE", // required
 *       StartTime: new Date("TIMESTAMP"),
 *       EndTime: new Date("TIMESTAMP"),
 *       Recurrence: "STRING_VALUE",
 *       MinSize: Number("int"),
 *       MaxSize: Number("int"),
 *       DesiredCapacity: Number("int"),
 *       TimeZone: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchPutScheduledUpdateGroupActionCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutScheduledUpdateGroupActionAnswer
 * //   FailedScheduledUpdateGroupActions: [ // FailedScheduledUpdateGroupActionRequests
 * //     { // FailedScheduledUpdateGroupActionRequest
 * //       ScheduledActionName: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutScheduledUpdateGroupActionCommandInput - {@link BatchPutScheduledUpdateGroupActionCommandInput}
 * @returns {@link BatchPutScheduledUpdateGroupActionCommandOutput}
 * @see {@link BatchPutScheduledUpdateGroupActionCommandInput} for command's `input` shape.
 * @see {@link BatchPutScheduledUpdateGroupActionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link AlreadyExistsFault} (client fault)
 *  <p>You already have an Auto Scaling group or launch configuration with this name.</p>
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
 */
export class BatchPutScheduledUpdateGroupActionCommand extends $Command<
  BatchPutScheduledUpdateGroupActionCommandInput,
  BatchPutScheduledUpdateGroupActionCommandOutput,
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
  constructor(readonly input: BatchPutScheduledUpdateGroupActionCommandInput) {
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
  ): Handler<BatchPutScheduledUpdateGroupActionCommandInput, BatchPutScheduledUpdateGroupActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchPutScheduledUpdateGroupActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "BatchPutScheduledUpdateGroupActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "BatchPutScheduledUpdateGroupAction",
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
  private serialize(
    input: BatchPutScheduledUpdateGroupActionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchPutScheduledUpdateGroupActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchPutScheduledUpdateGroupActionCommandOutput> {
    return de_BatchPutScheduledUpdateGroupActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
