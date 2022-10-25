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

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import {
  DescribeLoggingConfigurationRequest,
  DescribeLoggingConfigurationRequestFilterSensitiveLog,
  DescribeLoggingConfigurationResponse,
  DescribeLoggingConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeLoggingConfigurationCommand,
  serializeAws_restJson1DescribeLoggingConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeLoggingConfigurationCommandInput extends DescribeLoggingConfigurationRequest {}
export interface DescribeLoggingConfigurationCommandOutput
  extends DescribeLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * Describes logging configuration.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeLoggingConfigurationCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeLoggingConfigurationCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new DescribeLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 */
export class DescribeLoggingConfigurationCommand extends $Command<
  DescribeLoggingConfigurationCommandInput,
  DescribeLoggingConfigurationCommandOutput,
  AmpClientResolvedConfig
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

  constructor(readonly input: DescribeLoggingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLoggingConfigurationCommandInput, DescribeLoggingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLoggingConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "DescribeLoggingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLoggingConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeLoggingConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLoggingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeLoggingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLoggingConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
