import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AttachRolePolicyRequest } from "../models/models_0";
import {
  deserializeAws_queryAttachRolePolicyCommand,
  serializeAws_queryAttachRolePolicyCommand,
} from "../protocols/Aws_query";
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

export type AttachRolePolicyCommandInput = AttachRolePolicyRequest;
export type AttachRolePolicyCommandOutput = __MetadataBearer;

/**
 * <p>Attaches the specified managed policy to the specified IAM role. When you attach a
 *          managed policy to a role, the managed policy becomes part of the role's permission (access)
 *          policy.</p>
 *          <note>
 *             <p>You cannot use a managed policy as the role's trust policy. The role's trust policy
 *             is created at the same time as the role, using <a>CreateRole</a>. You can
 *             update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p>
 *          </note>
 *          <p>Use this API to attach a <i>managed</i> policy to a role. To embed an
 *          inline policy in a role, use <a>PutRolePolicy</a>. For more information about
 *          policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>.</p>
 */
export class AttachRolePolicyCommand extends $Command<
  AttachRolePolicyCommandInput,
  AttachRolePolicyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachRolePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachRolePolicyCommandInput, AttachRolePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "AttachRolePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachRolePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachRolePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAttachRolePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachRolePolicyCommandOutput> {
    return deserializeAws_queryAttachRolePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
