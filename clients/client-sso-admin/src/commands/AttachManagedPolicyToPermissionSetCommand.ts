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

import {
  AttachManagedPolicyToPermissionSetRequest,
  AttachManagedPolicyToPermissionSetRequestFilterSensitiveLog,
  AttachManagedPolicyToPermissionSetResponse,
  AttachManagedPolicyToPermissionSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommand,
  serializeAws_json1_1AttachManagedPolicyToPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface AttachManagedPolicyToPermissionSetCommandInput extends AttachManagedPolicyToPermissionSetRequest {}
export interface AttachManagedPolicyToPermissionSetCommandOutput
  extends AttachManagedPolicyToPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Attaches an AWS managed policy ARN to a permission set.</p>
 *          <note>
 *             <p>If the permission set is already referenced by one or more account assignments, you will
 *         need to call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> after this operation.
 *         Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates
 *         to all assigned accounts.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, AttachManagedPolicyToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, AttachManagedPolicyToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new AttachManagedPolicyToPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachManagedPolicyToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link AttachManagedPolicyToPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class AttachManagedPolicyToPermissionSetCommand extends $Command<
  AttachManagedPolicyToPermissionSetCommandInput,
  AttachManagedPolicyToPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
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

  constructor(readonly input: AttachManagedPolicyToPermissionSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachManagedPolicyToPermissionSetCommandInput, AttachManagedPolicyToPermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachManagedPolicyToPermissionSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "AttachManagedPolicyToPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachManagedPolicyToPermissionSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AttachManagedPolicyToPermissionSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AttachManagedPolicyToPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AttachManagedPolicyToPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AttachManagedPolicyToPermissionSetCommandOutput> {
    return deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
