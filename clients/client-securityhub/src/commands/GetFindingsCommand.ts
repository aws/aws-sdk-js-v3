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

import { GetFindingsRequest, GetFindingsResponse } from "../models/models_2";
import { de_GetFindingsCommand, se_GetFindingsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 *
 * The input for {@link GetFindingsCommand}.
 */
export interface GetFindingsCommandInput extends GetFindingsRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingsCommand}.
 */
export interface GetFindingsCommandOutput extends GetFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of findings that match the specified criteria.</p>
 *          <p>If finding aggregation is enabled, then when you call <code>GetFindings</code> from the aggregation Region, the results include all of the matching findings from both the aggregation Region and the linked Regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetFindingsRequest
 *   Filters: { // AwsSecurityFindingFilters
 *     ProductArn: [ // StringFilterList
 *       { // StringFilter
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS",
 *       },
 *     ],
 *     AwsAccountId: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS",
 *       },
 *     ],
 *     Id: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS",
 *       },
 *     ],
 *     GeneratorId: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS",
 *       },
 *     ],
 *     Region: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS",
 *       },
 *     ],
 *     Type: "<StringFilterList>",
 *     FirstObservedAt: [ // DateFilterList
 *       { // DateFilter
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: { // DateRange
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     LastObservedAt: [
 *       {
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: {
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     CreatedAt: [
 *       {
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: {
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     UpdatedAt: [
 *       {
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: {
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     SeverityProduct: [ // NumberFilterList
 *       { // NumberFilter
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Eq: Number("double"),
 *       },
 *     ],
 *     SeverityNormalized: [
 *       {
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Eq: Number("double"),
 *       },
 *     ],
 *     SeverityLabel: "<StringFilterList>",
 *     Confidence: [
 *       {
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Eq: Number("double"),
 *       },
 *     ],
 *     Criticality: [
 *       {
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Eq: Number("double"),
 *       },
 *     ],
 *     Title: "<StringFilterList>",
 *     Description: "<StringFilterList>",
 *     RecommendationText: "<StringFilterList>",
 *     SourceUrl: "<StringFilterList>",
 *     ProductFields: [ // MapFilterList
 *       { // MapFilter
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "NOT_EQUALS",
 *       },
 *     ],
 *     ProductName: "<StringFilterList>",
 *     CompanyName: "<StringFilterList>",
 *     UserDefinedFields: [
 *       {
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "NOT_EQUALS",
 *       },
 *     ],
 *     MalwareName: "<StringFilterList>",
 *     MalwareType: "<StringFilterList>",
 *     MalwarePath: "<StringFilterList>",
 *     MalwareState: "<StringFilterList>",
 *     NetworkDirection: "<StringFilterList>",
 *     NetworkProtocol: "<StringFilterList>",
 *     NetworkSourceIpV4: [ // IpFilterList
 *       { // IpFilter
 *         Cidr: "STRING_VALUE",
 *       },
 *     ],
 *     NetworkSourceIpV6: [
 *       {
 *         Cidr: "STRING_VALUE",
 *       },
 *     ],
 *     NetworkSourcePort: [
 *       {
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Eq: Number("double"),
 *       },
 *     ],
 *     NetworkSourceDomain: "<StringFilterList>",
 *     NetworkSourceMac: "<StringFilterList>",
 *     NetworkDestinationIpV4: [
 *       {
 *         Cidr: "STRING_VALUE",
 *       },
 *     ],
 *     NetworkDestinationIpV6: [
 *       {
 *         Cidr: "STRING_VALUE",
 *       },
 *     ],
 *     NetworkDestinationPort: "<NumberFilterList>",
 *     NetworkDestinationDomain: "<StringFilterList>",
 *     ProcessName: "<StringFilterList>",
 *     ProcessPath: "<StringFilterList>",
 *     ProcessPid: "<NumberFilterList>",
 *     ProcessParentPid: "<NumberFilterList>",
 *     ProcessLaunchedAt: [
 *       {
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: {
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     ProcessTerminatedAt: "<DateFilterList>",
 *     ThreatIntelIndicatorType: "<StringFilterList>",
 *     ThreatIntelIndicatorValue: "<StringFilterList>",
 *     ThreatIntelIndicatorCategory: "<StringFilterList>",
 *     ThreatIntelIndicatorLastObservedAt: "<DateFilterList>",
 *     ThreatIntelIndicatorSource: "<StringFilterList>",
 *     ThreatIntelIndicatorSourceUrl: "<StringFilterList>",
 *     ResourceType: "<StringFilterList>",
 *     ResourceId: "<StringFilterList>",
 *     ResourcePartition: "<StringFilterList>",
 *     ResourceRegion: "<StringFilterList>",
 *     ResourceTags: [
 *       {
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "NOT_EQUALS",
 *       },
 *     ],
 *     ResourceAwsEc2InstanceType: "<StringFilterList>",
 *     ResourceAwsEc2InstanceImageId: "<StringFilterList>",
 *     ResourceAwsEc2InstanceIpV4Addresses: [
 *       {
 *         Cidr: "STRING_VALUE",
 *       },
 *     ],
 *     ResourceAwsEc2InstanceIpV6Addresses: "<IpFilterList>",
 *     ResourceAwsEc2InstanceKeyName: "<StringFilterList>",
 *     ResourceAwsEc2InstanceIamInstanceProfileArn: "<StringFilterList>",
 *     ResourceAwsEc2InstanceVpcId: "<StringFilterList>",
 *     ResourceAwsEc2InstanceSubnetId: "<StringFilterList>",
 *     ResourceAwsEc2InstanceLaunchedAt: "<DateFilterList>",
 *     ResourceAwsS3BucketOwnerId: "<StringFilterList>",
 *     ResourceAwsS3BucketOwnerName: "<StringFilterList>",
 *     ResourceAwsIamAccessKeyUserName: "<StringFilterList>",
 *     ResourceAwsIamAccessKeyPrincipalName: "<StringFilterList>",
 *     ResourceAwsIamAccessKeyStatus: "<StringFilterList>",
 *     ResourceAwsIamAccessKeyCreatedAt: "<DateFilterList>",
 *     ResourceAwsIamUserUserName: "<StringFilterList>",
 *     ResourceContainerName: "<StringFilterList>",
 *     ResourceContainerImageId: "<StringFilterList>",
 *     ResourceContainerImageName: "<StringFilterList>",
 *     ResourceContainerLaunchedAt: "<DateFilterList>",
 *     ResourceDetailsOther: [
 *       {
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "NOT_EQUALS",
 *       },
 *     ],
 *     ComplianceStatus: "<StringFilterList>",
 *     VerificationState: "<StringFilterList>",
 *     WorkflowState: "<StringFilterList>",
 *     WorkflowStatus: "<StringFilterList>",
 *     RecordState: "<StringFilterList>",
 *     RelatedFindingsProductArn: "<StringFilterList>",
 *     RelatedFindingsId: "<StringFilterList>",
 *     NoteText: "<StringFilterList>",
 *     NoteUpdatedAt: "<DateFilterList>",
 *     NoteUpdatedBy: "<StringFilterList>",
 *     Keyword: [ // KeywordFilterList
 *       { // KeywordFilter
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     FindingProviderFieldsConfidence: "<NumberFilterList>",
 *     FindingProviderFieldsCriticality: "<NumberFilterList>",
 *     FindingProviderFieldsRelatedFindingsId: "<StringFilterList>",
 *     FindingProviderFieldsRelatedFindingsProductArn: "<StringFilterList>",
 *     FindingProviderFieldsSeverityLabel: "<StringFilterList>",
 *     FindingProviderFieldsSeverityOriginal: "<StringFilterList>",
 *     FindingProviderFieldsTypes: "<StringFilterList>",
 *     Sample: [ // BooleanFilterList
 *       { // BooleanFilter
 *         Value: true || false,
 *       },
 *     ],
 *     ComplianceSecurityControlId: "<StringFilterList>",
 *     ComplianceAssociatedStandardsId: "<StringFilterList>",
 *   },
 *   SortCriteria: [ // SortCriteria
 *     { // SortCriterion
 *       Field: "STRING_VALUE",
 *       SortOrder: "asc" || "desc",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetFindingsCommandInput - {@link GetFindingsCommandInput}
 * @returns {@link GetFindingsCommandOutput}
 * @see {@link GetFindingsCommandInput} for command's `input` shape.
 * @see {@link GetFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 *
 * @example To get a list of findings
 * ```javascript
 * // The following example returns a filtered and sorted list of Security Hub findings.
 * const input = {
 *   "Filters": {
 *     "AwsAccountId": [
 *       {
 *         "Comparison": "PREFIX",
 *         "Value": "123456789012"
 *       }
 *     ]
 *   },
 *   "MaxResults": 1
 * };
 * const command = new GetFindingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Findings": [
 *     {
 *       "AwsAccountId": "123456789012",
 *       "CompanyName": "AWS",
 *       "Compliance": {
 *         "AssociatedStandards": [
 *           {
 *             "StandardsId": "standards/aws-foundational-security-best-practices/v/1.0.0"
 *           },
 *           {
 *             "StandardsId": "standards/pci-dss/v/3.2.1"
 *           },
 *           {
 *             "StandardsId": "ruleset/cis-aws-foundations-benchmark/v/1.2.0"
 *           },
 *           {
 *             "StandardsId": "standards/cis-aws-foundations-benchmark/v/1.4.0"
 *           },
 *           {
 *             "StandardsId": "standards/service-managed-aws-control-tower/v/1.0.0"
 *           }
 *         ],
 *         "RelatedRequirements": [
 *           "PCI DSS v3.2.1/3.4",
 *           "CIS AWS Foundations Benchmark v1.2.0/2.7",
 *           "CIS AWS Foundations Benchmark v1.4.0/3.7"
 *         ],
 *         "SecurityControlId": "CloudTrail.2",
 *         "Status": "FAILED"
 *       },
 *       "CreatedAt": "2022-10-06T02:18:23.076Z",
 *       "Description": "This AWS control checks whether AWS CloudTrail is configured to use the server side encryption (SSE) AWS Key Management Service (AWS KMS) customer master key (CMK) encryption. The check will pass if the KmsKeyId is defined.",
 *       "FindingProviderFields": {
 *         "Severity": {
 *           "Label": "MEDIUM",
 *           "Original": "MEDIUM"
 *         },
 *         "Types": [
 *           "Software and Configuration Checks/Industry and Regulatory Standards"
 *         ]
 *       },
 *       "FirstObservedAt": "2022-10-06T02:18:23.076Z",
 *       "GeneratorId": "security-control/CloudTrail.2",
 *       "Id": "arn:aws:securityhub:us-east-2:123456789012:security-control/CloudTrail.2/finding/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       "LastObservedAt": "2022-10-28T16:10:06.956Z",
 *       "ProductArn": "arn:aws:securityhub:us-east-2::product/aws/securityhub",
 *       "ProductFields": {
 *         "RelatedAWSResources:0/name": "securityhub-cloud-trail-encryption-enabled-fe95bf3f",
 *         "RelatedAWSResources:0/type": "AWS::Config::ConfigRule",
 *         "Resources:0/Id": "arn:aws:cloudtrail:us-east-2:123456789012:trail/AWSMacieTrail-DO-NOT-EDIT",
 *         "aws/securityhub/CompanyName": "AWS",
 *         "aws/securityhub/FindingId": "arn:aws:securityhub:us-east-2::product/aws/securityhub/arn:aws:securityhub:us-east-2:123456789012:security-control/CloudTrail.2/finding/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *         "aws/securityhub/ProductName": "Security Hub"
 *       },
 *       "ProductName": "Security Hub",
 *       "RecordState": "ACTIVE",
 *       "Region": "us-east-2",
 *       "Remediation": {
 *         "Recommendation": {
 *           "Text": "For directions on how to correct this issue, consult the AWS Security Hub controls documentation.",
 *           "Url": "https://docs.aws.amazon.com/console/securityhub/CloudTrail.2/remediation"
 *         }
 *       },
 *       "Resources": [
 *         {
 *           "Id": "arn:aws:cloudtrail:us-east-2:123456789012:trail/AWSMacieTrail-DO-NOT-EDIT",
 *           "Partition": "aws",
 *           "Region": "us-east-2",
 *           "Type": "AwsCloudTrailTrail"
 *         }
 *       ],
 *       "SchemaVersion": "2018-10-08",
 *       "Severity": {
 *         "Label": "MEDIUM",
 *         "Normalized": 40,
 *         "Original": "MEDIUM"
 *       },
 *       "Title": "CloudTrail should have encryption at-rest enabled",
 *       "Types": [
 *         "Software and Configuration Checks/Industry and Regulatory Standards"
 *       ],
 *       "UpdatedAt": "2022-10-28T16:10:00.093Z",
 *       "Workflow": {
 *         "Status": "NEW"
 *       },
 *       "WorkflowState": "NEW"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-findings-1677181069931
 * ```
 *
 */
export class GetFindingsCommand extends $Command<
  GetFindingsCommandInput,
  GetFindingsCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: GetFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFindingsCommandInput, GetFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetFindingsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetFindingsCommand";
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
  private serialize(input: GetFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFindingsCommandOutput> {
    return de_GetFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
