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

import { StreamJournalToKinesisRequest, StreamJournalToKinesisResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StreamJournalToKinesisCommand,
  serializeAws_restJson1StreamJournalToKinesisCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 *
 * The input for {@link StreamJournalToKinesisCommand}.
 */
export interface StreamJournalToKinesisCommandInput extends StreamJournalToKinesisRequest {}
/**
 * @public
 *
 * The output of {@link StreamJournalToKinesisCommand}.
 */
export interface StreamJournalToKinesisCommandOutput extends StreamJournalToKinesisResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a journal stream for a given Amazon QLDB ledger. The stream captures every
 *          document revision that is committed to the ledger's journal and delivers the data to a
 *          specified Amazon Kinesis Data Streams resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, StreamJournalToKinesisCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, StreamJournalToKinesisCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const input = {
 *   LedgerName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   InclusiveStartTime: new Date("TIMESTAMP"), // required
 *   ExclusiveEndTime: new Date("TIMESTAMP"),
 *   KinesisConfiguration: {
 *     StreamArn: "STRING_VALUE", // required
 *     AggregationEnabled: true || false,
 *   },
 *   StreamName: "STRING_VALUE", // required
 * };
 * const command = new StreamJournalToKinesisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StreamJournalToKinesisCommandInput - {@link StreamJournalToKinesisCommandInput}
 * @returns {@link StreamJournalToKinesisCommandOutput}
 * @see {@link StreamJournalToKinesisCommandInput} for command's `input` shape.
 * @see {@link StreamJournalToKinesisCommandOutput} for command's `response` shape.
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
 *
 */
export class StreamJournalToKinesisCommand extends $Command<
  StreamJournalToKinesisCommandInput,
  StreamJournalToKinesisCommandOutput,
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
  constructor(readonly input: StreamJournalToKinesisCommandInput) {
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
  ): Handler<StreamJournalToKinesisCommandInput, StreamJournalToKinesisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StreamJournalToKinesisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "StreamJournalToKinesisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: StreamJournalToKinesisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StreamJournalToKinesisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StreamJournalToKinesisCommandOutput> {
    return deserializeAws_restJson1StreamJournalToKinesisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
