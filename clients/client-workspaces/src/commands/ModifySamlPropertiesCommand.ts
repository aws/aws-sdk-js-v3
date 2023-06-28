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

import { ModifySamlPropertiesRequest, ModifySamlPropertiesResult } from "../models/models_0";
import { de_ModifySamlPropertiesCommand, se_ModifySamlPropertiesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifySamlPropertiesCommand}.
 */
export interface ModifySamlPropertiesCommandInput extends ModifySamlPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ModifySamlPropertiesCommand}.
 */
export interface ModifySamlPropertiesCommandOutput extends ModifySamlPropertiesResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies multiple properties related to SAML 2.0 authentication, including the enablement status,
 *          user access URL, and relay state parameter name that are used for configuring federation with an
 *          SAML 2.0 identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifySamlPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifySamlPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifySamlPropertiesRequest
 *   ResourceId: "STRING_VALUE", // required
 *   SamlProperties: { // SamlProperties
 *     Status: "DISABLED" || "ENABLED" || "ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK",
 *     UserAccessUrl: "STRING_VALUE",
 *     RelayStateParameterName: "STRING_VALUE",
 *   },
 *   PropertiesToDelete: [ // DeletableSamlPropertiesList
 *     "SAML_PROPERTIES_USER_ACCESS_URL" || "SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME",
 *   ],
 * };
 * const command = new ModifySamlPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifySamlPropertiesCommandInput - {@link ModifySamlPropertiesCommandInput}
 * @returns {@link ModifySamlPropertiesCommandOutput}
 * @see {@link ModifySamlPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifySamlPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class ModifySamlPropertiesCommand extends $Command<
  ModifySamlPropertiesCommandInput,
  ModifySamlPropertiesCommandOutput,
  WorkSpacesClientResolvedConfig
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
  constructor(readonly input: ModifySamlPropertiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifySamlPropertiesCommandInput, ModifySamlPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifySamlPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifySamlPropertiesCommand";
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
  private serialize(input: ModifySamlPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifySamlPropertiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySamlPropertiesCommandOutput> {
    return de_ModifySamlPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
