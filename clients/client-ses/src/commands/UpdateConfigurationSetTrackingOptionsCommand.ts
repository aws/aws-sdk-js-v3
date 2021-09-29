import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import {
  UpdateConfigurationSetTrackingOptionsRequest,
  UpdateConfigurationSetTrackingOptionsResponse,
} from "../models/models_0";
import {
  deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand,
  serializeAws_queryUpdateConfigurationSetTrackingOptionsCommand,
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

export interface UpdateConfigurationSetTrackingOptionsCommandInput
  extends UpdateConfigurationSetTrackingOptionsRequest {}
export interface UpdateConfigurationSetTrackingOptionsCommandOutput
  extends UpdateConfigurationSetTrackingOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Modifies an association between a configuration set and a custom domain for open and
 *             click event tracking. </p>
 *         <p>By default, images and links used for tracking open and click events are hosted on
 *             domains operated by Amazon SES. You can configure a subdomain of your own to handle these
 *             events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateConfigurationSetTrackingOptionsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateConfigurationSetTrackingOptionsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new UpdateConfigurationSetTrackingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConfigurationSetTrackingOptionsCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationSetTrackingOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateConfigurationSetTrackingOptionsCommand extends $Command<
  UpdateConfigurationSetTrackingOptionsCommandInput,
  UpdateConfigurationSetTrackingOptionsCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateConfigurationSetTrackingOptionsCommandInput) {
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
  ): Handler<UpdateConfigurationSetTrackingOptionsCommandInput, UpdateConfigurationSetTrackingOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "UpdateConfigurationSetTrackingOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConfigurationSetTrackingOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateConfigurationSetTrackingOptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateConfigurationSetTrackingOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryUpdateConfigurationSetTrackingOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput> {
    return deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
