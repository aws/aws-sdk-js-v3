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

import { AppConfigDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigDataClient";
import { StartConfigurationSessionRequest, StartConfigurationSessionResponse } from "../models/models_0";
import { de_StartConfigurationSessionCommand, se_StartConfigurationSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartConfigurationSessionCommand}.
 */
export interface StartConfigurationSessionCommandInput extends StartConfigurationSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartConfigurationSessionCommand}.
 */
export interface StartConfigurationSessionCommandOutput extends StartConfigurationSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a configuration session used to retrieve a deployed configuration. For more
 *          information about this API action and to view example CLI commands that show how to use
 *          it with the <a>GetLatestConfiguration</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the
 *             configuration</a> in the <i>AppConfig User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigDataClient, StartConfigurationSessionCommand } from "@aws-sdk/client-appconfigdata"; // ES Modules import
 * // const { AppConfigDataClient, StartConfigurationSessionCommand } = require("@aws-sdk/client-appconfigdata"); // CommonJS import
 * const client = new AppConfigDataClient(config);
 * const input = { // StartConfigurationSessionRequest
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   EnvironmentIdentifier: "STRING_VALUE", // required
 *   ConfigurationProfileIdentifier: "STRING_VALUE", // required
 *   RequiredMinimumPollIntervalInSeconds: Number("int"),
 * };
 * const command = new StartConfigurationSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartConfigurationSessionResponse
 * //   InitialConfigurationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartConfigurationSessionCommandInput - {@link StartConfigurationSessionCommandInput}
 * @returns {@link StartConfigurationSessionCommandOutput}
 * @see {@link StartConfigurationSessionCommandInput} for command's `input` shape.
 * @see {@link StartConfigurationSessionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigDataClientResolvedConfig | config} for AppConfigDataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AppConfigDataServiceException}
 * <p>Base exception class for all service exceptions from AppConfigData service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppConfigData",
        operation: "StartConfigurationSession",
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
  private serialize(input: StartConfigurationSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartConfigurationSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartConfigurationSessionCommandOutput> {
    return de_StartConfigurationSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
