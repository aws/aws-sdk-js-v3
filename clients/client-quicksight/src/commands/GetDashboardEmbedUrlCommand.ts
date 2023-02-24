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

import {
  GetDashboardEmbedUrlRequest,
  GetDashboardEmbedUrlRequestFilterSensitiveLog,
  GetDashboardEmbedUrlResponse,
  GetDashboardEmbedUrlResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1GetDashboardEmbedUrlCommand,
  serializeAws_restJson1GetDashboardEmbedUrlCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface GetDashboardEmbedUrlCommandInput extends GetDashboardEmbedUrlRequest {}
export interface GetDashboardEmbedUrlCommandOutput extends GetDashboardEmbedUrlResponse, __MetadataBearer {}

/**
 * <p>Generates a temporary session URL and authorization code(bearer token) that you can use to embed an Amazon QuickSight read-only dashboard in your website or application. Before you use this command, make sure that you have configured the dashboards and permissions. </p>
 *          <p>Currently, you can use <code>GetDashboardEmbedURL</code> only from the server, not from the user's browser. The following rules apply to the generated URL:</p>
 *          <ul>
 *             <li>
 *                <p>They must be used together.</p>
 *             </li>
 *             <li>
 *                <p>They can be used one time only.</p>
 *             </li>
 *             <li>
 *                <p>They are valid for 5 minutes after you run this command.</p>
 *             </li>
 *             <li>
 *                <p>You are charged only when the URL is used or there is interaction with Amazon QuickSight.</p>
 *             </li>
 *             <li>
 *                <p>The resulting user session is valid for 15 minutes (default) up to 10 hours (maximum). You can use the optional <code>SessionLifetimeInMinutes</code> parameter to customize session duration.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics-deprecated.html">Embedding Analytics Using GetDashboardEmbedUrl</a> in the <i>Amazon QuickSight User
 *             Guide</i>.</p>
 *          <p>For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon QuickSight Developer Portal</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GetDashboardEmbedUrlCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GetDashboardEmbedUrlCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new GetDashboardEmbedUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDashboardEmbedUrlCommandInput} for command's `input` shape.
 * @see {@link GetDashboardEmbedUrlCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class GetDashboardEmbedUrlCommand extends $Command<
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDashboardEmbedUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "GetDashboardEmbedUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDashboardEmbedUrlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDashboardEmbedUrlResponseFilterSensitiveLog,
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
