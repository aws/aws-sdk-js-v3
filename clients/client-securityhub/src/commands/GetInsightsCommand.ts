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

import { GetInsightsRequest, GetInsightsResponse } from "../models/models_2";
import { de_GetInsightsCommand, se_GetInsightsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInsightsCommand}.
 */
export interface GetInsightsCommandInput extends GetInsightsRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightsCommand}.
 */
export interface GetInsightsCommandOutput extends GetInsightsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists and describes insights for the specified insight ARNs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetInsightsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetInsightsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetInsightsRequest
 *   InsightArns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetInsightsCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightsResponse
 * //   Insights: [ // InsightList // required
 * //     { // Insight
 * //       InsightArn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Filters: { // AwsSecurityFindingFilters
 * //         ProductArn: [ // StringFilterList
 * //           { // StringFilter
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 * //           },
 * //         ],
 * //         AwsAccountId: [
 * //           {
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 * //           },
 * //         ],
 * //         Id: [
 * //           {
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 * //           },
 * //         ],
 * //         GeneratorId: [
 * //           {
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 * //           },
 * //         ],
 * //         Region: [
 * //           {
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 * //           },
 * //         ],
 * //         Type: "<StringFilterList>",
 * //         FirstObservedAt: [ // DateFilterList
 * //           { // DateFilter
 * //             Start: "STRING_VALUE",
 * //             End: "STRING_VALUE",
 * //             DateRange: { // DateRange
 * //               Value: Number("int"),
 * //               Unit: "DAYS",
 * //             },
 * //           },
 * //         ],
 * //         LastObservedAt: [
 * //           {
 * //             Start: "STRING_VALUE",
 * //             End: "STRING_VALUE",
 * //             DateRange: {
 * //               Value: Number("int"),
 * //               Unit: "DAYS",
 * //             },
 * //           },
 * //         ],
 * //         CreatedAt: [
 * //           {
 * //             Start: "STRING_VALUE",
 * //             End: "STRING_VALUE",
 * //             DateRange: {
 * //               Value: Number("int"),
 * //               Unit: "DAYS",
 * //             },
 * //           },
 * //         ],
 * //         UpdatedAt: [
 * //           {
 * //             Start: "STRING_VALUE",
 * //             End: "STRING_VALUE",
 * //             DateRange: {
 * //               Value: Number("int"),
 * //               Unit: "DAYS",
 * //             },
 * //           },
 * //         ],
 * //         SeverityProduct: [ // NumberFilterList
 * //           { // NumberFilter
 * //             Gte: Number("double"),
 * //             Lte: Number("double"),
 * //             Eq: Number("double"),
 * //           },
 * //         ],
 * //         SeverityNormalized: [
 * //           {
 * //             Gte: Number("double"),
 * //             Lte: Number("double"),
 * //             Eq: Number("double"),
 * //           },
 * //         ],
 * //         SeverityLabel: "<StringFilterList>",
 * //         Confidence: [
 * //           {
 * //             Gte: Number("double"),
 * //             Lte: Number("double"),
 * //             Eq: Number("double"),
 * //           },
 * //         ],
 * //         Criticality: [
 * //           {
 * //             Gte: Number("double"),
 * //             Lte: Number("double"),
 * //             Eq: Number("double"),
 * //           },
 * //         ],
 * //         Title: "<StringFilterList>",
 * //         Description: "<StringFilterList>",
 * //         RecommendationText: "<StringFilterList>",
 * //         SourceUrl: "<StringFilterList>",
 * //         ProductFields: [ // MapFilterList
 * //           { // MapFilter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 * //           },
 * //         ],
 * //         ProductName: "<StringFilterList>",
 * //         CompanyName: "<StringFilterList>",
 * //         UserDefinedFields: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 * //           },
 * //         ],
 * //         MalwareName: "<StringFilterList>",
 * //         MalwareType: "<StringFilterList>",
 * //         MalwarePath: "<StringFilterList>",
 * //         MalwareState: "<StringFilterList>",
 * //         NetworkDirection: "<StringFilterList>",
 * //         NetworkProtocol: "<StringFilterList>",
 * //         NetworkSourceIpV4: [ // IpFilterList
 * //           { // IpFilter
 * //             Cidr: "STRING_VALUE",
 * //           },
 * //         ],
 * //         NetworkSourceIpV6: [
 * //           {
 * //             Cidr: "STRING_VALUE",
 * //           },
 * //         ],
 * //         NetworkSourcePort: [
 * //           {
 * //             Gte: Number("double"),
 * //             Lte: Number("double"),
 * //             Eq: Number("double"),
 * //           },
 * //         ],
 * //         NetworkSourceDomain: "<StringFilterList>",
 * //         NetworkSourceMac: "<StringFilterList>",
 * //         NetworkDestinationIpV4: [
 * //           {
 * //             Cidr: "STRING_VALUE",
 * //           },
 * //         ],
 * //         NetworkDestinationIpV6: [
 * //           {
 * //             Cidr: "STRING_VALUE",
 * //           },
 * //         ],
 * //         NetworkDestinationPort: "<NumberFilterList>",
 * //         NetworkDestinationDomain: "<StringFilterList>",
 * //         ProcessName: "<StringFilterList>",
 * //         ProcessPath: "<StringFilterList>",
 * //         ProcessPid: "<NumberFilterList>",
 * //         ProcessParentPid: "<NumberFilterList>",
 * //         ProcessLaunchedAt: [
 * //           {
 * //             Start: "STRING_VALUE",
 * //             End: "STRING_VALUE",
 * //             DateRange: {
 * //               Value: Number("int"),
 * //               Unit: "DAYS",
 * //             },
 * //           },
 * //         ],
 * //         ProcessTerminatedAt: "<DateFilterList>",
 * //         ThreatIntelIndicatorType: "<StringFilterList>",
 * //         ThreatIntelIndicatorValue: "<StringFilterList>",
 * //         ThreatIntelIndicatorCategory: "<StringFilterList>",
 * //         ThreatIntelIndicatorLastObservedAt: "<DateFilterList>",
 * //         ThreatIntelIndicatorSource: "<StringFilterList>",
 * //         ThreatIntelIndicatorSourceUrl: "<StringFilterList>",
 * //         ResourceType: "<StringFilterList>",
 * //         ResourceId: "<StringFilterList>",
 * //         ResourcePartition: "<StringFilterList>",
 * //         ResourceRegion: "<StringFilterList>",
 * //         ResourceTags: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 * //           },
 * //         ],
 * //         ResourceAwsEc2InstanceType: "<StringFilterList>",
 * //         ResourceAwsEc2InstanceImageId: "<StringFilterList>",
 * //         ResourceAwsEc2InstanceIpV4Addresses: [
 * //           {
 * //             Cidr: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ResourceAwsEc2InstanceIpV6Addresses: "<IpFilterList>",
 * //         ResourceAwsEc2InstanceKeyName: "<StringFilterList>",
 * //         ResourceAwsEc2InstanceIamInstanceProfileArn: "<StringFilterList>",
 * //         ResourceAwsEc2InstanceVpcId: "<StringFilterList>",
 * //         ResourceAwsEc2InstanceSubnetId: "<StringFilterList>",
 * //         ResourceAwsEc2InstanceLaunchedAt: "<DateFilterList>",
 * //         ResourceAwsS3BucketOwnerId: "<StringFilterList>",
 * //         ResourceAwsS3BucketOwnerName: "<StringFilterList>",
 * //         ResourceAwsIamAccessKeyUserName: "<StringFilterList>",
 * //         ResourceAwsIamAccessKeyPrincipalName: "<StringFilterList>",
 * //         ResourceAwsIamAccessKeyStatus: "<StringFilterList>",
 * //         ResourceAwsIamAccessKeyCreatedAt: "<DateFilterList>",
 * //         ResourceAwsIamUserUserName: "<StringFilterList>",
 * //         ResourceContainerName: "<StringFilterList>",
 * //         ResourceContainerImageId: "<StringFilterList>",
 * //         ResourceContainerImageName: "<StringFilterList>",
 * //         ResourceContainerLaunchedAt: "<DateFilterList>",
 * //         ResourceDetailsOther: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 * //           },
 * //         ],
 * //         ComplianceStatus: "<StringFilterList>",
 * //         VerificationState: "<StringFilterList>",
 * //         WorkflowState: "<StringFilterList>",
 * //         WorkflowStatus: "<StringFilterList>",
 * //         RecordState: "<StringFilterList>",
 * //         RelatedFindingsProductArn: "<StringFilterList>",
 * //         RelatedFindingsId: "<StringFilterList>",
 * //         NoteText: "<StringFilterList>",
 * //         NoteUpdatedAt: "<DateFilterList>",
 * //         NoteUpdatedBy: "<StringFilterList>",
 * //         Keyword: [ // KeywordFilterList
 * //           { // KeywordFilter
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         FindingProviderFieldsConfidence: "<NumberFilterList>",
 * //         FindingProviderFieldsCriticality: "<NumberFilterList>",
 * //         FindingProviderFieldsRelatedFindingsId: "<StringFilterList>",
 * //         FindingProviderFieldsRelatedFindingsProductArn: "<StringFilterList>",
 * //         FindingProviderFieldsSeverityLabel: "<StringFilterList>",
 * //         FindingProviderFieldsSeverityOriginal: "<StringFilterList>",
 * //         FindingProviderFieldsTypes: "<StringFilterList>",
 * //         Sample: [ // BooleanFilterList
 * //           { // BooleanFilter
 * //             Value: true || false,
 * //           },
 * //         ],
 * //         ComplianceSecurityControlId: "<StringFilterList>",
 * //         ComplianceAssociatedStandardsId: "<StringFilterList>",
 * //       },
 * //       GroupByAttribute: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInsightsCommandInput - {@link GetInsightsCommandInput}
 * @returns {@link GetInsightsCommandOutput}
 * @see {@link GetInsightsCommandInput} for command's `input` shape.
 * @see {@link GetInsightsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To get details of a Security Hub insight
 * ```javascript
 * // The following example returns details of the Security Hub insight with the specified ARN.
 * const input = {
 *   "InsightArns": [
 *     "arn:aws:securityhub:us-west-1:123456789012:insight/123456789012/custom/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 *   ]
 * };
 * const command = new GetInsightsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Insights": [
 *     {
 *       "Filters": {
 *         "ResourceType": [
 *           {
 *             "Comparison": "EQUALS",
 *             "Value": "AwsIamRole"
 *           }
 *         ],
 *         "SeverityLabel": [
 *           {
 *             "Comparison": "EQUALS",
 *             "Value": "CRITICAL"
 *           }
 *         ]
 *       },
 *       "GroupByAttribute": "ResourceId",
 *       "InsightArn": "arn:aws:securityhub:us-west-1:123456789012:insight/123456789012/custom/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       "Name": "Critical role findings"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-details-of-a-security-hub-insight-1677774127203
 * ```
 *
 */
export class GetInsightsCommand extends $Command<
  GetInsightsCommandInput,
  GetInsightsCommandOutput,
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
  constructor(readonly input: GetInsightsCommandInput) {
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
  ): Handler<GetInsightsCommandInput, GetInsightsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetInsightsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetInsightsCommand";
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
  private serialize(input: GetInsightsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInsightsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightsCommandOutput> {
    return de_GetInsightsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
