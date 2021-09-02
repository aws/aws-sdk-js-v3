import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { GetEventSelectorsRequest, GetEventSelectorsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetEventSelectorsCommand,
  serializeAws_json1_1GetEventSelectorsCommand,
} from "../protocols/Aws_json1_1";
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

export interface GetEventSelectorsCommandInput extends GetEventSelectorsRequest {}
export interface GetEventSelectorsCommandOutput extends GetEventSelectorsResponse, __MetadataBearer {}

/**
 * <p>Describes the settings for the event selectors that you configured for your trail.
 *          The information returned for your event selectors includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>If your event selector includes read-only events, write-only events, or
 *             all events. This applies to both management events and data events.</p>
 *             </li>
 *             <li>
 *                <p>If your event selector includes management events.</p>
 *             </li>
 *             <li>
 *                <p>If your event selector includes data events, the resources on which you are logging data
 *                events.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails
 *       </a> in the <i>CloudTrail User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetEventSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetEventSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new GetEventSelectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventSelectorsCommandInput} for command's `input` shape.
 * @see {@link GetEventSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetEventSelectorsCommand extends $Command<
  GetEventSelectorsCommandInput,
  GetEventSelectorsCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEventSelectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "GetEventSelectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEventSelectorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEventSelectorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEventSelectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetEventSelectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEventSelectorsCommandOutput> {
    return deserializeAws_json1_1GetEventSelectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
