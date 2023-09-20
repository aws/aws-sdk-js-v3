// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { Configuration, ConfigurationFilterSensitiveLog, GetConfigurationRequest } from "../models/models_0";
import { de_GetConfigurationCommand, se_GetConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationCommand}.
 */
export interface GetConfigurationCommandInput extends GetConfigurationRequest {}
/**
 * @public
 */
export type GetConfigurationCommandOutputType = Omit<Configuration, "Content"> & {
  Content?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetConfigurationCommand}.
 */
export interface GetConfigurationCommandOutput extends GetConfigurationCommandOutputType, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>(Deprecated) Retrieves the latest deployed configuration.</p>
 *          <important>
 *             <p>Note the following important information.</p>
 *             <ul>
 *                <li>
 *                   <p>This API action is deprecated. Calls to receive configuration data should use
 *                   the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> APIs instead. </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>GetConfiguration</code> is a priced call. For more information, see
 *                      <a href="https://aws.amazon.com/systems-manager/pricing/">Pricing</a>.</p>
 *                </li>
 *             </ul>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetConfigurationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetConfigurationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // GetConfigurationRequest
 *   Application: "STRING_VALUE", // required
 *   Environment: "STRING_VALUE", // required
 *   Configuration: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 *   ClientConfigurationVersion: "STRING_VALUE",
 * };
 * const command = new GetConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // Configuration
 * //   Content: "BLOB_VALUE",
 * //   ConfigurationVersion: "STRING_VALUE",
 * //   ContentType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConfigurationCommandInput - {@link GetConfigurationCommandInput}
 * @returns {@link GetConfigurationCommandOutput}
 * @see {@link GetConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @example To retrieve configuration details
 * ```javascript
 * // The following get-configuration example returns the configuration details of the example application. On subsequent calls to get-configuration, use the client-configuration-version parameter to only update the configuration of your application if the version has changed. Only updating the configuration when the version has changed avoids excess charges incurred by calling get-configuration.
 * const input = {
 *   "Application": "example-application",
 *   "ClientId": "example-id",
 *   "Configuration": "Example-Configuration-Profile",
 *   "Environment": "Example-Environment"
 * };
 * const command = new GetConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ConfigurationVersion": "1",
 *   "ContentType": "application/octet-stream"
 * }
 * *\/
 * // example id: to-retrieve-configuration-details-1632265954314
 * ```
 *
 */
export class GetConfigurationCommand extends $Command<
  GetConfigurationCommandInput,
  GetConfigurationCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetConfigurationCommandInput) {
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
  ): Handler<GetConfigurationCommandInput, GetConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "GetConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ConfigurationFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAppConfig",
        operation: "GetConfiguration",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConfigurationCommandOutput> {
    return de_GetConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
