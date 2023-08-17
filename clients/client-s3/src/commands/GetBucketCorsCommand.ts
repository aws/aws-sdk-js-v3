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
} from "@smithy/types";

import { GetBucketCorsOutput, GetBucketCorsRequest } from "../models/models_0";
import { de_GetBucketCorsCommand, se_GetBucketCorsCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBucketCorsCommand}.
 */
export interface GetBucketCorsCommandInput extends GetBucketCorsRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketCorsCommand}.
 */
export interface GetBucketCorsCommandOutput extends GetBucketCorsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the Cross-Origin Resource Sharing (CORS) configuration information set for the
 *          bucket.</p>
 *          <p> To use this operation, you must have permission to perform the
 *             <code>s3:GetBucketCORS</code> action. By default, the bucket owner has this permission
 *          and can grant it to others.</p>
 *          <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p>
 *          <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name.
 * If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned.
 * For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of
 *             Error Codes</a>.</p>
 *          <p> For more information about CORS, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html"> Enabling Cross-Origin Resource
 *          Sharing</a>.</p>
 *          <p>The following operations are related to <code>GetBucketCors</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html">PutBucketCors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html">DeleteBucketCors</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketCorsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketCorsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketCorsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketCorsCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketCorsOutput
 * //   CORSRules: [ // CORSRules
 * //     { // CORSRule
 * //       ID: "STRING_VALUE",
 * //       AllowedHeaders: [ // AllowedHeaders
 * //         "STRING_VALUE",
 * //       ],
 * //       AllowedMethods: [ // AllowedMethods // required
 * //         "STRING_VALUE",
 * //       ],
 * //       AllowedOrigins: [ // AllowedOrigins // required
 * //         "STRING_VALUE",
 * //       ],
 * //       ExposeHeaders: [ // ExposeHeaders
 * //         "STRING_VALUE",
 * //       ],
 * //       MaxAgeSeconds: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketCorsCommandInput - {@link GetBucketCorsCommandInput}
 * @returns {@link GetBucketCorsCommandOutput}
 * @see {@link GetBucketCorsCommandInput} for command's `input` shape.
 * @see {@link GetBucketCorsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To get cors configuration set on a bucket
 * ```javascript
 * // The following example returns cross-origin resource sharing (CORS) configuration set on a bucket.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new GetBucketCorsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CORSRules": [
 *     {
 *       "AllowedHeaders": [
 *         "Authorization"
 *       ],
 *       "AllowedMethods": [
 *         "GET"
 *       ],
 *       "AllowedOrigins": [
 *         "*"
 *       ],
 *       "MaxAgeSeconds": 3000
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-cors-configuration-set-on-a-bucket-1481596855475
 * ```
 *
 */
export class GetBucketCorsCommand extends $Command<
  GetBucketCorsCommandInput,
  GetBucketCorsCommandOutput,
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
  constructor(readonly input: GetBucketCorsCommandInput) {
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
  ): Handler<GetBucketCorsCommandInput, GetBucketCorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBucketCorsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetBucketCorsCommand";
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
  private serialize(input: GetBucketCorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBucketCorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketCorsCommandOutput> {
    return de_GetBucketCorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
