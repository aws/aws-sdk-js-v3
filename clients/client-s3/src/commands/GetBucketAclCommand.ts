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
  GetBucketAclOutput,
  GetBucketAclOutputFilterSensitiveLog,
  GetBucketAclRequest,
  GetBucketAclRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetBucketAclCommand,
  serializeAws_restXmlGetBucketAclCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

export interface GetBucketAclCommandInput extends GetBucketAclRequest {}
export interface GetBucketAclCommandOutput extends GetBucketAclOutput, __MetadataBearer {}

/**
 * <p>This implementation of the <code>GET</code> action uses the <code>acl</code>
 *          subresource to return the access control list (ACL) of a bucket. To use <code>GET</code> to
 *          return the ACL of the bucket, you must have <code>READ_ACP</code> access to the bucket. If
 *             <code>READ_ACP</code> permission is granted to the anonymous user, you can return the
 *          ACL of the bucket without using an authorization header.</p>
 *          <note>
 *             <p>If your bucket uses the bucket owner enforced setting for S3 Object Ownership,
 *             requests to read ACLs are still supported and return the <code>bucket-owner-full-control</code>
 *             ACL with the owner being the account that created the bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">
 *                Controlling object ownership and disabling ACLs</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html">ListObjects</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketAclCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketAclCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketAclCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketAclCommandInput} for command's `input` shape.
 * @see {@link GetBucketAclCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 */
export class GetBucketAclCommand extends $Command<
  GetBucketAclCommandInput,
  GetBucketAclCommandOutput,
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

  constructor(readonly input: GetBucketAclCommandInput) {
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
  ): Handler<GetBucketAclCommandInput, GetBucketAclCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBucketAclCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetBucketAclCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBucketAclRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBucketAclOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBucketAclCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetBucketAclCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketAclCommandOutput> {
    return deserializeAws_restXmlGetBucketAclCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
