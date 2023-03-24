// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getLocationConstraintPlugin } from "@aws-sdk/middleware-location-constraint";
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

import { CreateBucketOutput, CreateBucketRequest } from "../models/models_0";
import {
  deserializeAws_restXmlCreateBucketCommand,
  serializeAws_restXmlCreateBucketCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

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
 *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">Bucket naming rules</a>.</p>
 *          <p>If you want to create an Amazon S3 on Outposts bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">Create Bucket</a>. </p>
 *          <p>By default, the bucket is created in the US East (N. Virginia) Region. You can
 *          optionally specify a Region in the request body. You might choose a Region to optimize
 *          latency, minimize costs, or address regulatory requirements. For example, if you reside in
 *          Europe, you will probably find it advantageous to create buckets in the Europe (Ireland)
 *          Region. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro">Accessing a
 *          bucket</a>.</p>
 *          <note>
 *             <p>If you send your create bucket request to the <code>s3.amazonaws.com</code> endpoint,
 *             the request goes to the us-east-1 Region. Accordingly, the signature calculations in
 *             Signature Version 4 must use us-east-1 as the Region, even if the location constraint in
 *             the request specifies another Region where the bucket is to be created. If you create a
 *             bucket in a Region other than US East (N. Virginia), your application must be able to
 *             handle 307 redirect. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html">Virtual hosting of buckets</a>.</p>
 *          </note>
 *          <p>
 *             <b>Access control lists (ACLs)</b>
 *          </p>
 *          <p>When creating a bucket using this operation, you can optionally configure the bucket ACL to specify the accounts or
 *          groups that should be granted specific permissions on the bucket.</p>
 *          <important>
 *             <p>If your CreateBucket request sets bucket owner enforced for S3 Object Ownership and
 *             specifies a bucket ACL that provides access to an external Amazon Web Services account, your request
 *             fails with a <code>400</code> error and returns the
 *                <code>InvalidBucketAclWithObjectOwnership</code> error code. For more information,
 *             see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling object
 *                ownership</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          </important>
 *          <p>There are two ways to grant the appropriate permissions using the request headers.</p>
 *          <ul>
 *             <li>
 *                <p>Specify a canned ACL using the <code>x-amz-acl</code> request header. Amazon S3
 *                supports a set of predefined ACLs, known as <i>canned ACLs</i>. Each
 *                canned ACL has a predefined set of grantees and permissions. For more information,
 *                see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p>
 *             </li>
 *             <li>
 *                <p>Specify access permissions explicitly using the <code>x-amz-grant-read</code>,
 *                   <code>x-amz-grant-write</code>, <code>x-amz-grant-read-acp</code>,
 *                   <code>x-amz-grant-write-acp</code>, and <code>x-amz-grant-full-control</code>
 *                headers. These headers map to the set of permissions Amazon S3 supports in an ACL. For
 *                more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html">Access control list
 *                   (ACL) overview</a>.</p>
 *                <p>You specify each grantee as a type=value pair, where the type is one of the
 *                following:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>id</code> – if the value specified is the canonical user ID of an Amazon Web Services account</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>uri</code> – if you are granting permissions to a predefined
 *                      group</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>emailAddress</code> – if the value specified is the email address of
 *                      an Amazon Web Services account</p>
 *                      <note>
 *                         <p>Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: </p>
 *                         <ul>
 *                            <li>
 *                               <p>US East (N. Virginia)</p>
 *                            </li>
 *                            <li>
 *                               <p>US West (N. California)</p>
 *                            </li>
 *                            <li>
 *                               <p> US West (Oregon)</p>
 *                            </li>
 *                            <li>
 *                               <p> Asia Pacific (Singapore)</p>
 *                            </li>
 *                            <li>
 *                               <p>Asia Pacific (Sydney)</p>
 *                            </li>
 *                            <li>
 *                               <p>Asia Pacific (Tokyo)</p>
 *                            </li>
 *                            <li>
 *                               <p>Europe (Ireland)</p>
 *                            </li>
 *                            <li>
 *                               <p>South America (São Paulo)</p>
 *                            </li>
 *                         </ul>
 *                         <p>For a list of all the Amazon S3 supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.</p>
 *                      </note>
 *                   </li>
 *                </ul>
 *                <p>For example, the following <code>x-amz-grant-read</code> header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:</p>
 *                <p>
 *                   <code>x-amz-grant-read: id="11112222333", id="444455556666" </code>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You can use either a canned ACL or specify access permissions explicitly. You cannot
 *             do both.</p>
 *          </note>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>In addition to <code>s3:CreateBucket</code>, the following permissions are required when your CreateBucket includes specific headers:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>ACLs</b> - If your <code>CreateBucket</code> request specifies ACL permissions and the ACL is public-read, public-read-write,
 *                authenticated-read, or if you specify access permissions explicitly through any other ACL, both
 *                <code>s3:CreateBucket</code> and <code>s3:PutBucketAcl</code> permissions are needed. If the ACL the
 *                <code>CreateBucket</code> request is private or doesn't specify any ACLs, only <code>s3:CreateBucket</code> permission is needed. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Object Lock</b> - If
 *                   <code>ObjectLockEnabledForBucket</code> is set to true in your
 *                   <code>CreateBucket</code> request,
 *                   <code>s3:PutBucketObjectLockConfiguration</code> and
 *                   <code>s3:PutBucketVersioning</code> permissions are required.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>S3 Object Ownership</b> - If your CreateBucket
 *                request includes the the <code>x-amz-object-ownership</code> header,
 *                   <code>s3:PutBucketOwnershipControls</code> permission is required.</p>
 *             </li>
 *          </ul>
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
 * const input = {
 *   ACL: "private" || "public-read" || "public-read-write" || "authenticated-read",
 *   Bucket: "STRING_VALUE", // required
 *   CreateBucketConfiguration: {
 *     LocationConstraint: "af-south-1" || "ap-east-1" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "EU" || "eu-central-1" || "eu-north-1" || "eu-south-1" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "me-south-1" || "sa-east-1" || "us-east-2" || "us-gov-east-1" || "us-gov-west-1" || "us-west-1" || "us-west-2",
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
    return serializeAws_restXmlCreateBucketCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBucketCommandOutput> {
    return deserializeAws_restXmlCreateBucketCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
