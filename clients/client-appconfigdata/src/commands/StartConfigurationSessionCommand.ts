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

import { AppConfigDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigDataClient";
import {
  StartConfigurationSessionRequest,
  StartConfigurationSessionRequestFilterSensitiveLog,
  StartConfigurationSessionResponse,
  StartConfigurationSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartConfigurationSessionCommand,
  serializeAws_restJson1StartConfigurationSessionCommand,
} from "../protocols/Aws_restJson1";

export interface StartConfigurationSessionCommandInput extends StartConfigurationSessionRequest {}
export interface StartConfigurationSessionCommandOutput extends StartConfigurationSessionResponse, __MetadataBearer {}

/**
 * <p>Starts a configuration session used to retrieve a deployed configuration. For more
 *          information about this API action and to view example CLI commands that show how to use
 *          it with the <a>GetLatestConfiguration</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Receiving the
 *             configuration</a> in the <i>AppConfig User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigDataClient, StartConfigurationSessionCommand } from "@aws-sdk/client-appconfigdata"; // ES Modules import
 * // const { AppConfigDataClient, StartConfigurationSessionCommand } = require("@aws-sdk/client-appconfigdata"); // CommonJS import
 * const client = new AppConfigDataClient(config);
 * const command = new StartConfigurationSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartConfigurationSessionCommandInput} for command's `input` shape.
 * @see {@link StartConfigurationSessionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigDataClientResolvedConfig | config} for AppConfigDataClient's `config` shape.
 *
 */
export class StartConfigurationSessionCommand extends $Command<
  StartConfigurationSessionCommandInput,
  StartConfigurationSessionCommandOutput,
  AppConfigDataClientResolvedConfig
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

  constructor(readonly input: StartConfigurationSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartConfigurationSessionCommandInput, StartConfigurationSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartConfigurationSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigDataClient";
    const commandName = "StartConfigurationSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartConfigurationSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartConfigurationSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartConfigurationSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartConfigurationSessionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartConfigurationSessionCommandOutput> {
    return deserializeAws_restJson1StartConfigurationSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
