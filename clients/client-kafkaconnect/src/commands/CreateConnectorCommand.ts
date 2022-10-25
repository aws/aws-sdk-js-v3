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

import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import {
  CreateConnectorRequest,
  CreateConnectorRequestFilterSensitiveLog,
  CreateConnectorResponse,
  CreateConnectorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateConnectorCommand,
  serializeAws_restJson1CreateConnectorCommand,
} from "../protocols/Aws_restJson1";

export interface CreateConnectorCommandInput extends CreateConnectorRequest {}
export interface CreateConnectorCommandOutput extends CreateConnectorResponse, __MetadataBearer {}

/**
 * <p>Creates a connector using the specified properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, CreateConnectorCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, CreateConnectorCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const command = new CreateConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 */
export class CreateConnectorCommand extends $Command<
  CreateConnectorCommandInput,
  CreateConnectorCommandOutput,
  KafkaConnectClientResolvedConfig
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

  constructor(readonly input: CreateConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConnectorCommandInput, CreateConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConnectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "CreateConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConnectorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateConnectorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateConnectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConnectorCommandOutput> {
    return deserializeAws_restJson1CreateConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
