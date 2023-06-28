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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListJobsInput, ListJobsOutput } from "../models/models_0";
import { de_ListJobsCommand, se_ListJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 * @example To list jobs for a vault
 * ```javascript
 * // The example lists jobs for the vault named my-vault.
 * const input = {
 *   "accountId": "-",
 *   "vaultName": "my-vault"
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "JobList": [
 *     {
 *       "Action": "ArchiveRetrieval",
 *       "ArchiveId": "kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw",
 *       "ArchiveSHA256TreeHash": "9628195fcdbcbbe76cdde932d4646fa7de5f219fb39823836d81f0cc0e18aa67",
 *       "ArchiveSizeInBytes": 3145728,
 *       "Completed": false,
 *       "CreationDate": "2015-07-17T21:16:13.840Z",
 *       "JobDescription": "Retrieve archive on 2015-07-17",
 *       "JobId": "l7IL5-EkXyEY9Ws95fClzIbk2O5uLYaFdAYOi-azsX_Z8V6NH4yERHzars8wTKYQMX6nBDI9cMNHzyZJO59-8N9aHWav",
 *       "RetrievalByteRange": "0-3145727",
 *       "SHA256TreeHash": "9628195fcdbcbbe76cdde932d4646fa7de5f219fb39823836d81f0cc0e18aa67",
 *       "SNSTopic": "arn:aws:sns:us-west-2:0123456789012:my-vault",
 *       "StatusCode": "InProgress",
 *       "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
 *     },
 *     {
 *       "Action": "InventoryRetrieval",
 *       "Completed": false,
 *       "CreationDate": "2015-07-17T20:23:41.616Z",
 *       "InventoryRetrievalParameters": {
 *         "Format": "JSON"
 *       },
 *       "JobId": "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW",
 *       "StatusCode": "InProgress",
 *       "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-jobs-for-a-vault-1481920530537
 * ```
 *
 */
export class ListJobsCommand extends $Command<
  ListJobsCommandInput,
  ListJobsCommandOutput,
  GlacierClientResolvedConfig
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
  constructor(readonly input: ListJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobsCommandInput, ListJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListJobsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "ListJobsCommand";
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
  private serialize(input: ListJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobsCommandOutput> {
    return de_ListJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
