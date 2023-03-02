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
  GetRunRequest,
  GetRunRequestFilterSensitiveLog,
  GetRunResult,
  GetRunResultFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1GetRunCommand, serializeAws_json1_1GetRunCommand } from "../protocols/Aws_json1_1";

/**
 * The input for {@link GetRunCommand}.
 */
export interface GetRunCommandInput extends GetRunRequest {}
/**
 * The output of {@link GetRunCommand}.
 */
export interface GetRunCommandOutput extends GetRunResult, __MetadataBearer {}

/**
 * <p>Gets information about a run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetRunCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetRunCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRunCommandInput} for command's `input` shape.
 * @see {@link GetRunCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @example To get information about a test run
 * ```javascript
 * // The following example gets information about a specific test run.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:run:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/0fcac17b-6122-44d7-ae5a-12345EXAMPLE"
 * };
 * const command = new GetRunCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "run": {
 *     "name": "My Test Run",
 *     "type": "BUILTIN_EXPLORER",
 *     "arn": "arn:aws:devicefarm:us-west-2:123456789101:run:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/0fcac17b-6122-44d7-ae5a-12345EXAMPLE",
 *     "billingMethod": "METERED",
 *     "completedJobs": 0,
 *     "counters": {
 *       "errored": 0,
 *       "failed": 0,
 *       "passed": 0,
 *       "skipped": 0,
 *       "stopped": 0,
 *       "total": 0,
 *       "warned": 0
 *     },
 *     "created": "1472667509.852",
 *     "deviceMinutes": {
 *       "metered": 0,
 *       "total": 0,
 *       "unmetered": 0
 *     },
 *     "platform": "ANDROID",
 *     "result": "PENDING",
 *     "status": "RUNNING",
 *     "totalJobs": 3
 *   }
 * }
 * *\/
 * ```
 *
 */
export class GetRunCommand extends $Command<GetRunCommandInput, GetRunCommandOutput, DeviceFarmClientResolvedConfig> {
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

  constructor(readonly input: GetRunCommandInput) {
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
  ): Handler<GetRunCommandInput, GetRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRunResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRunCommandOutput> {
    return deserializeAws_json1_1GetRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
