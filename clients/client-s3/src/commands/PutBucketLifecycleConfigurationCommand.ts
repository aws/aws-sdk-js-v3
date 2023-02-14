// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
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
  PutBucketLifecycleConfigurationRequest,
  PutBucketLifecycleConfigurationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlPutBucketLifecycleConfigurationCommand,
  serializeAws_restXmlPutBucketLifecycleConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

export interface PutBucketLifecycleConfigurationCommandInput extends PutBucketLifecycleConfigurationRequest {}
export interface PutBucketLifecycleConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle
 *          configuration. Keep in mind that this will overwrite an existing lifecycle configuration, so if
 *          you want to retain any configuration details, they must be included in the new lifecycle
 *          configuration. For information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html">Managing your storage
 *             lifecycle</a>.</p>
 *          <note>
 *             <p>Bucket lifecycle configuration now supports specifying a lifecycle rule using an
 *             object key name prefix, one or more object tags, or a combination of both. Accordingly,
 *             this section describes the latest API. The previous version of the API supported
 *             filtering based only on an object key name prefix, which is supported for backward
 *             compatibility. For the related API description, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycle.html">PutBucketLifecycle</a>.</p>
 *          </note>
 *          <p>
 *             <b>Rules</b>
 *          </p>
 *          <p>You specify the lifecycle configuration in your request body. The lifecycle
 *          configuration is specified as XML consisting of one or more rules. An Amazon S3 Lifecycle
 *          configuration can have up to 1,000 rules. This limit is not adjustable. Each rule consists
 *          of the following:</p>
 *          <ul>
 *             <li>
 *                <p>Filter identifying a subset of objects to which the rule applies. The filter can
 *                be based on a key name prefix, object tags, or a combination of both.</p>
 *             </li>
 *             <li>
 *                <p>Status whether the rule is in effect.</p>
 *             </li>
 *             <li>
 *                <p>One or more lifecycle transition and expiration actions that you want Amazon S3 to
 *                perform on the objects identified by the filter. If the state of your bucket is
 *                versioning-enabled or versioning-suspended, you can have many versions of the same
 *                object (one current version and zero or more noncurrent versions). Amazon S3 provides
 *                predefined actions that you can specify for current and noncurrent object
 *                versions.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object
 *             Lifecycle Management</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html">Lifecycle Configuration Elements</a>.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>By default, all Amazon S3 resources are private, including buckets, objects, and related
 *          subresources (for example, lifecycle configuration and website configuration). Only the
 *          resource owner (that is, the Amazon Web Services account that created it) can access the resource. The
 *          resource owner can optionally grant access permissions to others by writing an access
 *          policy. For this operation, a user must get the <code>s3:PutLifecycleConfiguration</code>
 *          permission.</p>
 *          <p>You can also explicitly deny permissions. Explicit deny also supersedes any other
 *          permissions. If you want to block users or accounts from removing or deleting objects from
 *          your bucket, you must deny them permissions for the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>s3:DeleteObject</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>s3:DeleteObjectVersion</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>s3:PutLifecycleConfiguration</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *             Resources</a>.</p>
 *          <p>The following are related to <code>PutBucketLifecycleConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-configuration-examples.html">Examples of
 *                   Lifecycle Configuration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html">DeleteBucketLifecycle</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketLifecycleConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketLifecycleConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutBucketLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBucketLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBucketLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 */
export class PutBucketLifecycleConfigurationCommand extends $Command<
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
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

  constructor(readonly input: PutBucketLifecycleConfigurationCommandInput) {
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
  ): Handler<PutBucketLifecycleConfigurationCommandInput, PutBucketLifecycleConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBucketLifecycleConfigurationCommand.getEndpointParameterInstructions())
    );
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
    const commandName = "PutBucketLifecycleConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBucketLifecycleConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutBucketLifecycleConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlPutBucketLifecycleConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutBucketLifecycleConfigurationCommandOutput> {
    return deserializeAws_restXmlPutBucketLifecycleConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
