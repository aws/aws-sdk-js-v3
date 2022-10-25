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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import {
  GetHostedConfigurationVersionRequest,
  GetHostedConfigurationVersionRequestFilterSensitiveLog,
  HostedConfigurationVersion,
  HostedConfigurationVersionFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetHostedConfigurationVersionCommand,
  serializeAws_restJson1GetHostedConfigurationVersionCommand,
} from "../protocols/Aws_restJson1";

export interface GetHostedConfigurationVersionCommandInput extends GetHostedConfigurationVersionRequest {}
export interface GetHostedConfigurationVersionCommandOutput extends HostedConfigurationVersion, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific configuration version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetHostedConfigurationVersionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetHostedConfigurationVersionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new GetHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostedConfigurationVersionCommandInput} for command's `input` shape.
 * @see {@link GetHostedConfigurationVersionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 */
export class GetHostedConfigurationVersionCommand extends $Command<
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
  AppConfigClientResolvedConfig
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

  constructor(readonly input: GetHostedConfigurationVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHostedConfigurationVersionCommandInput, GetHostedConfigurationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetHostedConfigurationVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "GetHostedConfigurationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHostedConfigurationVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: HostedConfigurationVersionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHostedConfigurationVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetHostedConfigurationVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetHostedConfigurationVersionCommandOutput> {
    return deserializeAws_restJson1GetHostedConfigurationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
