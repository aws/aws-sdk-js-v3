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
  StreamJournalToKinesisRequest,
  StreamJournalToKinesisRequestFilterSensitiveLog,
  StreamJournalToKinesisResponse,
  StreamJournalToKinesisResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StreamJournalToKinesisCommand,
  serializeAws_restJson1StreamJournalToKinesisCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

export interface StreamJournalToKinesisCommandInput extends StreamJournalToKinesisRequest {}
export interface StreamJournalToKinesisCommandOutput extends StreamJournalToKinesisResponse, __MetadataBearer {}

/**
 * <p>Creates a journal stream for a given Amazon QLDB ledger. The stream captures every
 *          document revision that is committed to the ledger's journal and delivers the data to a
 *          specified Amazon Kinesis Data Streams resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, StreamJournalToKinesisCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, StreamJournalToKinesisCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new StreamJournalToKinesisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StreamJournalToKinesisCommandInput} for command's `input` shape.
 * @see {@link StreamJournalToKinesisCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
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
      inputFilterSensitiveLog: StreamJournalToKinesisRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StreamJournalToKinesisResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StreamJournalToKinesisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StreamJournalToKinesisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StreamJournalToKinesisCommandOutput> {
    return deserializeAws_restJson1StreamJournalToKinesisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
