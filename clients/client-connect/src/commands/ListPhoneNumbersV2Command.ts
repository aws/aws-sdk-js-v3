// smithy-typescript generated code
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
  ListPhoneNumbersV2Request,
  ListPhoneNumbersV2RequestFilterSensitiveLog,
  ListPhoneNumbersV2Response,
  ListPhoneNumbersV2ResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPhoneNumbersV2Command,
  serializeAws_restJson1ListPhoneNumbersV2Command,
} from "../protocols/Aws_restJson1";

export interface ListPhoneNumbersV2CommandInput extends ListPhoneNumbersV2Request {}
export interface ListPhoneNumbersV2CommandOutput extends ListPhoneNumbersV2Response, __MetadataBearer {}

/**
 * <p>Lists phone numbers claimed to your Amazon Connect instance. </p>
 *          <p>For more information about phone numbers, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html">Set Up Phone Numbers for Your
 *     Contact Center</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListPhoneNumbersV2Command } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListPhoneNumbersV2Command } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListPhoneNumbersV2Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPhoneNumbersV2CommandInput} for command's `input` shape.
 * @see {@link ListPhoneNumbersV2CommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListPhoneNumbersV2Command extends $Command<
  ListPhoneNumbersV2CommandInput,
  ListPhoneNumbersV2CommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPhoneNumbersV2CommandInput) {
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
  ): Handler<ListPhoneNumbersV2CommandInput, ListPhoneNumbersV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListPhoneNumbersV2Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPhoneNumbersV2RequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPhoneNumbersV2ResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPhoneNumbersV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPhoneNumbersV2Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPhoneNumbersV2CommandOutput> {
    return deserializeAws_restJson1ListPhoneNumbersV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
