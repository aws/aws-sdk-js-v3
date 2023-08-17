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
} from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutRetentionConfigurationRequest, PutRetentionConfigurationResponse } from "../models/models_1";
import { de_PutRetentionConfigurationCommand, se_PutRetentionConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRetentionConfigurationCommand}.
 */
export interface PutRetentionConfigurationCommandInput extends PutRetentionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutRetentionConfigurationCommand}.
 */
export interface PutRetentionConfigurationCommandOutput extends PutRetentionConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates and updates the retention configuration with details
 * 			about retention period (number of days) that Config stores your
 * 			historical information. The API creates the
 * 				<code>RetentionConfiguration</code> object and names the object
 * 			as <b>default</b>. When you have a
 * 				<code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the
 * 			default object. </p>
 *          <note>
 *             <p>Currently, Config supports only one retention
 * 				configuration per region in your account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRetentionConfigurationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRetentionConfigurationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // PutRetentionConfigurationRequest
 *   RetentionPeriodInDays: Number("int"), // required
 * };
 * const command = new PutRetentionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutRetentionConfigurationResponse
 * //   RetentionConfiguration: { // RetentionConfiguration
 * //     Name: "STRING_VALUE", // required
 * //     RetentionPeriodInDays: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PutRetentionConfigurationCommandInput - {@link PutRetentionConfigurationCommandInput}
 * @returns {@link PutRetentionConfigurationCommandOutput}
 * @see {@link PutRetentionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutRetentionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link MaxNumberOfRetentionConfigurationsExceededException} (client fault)
 *  <p>Failed to add the retention configuration because a retention configuration with that name already exists.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class PutRetentionConfigurationCommand extends $Command<
  PutRetentionConfigurationCommandInput,
  PutRetentionConfigurationCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: PutRetentionConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRetentionConfigurationCommandInput, PutRetentionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRetentionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutRetentionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: PutRetentionConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutRetentionConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRetentionConfigurationCommandOutput> {
    return de_PutRetentionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
