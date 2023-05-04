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

import { GetBucketLoggingOutput, GetBucketLoggingRequest } from "../models/models_0";
import { de_GetBucketLoggingCommand, se_GetBucketLoggingCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 *
 * The input for {@link GetBucketLoggingCommand}.
 */
export interface GetBucketLoggingCommandInput extends GetBucketLoggingRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketLoggingCommand}.
 */
export interface GetBucketLoggingCommandOutput extends GetBucketLoggingOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the logging status of a bucket and the permissions users have to view and modify
 *          that status.</p>
 *          <p>The following operations are related to <code>GetBucketLogging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html">PutBucketLogging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketLoggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketLoggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketLoggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketLoggingCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketLoggingOutput
 * //   LoggingEnabled: { // LoggingEnabled
 * //     TargetBucket: "STRING_VALUE", // required
 * //     TargetGrants: [ // TargetGrants
 * //       { // TargetGrant
 * //         Grantee: { // Grantee
 * //           DisplayName: "STRING_VALUE",
 * //           EmailAddress: "STRING_VALUE",
 * //           ID: "STRING_VALUE",
 * //           URI: "STRING_VALUE",
 * //           Type: "CanonicalUser" || "AmazonCustomerByEmail" || "Group", // required
 * //         },
 * //         Permission: "FULL_CONTROL" || "READ" || "WRITE",
 * //       },
 * //     ],
 * //     TargetPrefix: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketLoggingCommandInput - {@link GetBucketLoggingCommandInput}
 * @returns {@link GetBucketLoggingCommandOutput}
 * @see {@link GetBucketLoggingCommandInput} for command's `input` shape.
 * @see {@link GetBucketLoggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class GetBucketLoggingCommand extends $Command<
  GetBucketLoggingCommandInput,
  GetBucketLoggingCommandOutput,
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
  constructor(readonly input: GetBucketLoggingCommandInput) {
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
  ): Handler<GetBucketLoggingCommandInput, GetBucketLoggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketLoggingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetBucketLoggingCommand";
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
  private serialize(input: GetBucketLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBucketLoggingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketLoggingCommandOutput> {
    return de_GetBucketLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
