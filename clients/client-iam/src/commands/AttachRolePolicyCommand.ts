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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AttachRolePolicyRequest } from "../models/models_0";
import { de_AttachRolePolicyCommand, se_AttachRolePolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AttachRolePolicyCommand}.
 */
export interface AttachRolePolicyCommandInput extends AttachRolePolicyRequest {}
/**
 * @public
 *
 * The output of {@link AttachRolePolicyCommand}.
 */
export interface AttachRolePolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Attaches the specified managed policy to the specified IAM role. When you attach a
 *             managed policy to a role, the managed policy becomes part of the role's permission
 *             (access) policy.</p>
 *          <note>
 *             <p>You cannot use a managed policy as the role's trust policy. The role's trust
 *                 policy is created at the same time as the role, using <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">
 *                   <code>CreateRole</code>
 *                </a>. You can update a role's trust policy using
 *                     <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html">
 *                   <code>UpdateAssumerolePolicy</code>
 *                </a>.</p>
 *          </note>
 *          <p>Use this operation to attach a <i>managed</i> policy to a role. To embed
 *             an inline policy in a role, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePolicy.html">
 *                <code>PutRolePolicy</code>
 *             </a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>As a best practice, you can validate your IAM policies.
 *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
 *             in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AttachRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AttachRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // AttachRolePolicyRequest
 *   RoleName: "STRING_VALUE", // required
 *   PolicyArn: "STRING_VALUE", // required
 * };
 * const command = new AttachRolePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachRolePolicyCommandInput - {@link AttachRolePolicyCommandInput}
 * @returns {@link AttachRolePolicyCommandOutput}
 * @see {@link AttachRolePolicyCommandInput} for command's `input` shape.
 * @see {@link AttachRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link PolicyNotAttachableException} (client fault)
 *  <p>The request failed because Amazon Web Services service role policies can only be attached to the
 *       service-linked role for that service.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link UnmodifiableEntityException} (client fault)
 *  <p>The request was rejected because service-linked roles are protected Amazon Web Services resources. Only
 *       the service that depends on the service-linked role can modify or delete the role on your
 *       behalf. The error message includes the name of the service that depends on this service-linked
 *       role. You must request the change through that service.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To attach a managed policy to an IAM role
 * ```javascript
 * // The following command attaches the AWS managed policy named ReadOnlyAccess to the IAM role named ReadOnlyRole.
 * const input = {
 *   "PolicyArn": "arn:aws:iam::aws:policy/ReadOnlyAccess",
 *   "RoleName": "ReadOnlyRole"
 * };
 * const command = new AttachRolePolicyCommand(input);
 * await client.send(command);
 * // example id: 3e1b8c7c-99c8-4fc4-a20c-131fe3f22c7e
 * ```
 *
 */
export class AttachRolePolicyCommand extends $Command<
  AttachRolePolicyCommandInput,
  AttachRolePolicyCommandOutput,
  IAMClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachRolePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "AttachRolePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "AttachRolePolicy",
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
  private serialize(input: AttachRolePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AttachRolePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachRolePolicyCommandOutput> {
    return de_AttachRolePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
