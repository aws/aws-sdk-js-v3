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

import { ListObjectVersionsOutput, ListObjectVersionsRequest } from "../models/models_0";
import { de_ListObjectVersionsCommand, se_ListObjectVersionsCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListObjectVersionsCommand}.
 */
export interface ListObjectVersionsCommandInput extends ListObjectVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListObjectVersionsCommand}.
 */
export interface ListObjectVersionsCommandOutput extends ListObjectVersionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata about all versions of the objects in a bucket. You can also use request
 *          parameters as selection criteria to return metadata about a subset of all the object
 *          versions.</p>
 *          <important>
 *             <p> To use this operation, you must have permission to perform the
 *                <code>s3:ListBucketVersions</code> action. Be aware of the name difference. </p>
 *          </important>
 *          <note>
 *             <p> A <code>200 OK</code> response can contain valid or invalid XML. Make sure to design
 *             your application to parse the contents of the response and handle it
 *             appropriately.</p>
 *          </note>
 *          <p>To use this operation, you must have READ access to the bucket.</p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 *          <p>The following operations are related to <code>ListObjectVersions</code>:</p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListObjectVersionsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListObjectVersionsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // ListObjectVersionsRequest
 *   Bucket: "STRING_VALUE", // required
 *   Delimiter: "STRING_VALUE",
 *   EncodingType: "url",
 *   KeyMarker: "STRING_VALUE",
 *   MaxKeys: Number("int"),
 *   Prefix: "STRING_VALUE",
 *   VersionIdMarker: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   OptionalObjectAttributes: [ // OptionalObjectAttributesList
 *     "RestoreStatus",
 *   ],
 * };
 * const command = new ListObjectVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListObjectVersionsOutput
 * //   IsTruncated: true || false,
 * //   KeyMarker: "STRING_VALUE",
 * //   VersionIdMarker: "STRING_VALUE",
 * //   NextKeyMarker: "STRING_VALUE",
 * //   NextVersionIdMarker: "STRING_VALUE",
 * //   Versions: [ // ObjectVersionList
 * //     { // ObjectVersion
 * //       ETag: "STRING_VALUE",
 * //       ChecksumAlgorithm: [ // ChecksumAlgorithmList
 * //         "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 * //       ],
 * //       Size: Number("long"),
 * //       StorageClass: "STANDARD",
 * //       Key: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       IsLatest: true || false,
 * //       LastModified: new Date("TIMESTAMP"),
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
 * //   DeleteMarkers: [ // DeleteMarkers
 * //     { // DeleteMarkerEntry
 * //       Owner: {
 * //         DisplayName: "STRING_VALUE",
 * //         ID: "STRING_VALUE",
 * //       },
 * //       Key: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       IsLatest: true || false,
 * //       LastModified: new Date("TIMESTAMP"),
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
 * @param ListObjectVersionsCommandInput - {@link ListObjectVersionsCommandInput}
 * @returns {@link ListObjectVersionsCommandOutput}
 * @see {@link ListObjectVersionsCommandInput} for command's `input` shape.
 * @see {@link ListObjectVersionsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To list object versions
 * ```javascript
 * // The following example return versions of an object with specific key name prefix. The request limits the number of items returned to two. If there are are more than two object version, S3 returns NextToken in the response. You can specify this token value in your next request to fetch next set of object versions.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Prefix": "HappyFace.jpg"
 * };
 * const command = new ListObjectVersionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Versions": [
 *     {
 *       "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *       "IsLatest": true,
 *       "Key": "HappyFace.jpg",
 *       "LastModified": "2016-12-15T01:19:41.000Z",
 *       "Owner": {
 *         "DisplayName": "owner-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "Size": 3191,
 *       "StorageClass": "STANDARD",
 *       "VersionId": "null"
 *     },
 *     {
 *       "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *       "IsLatest": false,
 *       "Key": "HappyFace.jpg",
 *       "LastModified": "2016-12-13T00:58:26.000Z",
 *       "Owner": {
 *         "DisplayName": "owner-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *       },
 *       "Size": 3191,
 *       "StorageClass": "STANDARD",
 *       "VersionId": "PHtexPGjH2y.zBgT8LmB7wwLI2mpbz.k"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-object-versions-1481910996058
 * ```
 *
 */
export class ListObjectVersionsCommand extends $Command<
  ListObjectVersionsCommandInput,
  ListObjectVersionsCommandOutput,
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
  constructor(readonly input: ListObjectVersionsCommandInput) {
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
  ): Handler<ListObjectVersionsCommandInput, ListObjectVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListObjectVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "ListObjectVersionsCommand";
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
  private serialize(input: ListObjectVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListObjectVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListObjectVersionsCommandOutput> {
    return de_ListObjectVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
