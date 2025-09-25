// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDomainRequest, GetDomainResponse } from "../models/models_0";
import { GetDomain } from "../schemas/schemas_6_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainCommand}.
 */
export interface GetDomainCommandInput extends GetDomainRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainCommand}.
 */
export interface GetDomainCommandOutput extends GetDomainResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specific domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetDomainCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetDomainCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetDomainRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new GetDomainCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainResponse
 * //   DomainName: "STRING_VALUE", // required
 * //   DefaultExpirationDays: Number("int"),
 * //   DefaultEncryptionKey: "STRING_VALUE",
 * //   DeadLetterQueueUrl: "STRING_VALUE",
 * //   Stats: { // DomainStats
 * //     ProfileCount: Number("long"),
 * //     MeteringProfileCount: Number("long"),
 * //     ObjectCount: Number("long"),
 * //     TotalSize: Number("long"),
 * //   },
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
 * @param GetDomainCommandInput - {@link GetDomainCommandInput}
 * @returns {@link GetDomainCommandOutput}
 * @see {@link GetDomainCommandInput} for command's `input` shape.
 * @see {@link GetDomainCommandOutput} for command's `response` shape.
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
export class GetDomainCommand extends $Command
  .classBuilder<
    GetDomainCommandInput,
    GetDomainCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetDomain", {})
  .n("CustomerProfilesClient", "GetDomainCommand")
  .sc(GetDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainRequest;
      output: GetDomainResponse;
    };
    sdk: {
      input: GetDomainCommandInput;
      output: GetDomainCommandOutput;
    };
  };
}
