import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import {
  GenerateEmbedUrlForRegisteredUserRequest,
  GenerateEmbedUrlForRegisteredUserResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1GenerateEmbedUrlForRegisteredUserCommand,
  serializeAws_restJson1GenerateEmbedUrlForRegisteredUserCommand,
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

export interface GenerateEmbedUrlForRegisteredUserCommandInput extends GenerateEmbedUrlForRegisteredUserRequest {}
export interface GenerateEmbedUrlForRegisteredUserCommandOutput
  extends GenerateEmbedUrlForRegisteredUserResponse,
    __MetadataBearer {}

/**
 * <p>Generates an embed URL that you can use to embed an Amazon QuickSight experience in your website. This action can be used for any type of user registered in an Amazon QuickSight account. Before you use this action, make sure that you have configured the relevant Amazon QuickSight resource and permissions.</p>
 *         <p>The following rules apply to the generated URL:</p>
 *         <ul>
 *             <li>
 *                 <p>It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.</p>
 *             </li>
 *             <li>
 *                 <p>The URL validity period should not be confused with the actual session lifetime
 *         that can be customized using the <code>
 *                      <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForRegisteredUser.html#QS-GenerateEmbedUrlForRegisteredUser-request-SessionLifetimeInMinutes">SessionLifetimeInMinutes</a>
 *                   </code> parameter.</p>
 *                 <p>The resulting user session is valid for 15 minutes (default) to 10 hours (maximum).</p>
 *             </li>
 *             <li>
 *                 <p>You are charged only when the URL is used or there is interaction with Amazon QuickSight.</p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html">Embedded Analytics</a> in the <i>Amazon QuickSight User
 *             Guide</i>.</p>
 *             <p>For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon QuickSight Developer Portal</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GenerateEmbedUrlForRegisteredUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GenerateEmbedUrlForRegisteredUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new GenerateEmbedUrlForRegisteredUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateEmbedUrlForRegisteredUserCommandInput} for command's `input` shape.
 * @see {@link GenerateEmbedUrlForRegisteredUserCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GenerateEmbedUrlForRegisteredUserCommand extends $Command<
  GenerateEmbedUrlForRegisteredUserCommandInput,
  GenerateEmbedUrlForRegisteredUserCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateEmbedUrlForRegisteredUserCommandInput) {
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
  ): Handler<GenerateEmbedUrlForRegisteredUserCommandInput, GenerateEmbedUrlForRegisteredUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "GenerateEmbedUrlForRegisteredUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateEmbedUrlForRegisteredUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateEmbedUrlForRegisteredUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GenerateEmbedUrlForRegisteredUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GenerateEmbedUrlForRegisteredUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GenerateEmbedUrlForRegisteredUserCommandOutput> {
    return deserializeAws_restJson1GenerateEmbedUrlForRegisteredUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
