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
  TestAlarmRequest,
  TestAlarmRequestFilterSensitiveLog,
  TestAlarmResult,
  TestAlarmResultFilterSensitiveLog,
} from "../models/models_1";
import { deserializeAws_json1_1TestAlarmCommand, serializeAws_json1_1TestAlarmCommand } from "../protocols/Aws_json1_1";

export interface TestAlarmCommandInput extends TestAlarmRequest {}
export interface TestAlarmCommandOutput extends TestAlarmResult, __MetadataBearer {}

/**
 * <p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification
 *       trigger is configured for the specified alarm, the test also sends a notification to the
 *       notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the
 *       alarm.</p>
 *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
 *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
 *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, TestAlarmCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, TestAlarmCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new TestAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestAlarmCommandInput} for command's `input` shape.
 * @see {@link TestAlarmCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class TestAlarmCommand extends $Command<
  TestAlarmCommandInput,
  TestAlarmCommandOutput,
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

  constructor(readonly input: TestAlarmCommandInput) {
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
  ): Handler<TestAlarmCommandInput, TestAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TestAlarmCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "TestAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestAlarmRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TestAlarmResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TestAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestAlarmCommandOutput> {
    return deserializeAws_json1_1TestAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
