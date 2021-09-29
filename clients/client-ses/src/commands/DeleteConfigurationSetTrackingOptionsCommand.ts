import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import {
  DeleteConfigurationSetTrackingOptionsRequest,
  DeleteConfigurationSetTrackingOptionsResponse,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand,
  serializeAws_queryDeleteConfigurationSetTrackingOptionsCommand,
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

export interface DeleteConfigurationSetTrackingOptionsCommandInput
  extends DeleteConfigurationSetTrackingOptionsRequest {}
export interface DeleteConfigurationSetTrackingOptionsCommandOutput
  extends DeleteConfigurationSetTrackingOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an association between a configuration set and a custom domain for open and
 *             click event tracking.</p>
 *         <p>By default, images and links used for tracking open and click events are hosted on
 *             domains operated by Amazon SES. You can configure a subdomain of your own to handle these
 *             events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
 *         <note>
 *             <p>Deleting this kind of association will result in emails sent using the specified
 *                 configuration set to capture open and click events using the standard,
 *                 Amazon SES-operated domains.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteConfigurationSetTrackingOptionsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteConfigurationSetTrackingOptionsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new DeleteConfigurationSetTrackingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationSetTrackingOptionsCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationSetTrackingOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteConfigurationSetTrackingOptionsCommand extends $Command<
  DeleteConfigurationSetTrackingOptionsCommandInput,
  DeleteConfigurationSetTrackingOptionsCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteConfigurationSetTrackingOptionsCommandInput) {
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
  ): Handler<DeleteConfigurationSetTrackingOptionsCommandInput, DeleteConfigurationSetTrackingOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DeleteConfigurationSetTrackingOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConfigurationSetTrackingOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteConfigurationSetTrackingOptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteConfigurationSetTrackingOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteConfigurationSetTrackingOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput> {
    return deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
