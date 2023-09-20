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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { UpdateStackRequest, UpdateStackResult } from "../models/models_0";
import { de_UpdateStackCommand, se_UpdateStackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateStackCommand}.
 */
export interface UpdateStackCommandInput extends UpdateStackRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStackCommand}.
 */
export interface UpdateStackCommandOutput extends UpdateStackResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified fields for the specified stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // UpdateStackRequest
 *   DisplayName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   StorageConnectors: [ // StorageConnectorList
 *     { // StorageConnector
 *       ConnectorType: "HOMEFOLDERS" || "GOOGLE_DRIVE" || "ONE_DRIVE", // required
 *       ResourceIdentifier: "STRING_VALUE",
 *       Domains: [ // DomainList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DeleteStorageConnectors: true || false,
 *   RedirectURL: "STRING_VALUE",
 *   FeedbackURL: "STRING_VALUE",
 *   AttributesToDelete: [ // StackAttributes
 *     "STORAGE_CONNECTORS" || "STORAGE_CONNECTOR_HOMEFOLDERS" || "STORAGE_CONNECTOR_GOOGLE_DRIVE" || "STORAGE_CONNECTOR_ONE_DRIVE" || "REDIRECT_URL" || "FEEDBACK_URL" || "THEME_NAME" || "USER_SETTINGS" || "EMBED_HOST_DOMAINS" || "IAM_ROLE_ARN" || "ACCESS_ENDPOINTS" || "STREAMING_EXPERIENCE_SETTINGS",
 *   ],
 *   UserSettings: [ // UserSettingList
 *     { // UserSetting
 *       Action: "CLIPBOARD_COPY_FROM_LOCAL_DEVICE" || "CLIPBOARD_COPY_TO_LOCAL_DEVICE" || "FILE_UPLOAD" || "FILE_DOWNLOAD" || "PRINTING_TO_LOCAL_DEVICE" || "DOMAIN_PASSWORD_SIGNIN" || "DOMAIN_SMART_CARD_SIGNIN", // required
 *       Permission: "ENABLED" || "DISABLED", // required
 *     },
 *   ],
 *   ApplicationSettings: { // ApplicationSettings
 *     Enabled: true || false, // required
 *     SettingsGroup: "STRING_VALUE",
 *   },
 *   AccessEndpoints: [ // AccessEndpointList
 *     { // AccessEndpoint
 *       EndpointType: "STREAMING", // required
 *       VpceId: "STRING_VALUE",
 *     },
 *   ],
 *   EmbedHostDomains: [ // EmbedHostDomains
 *     "STRING_VALUE",
 *   ],
 *   StreamingExperienceSettings: { // StreamingExperienceSettings
 *     PreferredProtocol: "TCP" || "UDP",
 *   },
 * };
 * const command = new UpdateStackCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStackResult
 * //   Stack: { // Stack
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     StorageConnectors: [ // StorageConnectorList
 * //       { // StorageConnector
 * //         ConnectorType: "HOMEFOLDERS" || "GOOGLE_DRIVE" || "ONE_DRIVE", // required
 * //         ResourceIdentifier: "STRING_VALUE",
 * //         Domains: [ // DomainList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     RedirectURL: "STRING_VALUE",
 * //     FeedbackURL: "STRING_VALUE",
 * //     StackErrors: [ // StackErrors
 * //       { // StackError
 * //         ErrorCode: "STORAGE_CONNECTOR_ERROR" || "INTERNAL_SERVICE_ERROR",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //     UserSettings: [ // UserSettingList
 * //       { // UserSetting
 * //         Action: "CLIPBOARD_COPY_FROM_LOCAL_DEVICE" || "CLIPBOARD_COPY_TO_LOCAL_DEVICE" || "FILE_UPLOAD" || "FILE_DOWNLOAD" || "PRINTING_TO_LOCAL_DEVICE" || "DOMAIN_PASSWORD_SIGNIN" || "DOMAIN_SMART_CARD_SIGNIN", // required
 * //         Permission: "ENABLED" || "DISABLED", // required
 * //       },
 * //     ],
 * //     ApplicationSettings: { // ApplicationSettingsResponse
 * //       Enabled: true || false,
 * //       SettingsGroup: "STRING_VALUE",
 * //       S3BucketName: "STRING_VALUE",
 * //     },
 * //     AccessEndpoints: [ // AccessEndpointList
 * //       { // AccessEndpoint
 * //         EndpointType: "STREAMING", // required
 * //         VpceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     EmbedHostDomains: [ // EmbedHostDomains
 * //       "STRING_VALUE",
 * //     ],
 * //     StreamingExperienceSettings: { // StreamingExperienceSettings
 * //       PreferredProtocol: "TCP" || "UDP",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateStackCommandInput - {@link UpdateStackCommandInput}
 * @returns {@link UpdateStackCommandOutput}
 * @see {@link UpdateStackCommandInput} for command's `input` shape.
 * @see {@link UpdateStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *  <p>The image can't be updated because it's not compatible for updates.</p>
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>The specified role is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class UpdateStackCommand extends $Command<
  UpdateStackCommandInput,
  UpdateStackCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: UpdateStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStackCommandInput, UpdateStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateStackCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "UpdateStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PhotonAdminProxyService",
        operation: "UpdateStack",
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
  private serialize(input: UpdateStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateStackCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStackCommandOutput> {
    return de_UpdateStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
