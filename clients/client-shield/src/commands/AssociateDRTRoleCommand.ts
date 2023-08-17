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

import { AssociateDRTRoleRequest, AssociateDRTRoleResponse } from "../models/models_0";
import { de_AssociateDRTRoleCommand, se_AssociateDRTRoleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateDRTRoleCommand}.
 */
export interface AssociateDRTRoleCommandInput extends AssociateDRTRoleRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDRTRoleCommand}.
 */
export interface AssociateDRTRoleCommandOutput extends AssociateDRTRoleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.</p>
 *          <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p>
 *          <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <code>AWSShieldDRTAccessPolicy</code> managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a>. For more information see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Adding and removing IAM identity permissions</a>. The role must also trust the service principal
 * <code>drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON policy elements: Principal</a>.</p>
 *
 *          <p>The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.</p>
 *          <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user permissions to pass a role to an Amazon Web Services service</a>. </p>
 *          <p>To use the services of the SRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, AssociateDRTRoleCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, AssociateDRTRoleCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = { // AssociateDRTRoleRequest
 *   RoleArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateDRTRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDRTRoleCommandInput - {@link AssociateDRTRoleCommandInput}
 * @returns {@link AssociateDRTRoleCommandOutput}
 * @see {@link AssociateDRTRoleCommandInput} for command's `input` shape.
 * @see {@link AssociateDRTRoleCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link AccessDeniedForDependencyException} (client fault)
 *  <p>In order to grant the necessary access to the Shield Response Team (SRT) the user submitting the request must have the <code>iam:PassRole</code> permission. This error indicates the user did not have the appropriate permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an Amazon Web Services Service</a>. </p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>Exception that indicates that the operation would not cause any change to occur.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link OptimisticLockException} (client fault)
 *  <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 */
export class AssociateDRTRoleCommand extends $Command<
  AssociateDRTRoleCommandInput,
  AssociateDRTRoleCommandOutput,
  ShieldClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateDRTRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "AssociateDRTRoleCommand";
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
  private serialize(input: AssociateDRTRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateDRTRoleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateDRTRoleCommandOutput> {
    return de_AssociateDRTRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
