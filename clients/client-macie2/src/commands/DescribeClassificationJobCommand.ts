// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type { DescribeClassificationJobRequest, DescribeClassificationJobResponse } from "../models/models_0";
import { DescribeClassificationJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClassificationJobCommand}.
 */
export interface DescribeClassificationJobCommandInput extends DescribeClassificationJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClassificationJobCommand}.
 */
export interface DescribeClassificationJobCommandOutput extends DescribeClassificationJobResponse, __MetadataBearer {}

/**
 * <p>Retrieves the status and settings for a classification job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DescribeClassificationJobCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DescribeClassificationJobCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // DescribeClassificationJobRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeClassificationJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClassificationJobResponse
 * //   allowListIds: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   clientToken: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   customDataIdentifierIds: [
 * //     "STRING_VALUE",
 * //   ],
 * //   description: "STRING_VALUE",
 * //   initialRun: true || false,
 * //   jobArn: "STRING_VALUE",
 * //   jobId: "STRING_VALUE",
 * //   jobStatus: "RUNNING" || "PAUSED" || "CANCELLED" || "COMPLETE" || "IDLE" || "USER_PAUSED",
 * //   jobType: "ONE_TIME" || "SCHEDULED",
 * //   lastRunErrorStatus: { // LastRunErrorStatus
 * //     code: "NONE" || "ERROR",
 * //   },
 * //   lastRunTime: new Date("TIMESTAMP"),
 * //   managedDataIdentifierIds: [
 * //     "STRING_VALUE",
 * //   ],
 * //   managedDataIdentifierSelector: "ALL" || "EXCLUDE" || "INCLUDE" || "NONE" || "RECOMMENDED",
 * //   name: "STRING_VALUE",
 * //   s3JobDefinition: { // S3JobDefinition
 * //     bucketCriteria: { // S3BucketCriteriaForJob
 * //       excludes: { // CriteriaBlockForJob
 * //         and: [ // __listOfCriteriaForJob
 * //           { // CriteriaForJob
 * //             simpleCriterion: { // SimpleCriterionForJob
 * //               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 * //               key: "ACCOUNT_ID" || "S3_BUCKET_NAME" || "S3_BUCKET_EFFECTIVE_PERMISSION" || "S3_BUCKET_SHARED_ACCESS",
 * //               values: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             tagCriterion: { // TagCriterionForJob
 * //               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 * //               tagValues: [ // __listOfTagCriterionPairForJob
 * //                 { // TagCriterionPairForJob
 * //                   key: "STRING_VALUE",
 * //                   value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       includes: {
 * //         and: [
 * //           {
 * //             simpleCriterion: {
 * //               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 * //               key: "ACCOUNT_ID" || "S3_BUCKET_NAME" || "S3_BUCKET_EFFECTIVE_PERMISSION" || "S3_BUCKET_SHARED_ACCESS",
 * //               values: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             tagCriterion: {
 * //               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 * //               tagValues: [
 * //                 {
 * //                   key: "STRING_VALUE",
 * //                   value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     bucketDefinitions: [ // __listOfS3BucketDefinitionForJob
 * //       { // S3BucketDefinitionForJob
 * //         accountId: "STRING_VALUE", // required
 * //         buckets: "<__listOf__string>", // required
 * //       },
 * //     ],
 * //     scoping: { // Scoping
 * //       excludes: { // JobScopingBlock
 * //         and: [ // __listOfJobScopeTerm
 * //           { // JobScopeTerm
 * //             simpleScopeTerm: { // SimpleScopeTerm
 * //               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 * //               key: "OBJECT_EXTENSION" || "OBJECT_LAST_MODIFIED_DATE" || "OBJECT_SIZE" || "OBJECT_KEY",
 * //               values: "<__listOf__string>",
 * //             },
 * //             tagScopeTerm: { // TagScopeTerm
 * //               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 * //               key: "STRING_VALUE",
 * //               tagValues: [ // __listOfTagValuePair
 * //                 { // TagValuePair
 * //                   key: "STRING_VALUE",
 * //                   value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               target: "S3_OBJECT",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       includes: {
 * //         and: [
 * //           {
 * //             simpleScopeTerm: {
 * //               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 * //               key: "OBJECT_EXTENSION" || "OBJECT_LAST_MODIFIED_DATE" || "OBJECT_SIZE" || "OBJECT_KEY",
 * //               values: "<__listOf__string>",
 * //             },
 * //             tagScopeTerm: {
 * //               comparator: "EQ" || "GT" || "GTE" || "LT" || "LTE" || "NE" || "CONTAINS" || "STARTS_WITH",
 * //               key: "STRING_VALUE",
 * //               tagValues: [
 * //                 {
 * //                   key: "STRING_VALUE",
 * //                   value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               target: "S3_OBJECT",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   samplingPercentage: Number("int"),
 * //   scheduleFrequency: { // JobScheduleFrequency
 * //     dailySchedule: {},
 * //     monthlySchedule: { // MonthlySchedule
 * //       dayOfMonth: Number("int"),
 * //     },
 * //     weeklySchedule: { // WeeklySchedule
 * //       dayOfWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 * //     },
 * //   },
 * //   statistics: { // Statistics
 * //     approximateNumberOfObjectsToProcess: Number("double"),
 * //     numberOfRuns: Number("double"),
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   userPausedDetails: { // UserPausedDetails
 * //     jobExpiresAt: new Date("TIMESTAMP"),
 * //     jobImminentExpirationHealthEventArn: "STRING_VALUE",
 * //     jobPausedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClassificationJobCommandInput - {@link DescribeClassificationJobCommandInput}
 * @returns {@link DescribeClassificationJobCommandOutput}
 * @see {@link DescribeClassificationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeClassificationJobCommandOutput} for command's `response` shape.
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
export class DescribeClassificationJobCommand extends $Command
  .classBuilder<
    DescribeClassificationJobCommandInput,
    DescribeClassificationJobCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "DescribeClassificationJob", {})
  .n("Macie2Client", "DescribeClassificationJobCommand")
  .sc(DescribeClassificationJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClassificationJobRequest;
      output: DescribeClassificationJobResponse;
    };
    sdk: {
      input: DescribeClassificationJobCommandInput;
      output: DescribeClassificationJobCommandOutput;
    };
  };
}
