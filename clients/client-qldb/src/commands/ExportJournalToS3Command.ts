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
  ExportJournalToS3Request,
  ExportJournalToS3RequestFilterSensitiveLog,
  ExportJournalToS3Response,
  ExportJournalToS3ResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ExportJournalToS3Command,
  serializeAws_restJson1ExportJournalToS3Command,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

export interface ExportJournalToS3CommandInput extends ExportJournalToS3Request {}
export interface ExportJournalToS3CommandOutput extends ExportJournalToS3Response, __MetadataBearer {}

/**
 * <p>Exports journal contents within a date and time range from a ledger into a specified
 *          Amazon Simple Storage Service (Amazon S3) bucket. A journal export job can write the data objects in either the text
 *          or binary representation of Amazon Ion format, or in <i>JSON Lines</i> text
 *          format.</p>
 *          <p>In JSON Lines format, each journal block in the exported data object is a valid JSON
 *          object that is delimited by a newline. You can use this format to easily integrate JSON
 *          exports with analytics tools such as Glue and Amazon Athena
 *          because these services can parse newline-delimited JSON automatically. For more information
 *          about the format, see <a href="https://jsonlines.org/">JSON Lines</a>.</p>
 *          <p>If the ledger with the given <code>Name</code> doesn't exist, then throws
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>If the ledger with the given <code>Name</code> is in <code>CREATING</code> status, then
 *          throws <code>ResourcePreconditionNotMetException</code>.</p>
 *          <p>You can initiate up to two concurrent journal export requests for each ledger. Beyond
 *          this limit, journal export requests throw <code>LimitExceededException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ExportJournalToS3Command } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ExportJournalToS3Command } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ExportJournalToS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportJournalToS3CommandInput} for command's `input` shape.
 * @see {@link ExportJournalToS3CommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 */
export class ExportJournalToS3Command extends $Command<
  ExportJournalToS3CommandInput,
  ExportJournalToS3CommandOutput,
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

  constructor(readonly input: ExportJournalToS3CommandInput) {
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
  ): Handler<ExportJournalToS3CommandInput, ExportJournalToS3CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportJournalToS3Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "ExportJournalToS3Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportJournalToS3RequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExportJournalToS3ResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportJournalToS3CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExportJournalToS3Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportJournalToS3CommandOutput> {
    return deserializeAws_restJson1ExportJournalToS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
