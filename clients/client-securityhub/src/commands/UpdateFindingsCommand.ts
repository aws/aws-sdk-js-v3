// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFindingsRequest, UpdateFindingsResponse } from "../models/models_3";
import { de_UpdateFindingsCommand, se_UpdateFindingsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFindingsCommand}.
 */
export interface UpdateFindingsCommandInput extends UpdateFindingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFindingsCommand}.
 */
export interface UpdateFindingsCommandOutput extends UpdateFindingsResponse, __MetadataBearer {}

/**
 * <p>
 *             <code>UpdateFindings</code> is a deprecated operation. Instead of <code>UpdateFindings</code>, use
 *             the <code>BatchUpdateFindings</code> operation.</p>
 *          <p>The <code>UpdateFindings</code> operation updates the <code>Note</code> and <code>RecordState</code> of the Security Hub aggregated
 *          findings that the filter attributes specify. Any member account that can view the finding
 *          can also see the update to the finding.</p>
 *          <p>Finding updates made with <code>UpdateFindings</code> aren't persisted if the same finding is later updated by the
 *             finding provider through the <code>BatchImportFindings</code> operation. In addition, Security Hub doesn't
 *             record updates made with <code>UpdateFindings</code> in the finding history.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateFindingsRequest
 *   Filters: { // AwsSecurityFindingFilters
 *     ProductArn: [ // StringFilterList
 *       { // StringFilter
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *       },
 *     ],
 *     AwsAccountId: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *       },
 *     ],
 *     Id: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *       },
 *     ],
 *     GeneratorId: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *       },
 *     ],
 *     Region: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
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
 *         Gt: Number("double"),
 *         Lt: Number("double"),
 *       },
 *     ],
 *     SeverityNormalized: [
 *       {
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Eq: Number("double"),
 *         Gt: Number("double"),
 *         Lt: Number("double"),
 *       },
 *     ],
 *     SeverityLabel: "<StringFilterList>",
 *     Confidence: [
 *       {
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Eq: Number("double"),
 *         Gt: Number("double"),
 *         Lt: Number("double"),
 *       },
 *     ],
 *     Criticality: [
 *       {
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Eq: Number("double"),
 *         Gt: Number("double"),
 *         Lt: Number("double"),
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
 *         Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     ProductName: "<StringFilterList>",
 *     CompanyName: "<StringFilterList>",
 *     UserDefinedFields: [
 *       {
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
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
 *         Gt: Number("double"),
 *         Lt: Number("double"),
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
 *         Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
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
 *         Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
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
 *     VulnerabilitiesExploitAvailable: "<StringFilterList>",
 *     VulnerabilitiesFixAvailable: "<StringFilterList>",
 *     ComplianceSecurityControlParametersName: "<StringFilterList>",
 *     ComplianceSecurityControlParametersValue: "<StringFilterList>",
 *     AwsAccountName: "<StringFilterList>",
 *     ResourceApplicationName: "<StringFilterList>",
 *     ResourceApplicationArn: "<StringFilterList>",
 *   },
 *   Note: { // NoteUpdate
 *     Text: "STRING_VALUE", // required
 *     UpdatedBy: "STRING_VALUE", // required
 *   },
 *   RecordState: "ACTIVE" || "ARCHIVED",
 * };
 * const command = new UpdateFindingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFindingsCommandInput - {@link UpdateFindingsCommandInput}
 * @returns {@link UpdateFindingsCommandOutput}
 * @see {@link UpdateFindingsCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateFindingsCommand extends $Command
  .classBuilder<
    UpdateFindingsCommandInput,
    UpdateFindingsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "UpdateFindings", {})
  .n("SecurityHubClient", "UpdateFindingsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFindingsCommand)
  .de(de_UpdateFindingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFindingsRequest;
      output: {};
    };
    sdk: {
      input: UpdateFindingsCommandInput;
      output: UpdateFindingsCommandOutput;
    };
  };
}
