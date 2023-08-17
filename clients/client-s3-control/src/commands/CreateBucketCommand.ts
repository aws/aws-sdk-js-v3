// smithy-typescript generated code
import { getRedirectFromPostIdPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
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

import { CreateBucketRequest, CreateBucketResult } from "../models/models_0";
import { de_CreateBucketCommand, se_CreateBucketCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateBucketCommand}.
 */
export interface CreateBucketCommandInput extends CreateBucketRequest {}
/**
 * @public
 *
 * The output of {@link CreateBucketCommand}.
 */
export interface CreateBucketCommandOutput extends CreateBucketResult, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">Create
 *                Bucket</a> in the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To
 *          create an Outposts bucket, you must have S3 on Outposts. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using
 *             Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p>
 *          <p>Not every string is an acceptable bucket name. For information on bucket naming
 *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/BucketRestrictions.html#bucketnamingrules">Working with
 *             Amazon S3 Buckets</a>.</p>
 *          <p>S3 on Outposts buckets support:</p>
 *          <ul>
 *             <li>
 *                <p>Tags</p>
 *             </li>
 *             <li>
 *                <p>LifecycleConfigurations for deleting expired objects</p>
 *             </li>
 *          </ul>
 *          <p>For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OnOutpostsRestrictionsLimitations.html">
 *             Amazon S3 on Outposts Restrictions and Limitations</a>.</p>
 *          <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
 *          endpoint hostname prefix and <code>x-amz-outpost-id</code> in your API request, see the
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html#API_control_CreateBucket_Examples">Examples</a> section.</p>
 *          <p>The following actions are related to <code>CreateBucket</code> for
 *          Amazon S3 on Outposts:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html">GetBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html">DeleteBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateBucketCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateBucketCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // CreateBucketRequest
 *   ACL: "private" || "public-read" || "public-read-write" || "authenticated-read",
 *   Bucket: "STRING_VALUE", // required
 *   CreateBucketConfiguration: { // CreateBucketConfiguration
 *     LocationConstraint: "EU" || "eu-west-1" || "us-west-1" || "us-west-2" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "sa-east-1" || "cn-north-1" || "eu-central-1",
 *   },
 *   GrantFullControl: "STRING_VALUE",
 *   GrantRead: "STRING_VALUE",
 *   GrantReadACP: "STRING_VALUE",
 *   GrantWrite: "STRING_VALUE",
 *   GrantWriteACP: "STRING_VALUE",
 *   ObjectLockEnabledForBucket: true || false,
 *   OutpostId: "STRING_VALUE",
 * };
 * const command = new CreateBucketCommand(input);
 * const response = await client.send(command);
 * // { // CreateBucketResult
 * //   Location: "STRING_VALUE",
 * //   BucketArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBucketCommandInput - {@link CreateBucketCommandInput}
 * @returns {@link CreateBucketCommandOutput}
 * @see {@link CreateBucketCommandInput} for command's `input` shape.
 * @see {@link CreateBucketCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link BucketAlreadyExists} (client fault)
 *  <p>The requested Outposts bucket name is not available. The bucket namespace is shared by
 *          all users of the Outposts in this Region. Select a different name and try
 *          again.</p>
 *
 * @throws {@link BucketAlreadyOwnedByYou} (client fault)
 *  <p>The Outposts bucket you tried to create already exists, and you own it. </p>
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class CreateBucketCommand extends $Command<
  CreateBucketCommandInput,
  CreateBucketCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      OutpostId: { type: "contextParams", name: "OutpostId" },
      Bucket: { type: "contextParams", name: "Bucket" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateBucketCommandInput) {
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
  ): Handler<CreateBucketCommandInput, CreateBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateBucketCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getRedirectFromPostIdPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "CreateBucketCommand";
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
  private serialize(input: CreateBucketCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBucketCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBucketCommandOutput> {
    return de_CreateBucketCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
