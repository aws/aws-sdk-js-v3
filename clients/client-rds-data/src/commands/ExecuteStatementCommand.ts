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
  ExecuteStatementRequest,
  ExecuteStatementRequestFilterSensitiveLog,
  ExecuteStatementResponse,
  ExecuteStatementResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ExecuteStatementCommand,
  serializeAws_restJson1ExecuteStatementCommand,
} from "../protocols/Aws_restJson1";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";

export interface ExecuteStatementCommandInput extends ExecuteStatementRequest {}
export interface ExecuteStatementCommandOutput extends ExecuteStatementResponse, __MetadataBearer {}

/**
 * <p>Runs a SQL statement against a database.</p>
 *         <note>
 *             <p>If a call isn't part of a transaction because it doesn't include the
 *                     <code>transactionID</code> parameter, changes that result from the call are
 *                 committed automatically.</p>
 *             <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, ExecuteStatementCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, ExecuteStatementCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new ExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link ExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for RDSDataClient's `config` shape.
 *
 */
export class ExecuteStatementCommand extends $Command<
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
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

  constructor(readonly input: ExecuteStatementCommandInput) {
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
  ): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSDataClient";
    const commandName = "ExecuteStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteStatementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExecuteStatementResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecuteStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExecuteStatementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteStatementCommandOutput> {
    return deserializeAws_restJson1ExecuteStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
