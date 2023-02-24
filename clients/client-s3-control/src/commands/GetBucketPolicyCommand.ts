// smithy-typescript generated code
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

import {
  GetBucketPolicyRequest,
  GetBucketPolicyRequestFilterSensitiveLog,
  GetBucketPolicyResult,
  GetBucketPolicyResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetBucketPolicyCommand,
  serializeAws_restXmlGetBucketPolicyCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

export interface GetBucketPolicyCommandInput extends GetBucketPolicyRequest {}
export interface GetBucketPolicyCommandOutput extends GetBucketPolicyResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for
 *             an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html">GetBucketPolicy</a> in the
 *                <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Returns the policy of a specified Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using
 *             Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>If you are using an identity other than the root user of the Amazon Web Services account that owns the
 *          bucket, the calling identity must have the <code>GetBucketPolicy</code> permissions on the
 *          specified bucket and belong to the bucket owner's account in order to use this
 *          action.</p>
 *          <p>Only users from Outposts bucket owner account with the right permissions can perform
 *          actions on an Outposts bucket. If you don't have <code>s3-outposts:GetBucketPolicy</code>
 *          permissions or you're not using an identity that belongs to the bucket owner's account,
 *          Amazon S3 returns a <code>403 Access Denied</code> error.</p>
 *          <important>
 *             <p>As a security precaution, the root user of the Amazon Web Services account that owns a bucket can
 *             always use this action, even if the policy explicitly denies the root user the ability
 *             to perform this action.</p>
 *          </important>
 *          <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User
 *             Policies</a>.</p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html#API_control_GetBucketPolicy_Examples">Examples</a> section.</p>
 *          <p>The following actions are related to <code>GetBucketPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html">PutBucketPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html">DeleteBucketPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetBucketPolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetBucketPolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetBucketPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link GetBucketPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 */
export class GetBucketPolicyCommand extends $Command<
  GetBucketPolicyCommandInput,
  GetBucketPolicyCommandOutput,
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

  constructor(readonly input: GetBucketPolicyCommandInput) {
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
  ): Handler<GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketPolicyCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetBucketPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBucketPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBucketPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBucketPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetBucketPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketPolicyCommandOutput> {
    return deserializeAws_restXmlGetBucketPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
