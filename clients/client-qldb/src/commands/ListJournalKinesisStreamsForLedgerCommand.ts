// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ListJournalKinesisStreamsForLedgerRequest,
  ListJournalKinesisStreamsForLedgerResponse,
} from "../models/models_0";
import {
  de_ListJournalKinesisStreamsForLedgerCommand,
  se_ListJournalKinesisStreamsForLedgerCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListJournalKinesisStreamsForLedgerCommand}.
 */
export interface ListJournalKinesisStreamsForLedgerCommandInput extends ListJournalKinesisStreamsForLedgerRequest {}
/**
 * @public
 *
 * The output of {@link ListJournalKinesisStreamsForLedgerCommand}.
 */
export interface ListJournalKinesisStreamsForLedgerCommandOutput
  extends ListJournalKinesisStreamsForLedgerResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns all Amazon QLDB journal streams for a given ledger.</p>
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
 * const input = { // ListJournalKinesisStreamsForLedgerRequest
 *   LedgerName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListJournalKinesisStreamsForLedgerCommand(input);
 * const response = await client.send(command);
 * // { // ListJournalKinesisStreamsForLedgerResponse
 * //   Streams: [ // JournalKinesisStreamDescriptionList
 * //     { // JournalKinesisStreamDescription
 * //       LedgerName: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       InclusiveStartTime: new Date("TIMESTAMP"),
 * //       ExclusiveEndTime: new Date("TIMESTAMP"),
 * //       RoleArn: "STRING_VALUE", // required
 * //       StreamId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE",
 * //       Status: "ACTIVE" || "COMPLETED" || "CANCELED" || "FAILED" || "IMPAIRED", // required
 * //       KinesisConfiguration: { // KinesisConfiguration
 * //         StreamArn: "STRING_VALUE", // required
 * //         AggregationEnabled: true || false,
 * //       },
 * //       ErrorCause: "KINESIS_STREAM_NOT_FOUND" || "IAM_PERMISSION_REVOKED",
 * //       StreamName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJournalKinesisStreamsForLedgerCommandInput - {@link ListJournalKinesisStreamsForLedgerCommandInput}
 * @returns {@link ListJournalKinesisStreamsForLedgerCommandOutput}
 * @see {@link ListJournalKinesisStreamsForLedgerCommandInput} for command's `input` shape.
 * @see {@link ListJournalKinesisStreamsForLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in the request aren't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ResourcePreconditionNotMetException} (client fault)
 *  <p>The operation failed because a condition wasn't satisfied in advance.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonQLDB",
        operation: "ListJournalKinesisStreamsForLedger",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: ListJournalKinesisStreamsForLedgerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListJournalKinesisStreamsForLedgerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListJournalKinesisStreamsForLedgerCommandOutput> {
    return de_ListJournalKinesisStreamsForLedgerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
