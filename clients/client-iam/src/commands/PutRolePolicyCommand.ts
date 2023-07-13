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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutRolePolicyRequest } from "../models/models_0";
import { de_PutRolePolicyCommand, se_PutRolePolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRolePolicyCommand}.
 */
export interface PutRolePolicyCommandInput extends PutRolePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutRolePolicyCommand}.
 */
export interface PutRolePolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Adds or updates an inline policy document that is embedded in the specified IAM
 *             role.</p>
 *          <p>When you embed an inline policy in a role, the inline policy is used as part of the
 *             role's access (permissions) policy. The role's trust policy is created at the same time
 *             as the role, using <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">
 *                <code>CreateRole</code>
 *             </a>.
 *             You can update a role's trust policy using <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html">
 *                <code>UpdateAssumeRolePolicy</code>
 *             </a>. For more information about roles,
 *             see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">IAM
 *                 roles</a> in the <i>IAM User Guide</i>.</p>
 *          <p>A role can also have a managed policy attached to it. To attach a managed policy to a
 *             role, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachRolePolicy.html">
 *                <code>AttachRolePolicy</code>
 *             </a>. To create a new managed policy, use
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">
 *                <code>CreatePolicy</code>
 *             </a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>For information about the maximum number of inline policies that you can embed with a
 *             role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>Because policy documents can be large, you should use POST rather than GET when
 *                 calling <code>PutRolePolicy</code>. For general information about using the Query
 *                 API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // PutRolePolicyRequest
 *   RoleName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   PolicyDocument: "STRING_VALUE", // required
 * };
 * const command = new PutRolePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRolePolicyCommandInput - {@link PutRolePolicyCommandInput}
 * @returns {@link PutRolePolicyCommandOutput}
 * @see {@link PutRolePolicyCommandInput} for command's `input` shape.
 * @see {@link PutRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>The request was rejected because the policy document was malformed. The error message
 *       describes the specific error.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
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
 * @example To attach a permissions policy to an IAM role
 * ```javascript
 * // The following command adds a permissions policy to the role named Test-Role.
 * const input = {
 *   "PolicyDocument": "{\"Version\":\"2012-10-17\",\"Statement\":{\"Effect\":\"Allow\",\"Action\":\"s3:*\",\"Resource\":\"*\"}}",
 *   "PolicyName": "S3AccessPolicy",
 *   "RoleName": "S3Access"
 * };
 * const command = new PutRolePolicyCommand(input);
 * await client.send(command);
 * // example id: de62fd00-46c7-4601-9e0d-71d5fbb11ecb
 * ```
 *
 */
export class PutRolePolicyCommand extends $Command<
  PutRolePolicyCommandInput,
  PutRolePolicyCommandOutput,
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
  constructor(readonly input: PutRolePolicyCommandInput) {
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
  ): Handler<PutRolePolicyCommandInput, PutRolePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutRolePolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "PutRolePolicyCommand";
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
  private serialize(input: PutRolePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutRolePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRolePolicyCommandOutput> {
    return de_PutRolePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
