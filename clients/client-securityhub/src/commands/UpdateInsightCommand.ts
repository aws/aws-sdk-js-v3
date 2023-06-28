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

import { UpdateInsightRequest, UpdateInsightResponse } from "../models/models_2";
import { de_UpdateInsightCommand, se_UpdateInsightCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateInsightCommand}.
 */
export interface UpdateInsightCommandInput extends UpdateInsightRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInsightCommand}.
 */
export interface UpdateInsightCommandOutput extends UpdateInsightResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the Security Hub insight identified by the specified insight ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateInsightCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateInsightCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateInsightRequest
 *   InsightArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
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
 *   GroupByAttribute: "STRING_VALUE",
 * };
 * const command = new UpdateInsightCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateInsightCommandInput - {@link UpdateInsightCommandInput}
 * @returns {@link UpdateInsightCommandOutput}
 * @see {@link UpdateInsightCommandInput} for command's `input` shape.
 * @see {@link UpdateInsightCommandOutput} for command's `response` shape.
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
 * @example To update an insight
 * ```javascript
 * // The following example updates the specified Security Hub insight.
 * const input = {
 *   "Filters": {
 *     "ResourceType": [
 *       {
 *         "Comparison": "EQUALS",
 *         "Value": "AwsIamRole"
 *       }
 *     ],
 *     "SeverityLabel": [
 *       {
 *         "Comparison": "EQUALS",
 *         "Value": "HIGH"
 *       }
 *     ]
 *   },
 *   "InsightArn": "arn:aws:securityhub:us-west-1:123456789012:insight/123456789012/custom/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "Name": "High severity role findings"
 * };
 * const command = new UpdateInsightCommand(input);
 * await client.send(command);
 * // example id: to-update-an-insight-1678816280498
 * ```
 *
 */
export class UpdateInsightCommand extends $Command<
  UpdateInsightCommandInput,
  UpdateInsightCommandOutput,
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
  constructor(readonly input: UpdateInsightCommandInput) {
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
  ): Handler<UpdateInsightCommandInput, UpdateInsightCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateInsightCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "UpdateInsightCommand";
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
  private serialize(input: UpdateInsightCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateInsightCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateInsightCommandOutput> {
    return de_UpdateInsightCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
