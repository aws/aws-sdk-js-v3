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
import { DescribePhoneNumberRequest, DescribePhoneNumberResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribePhoneNumberCommand,
  serializeAws_restJson1DescribePhoneNumberCommand,
} from "../protocols/Aws_restJson1";

export interface DescribePhoneNumberCommandInput extends DescribePhoneNumberRequest {}
export interface DescribePhoneNumberCommandOutput extends DescribePhoneNumberResponse, __MetadataBearer {}

/**
 * <p>Gets details and status of a phone number that’s claimed to your Amazon Connect instance</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribePhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribePhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribePhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link DescribePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class DescribePhoneNumberCommand extends $Command<
  DescribePhoneNumberCommandInput,
  DescribePhoneNumberCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePhoneNumberCommandInput) {
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
  ): Handler<DescribePhoneNumberCommandInput, DescribePhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribePhoneNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePhoneNumberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribePhoneNumberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePhoneNumberCommandOutput> {
    return deserializeAws_restJson1DescribePhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
