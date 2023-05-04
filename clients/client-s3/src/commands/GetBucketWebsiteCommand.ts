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

import { GetBucketWebsiteOutput, GetBucketWebsiteRequest } from "../models/models_0";
import { de_GetBucketWebsiteCommand, se_GetBucketWebsiteCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link GetBucketWebsiteCommand}.
 */
export interface GetBucketWebsiteCommandInput extends GetBucketWebsiteRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketWebsiteCommand}.
 */
export interface GetBucketWebsiteCommandOutput extends GetBucketWebsiteOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the website configuration for a bucket. To host website on Amazon S3, you can
 *          configure a bucket as website by adding a website configuration. For more information about
 *          hosting websites, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a>. </p>
 *          <p>This GET action requires the <code>S3:GetBucketWebsite</code> permission. By default,
 *          only the bucket owner can read the bucket website configuration. However, bucket owners can
 *          allow other users to read the website configuration by writing a bucket policy granting
 *          them the <code>S3:GetBucketWebsite</code> permission.</p>
 *          <p>The following operations are related to <code>GetBucketWebsite</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html">DeleteBucketWebsite</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html">PutBucketWebsite</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketWebsiteCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketWebsiteCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketWebsiteRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketWebsiteCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketWebsiteOutput
 * //   RedirectAllRequestsTo: { // RedirectAllRequestsTo
 * //     HostName: "STRING_VALUE", // required
 * //     Protocol: "http" || "https",
 * //   },
 * //   IndexDocument: { // IndexDocument
 * //     Suffix: "STRING_VALUE", // required
 * //   },
 * //   ErrorDocument: { // ErrorDocument
 * //     Key: "STRING_VALUE", // required
 * //   },
 * //   RoutingRules: [ // RoutingRules
 * //     { // RoutingRule
 * //       Condition: { // Condition
 * //         HttpErrorCodeReturnedEquals: "STRING_VALUE",
 * //         KeyPrefixEquals: "STRING_VALUE",
 * //       },
 * //       Redirect: { // Redirect
 * //         HostName: "STRING_VALUE",
 * //         HttpRedirectCode: "STRING_VALUE",
 * //         Protocol: "http" || "https",
 * //         ReplaceKeyPrefixWith: "STRING_VALUE",
 * //         ReplaceKeyWith: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketWebsiteCommandInput - {@link GetBucketWebsiteCommandInput}
 * @returns {@link GetBucketWebsiteCommandOutput}
 * @see {@link GetBucketWebsiteCommandInput} for command's `input` shape.
 * @see {@link GetBucketWebsiteCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To get bucket website configuration
 * ```javascript
 * // The following example retrieves website configuration of a bucket.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new GetBucketWebsiteCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ErrorDocument": {
 *     "Key": "error.html"
 *   },
 *   "IndexDocument": {
 *     "Suffix": "index.html"
 *   }
 * }
 * *\/
 * // example id: to-get-bucket-website-configuration-1483037016926
 * ```
 *
 */
export class GetBucketWebsiteCommand extends $Command<
  GetBucketWebsiteCommandInput,
  GetBucketWebsiteCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetBucketWebsiteCommandInput) {
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
  ): Handler<GetBucketWebsiteCommandInput, GetBucketWebsiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketWebsiteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetBucketWebsiteCommand";
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
  private serialize(input: GetBucketWebsiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBucketWebsiteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketWebsiteCommandOutput> {
    return de_GetBucketWebsiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
