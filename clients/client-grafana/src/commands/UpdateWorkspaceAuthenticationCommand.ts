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
import {
  UpdateWorkspaceAuthenticationRequest,
  UpdateWorkspaceAuthenticationRequestFilterSensitiveLog,
  UpdateWorkspaceAuthenticationResponse,
  UpdateWorkspaceAuthenticationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateWorkspaceAuthenticationCommand,
  serializeAws_restJson1UpdateWorkspaceAuthenticationCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link UpdateWorkspaceAuthenticationCommand}.
 */
export interface UpdateWorkspaceAuthenticationCommandInput extends UpdateWorkspaceAuthenticationRequest {}
/**
 * The output of {@link UpdateWorkspaceAuthenticationCommand}.
 */
export interface UpdateWorkspaceAuthenticationCommandOutput
  extends UpdateWorkspaceAuthenticationResponse,
    __MetadataBearer {}

/**
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
 * const command = new UpdateWorkspaceAuthenticationCommand(input);
 * const response = await client.send(command);
 * ```
 *
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
      inputFilterSensitiveLog: UpdateWorkspaceAuthenticationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateWorkspaceAuthenticationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateWorkspaceAuthenticationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateWorkspaceAuthenticationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateWorkspaceAuthenticationCommandOutput> {
    return deserializeAws_restJson1UpdateWorkspaceAuthenticationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
