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
import { ClaimPhoneNumberRequest, ClaimPhoneNumberResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ClaimPhoneNumberCommand,
  serializeAws_restJson1ClaimPhoneNumberCommand,
} from "../protocols/Aws_restJson1";

export interface ClaimPhoneNumberCommandInput extends ClaimPhoneNumberRequest {}
export interface ClaimPhoneNumberCommandOutput extends ClaimPhoneNumberResponse, __MetadataBearer {}

/**
 * <p>Claims an available phone number to your Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ClaimPhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ClaimPhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ClaimPhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ClaimPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link ClaimPhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ClaimPhoneNumberCommand extends $Command<
  ClaimPhoneNumberCommandInput,
  ClaimPhoneNumberCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ClaimPhoneNumberCommandInput) {
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
  ): Handler<ClaimPhoneNumberCommandInput, ClaimPhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ClaimPhoneNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ClaimPhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ClaimPhoneNumberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ClaimPhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ClaimPhoneNumberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ClaimPhoneNumberCommandOutput> {
    return deserializeAws_restJson1ClaimPhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
