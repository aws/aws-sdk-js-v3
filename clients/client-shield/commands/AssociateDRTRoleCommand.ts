import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { AssociateDRTRoleRequest, AssociateDRTRoleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateDRTRoleCommand,
  serializeAws_json1_1AssociateDRTRoleCommand,
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

export type AssociateDRTRoleCommandInput = AssociateDRTRoleRequest;
export type AssociateDRTRoleCommandOutput = AssociateDRTRoleResponse & __MetadataBearer;

/**
 * <p>Authorizes the DDoS Response Team (DRT), using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks. This enables the DRT to inspect your AWS WAF configuration and create or update AWS WAF rules and web ACLs.</p>
 *          <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p>
 *          <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to the role you will specify in the request. For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>. The role must also trust the service principal <code> drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON Policy Elements: Principal</a>.</p>
 *
 *          <p>The DRT will have access only to your AWS WAF and Shield resources. By submitting this request, you authorize the DRT to inspect your AWS WAF and Shield configuration and create and update AWS WAF rules and web ACLs on your behalf. The DRT takes these actions only if explicitly authorized by you.</p>
 *          <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. </p>
 *          <p>To use the services of the DRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
 */
export class AssociateDRTRoleCommand extends $Command<
  AssociateDRTRoleCommandInput,
  AssociateDRTRoleCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateDRTRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateDRTRoleCommandInput, AssociateDRTRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "AssociateDRTRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDRTRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateDRTRoleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateDRTRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateDRTRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateDRTRoleCommandOutput> {
    return deserializeAws_json1_1AssociateDRTRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
