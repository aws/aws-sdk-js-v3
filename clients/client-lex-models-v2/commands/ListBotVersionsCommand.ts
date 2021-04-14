import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBotVersionsRequest, ListBotVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListBotVersionsCommand,
  serializeAws_restJson1ListBotVersionsCommand,
} from "../protocols/Aws_restJson1";
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

export type ListBotVersionsCommandInput = ListBotVersionsRequest;
export type ListBotVersionsCommandOutput = ListBotVersionsResponse & __MetadataBearer;

/**
 * <p>Gets information about all of the versions of a bot.</p>
 *          <p>The <code>ListBotVersions</code> operation returns a summary of each
 *          version of a bot. For example, if a bot has three numbered versions,
 *          the <code>ListBotVersions</code> operation returns for summaries, one
 *          for each numbered version and one for the <code>DRAFT</code>
 *          version.</p>
 *          <p>The <code>ListBotVersions</code> operation always returns at least
 *          one version, the <code>DRAFT</code> version.</p>
 */
export class ListBotVersionsCommand extends $Command<
  ListBotVersionsCommandInput,
  ListBotVersionsCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBotVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBotVersionsCommandInput, ListBotVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListBotVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBotVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBotVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBotVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBotVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBotVersionsCommandOutput> {
    return deserializeAws_restJson1ListBotVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
