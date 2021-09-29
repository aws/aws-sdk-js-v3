import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { DescribeBrokerEngineTypesRequest, DescribeBrokerEngineTypesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeBrokerEngineTypesCommand,
  serializeAws_restJson1DescribeBrokerEngineTypesCommand,
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

export interface DescribeBrokerEngineTypesCommandInput extends DescribeBrokerEngineTypesRequest {}
export interface DescribeBrokerEngineTypesCommandOutput extends DescribeBrokerEngineTypesResponse, __MetadataBearer {}

/**
 * <p>Describe available engine types and versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerEngineTypesCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerEngineTypesCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DescribeBrokerEngineTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBrokerEngineTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeBrokerEngineTypesCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeBrokerEngineTypesCommand extends $Command<
  DescribeBrokerEngineTypesCommandInput,
  DescribeBrokerEngineTypesCommandOutput,
  MqClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBrokerEngineTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBrokerEngineTypesCommandInput, DescribeBrokerEngineTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "DescribeBrokerEngineTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBrokerEngineTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBrokerEngineTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBrokerEngineTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBrokerEngineTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBrokerEngineTypesCommandOutput> {
    return deserializeAws_restJson1DescribeBrokerEngineTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
