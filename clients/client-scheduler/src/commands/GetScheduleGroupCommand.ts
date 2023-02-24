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
  GetScheduleGroupInput,
  GetScheduleGroupInputFilterSensitiveLog,
  GetScheduleGroupOutput,
  GetScheduleGroupOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetScheduleGroupCommand,
  serializeAws_restJson1GetScheduleGroupCommand,
} from "../protocols/Aws_restJson1";
import { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";

export interface GetScheduleGroupCommandInput extends GetScheduleGroupInput {}
export interface GetScheduleGroupCommandOutput extends GetScheduleGroupOutput, __MetadataBearer {}

/**
 * <p>Retrieves the specified schedule group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, GetScheduleGroupCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, GetScheduleGroupCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * const client = new SchedulerClient(config);
 * const command = new GetScheduleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetScheduleGroupCommandInput} for command's `input` shape.
 * @see {@link GetScheduleGroupCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
 *
 */
export class GetScheduleGroupCommand extends $Command<
  GetScheduleGroupCommandInput,
  GetScheduleGroupCommandOutput,
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

  constructor(readonly input: GetScheduleGroupCommandInput) {
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
  ): Handler<GetScheduleGroupCommandInput, GetScheduleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetScheduleGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchedulerClient";
    const commandName = "GetScheduleGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetScheduleGroupInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetScheduleGroupOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetScheduleGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetScheduleGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetScheduleGroupCommandOutput> {
    return deserializeAws_restJson1GetScheduleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
