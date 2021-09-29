import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetAccountSendingEnabledResponse } from "../models/models_0";
import {
  deserializeAws_queryGetAccountSendingEnabledCommand,
  serializeAws_queryGetAccountSendingEnabledCommand,
} from "../protocols/Aws_query";
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

export interface GetAccountSendingEnabledCommandInput {}
export interface GetAccountSendingEnabledCommandOutput extends GetAccountSendingEnabledResponse, __MetadataBearer {}

/**
 * <p>Returns the email sending status of the Amazon SES account for the current region.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetAccountSendingEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetAccountSendingEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new GetAccountSendingEnabledCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountSendingEnabledCommandInput} for command's `input` shape.
 * @see {@link GetAccountSendingEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetAccountSendingEnabledCommand extends $Command<
  GetAccountSendingEnabledCommandInput,
  GetAccountSendingEnabledCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccountSendingEnabledCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccountSendingEnabledCommandInput, GetAccountSendingEnabledCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetAccountSendingEnabledCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GetAccountSendingEnabledResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccountSendingEnabledCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetAccountSendingEnabledCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountSendingEnabledCommandOutput> {
    return deserializeAws_queryGetAccountSendingEnabledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
