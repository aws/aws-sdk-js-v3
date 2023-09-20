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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DeleteAlarmsInput } from "../models/models_0";
import { de_DeleteAlarmsCommand, se_DeleteAlarmsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAlarmsCommand}.
 */
export interface DeleteAlarmsCommandInput extends DeleteAlarmsInput {}
/**
 * @public
 *
 * The output of {@link DeleteAlarmsCommand}.
 */
export interface DeleteAlarmsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more
 * 			than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't
 * 			delete two composite alarms with one operation.</p>
 *          <p>
 * 			If you specify an incorrect alarm name or make any other error in the operation, no alarms are
 * 			deleted. To confirm that alarms were deleted successfully, you can use
 * 			the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> operation after using
 * 		<code>DeleteAlarms</code>.</p>
 *          <note>
 *             <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and
 * 			composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle
 * 			because there is always still a composite alarm that depends on that alarm that you want to delete.</p>
 *             <p>To get out of such a situation, you must
 * 				break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest
 * 				change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p>
 *             <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path.
 * 			</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteAlarmsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteAlarmsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // DeleteAlarmsInput
 *   AlarmNames: [ // AlarmNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteAlarmsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAlarmsCommandInput - {@link DeleteAlarmsCommandInput}
 * @returns {@link DeleteAlarmsCommandOutput}
 * @see {@link DeleteAlarmsCommandInput} for command's `input` shape.
 * @see {@link DeleteAlarmsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 */
export class DeleteAlarmsCommand extends $Command<
  DeleteAlarmsCommandInput,
  DeleteAlarmsCommandOutput,
  CloudWatchClientResolvedConfig
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
  constructor(readonly input: DeleteAlarmsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAlarmsCommandInput, DeleteAlarmsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteAlarmsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DeleteAlarmsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GraniteServiceVersion20100801",
        operation: "DeleteAlarms",
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
  private serialize(input: DeleteAlarmsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAlarmsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAlarmsCommandOutput> {
    return de_DeleteAlarmsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
