// smithy-typescript generated code
import { getLocationConstraintPlugin } from "@aws-sdk/middleware-location-constraint";
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

import { CreateBucketOutput, CreateBucketRequest } from "../models/models_0";
import { de_CreateBucketCommand, se_CreateBucketCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

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
export interface CreateBucketCommandOutput extends CreateBucketOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new S3 bucket. To create a bucket, you must register with Amazon S3 and have a
 *          valid Amazon Web Services Access Key ID to authenticate requests. Anonymous requests are never allowed to
 *          create buckets. By creating the bucket, you become the bucket owner.</p>
 *          <p>Not every string is an acceptable bucket name. For information about bucket naming
 *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">Bucket naming
 *          rules</a>.</p>
 *          <p>If you want to create an Amazon S3 on Outposts bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">Create Bucket</a>. </p>
 *          <p>By default, the bucket is created in the US East (N. Virginia) Region. You can
 *          optionally specify a Region in the request body. You might choose a Region to optimize
 *          latency, minimize costs, or address regulatory requirements. For example, if you reside in
 *          Europe, you will probably find it advantageous to create buckets in the Europe (Ireland)
 *          Region. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro">Accessing a
 *             bucket</a>.</p>
 *          <note>
 *             <p>If you send your create bucket request to the <code>s3.amazonaws.com</code> endpoint,
 *             the request goes to the <code>us-east-1</code> Region. Accordingly, the signature calculations in
 *             Signature Version 4 must use <code>us-east-1</code> as the Region, even if the location constraint in
 *             the request specifies another Region where the bucket is to be created. If you create a
 *             bucket in a Region other than US East (N. Virginia), your application must be able to
 *             handle 307 redirect. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html">Virtual hosting of
 *             buckets</a>.</p>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>In addition to <code>s3:CreateBucket</code>, the following permissions are required when
 *                   your <code>CreateBucket</code> request includes specific headers:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>Access control lists (ACLs)</b> - If your <code>CreateBucket</code> request
 *                         specifies access control list (ACL) permissions and the ACL is public-read, public-read-write,
 *                         authenticated-read, or if you specify access permissions explicitly through any other
 *                         ACL, both <code>s3:CreateBucket</code> and <code>s3:PutBucketAcl</code> permissions
 *                         are needed. If the ACL for the <code>CreateBucket</code> request is private or if the request doesn't
 *                         specify any ACLs, only <code>s3:CreateBucket</code> permission is needed. </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Object Lock</b> - If <code>ObjectLockEnabledForBucket</code> is set to true in your
 *                          <code>CreateBucket</code> request,
 *                          <code>s3:PutBucketObjectLockConfiguration</code> and
 *                          <code>s3:PutBucketVersioning</code> permissions are required.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>S3 Object Ownership</b> - If your <code>CreateBucket</code> request includes the <code>x-amz-object-ownership</code> header, then the
 *                         <code>s3:PutBucketOwnershipControls</code> permission is required. By default, <code>ObjectOwnership</code> is set to <code>BucketOWnerEnforced</code> and ACLs are disabled. We recommend keeping
 *                      ACLs disabled, except in uncommon use cases where you must control access for each object individually. If you want to change the <code>ObjectOwnership</code> setting, you can use the
 *                      <code>x-amz-object-ownership</code> header in your <code>CreateBucket</code> request to set the <code>ObjectOwnership</code> setting of your choice.
 *                         For more information about S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling object
 *                            ownership </a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>S3 Block Public Access</b> - If your specific use case requires granting public access to your S3 resources, you can disable Block Public Access. You can create a new bucket with Block Public Access enabled, then separately call the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html">
 *                            <code>DeletePublicAccessBlock</code>
 *                         </a> API. To use this operation, you must have the
 *                         <code>s3:PutBucketPublicAccessBlock</code> permission. By default, all Block
 *                         Public Access settings are enabled for new buckets. To avoid inadvertent exposure of
 *                         your resources, we recommend keeping the S3 Block Public Access settings enabled. For more information about S3 Block Public Access, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Blocking public
 *                            access to your Amazon S3 storage </a> in the <i>Amazon S3 User Guide</i>. </p>
 *                   </li>
 *                </ul>
 *             </dd>
 *          </dl>
 *          <important>
 *             <p> If your <code>CreateBucket</code> request sets <code>BucketOwnerEnforced</code> for Amazon S3 Object Ownership
 *          and specifies a bucket ACL that provides access to an external Amazon Web Services account, your request fails with a <code>400</code> error and returns the <code>InvalidBucketAcLWithObjectOwnership</code> error code. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-ownership-existing-bucket.html">Setting Object
 *             Ownership on an existing bucket </a> in the <i>Amazon S3 User Guide</i>. </p>
 *          </important>
 *          <p>The following operations are related to <code>CreateBucket</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, CreateBucketCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, CreateBucketCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // CreateBucketRequest
 *   ACL: "private" || "public-read" || "public-read-write" || "authenticated-read",
 *   Bucket: "STRING_VALUE", // required
 *   CreateBucketConfiguration: { // CreateBucketConfiguration
 *     LocationConstraint: "af-south-1" || "ap-east-1" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "EU" || "eu-central-1" || "eu-north-1" || "eu-south-1" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "me-south-1" || "sa-east-1" || "us-east-2" || "us-gov-east-1" || "us-gov-west-1" || "us-west-1" || "us-west-2" || "ap-south-2" || "eu-south-2",
 *   },
 *   GrantFullControl: "STRING_VALUE",
 *   GrantRead: "STRING_VALUE",
 *   GrantReadACP: "STRING_VALUE",
 *   GrantWrite: "STRING_VALUE",
 *   GrantWriteACP: "STRING_VALUE",
 *   ObjectLockEnabledForBucket: true || false,
 *   ObjectOwnership: "BucketOwnerPreferred" || "ObjectWriter" || "BucketOwnerEnforced",
 * };
 * const command = new CreateBucketCommand(input);
 * const response = await client.send(command);
 * // { // CreateBucketOutput
 * //   Location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBucketCommandInput - {@link CreateBucketCommandInput}
 * @returns {@link CreateBucketCommandOutput}
 * @see {@link CreateBucketCommandInput} for command's `input` shape.
 * @see {@link CreateBucketCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link BucketAlreadyExists} (client fault)
 *  <p>The requested bucket name is not available. The bucket namespace is shared by all users
 *          of the system. Select a different name and try again.</p>
 *
 * @throws {@link BucketAlreadyOwnedByYou} (client fault)
 *  <p>The bucket you tried to create already exists, and you own it. Amazon S3 returns this error
 *          in all Amazon Web Services Regions except in the North Virginia Region. For legacy compatibility, if you
 *          re-create an existing bucket that you already own in the North Virginia Region, Amazon S3
 *          returns 200 OK and resets the bucket access control lists (ACLs).</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To create a bucket in a specific region
 * ```javascript
 * // The following example creates a bucket. The request specifies an AWS region where to create the bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "CreateBucketConfiguration": {
 *     "LocationConstraint": "eu-west-1"
 *   }
 * };
 * const command = new CreateBucketCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Location": "http://examplebucket.<Region>.s3.amazonaws.com/"
 * }
 * *\/
 * // example id: to-create-a-bucket-in-a-specific-region-1483399072992
 * ```
 *
 * @example To create a bucket
 * ```javascript
 * // The following example creates a bucket.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new CreateBucketCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Location": "/examplebucket"
 * }
 * *\/
 * // example id: to-create-a-bucket--1472851826060
 * ```
 *
 */
export class CreateBucketCommand extends $Command<
  CreateBucketCommandInput,
  CreateBucketCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      DisableAccessPoints: { type: "staticContextParams", value: true },
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
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBucketCommandInput, CreateBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateBucketCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getLocationConstraintPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
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
