import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { GetBootstrapBrokersRequest, GetBootstrapBrokersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBootstrapBrokersCommand,
  serializeAws_restJson1GetBootstrapBrokersCommand,
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

export interface GetBootstrapBrokersCommandInput extends GetBootstrapBrokersRequest {}
export interface GetBootstrapBrokersCommandOutput extends GetBootstrapBrokersResponse, __MetadataBearer {}

/**
 * <p>A list of brokers that a client application can use to bootstrap.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, GetBootstrapBrokersCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, GetBootstrapBrokersCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new GetBootstrapBrokersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBootstrapBrokersCommandInput} for command's `input` shape.
 * @see {@link GetBootstrapBrokersCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetBootstrapBrokersCommand extends $Command<
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBootstrapBrokersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBootstrapBrokersCommandInput, GetBootstrapBrokersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "GetBootstrapBrokersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBootstrapBrokersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBootstrapBrokersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBootstrapBrokersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBootstrapBrokersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBootstrapBrokersCommandOutput> {
    return deserializeAws_restJson1GetBootstrapBrokersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
