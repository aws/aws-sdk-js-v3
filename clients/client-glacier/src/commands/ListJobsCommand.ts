// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListJobsInput, ListJobsOutput } from "../models/models_0";
import { de_ListJobsCommand, se_ListJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsInput {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsOutput, __MetadataBearer {}

/**
 * <p>This operation lists jobs for a vault, including jobs that are in-progress and jobs
 *          that have recently finished. The List Job operation returns a list of these jobs sorted by job initiation
 *          time.</p>
 *
 *          <note>
 *             <p>Amazon Glacier retains recently completed jobs for a period before deleting them;
 *             however, it eventually removes completed jobs. The output of completed jobs can be
 *             retrieved. Retaining completed jobs for a period of time after they have completed
 *             enables you to get a job output in the event you miss the job completion notification or
 *             your first attempt to download it fails. For example, suppose you start an archive
 *             retrieval job to download an archive. After the job completes, you start to download the
 *             archive but encounter a network error. In this scenario, you can retry and download the
 *             archive while the job exists.</p>
 *          </note>
 *
 *          <p>The List Jobs operation supports pagination. You should always check the response <code>Marker</code> field.
 *          If there are no more jobs to list, the <code>Marker</code> field is set to <code>null</code>. If there are more jobs to list,
 *          the <code>Marker</code> field is set to a non-null value, which you can use to continue the pagination of the list.
 *          To return a list of jobs that begins at a specific job,
 *          set the marker request parameter to the <code>Marker</code> value for that job that you obtained from a previous List Jobs request.</p>
 *
 *          <p>You can set a maximum limit for the number of jobs returned in the response by
 *          specifying the <code>limit</code> parameter in the request. The default limit is 50. The
 *          number of jobs returned might be fewer than the limit, but the number of returned jobs
 *          never exceeds the limit.</p>
 *
 *         <p>Additionally, you can filter the jobs list returned by specifying the optional
 *             <code>statuscode</code> parameter or <code>completed</code> parameter, or both. Using
 *          the <code>statuscode</code> parameter, you can specify to return only jobs that match
 *          either the <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code> status.
 *          Using the <code>completed</code> parameter, you can specify to return only jobs that were
 *          completed (<code>true</code>) or jobs that were not completed
 *          (<code>false</code>).</p>
 *
 *          <p>For more information about using this operation,
 *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html">List Jobs</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListJobsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListJobsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // ListJobsInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   marker: "STRING_VALUE",
 *   statuscode: "STRING_VALUE",
 *   completed: "STRING_VALUE",
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsOutput
 * //   JobList: [ // JobList
 * //     { // GlacierJobDescription
 * //       JobId: "STRING_VALUE",
 * //       JobDescription: "STRING_VALUE",
 * //       Action: "ArchiveRetrieval" || "InventoryRetrieval" || "Select",
 * //       ArchiveId: "STRING_VALUE",
 * //       VaultARN: "STRING_VALUE",
 * //       CreationDate: "STRING_VALUE",
 * //       Completed: true || false,
 * //       StatusCode: "InProgress" || "Succeeded" || "Failed",
 * //       StatusMessage: "STRING_VALUE",
 * //       ArchiveSizeInBytes: Number("long"),
 * //       InventorySizeInBytes: Number("long"),
 * //       SNSTopic: "STRING_VALUE",
 * //       CompletionDate: "STRING_VALUE",
 * //       SHA256TreeHash: "STRING_VALUE",
 * //       ArchiveSHA256TreeHash: "STRING_VALUE",
 * //       RetrievalByteRange: "STRING_VALUE",
 * //       Tier: "STRING_VALUE",
 * //       InventoryRetrievalParameters: { // InventoryRetrievalJobDescription
 * //         Format: "STRING_VALUE",
 * //         StartDate: "STRING_VALUE",
 * //         EndDate: "STRING_VALUE",
 * //         Limit: "STRING_VALUE",
 * //         Marker: "STRING_VALUE",
 * //       },
 * //       JobOutputPath: "STRING_VALUE",
 * //       SelectParameters: { // SelectParameters
 * //         InputSerialization: { // InputSerialization
 * //           csv: { // CSVInput
 * //             FileHeaderInfo: "USE" || "IGNORE" || "NONE",
 * //             Comments: "STRING_VALUE",
 * //             QuoteEscapeCharacter: "STRING_VALUE",
 * //             RecordDelimiter: "STRING_VALUE",
 * //             FieldDelimiter: "STRING_VALUE",
 * //             QuoteCharacter: "STRING_VALUE",
 * //           },
 * //         },
 * //         ExpressionType: "SQL",
 * //         Expression: "STRING_VALUE",
 * //         OutputSerialization: { // OutputSerialization
 * //           csv: { // CSVOutput
 * //             QuoteFields: "ALWAYS" || "ASNEEDED",
 * //             QuoteEscapeCharacter: "STRING_VALUE",
 * //             RecordDelimiter: "STRING_VALUE",
 * //             FieldDelimiter: "STRING_VALUE",
 * //             QuoteCharacter: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       OutputLocation: { // OutputLocation
 * //         S3: { // S3Location
 * //           BucketName: "STRING_VALUE",
 * //           Prefix: "STRING_VALUE",
 * //           Encryption: { // Encryption
 * //             EncryptionType: "aws:kms" || "AES256",
 * //             KMSKeyId: "STRING_VALUE",
 * //             KMSContext: "STRING_VALUE",
 * //           },
 * //           CannedACL: "private" || "public-read" || "public-read-write" || "aws-exec-read" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control",
 * //           AccessControlList: [ // AccessControlPolicyList
 * //             { // Grant
 * //               Grantee: { // Grantee
 * //                 Type: "AmazonCustomerByEmail" || "CanonicalUser" || "Group", // required
 * //                 DisplayName: "STRING_VALUE",
 * //                 URI: "STRING_VALUE",
 * //                 ID: "STRING_VALUE",
 * //                 EmailAddress: "STRING_VALUE",
 * //               },
 * //               Permission: "FULL_CONTROL" || "WRITE" || "WRITE_ACP" || "READ" || "READ_ACP",
 * //             },
 * //           ],
 * //           Tagging: { // hashmap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           UserMetadata: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @public
 */
export class ListJobsCommand extends $Command
  .classBuilder<
    ListJobsCommandInput,
    ListJobsCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Glacier", "ListJobs", {})
  .n("GlacierClient", "ListJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListJobsCommand)
  .de(de_ListJobsCommand)
  .build() {}
