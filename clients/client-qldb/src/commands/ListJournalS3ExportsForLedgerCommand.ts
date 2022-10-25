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
  ListJournalS3ExportsForLedgerRequest,
  ListJournalS3ExportsForLedgerRequestFilterSensitiveLog,
  ListJournalS3ExportsForLedgerResponse,
  ListJournalS3ExportsForLedgerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand,
  serializeAws_restJson1ListJournalS3ExportsForLedgerCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

export interface ListJournalS3ExportsForLedgerCommandInput extends ListJournalS3ExportsForLedgerRequest {}
export interface ListJournalS3ExportsForLedgerCommandOutput
  extends ListJournalS3ExportsForLedgerResponse,
    __MetadataBearer {}

/**
 * <p>Returns an array of journal export job descriptions for a specified ledger.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that
 *          you can retrieve all the items by calling <code>ListJournalS3ExportsForLedger</code>
 *          multiple times.</p>
 *          <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer
 *          Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListJournalS3ExportsForLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListJournalS3ExportsForLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ListJournalS3ExportsForLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJournalS3ExportsForLedgerCommandInput} for command's `input` shape.
 * @see {@link ListJournalS3ExportsForLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 */
export class ListJournalS3ExportsForLedgerCommand extends $Command<
  ListJournalS3ExportsForLedgerCommandInput,
  ListJournalS3ExportsForLedgerCommandOutput,
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

  constructor(readonly input: ListJournalS3ExportsForLedgerCommandInput) {
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
  ): Handler<ListJournalS3ExportsForLedgerCommandInput, ListJournalS3ExportsForLedgerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListJournalS3ExportsForLedgerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "ListJournalS3ExportsForLedgerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListJournalS3ExportsForLedgerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListJournalS3ExportsForLedgerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListJournalS3ExportsForLedgerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJournalS3ExportsForLedgerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListJournalS3ExportsForLedgerCommandOutput> {
    return deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
