import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutMultiRegionAccessPointPolicyRequest, PutMultiRegionAccessPointPolicyResult } from "../models/models_0";
import {
  deserializeAws_restXmlPutMultiRegionAccessPointPolicyCommand,
  serializeAws_restXmlPutMultiRegionAccessPointPolicyCommand,
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

export interface PutMultiRegionAccessPointPolicyCommandInput extends PutMultiRegionAccessPointPolicyRequest {}
export interface PutMultiRegionAccessPointPolicyCommandOutput
  extends PutMultiRegionAccessPointPolicyResult,
    __MetadataBearer {}

/**
 * <p>Associates an access control policy with the specified Multi-Region Access Point. Each Multi-Region Access Point can have only
 *             one policy, so a request made to this action replaces any existing policy that is
 *             associated with the specified Multi-Region Access Point.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more
 *             information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing
 *                 Multi-Region Access Points</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to <code>PutMultiRegionAccessPointPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html">GetMultiRegionAccessPointPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicyStatus.html">GetMultiRegionAccessPointPolicyStatus</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutMultiRegionAccessPointPolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutMultiRegionAccessPointPolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new PutMultiRegionAccessPointPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMultiRegionAccessPointPolicyCommandInput} for command's `input` shape.
 * @see {@link PutMultiRegionAccessPointPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutMultiRegionAccessPointPolicyCommand extends $Command<
  PutMultiRegionAccessPointPolicyCommandInput,
  PutMultiRegionAccessPointPolicyCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutMultiRegionAccessPointPolicyCommandInput) {
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
  ): Handler<PutMultiRegionAccessPointPolicyCommandInput, PutMultiRegionAccessPointPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "PutMultiRegionAccessPointPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMultiRegionAccessPointPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutMultiRegionAccessPointPolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutMultiRegionAccessPointPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlPutMultiRegionAccessPointPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutMultiRegionAccessPointPolicyCommandOutput> {
    return deserializeAws_restXmlPutMultiRegionAccessPointPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
