import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { ListMemberAccountsRequest, ListMemberAccountsResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListMemberAccountsCommand,
  serializeAws_json1_1ListMemberAccountsCommand,
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

export type ListMemberAccountsCommandInput = ListMemberAccountsRequest;
export type ListMemberAccountsCommandOutput = ListMemberAccountsResult & __MetadataBearer;

/**
 * <p>Lists all Amazon Macie Classic member accounts for the current Amazon Macie Classic
 *       master account.</p>
 */
export class ListMemberAccountsCommand extends $Command<
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
  MacieClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMemberAccountsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "ListMemberAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMemberAccountsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMemberAccountsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMemberAccountsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMemberAccountsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMemberAccountsCommandOutput> {
    return deserializeAws_json1_1ListMemberAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
