import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { GetDashboardEmbedUrlRequest, GetDashboardEmbedUrlResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDashboardEmbedUrlCommand,
  serializeAws_restJson1GetDashboardEmbedUrlCommand,
} from "../protocols/Aws_restJson1";
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

export type GetDashboardEmbedUrlCommandInput = GetDashboardEmbedUrlRequest;
export type GetDashboardEmbedUrlCommandOutput = GetDashboardEmbedUrlResponse & __MetadataBearer;

/**
 * <p>Generates a session URL and authorization code that you can use to embed an Amazon
 *             QuickSight read-only dashboard in your web server code. Before you use this command,
 *             make sure that you have configured the dashboards and permissions. </p>
 *         <p>Currently, you can use <code>GetDashboardEmbedURL</code> only from the server, not
 *             from the user's browser. The following rules apply to the combination of URL and
 *             authorization code:</p>
 *         <ul>
 *             <li>
 *                 <p>They must be used together.</p>
 *             </li>
 *             <li>
 *                 <p>They can be used one time only.</p>
 *             </li>
 *             <li>
 *                 <p>They are valid for 5 minutes after you run this command.</p>
 *             </li>
 *             <li>
 *                 <p>The resulting user session is valid for 10 hours.</p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-dashboards.html">Embedding Amazon QuickSight</a> in the <i>Amazon QuickSight User
 *             Guide</i>
 *          .</p>
 */
export class GetDashboardEmbedUrlCommand extends $Command<
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDashboardEmbedUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDashboardEmbedUrlCommandInput, GetDashboardEmbedUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "GetDashboardEmbedUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDashboardEmbedUrlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDashboardEmbedUrlResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDashboardEmbedUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDashboardEmbedUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDashboardEmbedUrlCommandOutput> {
    return deserializeAws_restJson1GetDashboardEmbedUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
