// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { SearchResourcesRequest, SearchResourcesResponse } from "../models/models_1";
import { de_SearchResourcesCommand, se_SearchResourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchResourcesCommand}.
 */
export interface SearchResourcesCommandInput extends SearchResourcesRequest {}
/**
 * @public
 *
 * The output of {@link SearchResourcesCommand}.
 */
export interface SearchResourcesCommandOutput extends SearchResourcesResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, SearchResourcesCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, SearchResourcesCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // SearchResourcesRequest
 *   bucketCriteria: { // SearchResourcesBucketCriteria
 *     excludes: { // SearchResourcesCriteriaBlock
 *       and: [ // __listOfSearchResourcesCriteria
 *         { // SearchResourcesCriteria
 *           simpleCriterion: { // SearchResourcesSimpleCriterion
 *             comparator: "EQ" || "NE",
 *             key: "ACCOUNT_ID" || "S3_BUCKET_NAME" || "S3_BUCKET_EFFECTIVE_PERMISSION" || "S3_BUCKET_SHARED_ACCESS" || "AUTOMATED_DISCOVERY_MONITORING_STATUS",
 *             values: [ // __listOf__string
 *               "STRING_VALUE",
 *             ],
 *           },
 *           tagCriterion: { // SearchResourcesTagCriterion
 *             comparator: "EQ" || "NE",
 *             tagValues: [ // __listOfSearchResourcesTagCriterionPair
 *               { // SearchResourcesTagCriterionPair
 *                 key: "STRING_VALUE",
 *                 value: "STRING_VALUE",
 *               },
 *             ],
 *           },
 *         },
 *       ],
 *     },
 *     includes: {
 *       and: [
 *         {
 *           simpleCriterion: {
 *             comparator: "EQ" || "NE",
 *             key: "ACCOUNT_ID" || "S3_BUCKET_NAME" || "S3_BUCKET_EFFECTIVE_PERMISSION" || "S3_BUCKET_SHARED_ACCESS" || "AUTOMATED_DISCOVERY_MONITORING_STATUS",
 *             values: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           tagCriterion: {
 *             comparator: "EQ" || "NE",
 *             tagValues: [
 *               {
 *                 key: "STRING_VALUE",
 *                 value: "STRING_VALUE",
 *               },
 *             ],
 *           },
 *         },
 *       ],
 *     },
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortCriteria: { // SearchResourcesSortCriteria
 *     attributeName: "ACCOUNT_ID" || "RESOURCE_NAME" || "S3_CLASSIFIABLE_OBJECT_COUNT" || "S3_CLASSIFIABLE_SIZE_IN_BYTES",
 *     orderBy: "ASC" || "DESC",
 *   },
 * };
 * const command = new SearchResourcesCommand(input);
 * const response = await client.send(command);
 * // { // SearchResourcesResponse
 * //   matchingResources: [ // __listOfMatchingResource
 * //     { // MatchingResource
 * //       matchingBucket: { // MatchingBucket
 * //         accountId: "STRING_VALUE",
 * //         automatedDiscoveryMonitoringStatus: "MONITORED" || "NOT_MONITORED",
 * //         bucketName: "STRING_VALUE",
 * //         classifiableObjectCount: Number("long"),
 * //         classifiableSizeInBytes: Number("long"),
 * //         errorCode: "ACCESS_DENIED" || "BUCKET_COUNT_EXCEEDS_QUOTA",
 * //         errorMessage: "STRING_VALUE",
 * //         jobDetails: { // JobDetails
 * //           isDefinedInJob: "TRUE" || "FALSE" || "UNKNOWN",
 * //           isMonitoredByJob: "TRUE" || "FALSE" || "UNKNOWN",
 * //           lastJobId: "STRING_VALUE",
 * //           lastJobRunTime: new Date("TIMESTAMP"),
 * //         },
 * //         lastAutomatedDiscoveryTime: new Date("TIMESTAMP"),
 * //         objectCount: Number("long"),
 * //         objectCountByEncryptionType: { // ObjectCountByEncryptionType
 * //           customerManaged: Number("long"),
 * //           kmsManaged: Number("long"),
 * //           s3Managed: Number("long"),
 * //           unencrypted: Number("long"),
 * //           unknown: Number("long"),
 * //         },
 * //         sensitivityScore: Number("int"),
 * //         sizeInBytes: Number("long"),
 * //         sizeInBytesCompressed: Number("long"),
 * //         unclassifiableObjectCount: { // ObjectLevelStatistics
 * //           fileType: Number("long"),
 * //           storageClass: Number("long"),
 * //           total: Number("long"),
 * //         },
 * //         unclassifiableObjectSizeInBytes: {
 * //           fileType: Number("long"),
 * //           storageClass: Number("long"),
 * //           total: Number("long"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchResourcesCommandInput - {@link SearchResourcesCommandInput}
 * @returns {@link SearchResourcesCommandOutput}
 * @see {@link SearchResourcesCommandInput} for command's `input` shape.
 * @see {@link SearchResourcesCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 * @public
 */
export class SearchResourcesCommand extends $Command
  .classBuilder<
    SearchResourcesCommandInput,
    SearchResourcesCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "SearchResources", {})
  .n("Macie2Client", "SearchResourcesCommand")
  .f(void 0, void 0)
  .ser(se_SearchResourcesCommand)
  .de(de_SearchResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchResourcesRequest;
      output: SearchResourcesResponse;
    };
    sdk: {
      input: SearchResourcesCommandInput;
      output: SearchResourcesCommandOutput;
    };
  };
}
