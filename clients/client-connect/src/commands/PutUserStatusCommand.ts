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
  PutUserStatusRequest,
  PutUserStatusRequestFilterSensitiveLog,
  PutUserStatusResponse,
  PutUserStatusResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1PutUserStatusCommand,
  serializeAws_restJson1PutUserStatusCommand,
} from "../protocols/Aws_restJson1";

export interface PutUserStatusCommandInput extends PutUserStatusRequest {}
export interface PutUserStatusCommandOutput extends PutUserStatusResponse, __MetadataBearer {}

/**
 * <p>Changes the current status of a user or agent in Amazon Connect. If the agent is
 *    currently handling a contact, this sets the agent's next status.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-agent-status.html">Agent status</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-next-status.html">Set your next
 *     status</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, PutUserStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, PutUserStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new PutUserStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutUserStatusCommandInput} for command's `input` shape.
 * @see {@link PutUserStatusCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class PutUserStatusCommand extends $Command<
  PutUserStatusCommandInput,
  PutUserStatusCommandOutput,
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

  constructor(readonly input: PutUserStatusCommandInput) {
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
  ): Handler<PutUserStatusCommandInput, PutUserStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutUserStatusCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "PutUserStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutUserStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutUserStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutUserStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutUserStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutUserStatusCommandOutput> {
    return deserializeAws_restJson1PutUserStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
