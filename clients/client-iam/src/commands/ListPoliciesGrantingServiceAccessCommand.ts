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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  ListPoliciesGrantingServiceAccessRequest,
  ListPoliciesGrantingServiceAccessRequestFilterSensitiveLog,
  ListPoliciesGrantingServiceAccessResponse,
  ListPoliciesGrantingServiceAccessResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListPoliciesGrantingServiceAccessCommand,
  serializeAws_queryListPoliciesGrantingServiceAccessCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link ListPoliciesGrantingServiceAccessCommand}.
 */
export interface ListPoliciesGrantingServiceAccessCommandInput extends ListPoliciesGrantingServiceAccessRequest {}
/**
 * The output of {@link ListPoliciesGrantingServiceAccessCommand}.
 */
export interface ListPoliciesGrantingServiceAccessCommandOutput
  extends ListPoliciesGrantingServiceAccessResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to
 *             access each specified service.</p>
 *          <note>
 *             <p>This operation does not use other policy types when determining whether a resource
 *                 could access a service. These other policy types include resource-based policies,
 *                 access control lists, Organizations policies, IAM permissions boundaries, and STS
 *                 assume role policies. It only applies permissions policy logic. For more about the
 *                 evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *          </note>
 *          <p>The list of policies returned by the operation depends on the ARN of the identity that
 *             you provide.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>User</b> – The list of policies includes
 *                     the managed and inline policies that are attached to the user directly. The list
 *                     also includes any additional managed and inline policies that are attached to
 *                     the group to which the user belongs. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Group</b> – The list of policies includes
 *                     only the managed and inline policies that are attached to the group directly.
 *                     Policies that are attached to the group’s user are not included.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Role</b> – The list of policies includes
 *                     only the managed and inline policies that are attached to the role.</p>
 *             </li>
 *          </ul>
 *          <p>For each managed policy, this operation returns the ARN and policy name. For each
 *             inline policy, it returns the policy name and the entity to which it is attached. Inline
 *             policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *          <p>Policies that are attached to users and roles as permissions boundaries are not
 *             returned. To view which managed policy is currently used to set the permissions boundary
 *             for a user or role, use the <a>GetUser</a> or <a>GetRole</a>
 *             operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListPoliciesGrantingServiceAccessCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListPoliciesGrantingServiceAccessCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListPoliciesGrantingServiceAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPoliciesGrantingServiceAccessCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesGrantingServiceAccessCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 *
 * @example To list policies that allow access to a service
 * ```javascript
 * // The following operation lists policies that allow ExampleUser01 to access IAM or EC2.
 * const input = {
 *   "Arn": "arn:aws:iam::123456789012:user/ExampleUser01",
 *   "ServiceNamespaces": [
 *     "iam",
 *     "ec2"
 *   ]
 * };
 * const command = new ListPoliciesGrantingServiceAccessCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IsTruncated": false,
 *   "PoliciesGrantingServiceAccess": [
 *     {
 *       "Policies": [
 *         {
 *           "PolicyArn": "arn:aws:iam::123456789012:policy/ExampleIamPolicy",
 *           "PolicyName": "ExampleIamPolicy",
 *           "PolicyType": "MANAGED"
 *         },
 *         {
 *           "EntityName": "AWSExampleGroup1",
 *           "EntityType": "GROUP",
 *           "PolicyName": "ExampleGroup1Policy",
 *           "PolicyType": "INLINE"
 *         }
 *       ],
 *       "ServiceNamespace": "iam"
 *     },
 *     {
 *       "Policies": [
 *         {
 *           "PolicyArn": "arn:aws:iam::123456789012:policy/ExampleEc2Policy",
 *           "PolicyName": "ExampleEc2Policy",
 *           "PolicyType": "MANAGED"
 *         }
 *       ],
 *       "ServiceNamespace": "ec2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: listpoliciesaccess-user-1541698749508
 * ```
 *
 */
export class ListPoliciesGrantingServiceAccessCommand extends $Command<
  ListPoliciesGrantingServiceAccessCommandInput,
  ListPoliciesGrantingServiceAccessCommandOutput,
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

  constructor(readonly input: ListPoliciesGrantingServiceAccessCommandInput) {
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
  ): Handler<ListPoliciesGrantingServiceAccessCommandInput, ListPoliciesGrantingServiceAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPoliciesGrantingServiceAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListPoliciesGrantingServiceAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPoliciesGrantingServiceAccessRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPoliciesGrantingServiceAccessResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListPoliciesGrantingServiceAccessCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListPoliciesGrantingServiceAccessCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPoliciesGrantingServiceAccessCommandOutput> {
    return deserializeAws_queryListPoliciesGrantingServiceAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
