import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import {
  PutConfigurationSetDeliveryOptionsRequest,
  PutConfigurationSetDeliveryOptionsResponse,
} from "../models/models_0";
import {
  deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand,
  serializeAws_queryPutConfigurationSetDeliveryOptionsCommand,
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

export interface PutConfigurationSetDeliveryOptionsCommandInput extends PutConfigurationSetDeliveryOptionsRequest {}
export interface PutConfigurationSetDeliveryOptionsCommandOutput
  extends PutConfigurationSetDeliveryOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Adds or updates the delivery options for a configuration set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, PutConfigurationSetDeliveryOptionsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, PutConfigurationSetDeliveryOptionsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new PutConfigurationSetDeliveryOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetDeliveryOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetDeliveryOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutConfigurationSetDeliveryOptionsCommand extends $Command<
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutConfigurationSetDeliveryOptionsCommandInput) {
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
  ): Handler<PutConfigurationSetDeliveryOptionsCommandInput, PutConfigurationSetDeliveryOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "PutConfigurationSetDeliveryOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConfigurationSetDeliveryOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutConfigurationSetDeliveryOptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutConfigurationSetDeliveryOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryPutConfigurationSetDeliveryOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> {
    return deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
