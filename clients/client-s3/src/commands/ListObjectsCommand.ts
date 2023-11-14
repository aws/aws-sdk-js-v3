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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListObjectsOutput, ListObjectsRequest } from "../models/models_0";
import { de_ListObjectsCommand, se_ListObjectsCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListObjectsCommand}.
 */
export interface ListObjectsCommandInput extends ListObjectsRequest {}
/**
 * @public
 *
 * The output of {@link ListObjectsCommand}.
 */
export interface ListObjectsCommandOutput extends ListObjectsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns some or all (up to 1,000) of the objects in a bucket. You can use the request
 *          parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK
 *          response can contain valid or invalid XML. Be sure to design your application to parse the
 *          contents of the response and handle it appropriately.</p>
 *          <important>
 *             <p>This action has been revised. We recommend that you use the newer version, <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html">ListObjectsV2</a>, when developing applications. For backward compatibility,
 *             Amazon S3 continues to support <code>ListObjects</code>.</p>
 *          </important>
 *          <p>The following operations are related to <code>ListObjects</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html">ListObjectsV2</a>
 *                </p>
 *             </li>
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
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html">ListBuckets</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // ListObjectsRequest
 *   Bucket: "STRING_VALUE", // required
 *   Delimiter: "STRING_VALUE",
 *   EncodingType: "url",
 *   Marker: "STRING_VALUE",
 *   MaxKeys: Number("int"),
 *   Prefix: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   OptionalObjectAttributes: [ // OptionalObjectAttributesList
 *     "RestoreStatus",
 *   ],
 * };
 * const command = new ListObjectsCommand(input);
 * const response = await client.send(command);
 * // { // ListObjectsOutput
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * //   NextMarker: "STRING_VALUE",
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
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param ListObjectsCommandInput - {@link ListObjectsCommandInput}
 * @returns {@link ListObjectsCommandOutput}
 * @see {@link ListObjectsCommandInput} for command's `input` shape.
 * @see {@link ListObjectsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchBucket} (client fault)
 *  <p>The specified bucket does not exist.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To list objects in a bucket
 * ```javascript
 * // The following example list two objects in a bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "MaxKeys": "2"
 * };
 * const command = new ListObjectsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Contents": [
 *     {
 *       "ETag": "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
 *       "Key": "example1.jpg",
 *       "LastModified": "2014-11-21T19:40:05.000Z",
 *       "Owner": {
 *         "DisplayName": "myname",
 *         "ID": "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "Size": 11,
 *       "StorageClass": "STANDARD"
 *     },
 *     {
 *       "ETag": "\"9c8af9a76df052144598c115ef33e511\"",
 *       "Key": "example2.jpg",
 *       "LastModified": "2013-11-15T01:10:49.000Z",
 *       "Owner": {
 *         "DisplayName": "myname",
 *         "ID": "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "Size": 713193,
 *       "StorageClass": "STANDARD"
 *     }
 *   ],
 *   "NextMarker": "eyJNYXJrZXIiOiBudWxsLCAiYm90b190cnVuY2F0ZV9hbW91bnQiOiAyfQ=="
 * }
 * *\/
 * // example id: to-list-objects-in-a-bucket-1473447646507
 * ```
 *
 */
export class ListObjectsCommand extends $Command<
  ListObjectsCommandInput,
  ListObjectsCommandOutput,
  S3ClientResolvedConfig
> {
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
  constructor(readonly input: ListObjectsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListObjectsCommandInput, ListObjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListObjectsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "ListObjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "ListObjects",
      },
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
  private serialize(input: ListObjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListObjectsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListObjectsCommandOutput> {
    return de_ListObjectsCommand(output, context);
  }
}
