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
  UpdateBrokerCountRequest,
  UpdateBrokerCountRequestFilterSensitiveLog,
  UpdateBrokerCountResponse,
  UpdateBrokerCountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBrokerCountCommand,
  serializeAws_restJson1UpdateBrokerCountCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateBrokerCountCommandInput extends UpdateBrokerCountRequest {}
export interface UpdateBrokerCountCommandOutput extends UpdateBrokerCountResponse, __MetadataBearer {}

/**
 * <p>Updates the number of broker nodes in the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerCountCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerCountCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateBrokerCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBrokerCountCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerCountCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 */
export class UpdateBrokerCountCommand extends $Command<
  UpdateBrokerCountCommandInput,
  UpdateBrokerCountCommandOutput,
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

  constructor(readonly input: UpdateBrokerCountCommandInput) {
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
  ): Handler<UpdateBrokerCountCommandInput, UpdateBrokerCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBrokerCountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateBrokerCountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBrokerCountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateBrokerCountResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBrokerCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateBrokerCountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBrokerCountCommandOutput> {
    return deserializeAws_restJson1UpdateBrokerCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
