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
  ListJournalKinesisStreamsForLedgerRequest,
  ListJournalKinesisStreamsForLedgerRequestFilterSensitiveLog,
  ListJournalKinesisStreamsForLedgerResponse,
  ListJournalKinesisStreamsForLedgerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand,
  serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

export interface ListJournalKinesisStreamsForLedgerCommandInput extends ListJournalKinesisStreamsForLedgerRequest {}
export interface ListJournalKinesisStreamsForLedgerCommandOutput
  extends ListJournalKinesisStreamsForLedgerResponse,
    __MetadataBearer {}

/**
 * <p>Returns an array of all Amazon QLDB journal stream descriptors for a given ledger. The
 *          output of each stream descriptor includes the same details that are returned by
 *             <code>DescribeJournalKinesisStream</code>.</p>
 *          <p>This action does not return any expired journal streams. For more information, see
 *             <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/streams.create.html#streams.create.states.expiration">Expiration for terminal streams</a> in the <i>Amazon QLDB Developer
 *             Guide</i>.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items. It is paginated so that
 *          you can retrieve all the items by calling <code>ListJournalKinesisStreamsForLedger</code>
 *          multiple times.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListJournalKinesisStreamsForLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListJournalKinesisStreamsForLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ListJournalKinesisStreamsForLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJournalKinesisStreamsForLedgerCommandInput} for command's `input` shape.
 * @see {@link ListJournalKinesisStreamsForLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 */
export class ListJournalKinesisStreamsForLedgerCommand extends $Command<
  ListJournalKinesisStreamsForLedgerCommandInput,
  ListJournalKinesisStreamsForLedgerCommandOutput,
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

  constructor(readonly input: ListJournalKinesisStreamsForLedgerCommandInput) {
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
  ): Handler<ListJournalKinesisStreamsForLedgerCommandInput, ListJournalKinesisStreamsForLedgerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListJournalKinesisStreamsForLedgerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "ListJournalKinesisStreamsForLedgerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListJournalKinesisStreamsForLedgerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListJournalKinesisStreamsForLedgerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListJournalKinesisStreamsForLedgerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListJournalKinesisStreamsForLedgerCommandOutput> {
    return deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
