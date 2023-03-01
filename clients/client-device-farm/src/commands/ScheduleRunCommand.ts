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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  ScheduleRunRequest,
  ScheduleRunRequestFilterSensitiveLog,
  ScheduleRunResult,
  ScheduleRunResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ScheduleRunCommand,
  serializeAws_json1_1ScheduleRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ScheduleRunCommand}.
 */
export interface ScheduleRunCommandInput extends ScheduleRunRequest {}
/**
 * The output of {@link ScheduleRunCommand}.
 */
export interface ScheduleRunCommandOutput extends ScheduleRunResult, __MetadataBearer {}

/**
 * <p>Schedules a run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ScheduleRunCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ScheduleRunCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ScheduleRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ScheduleRunCommandInput} for command's `input` shape.
 * @see {@link ScheduleRunCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 *
 * @example To schedule a test run
 * ```javascript
 * // The following example schedules a test run named MyRun.
 * const input = {
 *   "name": "MyRun",
 *   "devicePoolArn": "arn:aws:devicefarm:us-west-2:123456789101:pool:EXAMPLE-GUID-123-456",
 *   "projectArn": "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456",
 *   "test": {
 *     "type": "APPIUM_JAVA_JUNIT",
 *     "testPackageArn": "arn:aws:devicefarm:us-west-2:123456789101:test:EXAMPLE-GUID-123-456"
 *   }
 * };
 * const command = new ScheduleRunCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "run": {}
 * }
 * *\/
 * ```
 *
 */
export class ScheduleRunCommand extends $Command<
  ScheduleRunCommandInput,
  ScheduleRunCommandOutput,
  DeviceFarmClientResolvedConfig
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

  constructor(readonly input: ScheduleRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ScheduleRunCommandInput, ScheduleRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ScheduleRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ScheduleRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ScheduleRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ScheduleRunResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ScheduleRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ScheduleRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ScheduleRunCommandOutput> {
    return deserializeAws_json1_1ScheduleRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
