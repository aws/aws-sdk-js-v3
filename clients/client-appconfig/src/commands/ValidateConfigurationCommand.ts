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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { ValidateConfigurationRequest } from "../models/models_0";
import { de_ValidateConfigurationCommand, se_ValidateConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ValidateConfigurationCommand}.
 */
export interface ValidateConfigurationCommandInput extends ValidateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ValidateConfigurationCommand}.
 */
export interface ValidateConfigurationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Uses the validators in a configuration profile to validate a configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ValidateConfigurationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ValidateConfigurationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // ValidateConfigurationRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 *   ConfigurationVersion: "STRING_VALUE", // required
 * };
 * const command = new ValidateConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ValidateConfigurationCommandInput - {@link ValidateConfigurationCommandInput}
 * @returns {@link ValidateConfigurationCommandOutput}
 * @see {@link ValidateConfigurationCommandInput} for command's `input` shape.
 * @see {@link ValidateConfigurationCommandOutput} for command's `response` shape.
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
 * @example To validate a configuration
 * ```javascript
 * // The following validate-configuration example uses the validators in a configuration profile to validate a configuration.
 * const input = {
 *   "ApplicationId": "abc1234",
 *   "ConfigurationProfileId": "ur8hx2f",
 *   "ConfigurationVersion": "1"
 * };
 * const command = new ValidateConfigurationCommand(input);
 * await client.send(command);
 * // example id: to-validate-a-configuration-1632331491365
 * ```
 *
 */
export class ValidateConfigurationCommand extends $Command<
  ValidateConfigurationCommandInput,
  ValidateConfigurationCommandOutput,
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
  constructor(readonly input: ValidateConfigurationCommandInput) {
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
  ): Handler<ValidateConfigurationCommandInput, ValidateConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidateConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "ValidateConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAppConfig",
        operation: "ValidateConfiguration",
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
  private serialize(input: ValidateConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ValidateConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ValidateConfigurationCommandOutput> {
    return de_ValidateConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
