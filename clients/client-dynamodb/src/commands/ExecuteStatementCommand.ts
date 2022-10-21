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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import {
  ExecuteStatementInput,
  ExecuteStatementInputFilterSensitiveLog,
  ExecuteStatementOutput,
  ExecuteStatementOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ExecuteStatementCommand,
  serializeAws_json1_0ExecuteStatementCommand,
} from "../protocols/Aws_json1_0";

export interface ExecuteStatementCommandInput extends ExecuteStatementInput {}
export interface ExecuteStatementCommandOutput extends ExecuteStatementOutput, __MetadataBearer {}

/**
 * <p>This operation allows you to perform reads and singleton writes on data stored in
 *             DynamoDB, using PartiQL.</p>
 *         <p>For PartiQL reads (<code>SELECT</code> statement), if the total number of processed
 *             items exceeds the maximum dataset size limit of 1 MB, the read stops and results are
 *             returned to the user as a <code>LastEvaluatedKey</code> value to continue the read in a
 *             subsequent operation. If the filter criteria in <code>WHERE</code> clause does not match
 *             any data, the read will return an empty result set.</p>
 *         <p>A single <code>SELECT</code> statement response can return up to the maximum number of
 *             items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any
 *             filtering to the results using <code>WHERE</code> clause). If
 *                 <code>LastEvaluatedKey</code> is present in the response, you need to paginate the
 *             result set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExecuteStatementCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExecuteStatementCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link ExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 */
export class ExecuteStatementCommand extends $Command<
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  DynamoDBClientResolvedConfig
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
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "ExecuteStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteStatementInputFilterSensitiveLog,
      outputFilterSensitiveLog: ExecuteStatementOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecuteStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ExecuteStatementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteStatementCommandOutput> {
    return deserializeAws_json1_0ExecuteStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
