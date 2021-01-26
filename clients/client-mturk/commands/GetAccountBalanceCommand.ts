import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetAccountBalanceRequest, GetAccountBalanceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetAccountBalanceCommand,
  serializeAws_json1_1GetAccountBalanceCommand,
} from "../protocols/Aws_json1_1";
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

export type GetAccountBalanceCommandInput = GetAccountBalanceRequest;
export type GetAccountBalanceCommandOutput = GetAccountBalanceResponse & __MetadataBearer;

/**
 * <p>The <code>GetAccountBalance</code> operation retrieves the amount of money in your Amazon Mechanical Turk account.</p>
 */
export class GetAccountBalanceCommand extends $Command<
  GetAccountBalanceCommandInput,
  GetAccountBalanceCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccountBalanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccountBalanceCommandInput, GetAccountBalanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "GetAccountBalanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccountBalanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccountBalanceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccountBalanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAccountBalanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountBalanceCommandOutput> {
    return deserializeAws_json1_1GetAccountBalanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
