import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetMultiRegionAccessPointRequest, GetMultiRegionAccessPointResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetMultiRegionAccessPointCommand,
  serializeAws_restXmlGetMultiRegionAccessPointCommand,
} from "../protocols/Aws_restXml";
import { getApplyMd5BodyChecksumPlugin } from "@aws-sdk/middleware-apply-body-checksum";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetMultiRegionAccessPointCommandInput extends GetMultiRegionAccessPointRequest {}
export interface GetMultiRegionAccessPointCommandOutput extends GetMultiRegionAccessPointResult, __MetadataBearer {}

/**
 * <p>Returns configuration information about the specified Multi-Region Access Point.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more
 *             information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing
 *                 Multi-Region Access Points</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to <code>GetMultiRegionAccessPoint</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetMultiRegionAccessPointCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetMultiRegionAccessPointCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetMultiRegionAccessPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMultiRegionAccessPointCommandInput} for command's `input` shape.
 * @see {@link GetMultiRegionAccessPointCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetMultiRegionAccessPointCommand extends $Command<
  GetMultiRegionAccessPointCommandInput,
  GetMultiRegionAccessPointCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMultiRegionAccessPointCommandInput) {
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
  ): Handler<GetMultiRegionAccessPointCommandInput, GetMultiRegionAccessPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetMultiRegionAccessPointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMultiRegionAccessPointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMultiRegionAccessPointResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMultiRegionAccessPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetMultiRegionAccessPointCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMultiRegionAccessPointCommandOutput> {
    return deserializeAws_restXmlGetMultiRegionAccessPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
