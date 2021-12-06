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
import { GetLatestConfigurationRequest, GetLatestConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetLatestConfigurationCommand,
  serializeAws_restJson1GetLatestConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface GetLatestConfigurationCommandInput extends GetLatestConfigurationRequest {}
export interface GetLatestConfigurationCommandOutput extends GetLatestConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the latest deployed configuration. This API may return empty Configuration data if the client already has the latest version. See StartConfigurationSession to obtain an InitialConfigurationToken to call this API.</p>
 *         <important>
 *             <p>Each call to GetLatestConfiguration returns a new ConfigurationToken (NextPollConfigurationToken
 *                 in the response). This new token MUST be provided to the next call to GetLatestConfiguration when
 *                 polling for configuration updates.</p>
 *             <p>To avoid excess charges, we recommend that you include the
 *                 <code>ClientConfigurationVersion</code> value with every call to
 *                 <code>GetConfiguration</code>. This value must be saved on your client. Subsequent
 *                 calls to <code>GetConfiguration</code> must pass this value by using the
 *                 <code>ClientConfigurationVersion</code> parameter. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigDataClient, GetLatestConfigurationCommand } from "@aws-sdk/client-appconfigdata"; // ES Modules import
 * // const { AppConfigDataClient, GetLatestConfigurationCommand } = require("@aws-sdk/client-appconfigdata"); // CommonJS import
 * const client = new AppConfigDataClient(config);
 * const command = new GetLatestConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLatestConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLatestConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigDataClientResolvedConfig | config} for AppConfigDataClient's `config` shape.
 *
 */
export class GetLatestConfigurationCommand extends $Command<
  GetLatestConfigurationCommandInput,
  GetLatestConfigurationCommandOutput,
  AppConfigDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLatestConfigurationCommandInput) {
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
  ): Handler<GetLatestConfigurationCommandInput, GetLatestConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigDataClient";
    const commandName = "GetLatestConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLatestConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLatestConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLatestConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLatestConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLatestConfigurationCommandOutput> {
    return deserializeAws_restJson1GetLatestConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
