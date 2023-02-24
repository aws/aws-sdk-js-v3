// smithy-typescript generated code
import { getApplyMd5BodyChecksumPlugin } from "@aws-sdk/middleware-apply-body-checksum";
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

import { PutBucketVersioningRequest, PutBucketVersioningRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restXmlPutBucketVersioningCommand,
  serializeAws_restXmlPutBucketVersioningCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

export interface PutBucketVersioningCommandInput extends PutBucketVersioningRequest {}
export interface PutBucketVersioningCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This operation sets the versioning state only for S3 on Outposts buckets. To set the
 *             versioning state for an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html">PutBucketVersioning</a> in
 *             the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Sets the versioning state for an S3 on Outposts bucket. With versioning, you can save
 *          multiple distinct copies of your data and recover from unintended user actions and
 *          application failures.</p>
 *          <p>You can set the versioning state to one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Enabled</b> - Enables versioning for the objects in
 *                the bucket. All objects added to the bucket receive a unique version ID.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Suspended</b> - Suspends versioning for the objects
 *                in the bucket. All objects added to the bucket receive the version ID
 *                   <code>null</code>.</p>
 *             </li>
 *          </ul>
 *          <p>If you've never set versioning on your bucket, it has no versioning state. In that case,
 *          a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html">
 *             GetBucketVersioning</a> request does not return a versioning state value.</p>
 *          <p>When you enable S3 Versioning, for each object in your bucket, you have a current
 *          version and zero or more noncurrent versions. You can configure your bucket S3 Lifecycle
 *          rules to expire noncurrent versions after a specified time period. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsLifecycleManaging.html"> Creating and managing
 *             a lifecycle configuration for your S3 on Outposts bucket</a> in the <i>Amazon S3
 *             User Guide</i>.</p>
 *          <p>If you have an object expiration lifecycle policy in your non-versioned bucket and you
 *          want to maintain the same permanent delete behavior when you enable versioning, you must
 *          add a noncurrent expiration policy. The noncurrent expiration lifecycle policy will manage
 *          the deletes of the noncurrent object versions in the version-enabled bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html">Versioning</a> in the <i>Amazon S3
 *             User Guide</i>.</p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html#API_control_PutBucketVersioning_Examples">Examples</a> section.</p>
 *          <p>The following operations are related to <code>PutBucketVersioning</code> for
 *          S3 on Outposts.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html">GetBucketVersioning</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutBucketVersioningCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutBucketVersioningCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new PutBucketVersioningCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBucketVersioningCommandInput} for command's `input` shape.
 * @see {@link PutBucketVersioningCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 */
export class PutBucketVersioningCommand extends $Command<
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      Bucket: { type: "contextParams", name: "Bucket" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: PutBucketVersioningCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketVersioningCommandInput, PutBucketVersioningCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBucketVersioningCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "PutBucketVersioningCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBucketVersioningRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutBucketVersioningCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPutBucketVersioningCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBucketVersioningCommandOutput> {
    return deserializeAws_restXmlPutBucketVersioningCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
