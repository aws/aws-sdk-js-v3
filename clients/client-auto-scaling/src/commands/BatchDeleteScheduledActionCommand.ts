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
import { BatchDeleteScheduledActionAnswer, BatchDeleteScheduledActionType } from "../models/models_0";
import { de_BatchDeleteScheduledActionCommand, se_BatchDeleteScheduledActionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteScheduledActionCommand}.
 */
export interface BatchDeleteScheduledActionCommandInput extends BatchDeleteScheduledActionType {}
/**
 * @public
 *
 * The output of {@link BatchDeleteScheduledActionCommand}.
 */
export interface BatchDeleteScheduledActionCommandOutput extends BatchDeleteScheduledActionAnswer, __MetadataBearer {}

/**
 * @public
 * <p>Deletes one or more scheduled actions for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, BatchDeleteScheduledActionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, BatchDeleteScheduledActionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // BatchDeleteScheduledActionType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ScheduledActionNames: [ // ScheduledActionNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteScheduledActionCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteScheduledActionAnswer
 * //   FailedScheduledActions: [ // FailedScheduledUpdateGroupActionRequests
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
 * @param BatchDeleteScheduledActionCommandInput - {@link BatchDeleteScheduledActionCommandInput}
 * @returns {@link BatchDeleteScheduledActionCommandOutput}
 * @see {@link BatchDeleteScheduledActionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 */
export class BatchDeleteScheduledActionCommand extends $Command<
  BatchDeleteScheduledActionCommandInput,
  BatchDeleteScheduledActionCommandOutput,
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
  constructor(readonly input: BatchDeleteScheduledActionCommandInput) {
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
  ): Handler<BatchDeleteScheduledActionCommandInput, BatchDeleteScheduledActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteScheduledActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "BatchDeleteScheduledActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "BatchDeleteScheduledAction",
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
  private serialize(input: BatchDeleteScheduledActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDeleteScheduledActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDeleteScheduledActionCommandOutput> {
    return de_BatchDeleteScheduledActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
