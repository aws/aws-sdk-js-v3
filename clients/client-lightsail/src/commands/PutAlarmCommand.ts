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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  PutAlarmRequest,
  PutAlarmRequestFilterSensitiveLog,
  PutAlarmResult,
  PutAlarmResultFilterSensitiveLog,
} from "../models/models_1";
import { deserializeAws_json1_1PutAlarmCommand, serializeAws_json1_1PutAlarmCommand } from "../protocols/Aws_json1_1";

export interface PutAlarmCommandInput extends PutAlarmRequest {}
export interface PutAlarmCommandOutput extends PutAlarmResult, __MetadataBearer {}

/**
 * <p>Creates or updates an alarm, and associates it with the specified metric.</p>
 *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
 *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
 *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 *          <p>When this action creates an alarm, the alarm state is immediately set to
 *         <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
 *       appropriately. Any actions associated with the new state are then executed.</p>
 *          <p>When you update an existing alarm, its state is left unchanged, but the update completely
 *       overwrites the previous configuration of the alarm. The alarm is then evaluated with the
 *       updated configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, PutAlarmCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, PutAlarmCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new PutAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAlarmCommandInput} for command's `input` shape.
 * @see {@link PutAlarmCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class PutAlarmCommand extends $Command<
  PutAlarmCommandInput,
  PutAlarmCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: PutAlarmCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAlarmCommandInput, PutAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutAlarmCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "PutAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAlarmRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutAlarmResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAlarmCommandOutput> {
    return deserializeAws_json1_1PutAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
