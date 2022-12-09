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
  MonitorContactRequest,
  MonitorContactRequestFilterSensitiveLog,
  MonitorContactResponse,
  MonitorContactResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1MonitorContactCommand,
  serializeAws_restJson1MonitorContactCommand,
} from "../protocols/Aws_restJson1";

export interface MonitorContactCommandInput extends MonitorContactRequest {}
export interface MonitorContactCommandOutput extends MonitorContactResponse, __MetadataBearer {}

/**
 * <p>Initiates silent monitoring of a contact. The Contact Control Panel (CCP) of the user
 *    specified by <i>userId</i> will be set to silent monitoring mode on the
 *    contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, MonitorContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, MonitorContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new MonitorContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MonitorContactCommandInput} for command's `input` shape.
 * @see {@link MonitorContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class MonitorContactCommand extends $Command<
  MonitorContactCommandInput,
  MonitorContactCommandOutput,
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

  constructor(readonly input: MonitorContactCommandInput) {
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
  ): Handler<MonitorContactCommandInput, MonitorContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, MonitorContactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "MonitorContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MonitorContactRequestFilterSensitiveLog,
      outputFilterSensitiveLog: MonitorContactResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MonitorContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1MonitorContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MonitorContactCommandOutput> {
    return deserializeAws_restJson1MonitorContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
