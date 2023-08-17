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

import {
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import { UpdateIdentityProviderSettingsRequest, UpdateIdentityProviderSettingsResponse } from "../models/models_0";
import {
  de_UpdateIdentityProviderSettingsCommand,
  se_UpdateIdentityProviderSettingsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateIdentityProviderSettingsCommand}.
 */
export interface UpdateIdentityProviderSettingsCommandInput extends UpdateIdentityProviderSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIdentityProviderSettingsCommand}.
 */
export interface UpdateIdentityProviderSettingsCommandOutput
  extends UpdateIdentityProviderSettingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates additional product configuration settings for the registered identity
 *       provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, UpdateIdentityProviderSettingsCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, UpdateIdentityProviderSettingsCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // UpdateIdentityProviderSettingsRequest
 *   IdentityProvider: { // IdentityProvider Union: only one key present
 *     ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 *       DirectoryId: "STRING_VALUE",
 *     },
 *   },
 *   Product: "STRING_VALUE", // required
 *   UpdateSettings: { // UpdateSettings
 *     AddSubnets: [ // Subnets // required
 *       "STRING_VALUE",
 *     ],
 *     RemoveSubnets: [ // required
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateIdentityProviderSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIdentityProviderSettingsResponse
 * //   IdentityProviderSummary: { // IdentityProviderSummary
 * //     IdentityProvider: { // IdentityProvider Union: only one key present
 * //       ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 * //         DirectoryId: "STRING_VALUE",
 * //       },
 * //     },
 * //     Settings: { // Settings
 * //       Subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupId: "STRING_VALUE", // required
 * //     },
 * //     Product: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     FailureMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIdentityProviderSettingsCommandInput - {@link UpdateIdentityProviderSettingsCommandInput}
 * @returns {@link UpdateIdentityProviderSettingsCommandOutput}
 * @see {@link UpdateIdentityProviderSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityProviderSettingsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.</p>
 *
 */
export class UpdateIdentityProviderSettingsCommand extends $Command<
  UpdateIdentityProviderSettingsCommandInput,
  UpdateIdentityProviderSettingsCommandOutput,
  LicenseManagerUserSubscriptionsClientResolvedConfig
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
  constructor(readonly input: UpdateIdentityProviderSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerUserSubscriptionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateIdentityProviderSettingsCommandInput, UpdateIdentityProviderSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateIdentityProviderSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerUserSubscriptionsClient";
    const commandName = "UpdateIdentityProviderSettingsCommand";
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
  private serialize(
    input: UpdateIdentityProviderSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateIdentityProviderSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateIdentityProviderSettingsCommandOutput> {
    return de_UpdateIdentityProviderSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
