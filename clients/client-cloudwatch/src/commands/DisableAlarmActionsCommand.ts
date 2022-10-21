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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DisableAlarmActionsInput, DisableAlarmActionsInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryDisableAlarmActionsCommand,
  serializeAws_queryDisableAlarmActionsCommand,
} from "../protocols/Aws_query";

export interface DisableAlarmActionsCommandInput extends DisableAlarmActionsInput {}
export interface DisableAlarmActionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables the actions for the specified alarms. When an alarm's actions are disabled, the
 * 			alarm actions do not execute when the alarm state changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DisableAlarmActionsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DisableAlarmActionsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DisableAlarmActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAlarmActionsCommandInput} for command's `input` shape.
 * @see {@link DisableAlarmActionsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class DisableAlarmActionsCommand extends $Command<
  DisableAlarmActionsCommandInput,
  DisableAlarmActionsCommandOutput,
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

  constructor(readonly input: DisableAlarmActionsCommandInput) {
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
  ): Handler<DisableAlarmActionsCommandInput, DisableAlarmActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableAlarmActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DisableAlarmActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableAlarmActionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableAlarmActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDisableAlarmActionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableAlarmActionsCommandOutput> {
    return deserializeAws_queryDisableAlarmActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
