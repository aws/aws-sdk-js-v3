// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import { UpdateWorkspaceAuthenticationRequest, UpdateWorkspaceAuthenticationResponse } from "../models/models_0";
import {
  de_UpdateWorkspaceAuthenticationCommand,
  se_UpdateWorkspaceAuthenticationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateWorkspaceAuthenticationCommand}.
 */
export interface UpdateWorkspaceAuthenticationCommandInput extends UpdateWorkspaceAuthenticationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceAuthenticationCommand}.
 */
export interface UpdateWorkspaceAuthenticationCommandOutput
  extends UpdateWorkspaceAuthenticationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Use this operation to define the identity provider (IdP) that this workspace
 *             authenticates users from, using SAML. You can also map SAML assertion attributes to
 *             workspace user information and define which groups in the assertion attribute are to
 *             have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p>
 *          <note>
 *             <p>Changes to the authentication method for a workspace may take a few minutes to
 *                 take effect.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, UpdateWorkspaceAuthenticationCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, UpdateWorkspaceAuthenticationCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const input = { // UpdateWorkspaceAuthenticationRequest
 *   workspaceId: "STRING_VALUE", // required
 *   authenticationProviders: [ // AuthenticationProviders // required
 *     "STRING_VALUE",
 *   ],
 *   samlConfiguration: { // SamlConfiguration
 *     idpMetadata: { // IdpMetadata Union: only one key present
 *       url: "STRING_VALUE",
 *       xml: "STRING_VALUE",
 *     },
 *     assertionAttributes: { // AssertionAttributes
 *       name: "STRING_VALUE",
 *       login: "STRING_VALUE",
 *       email: "STRING_VALUE",
 *       groups: "STRING_VALUE",
 *       role: "STRING_VALUE",
 *       org: "STRING_VALUE",
 *     },
 *     roleValues: { // RoleValues
 *       editor: [ // RoleValueList
 *         "STRING_VALUE",
 *       ],
 *       admin: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     allowedOrganizations: [ // AllowedOrganizations
 *       "STRING_VALUE",
 *     ],
 *     loginValidityDuration: Number("int"),
 *   },
 * };
 * const command = new UpdateWorkspaceAuthenticationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateWorkspaceAuthenticationCommandInput - {@link UpdateWorkspaceAuthenticationCommandInput}
 * @returns {@link UpdateWorkspaceAuthenticationCommandOutput}
 * @see {@link UpdateWorkspaceAuthenticationCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 *
 */
export class UpdateWorkspaceAuthenticationCommand extends $Command<
  UpdateWorkspaceAuthenticationCommandInput,
  UpdateWorkspaceAuthenticationCommandOutput,
  GrafanaClientResolvedConfig
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
  constructor(readonly input: UpdateWorkspaceAuthenticationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GrafanaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkspaceAuthenticationCommandInput, UpdateWorkspaceAuthenticationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkspaceAuthenticationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GrafanaClient";
    const commandName = "UpdateWorkspaceAuthenticationCommand";
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
  private serialize(input: UpdateWorkspaceAuthenticationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateWorkspaceAuthenticationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateWorkspaceAuthenticationCommandOutput> {
    return de_UpdateWorkspaceAuthenticationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
