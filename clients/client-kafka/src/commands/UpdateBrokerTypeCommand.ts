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
  UpdateBrokerTypeRequest,
  UpdateBrokerTypeRequestFilterSensitiveLog,
  UpdateBrokerTypeResponse,
  UpdateBrokerTypeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBrokerTypeCommand,
  serializeAws_restJson1UpdateBrokerTypeCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateBrokerTypeCommandInput extends UpdateBrokerTypeRequest {}
export interface UpdateBrokerTypeCommandOutput extends UpdateBrokerTypeResponse, __MetadataBearer {}

/**
 * <p>Updates EC2 instance type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerTypeCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerTypeCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateBrokerTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBrokerTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerTypeCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 */
export class UpdateBrokerTypeCommand extends $Command<
  UpdateBrokerTypeCommandInput,
  UpdateBrokerTypeCommandOutput,
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

  constructor(readonly input: UpdateBrokerTypeCommandInput) {
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
  ): Handler<UpdateBrokerTypeCommandInput, UpdateBrokerTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBrokerTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateBrokerTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBrokerTypeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateBrokerTypeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBrokerTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateBrokerTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBrokerTypeCommandOutput> {
    return deserializeAws_restJson1UpdateBrokerTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
