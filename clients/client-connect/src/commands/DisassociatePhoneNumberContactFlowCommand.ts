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
  DisassociatePhoneNumberContactFlowRequest,
  DisassociatePhoneNumberContactFlowRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociatePhoneNumberContactFlowCommand,
  serializeAws_restJson1DisassociatePhoneNumberContactFlowCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociatePhoneNumberContactFlowCommandInput extends DisassociatePhoneNumberContactFlowRequest {}
export interface DisassociatePhoneNumberContactFlowCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the flow association from a phone number claimed to your Amazon Connect
 *    instance.</p>
 *          <important>
 *             <p>If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the
 *      Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number
 *     ARN or UUID value for the <code>PhoneNumberId</code> URI request parameter. However, if the
 *     number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate
 *      Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN.
 *     If a UUID is provided in this scenario, you will receive a
 *      <code>ResourceNotFoundException</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociatePhoneNumberContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociatePhoneNumberContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociatePhoneNumberContactFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociatePhoneNumberContactFlowCommandInput} for command's `input` shape.
 * @see {@link DisassociatePhoneNumberContactFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class DisassociatePhoneNumberContactFlowCommand extends $Command<
  DisassociatePhoneNumberContactFlowCommandInput,
  DisassociatePhoneNumberContactFlowCommandOutput,
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

  constructor(readonly input: DisassociatePhoneNumberContactFlowCommandInput) {
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
  ): Handler<DisassociatePhoneNumberContactFlowCommandInput, DisassociatePhoneNumberContactFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociatePhoneNumberContactFlowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DisassociatePhoneNumberContactFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociatePhoneNumberContactFlowRequestFilterSensitiveLog,
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
    input: DisassociatePhoneNumberContactFlowCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociatePhoneNumberContactFlowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociatePhoneNumberContactFlowCommandOutput> {
    return deserializeAws_restJson1DisassociatePhoneNumberContactFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
