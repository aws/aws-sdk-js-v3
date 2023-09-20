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

import { GetBucketOwnershipControlsOutput, GetBucketOwnershipControlsRequest } from "../models/models_0";
import { de_GetBucketOwnershipControlsCommand, se_GetBucketOwnershipControlsCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBucketOwnershipControlsCommand}.
 */
export interface GetBucketOwnershipControlsCommandInput extends GetBucketOwnershipControlsRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketOwnershipControlsCommand}.
 */
export interface GetBucketOwnershipControlsCommandOutput extends GetBucketOwnershipControlsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves <code>OwnershipControls</code> for an Amazon S3 bucket. To use this operation, you
 *          must have the <code>s3:GetBucketOwnershipControls</code> permission. For more information
 *          about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html">Specifying permissions in a
 *             policy</a>. </p>
 *          <p>For information about Amazon S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Using Object
 *             Ownership</a>. </p>
 *          <p>The following operations are related to <code>GetBucketOwnershipControls</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>PutBucketOwnershipControls</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteBucketOwnershipControls</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketOwnershipControlsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketOwnershipControlsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketOwnershipControlsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketOwnershipControlsCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketOwnershipControlsOutput
 * //   OwnershipControls: { // OwnershipControls
 * //     Rules: [ // OwnershipControlsRules // required
 * //       { // OwnershipControlsRule
 * //         ObjectOwnership: "BucketOwnerPreferred" || "ObjectWriter" || "BucketOwnerEnforced", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketOwnershipControlsCommandInput - {@link GetBucketOwnershipControlsCommandInput}
 * @returns {@link GetBucketOwnershipControlsCommandOutput}
 * @see {@link GetBucketOwnershipControlsCommandInput} for command's `input` shape.
 * @see {@link GetBucketOwnershipControlsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class GetBucketOwnershipControlsCommand extends $Command<
  GetBucketOwnershipControlsCommandInput,
  GetBucketOwnershipControlsCommandOutput,
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
  constructor(readonly input: GetBucketOwnershipControlsCommandInput) {
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
  ): Handler<GetBucketOwnershipControlsCommandInput, GetBucketOwnershipControlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketOwnershipControlsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetBucketOwnershipControlsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "GetBucketOwnershipControls",
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
  private serialize(input: GetBucketOwnershipControlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBucketOwnershipControlsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBucketOwnershipControlsCommandOutput> {
    return de_GetBucketOwnershipControlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
