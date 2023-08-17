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
import { DescribeJobInput, GlacierJobDescription } from "../models/models_0";
import { de_DescribeJobCommand, se_DescribeJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobCommand}.
 */
export interface DescribeJobCommandInput extends DescribeJobInput {}
/**
 * @public
 *
 * The output of {@link DescribeJobCommand}.
 */
export interface DescribeJobCommandOutput extends GlacierJobDescription, __MetadataBearer {}

/**
 * @public
 * <p>This operation returns information about a job you previously initiated, including
 *          the job initiation date, the user who initiated the job, the job status code/message and
 *          the Amazon SNS topic to notify after Amazon S3 Glacier (Glacier) completes the job. For more information
 *          about initiating a job, see <a>InitiateJob</a>. </p>
 *
 *          <note>
 *             <p>This operation enables you to check the status of your job. However, it is
 *             strongly recommended that you set up an Amazon SNS topic and specify it in your initiate
 *             job request so that Glacier can notify the topic after it completes the
 *             job.</p>
 *          </note>
 *
 *          <p>A job ID will not expire for at least 24 hours after Glacier completes the
 *          job.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *
 *          <p> For more information about using this operation,
 *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html">Describe Job</a>
 *          in the <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, DescribeJobCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, DescribeJobCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // DescribeJobInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeJobCommand(input);
 * const response = await client.send(command);
 * // { // GlacierJobDescription
 * //   JobId: "STRING_VALUE",
 * //   JobDescription: "STRING_VALUE",
 * //   Action: "ArchiveRetrieval" || "InventoryRetrieval" || "Select",
 * //   ArchiveId: "STRING_VALUE",
 * //   VaultARN: "STRING_VALUE",
 * //   CreationDate: "STRING_VALUE",
 * //   Completed: true || false,
 * //   StatusCode: "InProgress" || "Succeeded" || "Failed",
 * //   StatusMessage: "STRING_VALUE",
 * //   ArchiveSizeInBytes: Number("long"),
 * //   InventorySizeInBytes: Number("long"),
 * //   SNSTopic: "STRING_VALUE",
 * //   CompletionDate: "STRING_VALUE",
 * //   SHA256TreeHash: "STRING_VALUE",
 * //   ArchiveSHA256TreeHash: "STRING_VALUE",
 * //   RetrievalByteRange: "STRING_VALUE",
 * //   Tier: "STRING_VALUE",
 * //   InventoryRetrievalParameters: { // InventoryRetrievalJobDescription
 * //     Format: "STRING_VALUE",
 * //     StartDate: "STRING_VALUE",
 * //     EndDate: "STRING_VALUE",
 * //     Limit: "STRING_VALUE",
 * //     Marker: "STRING_VALUE",
 * //   },
 * //   JobOutputPath: "STRING_VALUE",
 * //   SelectParameters: { // SelectParameters
 * //     InputSerialization: { // InputSerialization
 * //       csv: { // CSVInput
 * //         FileHeaderInfo: "USE" || "IGNORE" || "NONE",
 * //         Comments: "STRING_VALUE",
 * //         QuoteEscapeCharacter: "STRING_VALUE",
 * //         RecordDelimiter: "STRING_VALUE",
 * //         FieldDelimiter: "STRING_VALUE",
 * //         QuoteCharacter: "STRING_VALUE",
 * //       },
 * //     },
 * //     ExpressionType: "SQL",
 * //     Expression: "STRING_VALUE",
 * //     OutputSerialization: { // OutputSerialization
 * //       csv: { // CSVOutput
 * //         QuoteFields: "ALWAYS" || "ASNEEDED",
 * //         QuoteEscapeCharacter: "STRING_VALUE",
 * //         RecordDelimiter: "STRING_VALUE",
 * //         FieldDelimiter: "STRING_VALUE",
 * //         QuoteCharacter: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   OutputLocation: { // OutputLocation
 * //     S3: { // S3Location
 * //       BucketName: "STRING_VALUE",
 * //       Prefix: "STRING_VALUE",
 * //       Encryption: { // Encryption
 * //         EncryptionType: "aws:kms" || "AES256",
 * //         KMSKeyId: "STRING_VALUE",
 * //         KMSContext: "STRING_VALUE",
 * //       },
 * //       CannedACL: "private" || "public-read" || "public-read-write" || "aws-exec-read" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control",
 * //       AccessControlList: [ // AccessControlPolicyList
 * //         { // Grant
 * //           Grantee: { // Grantee
 * //             Type: "AmazonCustomerByEmail" || "CanonicalUser" || "Group", // required
 * //             DisplayName: "STRING_VALUE",
 * //             URI: "STRING_VALUE",
 * //             ID: "STRING_VALUE",
 * //             EmailAddress: "STRING_VALUE",
 * //           },
 * //           Permission: "FULL_CONTROL" || "WRITE" || "WRITE_ACP" || "READ" || "READ_ACP",
 * //         },
 * //       ],
 * //       Tagging: { // hashmap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       UserMetadata: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJobCommandInput - {@link DescribeJobCommandInput}
 * @returns {@link DescribeJobCommandOutput}
 * @see {@link DescribeJobCommandInput} for command's `input` shape.
 * @see {@link DescribeJobCommandOutput} for command's `response` shape.
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
 * @example To get information about a previously initiated job
 * ```javascript
 * // The example returns information about the previously initiated job specified by the job ID.
 * const input = {
 *   "accountId": "-",
 *   "jobId": "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4Cn",
 *   "vaultName": "my-vault"
 * };
 * const command = new DescribeJobCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Action": "InventoryRetrieval",
 *   "Completed": false,
 *   "CreationDate": "2015-07-17T20:23:41.616Z",
 *   "InventoryRetrievalParameters": {
 *     "Format": "JSON"
 *   },
 *   "JobId": "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW",
 *   "StatusCode": "InProgress",
 *   "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
 * }
 * *\/
 * // example id: to-get-information-about-a-job-you-previously-initiated-1481840928592
 * ```
 *
 */
export class DescribeJobCommand extends $Command<
  DescribeJobCommandInput,
  DescribeJobCommandOutput,
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
  constructor(readonly input: DescribeJobCommandInput) {
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
  ): Handler<DescribeJobCommandInput, DescribeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "DescribeJobCommand";
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
  private serialize(input: DescribeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobCommandOutput> {
    return de_DescribeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
