import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListDomainConfigurationsRequest, ListDomainConfigurationsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListDomainConfigurationsCommand,
  serializeAws_restJson1ListDomainConfigurationsCommand,
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

export interface ListDomainConfigurationsCommandInput extends ListDomainConfigurationsRequest {}
export interface ListDomainConfigurationsCommandOutput extends ListDomainConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of domain configurations for the user. This list is sorted
 *          alphabetically by domain configuration name.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDomainConfigurations</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDomainConfigurationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDomainConfigurationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListDomainConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListDomainConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDomainConfigurationsCommand extends $Command<
  ListDomainConfigurationsCommandInput,
  ListDomainConfigurationsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDomainConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDomainConfigurationsCommandInput, ListDomainConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListDomainConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDomainConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDomainConfigurationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDomainConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDomainConfigurationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDomainConfigurationsCommandOutput> {
    return deserializeAws_restJson1ListDomainConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
