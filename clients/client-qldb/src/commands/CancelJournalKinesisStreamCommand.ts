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
  CancelJournalKinesisStreamRequest,
  CancelJournalKinesisStreamRequestFilterSensitiveLog,
  CancelJournalKinesisStreamResponse,
  CancelJournalKinesisStreamResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CancelJournalKinesisStreamCommand,
  serializeAws_restJson1CancelJournalKinesisStreamCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

export interface CancelJournalKinesisStreamCommandInput extends CancelJournalKinesisStreamRequest {}
export interface CancelJournalKinesisStreamCommandOutput extends CancelJournalKinesisStreamResponse, __MetadataBearer {}

/**
 * <p>Ends a given Amazon QLDB journal stream. Before a stream can be canceled, its current
 *          status must be <code>ACTIVE</code>.</p>
 *          <p>You can't restart a stream after you cancel it. Canceled QLDB stream resources are
 *          subject to a 7-day retention period, so they are automatically deleted after this limit
 *          expires.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, CancelJournalKinesisStreamCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, CancelJournalKinesisStreamCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new CancelJournalKinesisStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJournalKinesisStreamCommandInput} for command's `input` shape.
 * @see {@link CancelJournalKinesisStreamCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 */
export class CancelJournalKinesisStreamCommand extends $Command<
  CancelJournalKinesisStreamCommandInput,
  CancelJournalKinesisStreamCommandOutput,
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

  constructor(readonly input: CancelJournalKinesisStreamCommandInput) {
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
  ): Handler<CancelJournalKinesisStreamCommandInput, CancelJournalKinesisStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelJournalKinesisStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "CancelJournalKinesisStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelJournalKinesisStreamRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelJournalKinesisStreamResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelJournalKinesisStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelJournalKinesisStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelJournalKinesisStreamCommandOutput> {
    return deserializeAws_restJson1CancelJournalKinesisStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
