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
  LicenseManagerLinuxSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerLinuxSubscriptionsClient";
import { GetServiceSettingsRequest, GetServiceSettingsResponse } from "../models/models_0";
import { de_GetServiceSettingsCommand, se_GetServiceSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetServiceSettingsCommand}.
 */
export interface GetServiceSettingsCommandInput extends GetServiceSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceSettingsCommand}.
 */
export interface GetServiceSettingsCommandOutput extends GetServiceSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the Linux subscriptions service settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, GetServiceSettingsCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, GetServiceSettingsCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
 * const client = new LicenseManagerLinuxSubscriptionsClient(config);
 * const input = {};
 * const command = new GetServiceSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceSettingsResponse
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
 * @param GetServiceSettingsCommandInput - {@link GetServiceSettingsCommandInput}
 * @returns {@link GetServiceSettingsCommandOutput}
 * @see {@link GetServiceSettingsCommandInput} for command's `input` shape.
 * @see {@link GetServiceSettingsCommandOutput} for command's `response` shape.
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
export class GetServiceSettingsCommand extends $Command<
  GetServiceSettingsCommandInput,
  GetServiceSettingsCommandOutput,
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
  constructor(readonly input: GetServiceSettingsCommandInput) {
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
  ): Handler<GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServiceSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerLinuxSubscriptionsClient";
    const commandName = "GetServiceSettingsCommand";
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
  private serialize(input: GetServiceSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetServiceSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServiceSettingsCommandOutput> {
    return de_GetServiceSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
