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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  UpdateQueueOutboundCallerConfigRequest,
  UpdateQueueOutboundCallerConfigRequestFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommand,
  serializeAws_restJson1UpdateQueueOutboundCallerConfigCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateQueueOutboundCallerConfigCommandInput extends UpdateQueueOutboundCallerConfigRequest {}
export interface UpdateQueueOutboundCallerConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates the outbound caller ID name, number, and outbound whisper flow for a specified
 *    queue.</p>
 *          <important>
 *             <p>If the number being used in the input is claimed to a traffic distribution group, and you are calling this API
 *     using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use
 *     either a full phone number ARN or UUID value for the <code>OutboundCallerIdNumberId</code> value
 *     of the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_OutboundCallerConfig">OutboundCallerConfig</a> request body parameter. However, if the number is claimed to a
 *     traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region
 *     associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided
 *     in
 *     this scenario, you will receive a
 *     <code>ResourceNotFoundException</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueOutboundCallerConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueOutboundCallerConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateQueueOutboundCallerConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQueueOutboundCallerConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueOutboundCallerConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class UpdateQueueOutboundCallerConfigCommand extends $Command<
  UpdateQueueOutboundCallerConfigCommandInput,
  UpdateQueueOutboundCallerConfigCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: UpdateQueueOutboundCallerConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateQueueOutboundCallerConfigCommandInput, UpdateQueueOutboundCallerConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateQueueOutboundCallerConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateQueueOutboundCallerConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateQueueOutboundCallerConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateQueueOutboundCallerConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateQueueOutboundCallerConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateQueueOutboundCallerConfigCommandOutput> {
    return deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
