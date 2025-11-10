// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDomainRequest, CreateDomainResponse } from "../models/models_0";
import { CreateDomain } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDomainCommand}.
 */
export interface CreateDomainCommandInput extends CreateDomainRequest {}
/**
 * @public
 *
 * The output of {@link CreateDomainCommand}.
 */
export interface CreateDomainCommandOutput extends CreateDomainResponse, __MetadataBearer {}

/**
 * <p>Creates a domain, which is a container for all customer data, such as customer profile
 *          attributes, object types, profile keys, and encryption keys. You can create multiple
 *          domains, and each domain can have multiple third-party integrations.</p>
 *          <p>Each Amazon Connect instance can be associated with only one domain. Multiple
 *             Amazon Connect instances can be associated with one domain.</p>
 *          <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to
 *          enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity
 *             resolution</a>: set <code>Matching</code> to true.</p>
 *          <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should
 *          apply. </p>
 *          <note>
 *             <p>It is not possible to associate a Customer Profiles domain with an Amazon Connect Instance directly from
 *             the API. If you would like to create a domain and associate a Customer Profiles domain, use the Amazon Connect
 *             admin website. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-customer-profiles.html#enable-customer-profiles-step1">Enable Customer Profiles</a>.</p>
 *             <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances
 *             can be associated with one domain.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateDomainCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateDomainCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   DefaultExpirationDays: Number("int"), // required
 *   DefaultEncryptionKey: "STRING_VALUE",
 *   DeadLetterQueueUrl: "STRING_VALUE",
 *   Matching: { // MatchingRequest
 *     Enabled: true || false, // required
 *     JobSchedule: { // JobSchedule
 *       DayOfTheWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY", // required
 *       Time: "STRING_VALUE", // required
 *     },
 *     AutoMerging: { // AutoMerging
 *       Enabled: true || false, // required
 *       Consolidation: { // Consolidation
 *         MatchingAttributesList: [ // MatchingAttributesList // required
 *           [ // MatchingAttributes
 *             "STRING_VALUE",
 *           ],
 *         ],
 *       },
 *       ConflictResolution: { // ConflictResolution
 *         ConflictResolvingModel: "RECENCY" || "SOURCE", // required
 *         SourceName: "STRING_VALUE",
 *       },
 *       MinAllowedConfidenceScoreForMerging: Number("double"),
 *     },
 *     ExportingConfig: { // ExportingConfig
 *       S3Exporting: { // S3ExportingConfig
 *         S3BucketName: "STRING_VALUE", // required
 *         S3KeyName: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   RuleBasedMatching: { // RuleBasedMatchingRequest
 *     Enabled: true || false, // required
 *     MatchingRules: [ // MatchingRules
 *       { // MatchingRule
 *         Rule: [ // MatchingRuleAttributeList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     MaxAllowedRuleLevelForMerging: Number("int"),
 *     MaxAllowedRuleLevelForMatching: Number("int"),
 *     AttributeTypesSelector: { // AttributeTypesSelector
 *       AttributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY", // required
 *       Address: [ // AddressList
 *         "STRING_VALUE",
 *       ],
 *       PhoneNumber: [ // PhoneNumberList
 *         "STRING_VALUE",
 *       ],
 *       EmailAddress: [ // EmailList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ConflictResolution: {
 *       ConflictResolvingModel: "RECENCY" || "SOURCE", // required
 *       SourceName: "STRING_VALUE",
 *     },
 *     ExportingConfig: {
 *       S3Exporting: {
 *         S3BucketName: "STRING_VALUE", // required
 *         S3KeyName: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDomainCommand(input);
 * const response = await client.send(command);
 * // { // CreateDomainResponse
 * //   DomainName: "STRING_VALUE", // required
 * //   DefaultExpirationDays: Number("int"), // required
 * //   DefaultEncryptionKey: "STRING_VALUE",
 * //   DeadLetterQueueUrl: "STRING_VALUE",
 * //   Matching: { // MatchingResponse
 * //     Enabled: true || false,
 * //     JobSchedule: { // JobSchedule
 * //       DayOfTheWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY", // required
 * //       Time: "STRING_VALUE", // required
 * //     },
 * //     AutoMerging: { // AutoMerging
 * //       Enabled: true || false, // required
 * //       Consolidation: { // Consolidation
 * //         MatchingAttributesList: [ // MatchingAttributesList // required
 * //           [ // MatchingAttributes
 * //             "STRING_VALUE",
 * //           ],
 * //         ],
 * //       },
 * //       ConflictResolution: { // ConflictResolution
 * //         ConflictResolvingModel: "RECENCY" || "SOURCE", // required
 * //         SourceName: "STRING_VALUE",
 * //       },
 * //       MinAllowedConfidenceScoreForMerging: Number("double"),
 * //     },
 * //     ExportingConfig: { // ExportingConfig
 * //       S3Exporting: { // S3ExportingConfig
 * //         S3BucketName: "STRING_VALUE", // required
 * //         S3KeyName: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   RuleBasedMatching: { // RuleBasedMatchingResponse
 * //     Enabled: true || false,
 * //     MatchingRules: [ // MatchingRules
 * //       { // MatchingRule
 * //         Rule: [ // MatchingRuleAttributeList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     Status: "PENDING" || "IN_PROGRESS" || "ACTIVE",
 * //     MaxAllowedRuleLevelForMerging: Number("int"),
 * //     MaxAllowedRuleLevelForMatching: Number("int"),
 * //     AttributeTypesSelector: { // AttributeTypesSelector
 * //       AttributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY", // required
 * //       Address: [ // AddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       PhoneNumber: [ // PhoneNumberList
 * //         "STRING_VALUE",
 * //       ],
 * //       EmailAddress: [ // EmailList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ConflictResolution: {
 * //       ConflictResolvingModel: "RECENCY" || "SOURCE", // required
 * //       SourceName: "STRING_VALUE",
 * //     },
 * //     ExportingConfig: {
 * //       S3Exporting: {
 * //         S3BucketName: "STRING_VALUE", // required
 * //         S3KeyName: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDomainCommandInput - {@link CreateDomainCommandInput}
 * @returns {@link CreateDomainCommandOutput}
 * @see {@link CreateDomainCommandInput} for command's `input` shape.
 * @see {@link CreateDomainCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class CreateDomainCommand extends $Command
  .classBuilder<
    CreateDomainCommandInput,
    CreateDomainCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "CreateDomain", {})
  .n("CustomerProfilesClient", "CreateDomainCommand")
  .sc(CreateDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDomainRequest;
      output: CreateDomainResponse;
    };
    sdk: {
      input: CreateDomainCommandInput;
      output: CreateDomainCommandOutput;
    };
  };
}
