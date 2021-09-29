import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateConfigurationSetReputationMetricsEnabledRequest } from "../models/models_0";
import {
  deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand,
  serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand,
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

export interface UpdateConfigurationSetReputationMetricsEnabledCommandInput
  extends UpdateConfigurationSetReputationMetricsEnabledRequest {}
export interface UpdateConfigurationSetReputationMetricsEnabledCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables or disables the publishing of reputation metrics for emails sent using a
 *             specific configuration set in a given AWS Region. Reputation metrics include bounce
 *             and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can
 *             create alarms when bounce or complaint rates exceed certain thresholds.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateConfigurationSetReputationMetricsEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateConfigurationSetReputationMetricsEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new UpdateConfigurationSetReputationMetricsEnabledCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConfigurationSetReputationMetricsEnabledCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationSetReputationMetricsEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateConfigurationSetReputationMetricsEnabledCommand extends $Command<
  UpdateConfigurationSetReputationMetricsEnabledCommandInput,
  UpdateConfigurationSetReputationMetricsEnabledCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateConfigurationSetReputationMetricsEnabledCommandInput) {
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
  ): Handler<
    UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    UpdateConfigurationSetReputationMetricsEnabledCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "UpdateConfigurationSetReputationMetricsEnabledCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConfigurationSetReputationMetricsEnabledRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput> {
    return deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
