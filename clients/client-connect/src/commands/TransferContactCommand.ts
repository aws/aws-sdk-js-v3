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
  TransferContactRequest,
  TransferContactRequestFilterSensitiveLog,
  TransferContactResponse,
  TransferContactResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1TransferContactCommand,
  serializeAws_restJson1TransferContactCommand,
} from "../protocols/Aws_restJson1";

export interface TransferContactCommandInput extends TransferContactRequest {}
export interface TransferContactCommandOutput extends TransferContactResponse, __MetadataBearer {}

/**
 * <p>Transfers contacts from one agent or queue to another agent or queue at any point after a
 *    contact is created. You can transfer a contact to another queue by providing the flow which
 *    orchestrates the contact to the destination queue. This gives you more control over contact
 *    handling and helps you adhere to the service level agreement (SLA) guaranteed to your
 *    customers.</p>
 *          <p>Note the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Transfer is supported for only <code>TASK</code> contacts.</p>
 *             </li>
 *             <li>
 *                <p>Do not use both <code>QueueId</code> and <code>UserId</code> in the same call.</p>
 *             </li>
 *             <li>
 *                <p>The following flow types are supported: Inbound flow, Transfer to agent flow, and Transfer
 *      to queue flow.</p>
 *             </li>
 *             <li>
 *                <p>The <code>TransferContact</code> API can be called only on active contacts.</p>
 *             </li>
 *             <li>
 *                <p>A contact cannot be transferred more than 11 times.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, TransferContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, TransferContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new TransferContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransferContactCommandInput} for command's `input` shape.
 * @see {@link TransferContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class TransferContactCommand extends $Command<
  TransferContactCommandInput,
  TransferContactCommandOutput,
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

  constructor(readonly input: TransferContactCommandInput) {
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
  ): Handler<TransferContactCommandInput, TransferContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TransferContactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "TransferContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TransferContactRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TransferContactResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TransferContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TransferContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TransferContactCommandOutput> {
    return deserializeAws_restJson1TransferContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
