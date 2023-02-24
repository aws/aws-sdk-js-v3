// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ListObjectsV2Output,
  ListObjectsV2OutputFilterSensitiveLog,
  ListObjectsV2Request,
  ListObjectsV2RequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlListObjectsV2Command,
  serializeAws_restXmlListObjectsV2Command,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

export interface ListObjectsV2CommandInput extends ListObjectsV2Request {}
export interface ListObjectsV2CommandOutput extends ListObjectsV2Output, __MetadataBearer {}

/**
 * <p>Returns some or all (up to 1,000) of the objects in a bucket with each request. You can use
 *          the request parameters as selection criteria to return a subset of the objects in a bucket. A
 *          <code>200 OK</code> response can contain valid or invalid XML. Make sure to design your
 *          application to parse the contents of the response and handle it appropriately.
 *          Objects are returned sorted in an ascending order of the respective key names in the list.
 *          For more information about listing objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ListingKeysUsingAPIs.html">Listing object keys
 *             programmatically</a>
 *          </p>
 *          <p>To use this operation, you must have READ access to the bucket.</p>
 *          <p>To use this action in an Identity and Access Management (IAM) policy, you must
 *          have permissions to perform the <code>s3:ListBucket</code> action. The bucket owner has
 *          this permission by default and can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *             Resources</a>.</p>
 *          <important>
 *             <p>This section describes the latest revision of this action. We recommend that you use this
 *             revised API for application development. For backward compatibility, Amazon S3 continues to
 *             support the prior version of this API, <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html">ListObjects</a>.</p>
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
 * const command = new ListObjectsV2Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObjectsV2CommandInput} for command's `input` shape.
 * @see {@link ListObjectsV2CommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
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
      inputFilterSensitiveLog: ListObjectsV2RequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListObjectsV2OutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListObjectsV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListObjectsV2Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListObjectsV2CommandOutput> {
    return deserializeAws_restXmlListObjectsV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
