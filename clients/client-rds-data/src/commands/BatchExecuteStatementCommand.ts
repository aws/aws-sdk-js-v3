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
  BatchExecuteStatementRequest,
  BatchExecuteStatementRequestFilterSensitiveLog,
  BatchExecuteStatementResponse,
  BatchExecuteStatementResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchExecuteStatementCommand,
  serializeAws_restJson1BatchExecuteStatementCommand,
} from "../protocols/Aws_restJson1";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";

export interface BatchExecuteStatementCommandInput extends BatchExecuteStatementRequest {}
export interface BatchExecuteStatementCommandOutput extends BatchExecuteStatementResponse, __MetadataBearer {}

/**
 * <p>Runs a batch SQL statement over an array of data.</p>
 *         <p>You can run bulk update and insert operations for multiple records using a DML
 *             statement with different parameter sets. Bulk operations can provide a significant
 *             performance improvement over individual insert and update operations.</p>
 *         <note>
 *             <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter,
 *                 changes that result from the call are committed automatically.</p>
 *             <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request
 *                 submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't
 *                 process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the
 *                 number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and
 *                 the size of each parameter set.</p>
 *             <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, BatchExecuteStatementCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new BatchExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link BatchExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for RDSDataClient's `config` shape.
 *
 */
export class BatchExecuteStatementCommand extends $Command<
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
  RDSDataClientResolvedConfig
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

  constructor(readonly input: BatchExecuteStatementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchExecuteStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSDataClient";
    const commandName = "BatchExecuteStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchExecuteStatementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchExecuteStatementResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchExecuteStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchExecuteStatementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchExecuteStatementCommandOutput> {
    return deserializeAws_restJson1BatchExecuteStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
