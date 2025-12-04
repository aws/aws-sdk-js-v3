// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type { ListClassificationJobsRequest, ListClassificationJobsResponse } from "../models/models_0";
import { ListClassificationJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClassificationJobsCommand}.
 */
export interface ListClassificationJobsCommandInput extends ListClassificationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListClassificationJobsCommand}.
 */
export interface ListClassificationJobsCommandOutput extends ListClassificationJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a subset of information about one or more classification jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListClassificationJobsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListClassificationJobsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // ListClassificationJobsRequest
 *   filterCriteria: { // ListJobsFilterCriteria
 *     excludes: [ // __listOfListJobsFilterTerm
 *       { // ListJobsFilterTerm
 *         comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *         key: "jobType" || "jobStatus" || "createdAt" || "name",
 *         values: [ // __listOf__string
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     includes: [
 *       {
 *         comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 *         key: "jobType" || "jobStatus" || "createdAt" || "name",
 *         values: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortCriteria: { // ListJobsSortCriteria
 *     attributeName: "createdAt" || "jobStatus" || "name" || "jobType",
 *     orderBy: "ASC" || "DESC",
 *   },
 * };
 * const command = new ListClassificationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListClassificationJobsResponse
 * //   items: [ // __listOfJobSummary
 * //     { // JobSummary
 * //       bucketCriteria: { // S3BucketCriteriaForJob
 * //         excludes: { // CriteriaBlockForJob
 * //           and: [ // __listOfCriteriaForJob
 * //             { // CriteriaForJob
 * //               simpleCriterion: { // SimpleCriterionForJob
 * //                 comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 * //                 key: "ACCOUNT_ID" || "S3_BUCKET_NAME" || "S3_BUCKET_EFFECTIVE_PERMISSION" || "S3_BUCKET_SHARED_ACCESS",
 * //                 values: [ // __listOf__string
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               tagCriterion: { // TagCriterionForJob
 * //                 comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 * //                 tagValues: [ // __listOfTagCriterionPairForJob
 * //                   { // TagCriterionPairForJob
 * //                     key: "STRING_VALUE",
 * //                     value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         includes: {
 * //           and: [
 * //             {
 * //               simpleCriterion: {
 * //                 comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 * //                 key: "ACCOUNT_ID" || "S3_BUCKET_NAME" || "S3_BUCKET_EFFECTIVE_PERMISSION" || "S3_BUCKET_SHARED_ACCESS",
 * //                 values: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               tagCriterion: {
 * //                 comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 * //                 tagValues: [
 * //                   {
 * //                     key: "STRING_VALUE",
 * //                     value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       bucketDefinitions: [ // __listOfS3BucketDefinitionForJob
 * //         { // S3BucketDefinitionForJob
 * //           accountId: "STRING_VALUE", // required
 * //           buckets: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"),
 * //       jobId: "STRING_VALUE",
 * //       jobStatus: "RUNNING" || "PAUSED" || "CANCELLED" || "COMPLETE" || "IDLE" || "USER_PAUSED",
 * //       jobType: "ONE_TIME" || "SCHEDULED",
 * //       lastRunErrorStatus: { // LastRunErrorStatus
 * //         code: "NONE" || "ERROR",
 * //       },
 * //       name: "STRING_VALUE",
 * //       userPausedDetails: { // UserPausedDetails
 * //         jobExpiresAt: new Date("TIMESTAMP"),
 * //         jobImminentExpirationHealthEventArn: "STRING_VALUE",
 * //         jobPausedAt: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClassificationJobsCommandInput - {@link ListClassificationJobsCommandInput}
 * @returns {@link ListClassificationJobsCommandOutput}
 * @see {@link ListClassificationJobsCommandInput} for command's `input` shape.
 * @see {@link ListClassificationJobsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListClassificationJobsCommand extends $Command
  .classBuilder<
    ListClassificationJobsCommandInput,
    ListClassificationJobsCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "ListClassificationJobs", {})
  .n("Macie2Client", "ListClassificationJobsCommand")
  .sc(ListClassificationJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClassificationJobsRequest;
      output: ListClassificationJobsResponse;
    };
    sdk: {
      input: ListClassificationJobsCommandInput;
      output: ListClassificationJobsCommandOutput;
    };
  };
}
