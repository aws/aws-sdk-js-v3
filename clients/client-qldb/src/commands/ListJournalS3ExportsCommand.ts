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
  ListJournalS3ExportsRequest,
  ListJournalS3ExportsRequestFilterSensitiveLog,
  ListJournalS3ExportsResponse,
  ListJournalS3ExportsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListJournalS3ExportsCommand,
  serializeAws_restJson1ListJournalS3ExportsCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

export interface ListJournalS3ExportsCommandInput extends ListJournalS3ExportsRequest {}
export interface ListJournalS3ExportsCommandOutput extends ListJournalS3ExportsResponse, __MetadataBearer {}

/**
 * <p>Returns an array of journal export job descriptions for all ledgers that are associated
 *          with the current Amazon Web Services account and Region.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that
 *          you can retrieve all the items by calling <code>ListJournalS3Exports</code> multiple
 *          times.</p>
 *          <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer
 *          Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListJournalS3ExportsCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListJournalS3ExportsCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ListJournalS3ExportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJournalS3ExportsCommandInput} for command's `input` shape.
 * @see {@link ListJournalS3ExportsCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 */
export class ListJournalS3ExportsCommand extends $Command<
  ListJournalS3ExportsCommandInput,
  ListJournalS3ExportsCommandOutput,
  QLDBClientResolvedConfig
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

  constructor(readonly input: ListJournalS3ExportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJournalS3ExportsCommandInput, ListJournalS3ExportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListJournalS3ExportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "ListJournalS3ExportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListJournalS3ExportsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListJournalS3ExportsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListJournalS3ExportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJournalS3ExportsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJournalS3ExportsCommandOutput> {
    return deserializeAws_restJson1ListJournalS3ExportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
