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
  ModifyCertificateBasedAuthPropertiesRequest,
  ModifyCertificateBasedAuthPropertiesResult,
} from "../models/models_0";
import {
  de_ModifyCertificateBasedAuthPropertiesCommand,
  se_ModifyCertificateBasedAuthPropertiesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyCertificateBasedAuthPropertiesCommand}.
 */
export interface ModifyCertificateBasedAuthPropertiesCommandInput extends ModifyCertificateBasedAuthPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyCertificateBasedAuthPropertiesCommand}.
 */
export interface ModifyCertificateBasedAuthPropertiesCommandOutput
  extends ModifyCertificateBasedAuthPropertiesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the properties of the certificate-based authentication you want
 *          to use with your WorkSpaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyCertificateBasedAuthPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyCertificateBasedAuthPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifyCertificateBasedAuthPropertiesRequest
 *   ResourceId: "STRING_VALUE", // required
 *   CertificateBasedAuthProperties: { // CertificateBasedAuthProperties
 *     Status: "DISABLED" || "ENABLED",
 *     CertificateAuthorityArn: "STRING_VALUE",
 *   },
 *   PropertiesToDelete: [ // DeletableCertificateBasedAuthPropertiesList
 *     "CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN",
 *   ],
 * };
 * const command = new ModifyCertificateBasedAuthPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyCertificateBasedAuthPropertiesCommandInput - {@link ModifyCertificateBasedAuthPropertiesCommandInput}
 * @returns {@link ModifyCertificateBasedAuthPropertiesCommandOutput}
 * @see {@link ModifyCertificateBasedAuthPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyCertificateBasedAuthPropertiesCommandOutput} for command's `response` shape.
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
export class ModifyCertificateBasedAuthPropertiesCommand extends $Command<
  ModifyCertificateBasedAuthPropertiesCommandInput,
  ModifyCertificateBasedAuthPropertiesCommandOutput,
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
  constructor(readonly input: ModifyCertificateBasedAuthPropertiesCommandInput) {
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
  ): Handler<ModifyCertificateBasedAuthPropertiesCommandInput, ModifyCertificateBasedAuthPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyCertificateBasedAuthPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifyCertificateBasedAuthPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "ModifyCertificateBasedAuthProperties",
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
  private serialize(
    input: ModifyCertificateBasedAuthPropertiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyCertificateBasedAuthPropertiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyCertificateBasedAuthPropertiesCommandOutput> {
    return de_ModifyCertificateBasedAuthPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
