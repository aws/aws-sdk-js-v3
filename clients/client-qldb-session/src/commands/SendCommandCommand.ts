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
  SendCommandRequest,
  SendCommandRequestFilterSensitiveLog,
  SendCommandResult,
  SendCommandResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0SendCommandCommand,
  serializeAws_json1_0SendCommandCommand,
} from "../protocols/Aws_json1_0";
import { QLDBSessionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBSessionClient";

export interface SendCommandCommandInput extends SendCommandRequest {}
export interface SendCommandCommandOutput extends SendCommandResult, __MetadataBearer {}

/**
 * <p>Sends a command to an Amazon QLDB ledger.</p>
 *          <note>
 *             <p>Instead of interacting directly with this API, we recommend using the QLDB driver
 *             or the QLDB shell to execute data transactions on a ledger.</p>
 *             <ul>
 *                <li>
 *                   <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides
 *                   a high-level abstraction layer above this <i>QLDB Session</i> data
 *                   plane and manages <code>SendCommand</code> API calls for you. For information and
 *                   a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started
 *                      with the driver</a> in the <i>Amazon QLDB Developer
 *                   Guide</i>.</p>
 *                </li>
 *                <li>
 *                   <p>If you are working with the AWS Command Line Interface (AWS CLI), use the
 *                   QLDB shell. The shell is a command line interface that uses the QLDB driver to
 *                   interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the
 *                      QLDB shell</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBSessionClient, SendCommandCommand } from "@aws-sdk/client-qldb-session"; // ES Modules import
 * // const { QLDBSessionClient, SendCommandCommand } = require("@aws-sdk/client-qldb-session"); // CommonJS import
 * const client = new QLDBSessionClient(config);
 * const command = new SendCommandCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendCommandCommandInput} for command's `input` shape.
 * @see {@link SendCommandCommandOutput} for command's `response` shape.
 * @see {@link QLDBSessionClientResolvedConfig | config} for QLDBSessionClient's `config` shape.
 *
 */
export class SendCommandCommand extends $Command<
  SendCommandCommandInput,
  SendCommandCommandOutput,
  QLDBSessionClientResolvedConfig
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

  constructor(readonly input: SendCommandCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBSessionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendCommandCommandInput, SendCommandCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SendCommandCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBSessionClient";
    const commandName = "SendCommandCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendCommandRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendCommandResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendCommandCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0SendCommandCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendCommandCommandOutput> {
    return deserializeAws_json1_0SendCommandCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
