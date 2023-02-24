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
  GetScheduleInput,
  GetScheduleInputFilterSensitiveLog,
  GetScheduleOutput,
  GetScheduleOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetScheduleCommand,
  serializeAws_restJson1GetScheduleCommand,
} from "../protocols/Aws_restJson1";
import { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";

export interface GetScheduleCommandInput extends GetScheduleInput {}
export interface GetScheduleCommandOutput extends GetScheduleOutput, __MetadataBearer {}

/**
 * <p>Retrieves the specified schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, GetScheduleCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, GetScheduleCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * const client = new SchedulerClient(config);
 * const command = new GetScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetScheduleCommandInput} for command's `input` shape.
 * @see {@link GetScheduleCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
 *
 */
export class GetScheduleCommand extends $Command<
  GetScheduleCommandInput,
  GetScheduleCommandOutput,
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

  constructor(readonly input: GetScheduleCommandInput) {
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
  ): Handler<GetScheduleCommandInput, GetScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetScheduleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchedulerClient";
    const commandName = "GetScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetScheduleInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetScheduleOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetScheduleCommandOutput> {
    return deserializeAws_restJson1GetScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
