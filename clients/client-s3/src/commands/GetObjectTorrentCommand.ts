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
  SdkStream as __SdkStream,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@aws-sdk/types";

import {
  GetObjectTorrentOutput,
  GetObjectTorrentOutputFilterSensitiveLog,
  GetObjectTorrentRequest,
  GetObjectTorrentRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetObjectTorrentCommand,
  serializeAws_restXmlGetObjectTorrentCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

export interface GetObjectTorrentCommandInput extends GetObjectTorrentRequest {}
export interface GetObjectTorrentCommandOutput
  extends __WithSdkStreamMixin<GetObjectTorrentOutput, "Body">,
    __MetadataBearer {}

/**
 * <p>Returns torrent files from a bucket. BitTorrent can save you bandwidth when you're
 *          distributing large files. For more information about BitTorrent, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3Torrent.html">Using BitTorrent with Amazon S3</a>.</p>
 *          <note>
 *             <p>You can get torrent only for objects that are less than 5 GB in size, and that are
 *             not encrypted using server-side encryption with a customer-provided encryption
 *             key.</p>
 *          </note>
 *          <p>To use GET, you must have READ access to the object.</p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 *          <p>The following action is related to <code>GetObjectTorrent</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectTorrentCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectTorrentCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetObjectTorrentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectTorrentCommandInput} for command's `input` shape.
 * @see {@link GetObjectTorrentCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 */
export class GetObjectTorrentCommand extends $Command<
  GetObjectTorrentCommandInput,
  GetObjectTorrentCommandOutput,
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

  constructor(readonly input: GetObjectTorrentCommandInput) {
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
  ): Handler<GetObjectTorrentCommandInput, GetObjectTorrentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetObjectTorrentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetObjectTorrentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetObjectTorrentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetObjectTorrentOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetObjectTorrentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetObjectTorrentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetObjectTorrentCommandOutput> {
    return deserializeAws_restXmlGetObjectTorrentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
