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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import {
  ListBotVersionsRequest,
  ListBotVersionsRequestFilterSensitiveLog,
  ListBotVersionsResponse,
  ListBotVersionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListBotVersionsCommand,
  serializeAws_restJson1ListBotVersionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListBotVersionsCommandInput extends ListBotVersionsRequest {}
export interface ListBotVersionsCommandOutput extends ListBotVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets information about all of the versions of a bot.</p>
 *          <p>The <code>ListBotVersions</code> operation returns a summary of each
 *          version of a bot. For example, if a bot has three numbered versions,
 *          the <code>ListBotVersions</code> operation returns for summaries, one
 *          for each numbered version and one for the <code>DRAFT</code>
 *          version.</p>
 *          <p>The <code>ListBotVersions</code> operation always returns at least
 *          one version, the <code>DRAFT</code> version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotVersionsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotVersionsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBotVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBotVersionsCommandInput} for command's `input` shape.
 * @see {@link ListBotVersionsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 */
export class ListBotVersionsCommand extends $Command<
  ListBotVersionsCommandInput,
  ListBotVersionsCommandOutput,
  LexModelsV2ClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBotVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListBotVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBotVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListBotVersionsResponseFilterSensitiveLog,
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
