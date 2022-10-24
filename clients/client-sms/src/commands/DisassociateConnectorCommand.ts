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

import {
  DisassociateConnectorRequest,
  DisassociateConnectorRequestFilterSensitiveLog,
  DisassociateConnectorResponse,
  DisassociateConnectorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateConnectorCommand,
  serializeAws_json1_1DisassociateConnectorCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

export interface DisassociateConnectorCommandInput extends DisassociateConnectorRequest {}
export interface DisassociateConnectorCommandOutput extends DisassociateConnectorResponse, __MetadataBearer {}

/**
 * <p>Disassociates the specified connector from Server Migration Service.</p>
 *         <p>After you disassociate a connector, it is no longer available to support
 *             replication jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DisassociateConnectorCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DisassociateConnectorCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DisassociateConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateConnectorCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectorCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 */
export class DisassociateConnectorCommand extends $Command<
  DisassociateConnectorCommandInput,
  DisassociateConnectorCommandOutput,
  SMSClientResolvedConfig
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

  constructor(readonly input: DisassociateConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateConnectorCommandInput, DisassociateConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateConnectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "DisassociateConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateConnectorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateConnectorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateConnectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateConnectorCommandOutput> {
    return deserializeAws_json1_1DisassociateConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
