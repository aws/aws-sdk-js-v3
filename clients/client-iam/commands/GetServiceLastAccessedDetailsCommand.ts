import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetServiceLastAccessedDetailsRequest, GetServiceLastAccessedDetailsResponse } from "../models/models_0";
import {
  deserializeAws_queryGetServiceLastAccessedDetailsCommand,
  serializeAws_queryGetServiceLastAccessedDetailsCommand,
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

export interface GetServiceLastAccessedDetailsCommandInput extends GetServiceLastAccessedDetailsRequest {}
export interface GetServiceLastAccessedDetailsCommandOutput
  extends GetServiceLastAccessedDetailsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a service last accessed report that was created using the
 *                 <code>GenerateServiceLastAccessedDetails</code> operation. You can use the
 *                 <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to
 *             retrieve the status of your report job. When the report is complete, you can retrieve
 *             the generated report. The report includes a list of AWS services that the resource
 *             (user, group, role, or managed policy) can access.</p>
 *         <note>
 *             <p>Service last accessed data does not use other policy types when determining
 *                 whether a resource could access a service. These other policy types include
 *                 resource-based policies, access control lists, AWS Organizations policies, IAM
 *                 permissions boundaries, and AWS STS assume role policies. It only applies
 *                 permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *         </note>
 *         <p>For each service that the resource could access using permissions policies, the
 *             operation returns details about the most recent access attempt. If there was no attempt,
 *             the service is listed without details about the most recent attempt to access the
 *             service. If the operation fails, the <code>GetServiceLastAccessedDetails</code>
 *             operation returns the reason that it failed.</p>
 *         <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services.
 *             This list includes the number of entities that have attempted to access the service and
 *             the date and time of the last attempt. It also returns the ARN of the following entity,
 *             depending on the resource ARN that you used to generate the report:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>User</b> – Returns the user ARN that you
 *                     used to generate the report</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Group</b> – Returns the ARN of the group
 *                     member (user) that last attempted to access the service</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Role</b> – Returns the role ARN that you
 *                     used to generate the report</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Policy</b> – Returns the ARN of the user
 *                     or role that last used the policy to attempt to access the service</p>
 *             </li>
 *          </ul>
 *         <p>By default, the list is sorted by service namespace.</p>
 *         <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report,
 *             this operation returns service and action last accessed data. This includes the most
 *             recent access attempt for each tracked action within a service. Otherwise, this
 *             operation returns only service data.</p>
 *         <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLastAccessedDetailsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLastAccessedDetailsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetServiceLastAccessedDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceLastAccessedDetailsCommandInput} for command's `input` shape.
 * @see {@link GetServiceLastAccessedDetailsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetServiceLastAccessedDetailsCommand extends $Command<
  GetServiceLastAccessedDetailsCommandInput,
  GetServiceLastAccessedDetailsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceLastAccessedDetailsCommandInput) {
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
  ): Handler<GetServiceLastAccessedDetailsCommandInput, GetServiceLastAccessedDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetServiceLastAccessedDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceLastAccessedDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceLastAccessedDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServiceLastAccessedDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetServiceLastAccessedDetailsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceLastAccessedDetailsCommandOutput> {
    return deserializeAws_queryGetServiceLastAccessedDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
