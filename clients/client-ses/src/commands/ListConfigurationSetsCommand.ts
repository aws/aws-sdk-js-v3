import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListConfigurationSetsRequest, ListConfigurationSetsResponse } from "../models/models_0";
import {
  deserializeAws_queryListConfigurationSetsCommand,
  serializeAws_queryListConfigurationSetsCommand,
} from "../protocols/Aws_query";
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

export interface ListConfigurationSetsCommandInput extends ListConfigurationSetsRequest {}
export interface ListConfigurationSetsCommandOutput extends ListConfigurationSetsResponse, __MetadataBearer {}

/**
 * <p>Provides a list of the configuration sets associated with your Amazon SES account in the
 *             current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer
 *                 Guide.</i>
 *          </p>
 *         <p>You can execute this operation no more than once per second. This operation will
 *             return up to 1,000 configuration sets each time it is run. If your Amazon SES account has
 *             more than 1,000 configuration sets, this operation will also return a NextToken element.
 *             You can then execute the <code>ListConfigurationSets</code> operation again, passing the
 *                 <code>NextToken</code> parameter and the value of the NextToken element to retrieve
 *             additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListConfigurationSetsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListConfigurationSetsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new ListConfigurationSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationSetsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationSetsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListConfigurationSetsCommand extends $Command<
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListConfigurationSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListConfigurationSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConfigurationSetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListConfigurationSetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConfigurationSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListConfigurationSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConfigurationSetsCommandOutput> {
    return deserializeAws_queryListConfigurationSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
