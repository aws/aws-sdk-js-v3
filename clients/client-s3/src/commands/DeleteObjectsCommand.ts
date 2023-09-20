// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
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

import { DeleteObjectsOutput, DeleteObjectsRequest } from "../models/models_0";
import { de_DeleteObjectsCommand, se_DeleteObjectsCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteObjectsCommand}.
 */
export interface DeleteObjectsCommandInput extends DeleteObjectsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteObjectsCommand}.
 */
export interface DeleteObjectsCommandOutput extends DeleteObjectsOutput, __MetadataBearer {}

/**
 * @public
 * <p>This action enables you to delete multiple objects from a bucket using a single HTTP
 *          request. If you know the object keys that you want to delete, then this action provides a
 *          suitable alternative to sending individual delete requests, reducing per-request
 *          overhead.</p>
 *          <p>The request contains a list of up to 1000 keys that you want to delete. In the XML, you
 *          provide the object key names, and optionally, version IDs if you want to delete a specific
 *          version of the object from a versioning-enabled bucket. For each key, Amazon S3 performs a
 *          delete action and returns the result of that delete, success, or failure, in the response.
 *          Note that if the object specified in the request is not found, Amazon S3 returns the result as
 *          deleted.</p>
 *          <p> The action supports two modes for the response: verbose and quiet. By default, the
 *          action uses verbose mode in which the response includes the result of deletion of each key
 *          in your request. In quiet mode the response includes only keys where the delete action
 *          encountered an error. For a successful deletion, the action does not return any information
 *          about the delete in the response body.</p>
 *          <p>When performing this action on an MFA Delete enabled bucket, that attempts to delete any
 *          versioned objects, you must include an MFA token. If you do not provide one, the entire
 *          request will fail, even if there are non-versioned objects you are trying to delete. If you
 *          provide an invalid token, whether there are versioned keys in the request or not, the
 *          entire Multi-Object Delete request will fail. For information about MFA Delete, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html#MultiFactorAuthenticationDelete"> MFA
 *             Delete</a>.</p>
 *          <p>Finally, the Content-MD5 header is required for all Multi-Object Delete requests. Amazon S3
 *          uses the header value to ensure that your request body has not been altered in
 *          transit.</p>
 *          <p>The following operations are related to <code>DeleteObjects</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteObjectsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteObjectsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteObjectsRequest
 *   Bucket: "STRING_VALUE", // required
 *   Delete: { // Delete
 *     Objects: [ // ObjectIdentifierList // required
 *       { // ObjectIdentifier
 *         Key: "STRING_VALUE", // required
 *         VersionId: "STRING_VALUE",
 *       },
 *     ],
 *     Quiet: true || false,
 *   },
 *   MFA: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   BypassGovernanceRetention: true || false,
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 * };
 * const command = new DeleteObjectsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteObjectsOutput
 * //   Deleted: [ // DeletedObjects
 * //     { // DeletedObject
 * //       Key: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       DeleteMarker: true || false,
 * //       DeleteMarkerVersionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   RequestCharged: "requester",
 * //   Errors: [ // Errors
 * //     { // Error
 * //       Key: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteObjectsCommandInput - {@link DeleteObjectsCommandInput}
 * @returns {@link DeleteObjectsCommandOutput}
 * @see {@link DeleteObjectsCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To delete multiple object versions from a versioned bucket
 * ```javascript
 * // The following example deletes objects from a bucket. The request specifies object versions. S3 deletes specific object versions and returns the key and versions of deleted objects in the response.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Delete": {
 *     "Objects": [
 *       {
 *         "Key": "HappyFace.jpg",
 *         "VersionId": "2LWg7lQLnY41.maGB5Z6SWW.dcq0vx7b"
 *       },
 *       {
 *         "Key": "HappyFace.jpg",
 *         "VersionId": "yoz3HB.ZhCS_tKVEmIOr7qYyyAaZSKVd"
 *       }
 *     ],
 *     "Quiet": false
 *   }
 * };
 * const command = new DeleteObjectsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Deleted": [
 *     {
 *       "Key": "HappyFace.jpg",
 *       "VersionId": "yoz3HB.ZhCS_tKVEmIOr7qYyyAaZSKVd"
 *     },
 *     {
 *       "Key": "HappyFace.jpg",
 *       "VersionId": "2LWg7lQLnY41.maGB5Z6SWW.dcq0vx7b"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-delete-multiple-object-versions-from-a-versioned-bucket-1483147087737
 * ```
 *
 * @example To delete multiple objects from a versioned bucket
 * ```javascript
 * // The following example deletes objects from a bucket. The bucket is versioned, and the request does not specify the object version to delete. In this case, all versions remain in the bucket and S3 adds a delete marker.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Delete": {
 *     "Objects": [
 *       {
 *         "Key": "objectkey1"
 *       },
 *       {
 *         "Key": "objectkey2"
 *       }
 *     ],
 *     "Quiet": false
 *   }
 * };
 * const command = new DeleteObjectsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Deleted": [
 *     {
 *       "DeleteMarker": "true",
 *       "DeleteMarkerVersionId": "A._w1z6EFiCF5uhtQMDal9JDkID9tQ7F",
 *       "Key": "objectkey1"
 *     },
 *     {
 *       "DeleteMarker": "true",
 *       "DeleteMarkerVersionId": "iOd_ORxhkKe_e8G8_oSGxt2PjsCZKlkt",
 *       "Key": "objectkey2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-delete-multiple-objects-from-a-versioned-bucket-1483146248805
 * ```
 *
 */
export class DeleteObjectsCommand extends $Command<
  DeleteObjectsCommandInput,
  DeleteObjectsCommandOutput,
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
  constructor(readonly input: DeleteObjectsCommandInput) {
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
  ): Handler<DeleteObjectsCommandInput, DeleteObjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteObjectsCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(
      getFlexibleChecksumsPlugin(configuration, {
        input: this.input,
        requestAlgorithmMember: "ChecksumAlgorithm",
        requestChecksumRequired: true,
      })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "DeleteObjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "DeleteObjects",
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
  private serialize(input: DeleteObjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteObjectsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteObjectsCommandOutput> {
    return de_DeleteObjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
