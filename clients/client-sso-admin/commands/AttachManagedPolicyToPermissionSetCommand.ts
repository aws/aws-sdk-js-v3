import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import {
  AttachManagedPolicyToPermissionSetRequest,
  AttachManagedPolicyToPermissionSetResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommand,
  serializeAws_json1_1AttachManagedPolicyToPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type AttachManagedPolicyToPermissionSetCommandInput = AttachManagedPolicyToPermissionSetRequest;
export type AttachManagedPolicyToPermissionSetCommandOutput = AttachManagedPolicyToPermissionSetResponse &
  __MetadataBearer;

/**
 * <p>Attaches an IAM managed policy ARN to a permission set.</p>
 *          <note>
 *             <p>If the permission set is already referenced by one or more account assignments, you will need to call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p>
 *          </note>
 */
export class AttachManagedPolicyToPermissionSetCommand extends $Command<
  AttachManagedPolicyToPermissionSetCommandInput,
  AttachManagedPolicyToPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "AttachManagedPolicyToPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachManagedPolicyToPermissionSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachManagedPolicyToPermissionSetResponse.filterSensitiveLog,
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
