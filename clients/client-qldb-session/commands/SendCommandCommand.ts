import { QLDBSessionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBSessionClient";
import { SendCommandRequest, SendCommandResult } from "../models/models_0";
import {
  deserializeAws_json1_0SendCommandCommand,
  serializeAws_json1_0SendCommandCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type SendCommandCommandInput = SendCommandRequest;
export type SendCommandCommandOutput = SendCommandResult & __MetadataBearer;

/**
 * <p>Sends a command to an Amazon QLDB ledger.</p>
 *          <note>
 *             <p>Instead of interacting directly with this API, we recommend that you use the
 *             Amazon QLDB Driver or the QLDB Shell to execute data transactions on a ledger.</p>
 *             <ul>
 *                <li>
 *                   <p>If you are working with an AWS SDK, use the QLDB Driver. The driver provides
 *                   a high-level abstraction layer above this <code>qldbsession</code> data plane and
 *                   manages <code>SendCommand</code> API calls for you. For information and a list of
 *                   supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started
 *                      with the driver</a> in the <i>Amazon QLDB Developer
 *                   Guide</i>.</p>
 *                </li>
 *                <li>
 *                   <p>If you are working with the AWS Command Line Interface (AWS CLI), use the
 *                   QLDB Shell. The shell is a command line interface that uses the QLDB Driver to
 *                   interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the
 *                      QLDB Shell</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export class SendCommandCommand extends $Command<
  SendCommandCommandInput,
  SendCommandCommandOutput,
  QLDBSessionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBSessionClient";
    const commandName = "SendCommandCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendCommandRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendCommandResult.filterSensitiveLog,
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
