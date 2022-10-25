// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import {
  GetBootstrapBrokersRequest,
  GetBootstrapBrokersRequestFilterSensitiveLog,
  GetBootstrapBrokersResponse,
  GetBootstrapBrokersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetBootstrapBrokersCommand,
  serializeAws_restJson1GetBootstrapBrokersCommand,
} from "../protocols/Aws_restJson1";

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
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 */
export class GetBootstrapBrokersCommand extends $Command<
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBootstrapBrokersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "GetBootstrapBrokersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBootstrapBrokersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBootstrapBrokersResponseFilterSensitiveLog,
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
