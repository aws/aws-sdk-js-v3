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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  GetSipMediaApplicationLoggingConfigurationRequest,
  GetSipMediaApplicationLoggingConfigurationRequestFilterSensitiveLog,
  GetSipMediaApplicationLoggingConfigurationResponse,
  GetSipMediaApplicationLoggingConfigurationResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand,
  serializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface GetSipMediaApplicationLoggingConfigurationCommandInput
  extends GetSipMediaApplicationLoggingConfigurationRequest {}
export interface GetSipMediaApplicationLoggingConfigurationCommandOutput
  extends GetSipMediaApplicationLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Returns the logging configuration for the specified SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetSipMediaApplicationLoggingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetSipMediaApplicationLoggingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetSipMediaApplicationLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSipMediaApplicationLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSipMediaApplicationLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class GetSipMediaApplicationLoggingConfigurationCommand extends $Command<
  GetSipMediaApplicationLoggingConfigurationCommandInput,
  GetSipMediaApplicationLoggingConfigurationCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: GetSipMediaApplicationLoggingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetSipMediaApplicationLoggingConfigurationCommandInput,
    GetSipMediaApplicationLoggingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetSipMediaApplicationLoggingConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetSipMediaApplicationLoggingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSipMediaApplicationLoggingConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSipMediaApplicationLoggingConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetSipMediaApplicationLoggingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput> {
    return deserializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
