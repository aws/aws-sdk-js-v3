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

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import {
  GetNotificationConfigurationRequest,
  GetNotificationConfigurationRequestFilterSensitiveLog,
  GetNotificationConfigurationResponse,
  GetNotificationConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetNotificationConfigurationCommand,
  serializeAws_restJson1GetNotificationConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface GetNotificationConfigurationCommandInput extends GetNotificationConfigurationRequest {}
export interface GetNotificationConfigurationCommandOutput
  extends GetNotificationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Get the current configuration for anomaly notifications for a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetNotificationConfigurationCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetNotificationConfigurationCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new GetNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 */
export class GetNotificationConfigurationCommand extends $Command<
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
  CodeGuruProfilerClientResolvedConfig
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

  constructor(readonly input: GetNotificationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetNotificationConfigurationCommandInput, GetNotificationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetNotificationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "GetNotificationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetNotificationConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetNotificationConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetNotificationConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetNotificationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetNotificationConfigurationCommandOutput> {
    return deserializeAws_restJson1GetNotificationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
