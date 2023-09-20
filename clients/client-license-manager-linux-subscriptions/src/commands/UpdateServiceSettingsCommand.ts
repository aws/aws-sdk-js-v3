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

import {
  LicenseManagerLinuxSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerLinuxSubscriptionsClient";
import { UpdateServiceSettingsRequest, UpdateServiceSettingsResponse } from "../models/models_0";
import { de_UpdateServiceSettingsCommand, se_UpdateServiceSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceSettingsCommand}.
 */
export interface UpdateServiceSettingsCommandInput extends UpdateServiceSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceSettingsCommand}.
 */
export interface UpdateServiceSettingsCommandOutput extends UpdateServiceSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the service settings for Linux subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, UpdateServiceSettingsCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, UpdateServiceSettingsCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
 * const client = new LicenseManagerLinuxSubscriptionsClient(config);
 * const input = { // UpdateServiceSettingsRequest
 *   LinuxSubscriptionsDiscovery: "STRING_VALUE", // required
 *   LinuxSubscriptionsDiscoverySettings: { // LinuxSubscriptionsDiscoverySettings
 *     SourceRegions: [ // StringList // required
 *       "STRING_VALUE",
 *     ],
 *     OrganizationIntegration: "STRING_VALUE", // required
 *   },
 *   AllowUpdate: true || false,
 * };
 * const command = new UpdateServiceSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceSettingsResponse
 * //   LinuxSubscriptionsDiscovery: "STRING_VALUE",
 * //   LinuxSubscriptionsDiscoverySettings: { // LinuxSubscriptionsDiscoverySettings
 * //     SourceRegions: [ // StringList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     OrganizationIntegration: "STRING_VALUE", // required
 * //   },
 * //   Status: "STRING_VALUE",
 * //   StatusMessage: { // StringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   HomeRegions: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateServiceSettingsCommandInput - {@link UpdateServiceSettingsCommandInput}
 * @returns {@link UpdateServiceSettingsCommandOutput}
 * @see {@link UpdateServiceSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceSettingsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerLinuxSubscriptionsClientResolvedConfig | config} for LicenseManagerLinuxSubscriptionsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerLinuxSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerLinuxSubscriptions service.</p>
 *
 */
export class UpdateServiceSettingsCommand extends $Command<
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput,
  LicenseManagerLinuxSubscriptionsClientResolvedConfig
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
  constructor(readonly input: UpdateServiceSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerLinuxSubscriptionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServiceSettingsCommandInput, UpdateServiceSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateServiceSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerLinuxSubscriptionsClient";
    const commandName = "UpdateServiceSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LicenseManagerLinuxSubscriptions",
        operation: "UpdateServiceSettings",
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
  private serialize(input: UpdateServiceSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateServiceSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceSettingsCommandOutput> {
    return de_UpdateServiceSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
