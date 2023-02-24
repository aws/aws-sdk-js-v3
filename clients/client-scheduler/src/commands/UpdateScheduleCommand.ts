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

import {
  UpdateScheduleInput,
  UpdateScheduleInputFilterSensitiveLog,
  UpdateScheduleOutput,
  UpdateScheduleOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateScheduleCommand,
  serializeAws_restJson1UpdateScheduleCommand,
} from "../protocols/Aws_restJson1";
import { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";

export interface UpdateScheduleCommandInput extends UpdateScheduleInput {}
export interface UpdateScheduleCommandOutput extends UpdateScheduleOutput, __MetadataBearer {}

/**
 * <p>
 *          Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and
 *          overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to
 *          its system-default value after the update.
 *       </p>
 *          <p>
 *          Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters
 *          for your <code>UpdateSchedule</code> call.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, UpdateScheduleCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, UpdateScheduleCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * const client = new SchedulerClient(config);
 * const command = new UpdateScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduleCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
 *
 */
export class UpdateScheduleCommand extends $Command<
  UpdateScheduleCommandInput,
  UpdateScheduleCommandOutput,
  SchedulerClientResolvedConfig
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

  constructor(readonly input: UpdateScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchedulerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateScheduleCommandInput, UpdateScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchedulerClient";
    const commandName = "UpdateScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateScheduleInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateScheduleOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateScheduleCommandOutput> {
    return deserializeAws_restJson1UpdateScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
