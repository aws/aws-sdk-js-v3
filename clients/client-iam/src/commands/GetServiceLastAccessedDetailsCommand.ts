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
import { GetServiceLastAccessedDetailsRequest, GetServiceLastAccessedDetailsResponse } from "../models/models_0";
import {
  de_GetServiceLastAccessedDetailsCommand,
  se_GetServiceLastAccessedDetailsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetServiceLastAccessedDetailsCommand}.
 */
export interface GetServiceLastAccessedDetailsCommandInput extends GetServiceLastAccessedDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceLastAccessedDetailsCommand}.
 */
export interface GetServiceLastAccessedDetailsCommandOutput
  extends GetServiceLastAccessedDetailsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a service last accessed report that was created using the
 *                 <code>GenerateServiceLastAccessedDetails</code> operation. You can use the
 *                 <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to
 *             retrieve the status of your report job. When the report is complete, you can retrieve
 *             the generated report. The report includes a list of Amazon Web Services services that the resource
 *             (user, group, role, or managed policy) can access.</p>
 *          <note>
 *             <p>Service last accessed data does not use other policy types when determining
 *                 whether a resource could access a service. These other policy types include
 *                 resource-based policies, access control lists, Organizations policies, IAM permissions
 *                 boundaries, and STS assume role policies. It only applies permissions policy
 *                 logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *          </note>
 *          <p>For each service that the resource could access using permissions policies, the
 *             operation returns details about the most recent access attempt. If there was no attempt,
 *             the service is listed without details about the most recent attempt to access the
 *             service. If the operation fails, the <code>GetServiceLastAccessedDetails</code>
 *             operation returns the reason that it failed.</p>
 *          <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services.
 *             This list includes the number of entities that have attempted to access the service and
 *             the date and time of the last attempt. It also returns the ARN of the following entity,
 *             depending on the resource ARN that you used to generate the report:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>User</b> – Returns the user ARN that you
 *                     used to generate the report</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Group</b> – Returns the ARN of the group
 *                     member (user) that last attempted to access the service</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Role</b> – Returns the role ARN that you
 *                     used to generate the report</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Policy</b> – Returns the ARN of the user
 *                     or role that last used the policy to attempt to access the service</p>
 *             </li>
 *          </ul>
 *          <p>By default, the list is sorted by service namespace.</p>
 *          <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report,
 *             this operation returns service and action last accessed data. This includes the most
 *             recent access attempt for each tracked action within a service. Otherwise, this
 *             operation returns only service data.</p>
 *          <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLastAccessedDetailsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLastAccessedDetailsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetServiceLastAccessedDetailsRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new GetServiceLastAccessedDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceLastAccessedDetailsResponse
 * //   JobStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //   JobType: "SERVICE_LEVEL" || "ACTION_LEVEL",
 * //   JobCreationDate: new Date("TIMESTAMP"), // required
 * //   ServicesLastAccessed: [ // ServicesLastAccessed // required
 * //     { // ServiceLastAccessed
 * //       ServiceName: "STRING_VALUE", // required
 * //       LastAuthenticated: new Date("TIMESTAMP"),
 * //       ServiceNamespace: "STRING_VALUE", // required
 * //       LastAuthenticatedEntity: "STRING_VALUE",
 * //       LastAuthenticatedRegion: "STRING_VALUE",
 * //       TotalAuthenticatedEntities: Number("int"),
 * //       TrackedActionsLastAccessed: [ // TrackedActionsLastAccessed
 * //         { // TrackedActionLastAccessed
 * //           ActionName: "STRING_VALUE",
 * //           LastAccessedEntity: "STRING_VALUE",
 * //           LastAccessedTime: new Date("TIMESTAMP"),
 * //           LastAccessedRegion: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   JobCompletionDate: new Date("TIMESTAMP"), // required
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * //   Error: { // ErrorDetails
 * //     Message: "STRING_VALUE", // required
 * //     Code: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceLastAccessedDetailsCommandInput - {@link GetServiceLastAccessedDetailsCommandInput}
 * @returns {@link GetServiceLastAccessedDetailsCommandOutput}
 * @see {@link GetServiceLastAccessedDetailsCommandInput} for command's `input` shape.
 * @see {@link GetServiceLastAccessedDetailsCommandOutput} for command's `response` shape.
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
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To get details from a previously-generated report
 * ```javascript
 * // The following operation gets details about the report with the job ID: examplef-1305-c245-eba4-71fe298bcda7
 * const input = {
 *   "JobId": "examplef-1305-c245-eba4-71fe298bcda7"
 * };
 * const command = new GetServiceLastAccessedDetailsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IsTruncated": false,
 *   "JobCompletionDate": "2018-10-24T19:47:35.241Z",
 *   "JobCreationDate": "2018-10-24T19:47:31.466Z",
 *   "JobStatus": "COMPLETED",
 *   "ServicesLastAccessed": [
 *     {
 *       "LastAuthenticated": "2018-10-24T19:11:00Z",
 *       "LastAuthenticatedEntity": "arn:aws:iam::123456789012:user/AWSExampleUser01",
 *       "ServiceName": "AWS Identity and Access Management",
 *       "ServiceNamespace": "iam",
 *       "TotalAuthenticatedEntities": 2
 *     },
 *     {
 *       "ServiceName": "Amazon Simple Storage Service",
 *       "ServiceNamespace": "s3",
 *       "TotalAuthenticatedEntities": 0
 *     }
 *   ]
 * }
 * *\/
 * // example id: getserviceaccessdetails-policy-1541696298085
 * ```
 *
 */
export class GetServiceLastAccessedDetailsCommand extends $Command<
  GetServiceLastAccessedDetailsCommandInput,
  GetServiceLastAccessedDetailsCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServiceLastAccessedDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetServiceLastAccessedDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "GetServiceLastAccessedDetails",
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
  private serialize(input: GetServiceLastAccessedDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetServiceLastAccessedDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceLastAccessedDetailsCommandOutput> {
    return de_GetServiceLastAccessedDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
