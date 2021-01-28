import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { BatchGetQueryExecutionInput, BatchGetQueryExecutionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetQueryExecutionCommand,
  serializeAws_json1_1BatchGetQueryExecutionCommand,
} from "../protocols/Aws_json1_1";
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

export type BatchGetQueryExecutionCommandInput = BatchGetQueryExecutionInput;
export type BatchGetQueryExecutionCommandOutput = BatchGetQueryExecutionOutput & __MetadataBearer;

/**
 * <p>Returns the details of a single query execution or a list of up to 50 query
 *             executions, which you provide as an array of query execution ID strings. Requires you to
 *             have access to the workgroup in which the queries ran. To get a list of query execution
 *             IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ
 *             from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details
 *             about named queries.</p>
 */
export class BatchGetQueryExecutionCommand extends $Command<
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetQueryExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetQueryExecutionCommandInput, BatchGetQueryExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "BatchGetQueryExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetQueryExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetQueryExecutionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetQueryExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetQueryExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetQueryExecutionCommandOutput> {
    return deserializeAws_json1_1BatchGetQueryExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
