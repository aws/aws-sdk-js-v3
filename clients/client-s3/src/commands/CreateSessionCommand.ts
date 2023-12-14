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

import { CreateSessionOutput, CreateSessionOutputFilterSensitiveLog, CreateSessionRequest } from "../models/models_0";
import { de_CreateSessionCommand, se_CreateSessionCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSessionCommand}.
 */
export interface CreateSessionCommandInput extends CreateSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSessionCommand}.
 */
export interface CreateSessionCommandOutput extends CreateSessionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a session that establishes temporary security credentials to support fast authentication and authorization for the Zonal endpoint APIs on directory buckets.
 *          For more information about Zonal endpoint APIs that include the Availability Zone in the request endpoint, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-APIs.html">S3 Express One Zone  APIs</a> in the <i>Amazon S3 User Guide</i>.
 *       </p>
 *          <p>To make Zonal endpoint API requests on a directory bucket, use the <code>CreateSession</code>
 *          API operation. Specifically, you grant <code>s3express:CreateSession</code> permission to a
 *          bucket in a bucket policy or an IAM identity-based policy. Then, you use IAM credentials to make the
 *             <code>CreateSession</code> API request on the bucket, which returns temporary security
 *          credentials that include the access key ID, secret access key, session token, and
 *          expiration. These credentials have associated permissions to access the Zonal endpoint APIs. After
 *          the session is created, you don’t need to use other policies to grant permissions to each
 *          Zonal endpoint API individually. Instead, in your Zonal endpoint API requests, you sign your requests by
 *          applying the temporary security credentials of the session to the request headers and
 *          following the SigV4 protocol for authentication. You also apply the session token to the
 *             <code>x-amz-s3session-token</code> request header for authorization. Temporary security
 *          credentials are scoped to the bucket and expire after 5 minutes. After the expiration time,
 *          any calls that you make with those credentials will fail. You must use IAM credentials
 *          again to make a <code>CreateSession</code> API request that generates a new set of
 *          temporary credentials for use. Temporary credentials cannot be extended or refreshed beyond
 *          the original specified interval.</p>
 *          <p>If you use Amazon Web Services SDKs, SDKs handle the session token refreshes automatically to avoid
 *          service interruptions when a session expires. We recommend that you use the Amazon Web Services SDKs to
 *          initiate and manage requests to the CreateSession API. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-optimizing-performance-guidelines-design-patterns.html#s3-express-optimizing-performance-session-authentication">Performance guidelines and design patterns</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format <code>https://<i>bucket_name</i>.s3express-<i>az_id</i>.<i>region</i>.amazonaws.com</code>. Path-style requests are not supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-Regions-and-Zones.html">Regional and Zonal endpoints</a> in the
 *     <i>Amazon S3 User Guide</i>.</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <b>
 *                         <code>CopyObject</code> API operation</b> - Unlike other Zonal endpoint APIs, the <code>CopyObject</code> API operation doesn't use the temporary security credentials returned from the <code>CreateSession</code> API operation for authentication and authorization. For information about authentication and authorization of the <code>CopyObject</code> API operation on directory buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a>.</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <b>
 *                         <code>HeadBucket</code> API operation</b> - Unlike other Zonal endpoint APIs, the <code>HeadBucket</code> API operation doesn't use the temporary security credentials returned from the <code>CreateSession</code> API operation for authentication and authorization. For information about authentication and authorization of the <code>HeadBucket</code> API operation on directory buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html">HeadBucket</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To obtain temporary security credentials, you must create a bucket policy or an IAM identity-based policy that
 *                   grants <code>s3express:CreateSession</code> permission to the bucket. In a
 *                   policy, you can have the <code>s3express:SessionMode</code> condition key to
 *                   control who can create a <code>ReadWrite</code> or <code>ReadOnly</code> session.
 *                   For more information about <code>ReadWrite</code> or <code>ReadOnly</code>
 *                   sessions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html#API_CreateSession_RequestParameters">
 *                      <code>x-amz-create-session-mode</code>
 *                   </a>. For example policies, see
 *                      <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-example-bucket-policies.html">Example bucket policies for S3 Express One Zone</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-identity-policies.html">Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone</a> in the
 *                      <i>Amazon S3 User Guide</i>. </p>
 *                <p>To grant cross-account access to Zonal endpoint APIs, the bucket policy should also grant both accounts the <code>s3express:CreateSession</code> permission.</p>
 *             </dd>
 *             <dt>HTTP Host header syntax</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets </b> - The HTTP Host header syntax is <code>
 *                      <i>Bucket_name</i>.s3express-<i>az_id</i>.<i>region</i>.amazonaws.com</code>.</p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, CreateSessionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, CreateSessionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // CreateSessionRequest
 *   SessionMode: "ReadOnly" || "ReadWrite",
 *   Bucket: "STRING_VALUE", // required
 * };
 * const command = new CreateSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSessionOutput
 * //   Credentials: { // SessionCredentials
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     SessionToken: "STRING_VALUE", // required
 * //     Expiration: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSessionCommandInput - {@link CreateSessionCommandInput}
 * @returns {@link CreateSessionCommandOutput}
 * @see {@link CreateSessionCommandInput} for command's `input` shape.
 * @see {@link CreateSessionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchBucket} (client fault)
 *  <p>The specified bucket does not exist.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class CreateSessionCommand extends $Command<
  CreateSessionCommandInput,
  CreateSessionCommandOutput,
  S3ClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
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
  constructor(readonly input: CreateSessionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSessionCommandInput, CreateSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateSessionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "CreateSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateSessionOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "CreateSession",
        endpointRuleSet: {
          getEndpointParameterInstructions: CreateSessionCommand.getEndpointParameterInstructions,
        },
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
  private serialize(input: CreateSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSessionCommandOutput> {
    return de_CreateSessionCommand(output, context);
  }
}
