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

import { ListObjectsV2Output, ListObjectsV2Request } from "../models/models_0";
import { de_ListObjectsV2Command, se_ListObjectsV2Command } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListObjectsV2Command}.
 */
export interface ListObjectsV2CommandInput extends ListObjectsV2Request {}
/**
 * @public
 *
 * The output of {@link ListObjectsV2Command}.
 */
export interface ListObjectsV2CommandOutput extends ListObjectsV2Output, __MetadataBearer {}

/**
 * @public
 * <p>Returns some or all (up to 1,000) of the objects in a bucket with each request. You can
 *          use the request parameters as selection criteria to return a subset of the objects in a
 *          bucket. A <code>200 OK</code> response can contain valid or invalid XML. Make sure to
 *          design your application to parse the contents of the response and handle it appropriately.
 *          Objects are returned sorted in an ascending order of the respective key names in the list.
 *          For more information about listing objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ListingKeysUsingAPIs.html">Listing object keys
 *             programmatically</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>To use this operation, you must have READ access to the bucket.</p>
 *          <p>To use this action in an Identity and Access Management (IAM) policy, you must have permission to perform
 *          the <code>s3:ListBucket</code> action. The bucket owner has this permission by default and
 *          can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *             Access Permissions to Your Amazon S3 Resources</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <important>
 *             <p>This section describes the latest revision of this action. We recommend that you use
 *             this revised API operation for application development. For backward compatibility, Amazon S3
 *             continues to support the prior version of this API operation, <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html">ListObjects</a>.</p>
 *          </important>
 *          <p>To get a list of your buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html">ListBuckets</a>.</p>
 *          <p>The following operations are related to <code>ListObjectsV2</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // ListObjectsV2Request
 *   Bucket: "STRING_VALUE", // required
 *   Delimiter: "STRING_VALUE",
 *   EncodingType: "url",
 *   MaxKeys: Number("int"),
 *   Prefix: "STRING_VALUE",
 *   ContinuationToken: "STRING_VALUE",
 *   FetchOwner: true || false,
 *   StartAfter: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   OptionalObjectAttributes: [ // OptionalObjectAttributesList
 *     "RestoreStatus",
 *   ],
 * };
 * const command = new ListObjectsV2Command(input);
 * const response = await client.send(command);
 * // { // ListObjectsV2Output
 * //   IsTruncated: true || false,
 * //   Contents: [ // ObjectList
 * //     { // Object
 * //       Key: "STRING_VALUE",
 * //       LastModified: new Date("TIMESTAMP"),
 * //       ETag: "STRING_VALUE",
 * //       ChecksumAlgorithm: [ // ChecksumAlgorithmList
 * //         "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 * //       ],
 * //       Size: Number("long"),
 * //       StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "GLACIER" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW",
 * //       Owner: { // Owner
 * //         DisplayName: "STRING_VALUE",
 * //         ID: "STRING_VALUE",
 * //       },
 * //       RestoreStatus: { // RestoreStatus
 * //         IsRestoreInProgress: true || false,
 * //         RestoreExpiryDate: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   Name: "STRING_VALUE",
 * //   Prefix: "STRING_VALUE",
 * //   Delimiter: "STRING_VALUE",
 * //   MaxKeys: Number("int"),
 * //   CommonPrefixes: [ // CommonPrefixList
 * //     { // CommonPrefix
 * //       Prefix: "STRING_VALUE",
 * //     },
 * //   ],
 * //   EncodingType: "url",
 * //   KeyCount: Number("int"),
 * //   ContinuationToken: "STRING_VALUE",
 * //   NextContinuationToken: "STRING_VALUE",
 * //   StartAfter: "STRING_VALUE",
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param ListObjectsV2CommandInput - {@link ListObjectsV2CommandInput}
 * @returns {@link ListObjectsV2CommandOutput}
 * @see {@link ListObjectsV2CommandInput} for command's `input` shape.
 * @see {@link ListObjectsV2CommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchBucket} (client fault)
 *  <p>The specified bucket does not exist.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To get object list
 * ```javascript
 * // The following example retrieves object list. The request specifies max keys to limit response to include only 2 object keys.
 * const input = {
 *   "Bucket": "DOC-EXAMPLE-BUCKET",
 *   "MaxKeys": "2"
 * };
 * const command = new ListObjectsV2Command(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Contents": [
 *     {
 *       "ETag": "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
 *       "Key": "happyface.jpg",
 *       "LastModified": "2014-11-21T19:40:05.000Z",
 *       "Size": 11,
 *       "StorageClass": "STANDARD"
 *     },
 *     {
 *       "ETag": "\"becf17f89c30367a9a44495d62ed521a-1\"",
 *       "Key": "test.jpg",
 *       "LastModified": "2014-05-02T04:51:50.000Z",
 *       "Size": 4192256,
 *       "StorageClass": "STANDARD"
 *     }
 *   ],
 *   "IsTruncated": true,
 *   "KeyCount": "2",
 *   "MaxKeys": "2",
 *   "Name": "DOC-EXAMPLE-BUCKET",
 *   "NextContinuationToken": "1w41l63U0xa8q7smH50vCxyTQqdxo69O3EmK28Bi5PcROI4wI/EyIJg==",
 *   "Prefix": ""
 * }
 * *\/
 * // example id: to-get-object-list
 * ```
 *
 */
export class ListObjectsV2Command extends $Command<
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      Bucket: { type: "contextParams", name: "Bucket" },
      ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
      Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListObjectsV2CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListObjectsV2CommandInput, ListObjectsV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListObjectsV2Command.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "ListObjectsV2Command";
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
  private serialize(input: ListObjectsV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListObjectsV2Command(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListObjectsV2CommandOutput> {
    return de_ListObjectsV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
