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

import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { UpdateLicenseConfigurationRequest, UpdateLicenseConfigurationResponse } from "../models/models_0";
import { de_UpdateLicenseConfigurationCommand, se_UpdateLicenseConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLicenseConfigurationCommand}.
 */
export interface UpdateLicenseConfigurationCommandInput extends UpdateLicenseConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLicenseConfigurationCommand}.
 */
export interface UpdateLicenseConfigurationCommandOutput extends UpdateLicenseConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the attributes of an existing license configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // UpdateLicenseConfigurationRequest
 *   LicenseConfigurationArn: "STRING_VALUE", // required
 *   LicenseConfigurationStatus: "AVAILABLE" || "DISABLED",
 *   LicenseRules: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   LicenseCount: Number("long"),
 *   LicenseCountHardLimit: true || false,
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ProductInformationList: [ // ProductInformationList
 *     { // ProductInformation
 *       ResourceType: "STRING_VALUE", // required
 *       ProductInformationFilterList: [ // ProductInformationFilterList // required
 *         { // ProductInformationFilter
 *           ProductInformationFilterName: "STRING_VALUE", // required
 *           ProductInformationFilterValue: [
 *             "STRING_VALUE",
 *           ],
 *           ProductInformationFilterComparator: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   DisassociateWhenNotFound: true || false,
 * };
 * const command = new UpdateLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLicenseConfigurationCommandInput - {@link UpdateLicenseConfigurationCommandInput}
 * @returns {@link UpdateLicenseConfigurationCommandOutput}
 * @see {@link UpdateLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 */
export class UpdateLicenseConfigurationCommand extends $Command<
  UpdateLicenseConfigurationCommandInput,
  UpdateLicenseConfigurationCommandOutput,
  LicenseManagerClientResolvedConfig
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
  constructor(readonly input: UpdateLicenseConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLicenseConfigurationCommandInput, UpdateLicenseConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLicenseConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "UpdateLicenseConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLicenseManager",
        operation: "UpdateLicenseConfiguration",
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
  private serialize(input: UpdateLicenseConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLicenseConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLicenseConfigurationCommandOutput> {
    return de_UpdateLicenseConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
