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
  RebootBrokerRequest,
  RebootBrokerRequestFilterSensitiveLog,
  RebootBrokerResponse,
  RebootBrokerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RebootBrokerCommand,
  serializeAws_restJson1RebootBrokerCommand,
} from "../protocols/Aws_restJson1";

export interface RebootBrokerCommandInput extends RebootBrokerRequest {}
export interface RebootBrokerCommandOutput extends RebootBrokerResponse, __MetadataBearer {}

/**
 * Reboots brokers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, RebootBrokerCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, RebootBrokerCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new RebootBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootBrokerCommandInput} for command's `input` shape.
 * @see {@link RebootBrokerCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 */
export class RebootBrokerCommand extends $Command<
  RebootBrokerCommandInput,
  RebootBrokerCommandOutput,
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

  constructor(readonly input: RebootBrokerCommandInput) {
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
  ): Handler<RebootBrokerCommandInput, RebootBrokerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RebootBrokerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "RebootBrokerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebootBrokerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RebootBrokerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RebootBrokerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RebootBrokerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebootBrokerCommandOutput> {
    return deserializeAws_restJson1RebootBrokerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
