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
  PutObjectAclOutput,
  PutObjectAclOutputFilterSensitiveLog,
  PutObjectAclRequest,
  PutObjectAclRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlPutObjectAclCommand,
  serializeAws_restXmlPutObjectAclCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * The input for {@link PutObjectAclCommand}.
 */
export interface PutObjectAclCommandInput extends PutObjectAclRequest {}
/**
 * The output of {@link PutObjectAclCommand}.
 */
export interface PutObjectAclCommandOutput extends PutObjectAclOutput, __MetadataBearer {}

/**
 * <p>Uses the <code>acl</code> subresource to set the access control list (ACL) permissions
 *          for a new or existing object in an S3 bucket. You must have <code>WRITE_ACP</code>
 *          permission to set the ACL of an object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions">What
 *             permissions can I grant?</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 *          <p>Depending on your application needs, you can choose to set
 *          the ACL on an object using either the request body or the headers. For example, if you have
 *          an existing application that updates a bucket ACL using the request body, you can continue
 *          to use that approach. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL) Overview</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <important>
 *             <p>If your bucket uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions.
 *             You must use policies to grant access to your bucket and the objects in it. Requests to set ACLs or update ACLs fail and
 *             return the <code>AccessControlListNotSupported</code> error code. Requests to read ACLs are still supported.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling object ownership</a>
 *             in the <i>Amazon S3 User Guide</i>.</p>
 *          </important>
 *          <p>
 *             <b>Access Permissions</b>
 *          </p>
 *          <p>You can set access permissions using one of the following methods:</p>
 *          <ul>
 *             <li>
 *                <p>Specify a canned ACL with the <code>x-amz-acl</code> request header. Amazon S3 supports
 *                a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set
 *                of grantees and permissions. Specify the canned ACL name as the value of
 *                   <code>x-amz-ac</code>l. If you use this header, you cannot use other access
 *                control-specific headers in your request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p>
 *             </li>
 *             <li>
 *                <p>Specify access permissions explicitly with the <code>x-amz-grant-read</code>,
 *                   <code>x-amz-grant-read-acp</code>, <code>x-amz-grant-write-acp</code>, and
 *                   <code>x-amz-grant-full-control</code> headers. When using these headers, you
 *                specify explicit access permissions and grantees (Amazon Web Services accounts or Amazon S3 groups) who
 *                will receive the permission. If you use these ACL-specific headers, you cannot use
 *                   <code>x-amz-acl</code> header to set a canned ACL. These parameters map to the set
 *                of permissions that Amazon S3 supports in an ACL. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL)
 *                Overview</a>.</p>
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
 *                <p>For example, the following <code>x-amz-grant-read</code> header grants list
 *                objects permission to the two Amazon Web Services accounts identified by their email
 *                addresses.</p>
 *                <p>
 *                   <code>x-amz-grant-read: emailAddress="xyz@amazon.com",
 *                   emailAddress="abc@amazon.com" </code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>You can use either a canned ACL or specify access permissions explicitly. You cannot do
 *          both.</p>
 *          <p>
 *             <b>Grantee Values</b>
 *          </p>
 *          <p>You can specify the person (grantee) to whom you're assigning access rights (using
 *          request elements) in the following ways:</p>
 *          <ul>
 *             <li>
 *                <p>By the person's ID:</p>
 *                <p>
 *                   <code><Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 *                   xsi:type="CanonicalUser"><ID><>ID<></ID><DisplayName><>GranteesEmail<></DisplayName>
 *                   </Grantee></code>
 *                </p>
 *                <p>DisplayName is optional and ignored in the request.</p>
 *             </li>
 *             <li>
 *                <p>By URI:</p>
 *                <p>
 *                   <code><Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 *                   xsi:type="Group"><URI><>http://acs.amazonaws.com/groups/global/AuthenticatedUsers<></URI></Grantee></code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>By Email address:</p>
 *                <p>
 *                   <code><Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 *                   xsi:type="AmazonCustomerByEmail"><EmailAddress><>Grantees@email.com<></EmailAddress>lt;/Grantee></code>
 *                </p>
 *                <p>The grantee is resolved to the CanonicalUser and, in a response to a GET Object
 *                acl request, appears as the CanonicalUser.</p>
 *                <note>
 *                   <p>Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: </p>
 *                   <ul>
 *                      <li>
 *                         <p>US East (N. Virginia)</p>
 *                      </li>
 *                      <li>
 *                         <p>US West (N. California)</p>
 *                      </li>
 *                      <li>
 *                         <p> US West (Oregon)</p>
 *                      </li>
 *                      <li>
 *                         <p> Asia Pacific (Singapore)</p>
 *                      </li>
 *                      <li>
 *                         <p>Asia Pacific (Sydney)</p>
 *                      </li>
 *                      <li>
 *                         <p>Asia Pacific (Tokyo)</p>
 *                      </li>
 *                      <li>
 *                         <p>Europe (Ireland)</p>
 *                      </li>
 *                      <li>
 *                         <p>South America (São Paulo)</p>
 *                      </li>
 *                   </ul>
 *                   <p>For a list of all the Amazon S3 supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.</p>
 *                </note>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Versioning</b>
 *          </p>
 *          <p>The ACL of an object is set at the object version level. By default, PUT sets the ACL of
 *          the current version of an object. To set the ACL of a different version, use the
 *             <code>versionId</code> subresource.</p>
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectAclCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectAclCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutObjectAclCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectAclCommandInput} for command's `input` shape.
 * @see {@link PutObjectAclCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchKey} (client fault)
 *  <p>The specified key does not exist.</p>
 *
 *
 * @example To grant permissions using object ACL
 * ```javascript
 * // The following example adds grants to an object ACL. The first permission grants user1 and user2 FULL_CONTROL and the AllUsers group READ permission.
 * const input = {
 *   "AccessControlPolicy": {},
 *   "Bucket": "examplebucket",
 *   "GrantFullControl": "emailaddress=user1@example.com,emailaddress=user2@example.com",
 *   "GrantRead": "uri=http://acs.amazonaws.com/groups/global/AllUsers",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new PutObjectAclCommand(input);
 * await client.send(command);
 * // example id: to-grant-permissions-using-object-acl-1481835549285
 * ```
 *
 */
export class PutObjectAclCommand extends $Command<
  PutObjectAclCommandInput,
  PutObjectAclCommandOutput,
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

  constructor(readonly input: PutObjectAclCommandInput) {
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
  ): Handler<PutObjectAclCommandInput, PutObjectAclCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutObjectAclCommand.getEndpointParameterInstructions()));
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
    const commandName = "PutObjectAclCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutObjectAclRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutObjectAclOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutObjectAclCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPutObjectAclCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutObjectAclCommandOutput> {
    return deserializeAws_restXmlPutObjectAclCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
