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

import { ExecuteStatementInput, ExecuteStatementOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ExecuteStatementCommand,
  serializeAws_json1_1ExecuteStatementCommand,
} from "../protocols/Aws_json1_1";
import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";

/**
 * @public
 *
 * The input for {@link ExecuteStatementCommand}.
 */
export interface ExecuteStatementCommandInput extends ExecuteStatementInput {}
/**
 * @public
 *
 * The output of {@link ExecuteStatementCommand}.
 */
export interface ExecuteStatementCommandOutput extends ExecuteStatementOutput, __MetadataBearer {}

/**
 * @public
 * <p>Runs an SQL statement, which can be data manipulation language (DML) or data definition
 *       language (DDL). This statement must be a single SQL statement.
 *       Depending on the authorization
 *       method, use one of the following combinations of request parameters: </p>
 *          <ul>
 *             <li>
 *                <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret.
 * When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p>
 *             </li>
 *             <li>
 *                <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name.
 * Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.
 * When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p>
 *             </li>
 *          </ul>
 *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
 *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
 *        <i>Amazon Redshift Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, ExecuteStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, ExecuteStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const input = { // ExecuteStatementInput
 *   Sql: "STRING_VALUE", // required
 *   ClusterIdentifier: "STRING_VALUE",
 *   SecretArn: "STRING_VALUE",
 *   DbUser: "STRING_VALUE",
 *   Database: "STRING_VALUE", // required
 *   WithEvent: true || false,
 *   StatementName: "STRING_VALUE",
 *   Parameters: [ // SqlParametersList
 *     { // SqlParameter
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   WorkgroupName: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ExecuteStatementCommandInput - {@link ExecuteStatementCommandInput}
 * @returns {@link ExecuteStatementCommandOutput}
 * @see {@link ExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link ExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
 *
 * @throws {@link ActiveStatementsExceededException} (client fault)
 *  <p>The number of active statements exceeds the limit.</p>
 *
 * @throws {@link ExecuteStatementException} (server fault)
 *  <p>The SQL statement encountered an environmental error while running.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 *
 */
export class ExecuteStatementCommand extends $Command<
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  RedshiftDataClientResolvedConfig
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
    configuration: RedshiftDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftDataClient";
    const commandName = "ExecuteStatementCommand";
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
  private serialize(input: ExecuteStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ExecuteStatementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteStatementCommandOutput> {
    return deserializeAws_json1_1ExecuteStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
