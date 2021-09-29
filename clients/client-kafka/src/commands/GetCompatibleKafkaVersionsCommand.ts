import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { GetCompatibleKafkaVersionsRequest, GetCompatibleKafkaVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetCompatibleKafkaVersionsCommand,
  serializeAws_restJson1GetCompatibleKafkaVersionsCommand,
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

export interface GetCompatibleKafkaVersionsCommandInput extends GetCompatibleKafkaVersionsRequest {}
export interface GetCompatibleKafkaVersionsCommandOutput extends GetCompatibleKafkaVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets the Apache Kafka versions to which you can update the MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, GetCompatibleKafkaVersionsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, GetCompatibleKafkaVersionsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new GetCompatibleKafkaVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCompatibleKafkaVersionsCommandInput} for command's `input` shape.
 * @see {@link GetCompatibleKafkaVersionsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCompatibleKafkaVersionsCommand extends $Command<
  GetCompatibleKafkaVersionsCommandInput,
  GetCompatibleKafkaVersionsCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCompatibleKafkaVersionsCommandInput) {
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
  ): Handler<GetCompatibleKafkaVersionsCommandInput, GetCompatibleKafkaVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "GetCompatibleKafkaVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCompatibleKafkaVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCompatibleKafkaVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCompatibleKafkaVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCompatibleKafkaVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCompatibleKafkaVersionsCommandOutput> {
    return deserializeAws_restJson1GetCompatibleKafkaVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
