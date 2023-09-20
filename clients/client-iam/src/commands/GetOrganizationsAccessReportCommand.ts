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
import { GetOrganizationsAccessReportRequest, GetOrganizationsAccessReportResponse } from "../models/models_0";
import { de_GetOrganizationsAccessReportCommand, se_GetOrganizationsAccessReportCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOrganizationsAccessReportCommand}.
 */
export interface GetOrganizationsAccessReportCommandInput extends GetOrganizationsAccessReportRequest {}
/**
 * @public
 *
 * The output of {@link GetOrganizationsAccessReportCommand}.
 */
export interface GetOrganizationsAccessReportCommandOutput
  extends GetOrganizationsAccessReportResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the service last accessed data report for Organizations that was previously
 *             generated using the <code>
 *                <a>GenerateOrganizationsAccessReport</a>
 *             </code>
 *             operation. This operation retrieves the status of your report job and the report
 *             contents.</p>
 *          <p>Depending on the parameters that you passed when you generated the report, the data
 *             returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p>
 *          <p>To call this operation, you must be signed in to the management account in your
 *             organization. SCPs must be enabled for your organization root. You must have permissions
 *             to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using
 *                 service last accessed data</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>For each service that principals in an account (root user, IAM users, or IAM roles)
 *             could access using SCPs, the operation returns details about the most recent access
 *             attempt. If there was no attempt, the service is listed without details about the most
 *             recent attempt to access the service. If the operation fails, it returns the reason that
 *             it failed.</p>
 *          <p>By default, the list is sorted by service namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetOrganizationsAccessReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetOrganizationsAccessReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetOrganizationsAccessReportRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 *   SortKey: "SERVICE_NAMESPACE_ASCENDING" || "SERVICE_NAMESPACE_DESCENDING" || "LAST_AUTHENTICATED_TIME_ASCENDING" || "LAST_AUTHENTICATED_TIME_DESCENDING",
 * };
 * const command = new GetOrganizationsAccessReportCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationsAccessReportResponse
 * //   JobStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //   JobCreationDate: new Date("TIMESTAMP"), // required
 * //   JobCompletionDate: new Date("TIMESTAMP"),
 * //   NumberOfServicesAccessible: Number("int"),
 * //   NumberOfServicesNotAccessed: Number("int"),
 * //   AccessDetails: [ // AccessDetails
 * //     { // AccessDetail
 * //       ServiceName: "STRING_VALUE", // required
 * //       ServiceNamespace: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE",
 * //       EntityPath: "STRING_VALUE",
 * //       LastAuthenticatedTime: new Date("TIMESTAMP"),
 * //       TotalAuthenticatedEntities: Number("int"),
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * //   ErrorDetails: { // ErrorDetails
 * //     Message: "STRING_VALUE", // required
 * //     Code: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOrganizationsAccessReportCommandInput - {@link GetOrganizationsAccessReportCommandInput}
 * @returns {@link GetOrganizationsAccessReportCommandOutput}
 * @see {@link GetOrganizationsAccessReportCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationsAccessReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To get details from a previously generated organizational unit report
 * ```javascript
 * // The following operation gets details about the report with the job ID: examplea-1234-b567-cde8-90fg123abcd4
 * const input = {
 *   "JobId": "examplea-1234-b567-cde8-90fg123abcd4"
 * };
 * const command = new GetOrganizationsAccessReportCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AccessDetails": [
 *     {
 *       "EntityPath": "o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-1a2b3c-k9l8m7n6o5example/111122223333",
 *       "LastAuthenticatedTime": "2019-05-25T16:29:52Z",
 *       "Region": "us-east-1",
 *       "ServiceName": "Amazon DynamoDB",
 *       "ServiceNamespace": "dynamodb",
 *       "TotalAuthenticatedEntities": 2
 *     },
 *     {
 *       "EntityPath": "o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-1a2b3c-k9l8m7n6o5example/123456789012",
 *       "LastAuthenticatedTime": "2019-06-15T13:12:06Z",
 *       "Region": "us-east-1",
 *       "ServiceName": "AWS Identity and Access Management",
 *       "ServiceNamespace": "iam",
 *       "TotalAuthenticatedEntities": 4
 *     },
 *     {
 *       "ServiceName": "Amazon Simple Storage Service",
 *       "ServiceNamespace": "s3",
 *       "TotalAuthenticatedEntities": 0
 *     }
 *   ],
 *   "IsTruncated": false,
 *   "JobCompletionDate": "2019-06-18T19:47:35.241Z",
 *   "JobCreationDate": "2019-06-18T19:47:31.466Z",
 *   "JobStatus": "COMPLETED",
 *   "NumberOfServicesAccessible": 3,
 *   "NumberOfServicesNotAccessed": 1
 * }
 * *\/
 * // example id: getorganizationsaccessreport-ou
 * ```
 *
 */
export class GetOrganizationsAccessReportCommand extends $Command<
  GetOrganizationsAccessReportCommandInput,
  GetOrganizationsAccessReportCommandOutput,
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
  constructor(readonly input: GetOrganizationsAccessReportCommandInput) {
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
  ): Handler<GetOrganizationsAccessReportCommandInput, GetOrganizationsAccessReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOrganizationsAccessReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetOrganizationsAccessReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "GetOrganizationsAccessReport",
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
  private serialize(input: GetOrganizationsAccessReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetOrganizationsAccessReportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOrganizationsAccessReportCommandOutput> {
    return de_GetOrganizationsAccessReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
