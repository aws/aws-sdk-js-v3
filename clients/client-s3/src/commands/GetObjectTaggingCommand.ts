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

import { GetObjectTaggingOutput, GetObjectTaggingRequest } from "../models/models_0";
import { de_GetObjectTaggingCommand, se_GetObjectTaggingCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetObjectTaggingCommand}.
 */
export interface GetObjectTaggingCommandInput extends GetObjectTaggingRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectTaggingCommand}.
 */
export interface GetObjectTaggingCommandOutput extends GetObjectTaggingOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the tag-set of an object. You send the GET request against the tagging
 *          subresource associated with the object.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:GetObjectTagging</code> action. By default, the GET action returns information
 *          about current version of an object. For a versioned bucket, you can have multiple versions
 *          of an object in your bucket. To retrieve tags of any other version, use the versionId query
 *          parameter. You also need permission for the <code>s3:GetObjectVersionTagging</code>
 *          action.</p>
 *          <p> By default, the bucket owner has this permission and can grant this permission to
 *          others.</p>
 *          <p> For information about the Amazon S3 object tagging feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html">Object Tagging</a>.</p>
 *          <p>The following actions are related to <code>GetObjectTagging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html">DeleteObjectTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html">PutObjectTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetObjectTaggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   RequestPayer: "requester",
 * };
 * const command = new GetObjectTaggingCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectTaggingOutput
 * //   VersionId: "STRING_VALUE",
 * //   TagSet: [ // TagSet // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetObjectTaggingCommandInput - {@link GetObjectTaggingCommandInput}
 * @returns {@link GetObjectTaggingCommandOutput}
 * @see {@link GetObjectTaggingCommandInput} for command's `input` shape.
 * @see {@link GetObjectTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To retrieve tag set of an object
 * ```javascript
 * // The following example retrieves tag set of an object.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new GetObjectTaggingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TagSet": [
 *     {
 *       "Key": "Key4",
 *       "Value": "Value4"
 *     },
 *     {
 *       "Key": "Key3",
 *       "Value": "Value3"
 *     }
 *   ],
 *   "VersionId": "null"
 * }
 * *\/
 * // example id: to-retrieve-tag-set-of-an-object-1481833847896
 * ```
 *
 * @example To retrieve tag set of a specific object version
 * ```javascript
 * // The following example retrieves tag set of an object. The request specifies object version.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "exampleobject",
 *   "VersionId": "ydlaNkwWm0SfKJR.T1b1fIdPRbldTYRI"
 * };
 * const command = new GetObjectTaggingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TagSet": [
 *     {
 *       "Key": "Key1",
 *       "Value": "Value1"
 *     }
 *   ],
 *   "VersionId": "ydlaNkwWm0SfKJR.T1b1fIdPRbldTYRI"
 * }
 * *\/
 * // example id: to-retrieve-tag-set-of-a-specific-object-version-1483400283663
 * ```
 *
 */
export class GetObjectTaggingCommand extends $Command<
  GetObjectTaggingCommandInput,
  GetObjectTaggingCommandOutput,
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
  constructor(readonly input: GetObjectTaggingCommandInput) {
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
  ): Handler<GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetObjectTaggingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetObjectTaggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "GetObjectTagging",
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
  private serialize(input: GetObjectTaggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetObjectTaggingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetObjectTaggingCommandOutput> {
    return de_GetObjectTaggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
