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
import {
  ConfigurationProfile,
  ConfigurationProfileFilterSensitiveLog,
  UpdateConfigurationProfileRequest,
  UpdateConfigurationProfileRequestFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateConfigurationProfileCommand, se_UpdateConfigurationProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationProfileCommand}.
 */
export interface UpdateConfigurationProfileCommandInput extends UpdateConfigurationProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationProfileCommand}.
 */
export interface UpdateConfigurationProfileCommandOutput extends ConfigurationProfile, __MetadataBearer {}

/**
 * @public
 * <p>Updates a configuration profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, UpdateConfigurationProfileCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, UpdateConfigurationProfileCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // UpdateConfigurationProfileRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   RetrievalRoleArn: "STRING_VALUE",
 *   Validators: [ // ValidatorList
 *     { // Validator
 *       Type: "JSON_SCHEMA" || "LAMBDA", // required
 *       Content: "STRING_VALUE", // required
 *     },
 *   ],
 *   KmsKeyIdentifier: "STRING_VALUE",
 * };
 * const command = new UpdateConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * // { // ConfigurationProfile
 * //   ApplicationId: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   RetrievalRoleArn: "STRING_VALUE",
 * //   Validators: [ // ValidatorList
 * //     { // Validator
 * //       Type: "JSON_SCHEMA" || "LAMBDA", // required
 * //       Content: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Type: "STRING_VALUE",
 * //   KmsKeyArn: "STRING_VALUE",
 * //   KmsKeyIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateConfigurationProfileCommandInput - {@link UpdateConfigurationProfileCommandInput}
 * @returns {@link UpdateConfigurationProfileCommandOutput}
 * @see {@link UpdateConfigurationProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationProfileCommandOutput} for command's `response` shape.
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
 * @example To update a configuration profile
 * ```javascript
 * // The following update-configuration-profile example updates the description of the specified configuration profile.
 * const input = {
 *   "ApplicationId": "339ohji",
 *   "ConfigurationProfileId": "ur8hx2f",
 *   "Description": "Configuration profile used for examples."
 * };
 * const command = new UpdateConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationId": "339ohji",
 *   "Description": "Configuration profile used for examples.",
 *   "Id": "ur8hx2f",
 *   "LocationUri": "ssm-parameter://Example-Parameter",
 *   "Name": "Example-Configuration-Profile",
 *   "RetrievalRoleArn": "arn:aws:iam::111122223333:role/Example-App-Config-Role"
 * }
 * *\/
 * // example id: to-update-a-configuration-profile-1632330721974
 * ```
 *
 */
export class UpdateConfigurationProfileCommand extends $Command<
  UpdateConfigurationProfileCommandInput,
  UpdateConfigurationProfileCommandOutput,
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
  constructor(readonly input: UpdateConfigurationProfileCommandInput) {
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
  ): Handler<UpdateConfigurationProfileCommandInput, UpdateConfigurationProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConfigurationProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "UpdateConfigurationProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConfigurationProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationProfileFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAppConfig",
        operation: "UpdateConfigurationProfile",
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
  private serialize(input: UpdateConfigurationProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateConfigurationProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConfigurationProfileCommandOutput> {
    return de_UpdateConfigurationProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
