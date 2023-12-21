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

import { BeginTransactionRequest, BeginTransactionResponse } from "../models/models_0";
import { de_BeginTransactionCommand, se_BeginTransactionCommand } from "../protocols/Aws_restJson1";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BeginTransactionCommand}.
 */
export interface BeginTransactionCommandInput extends BeginTransactionRequest {}
/**
 * @public
 *
 * The output of {@link BeginTransactionCommand}.
 */
export interface BeginTransactionCommandOutput extends BeginTransactionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a SQL transaction.</p>
 *          <note>
 *             <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24
 *                 hours.</p>
 *             <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's
 *                 committed, it's rolled back automatically.</p>
 *             <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate
 *                     <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, BeginTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, BeginTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const input = { // BeginTransactionRequest
 *   resourceArn: "STRING_VALUE", // required
 *   secretArn: "STRING_VALUE", // required
 *   database: "STRING_VALUE",
 *   schema: "STRING_VALUE",
 * };
 * const command = new BeginTransactionCommand(input);
 * const response = await client.send(command);
 * // { // BeginTransactionResponse
 * //   transactionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BeginTransactionCommandInput - {@link BeginTransactionCommandInput}
 * @returns {@link BeginTransactionCommandOutput}
 * @see {@link BeginTransactionCommandInput} for command's `input` shape.
 * @see {@link BeginTransactionCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for RDSDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>There is an error in the call or in a SQL statement. (This error only appears in calls from Aurora Serverless v1 databases.)</p>
 *
 * @throws {@link DatabaseErrorException} (client fault)
 *  <p>There was an error in processing the SQL statement.</p>
 *
 * @throws {@link DatabaseNotFoundException} (client fault)
 *  <p>The DB cluster doesn't have a DB instance.</p>
 *
 * @throws {@link DatabaseUnavailableException} (server fault)
 *  <p>The writer instance in the DB cluster isn't available.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>There are insufficient privileges to make the call.</p>
 *
 * @throws {@link HttpEndpointNotEnabledException} (client fault)
 *  <p>The HTTP endpoint for using RDS Data API isn't enabled for the DB cluster.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidSecretException} (client fault)
 *  <p>The Secrets Manager secret used with the request isn't valid.</p>
 *
 * @throws {@link SecretsErrorException} (client fault)
 *  <p>There was a problem with the Secrets Manager secret used with the request, caused by one of the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>RDS Data API timed out retrieving the secret.</p>
 *             </li>
 *             <li>
 *                <p>The secret provided wasn't found.</p>
 *             </li>
 *             <li>
 *                <p>The secret couldn't be decrypted.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ServiceUnavailableError} (server fault)
 *  <p>The service specified by the <code>resourceArn</code> parameter isn't
 *             available.</p>
 *
 * @throws {@link StatementTimeoutException} (client fault)
 *  <p>The execution of the SQL statement timed out.</p>
 *
 * @throws {@link TransactionNotFoundException} (client fault)
 *  <p>The transaction ID wasn't found.</p>
 *
 * @throws {@link RDSDataServiceException}
 * <p>Base exception class for all service exceptions from RDSData service.</p>
 *
 */
export class BeginTransactionCommand extends $Command<
  BeginTransactionCommandInput,
  BeginTransactionCommandOutput,
  RDSDataClientResolvedConfig
> {
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
  constructor(readonly input: BeginTransactionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BeginTransactionCommandInput, BeginTransactionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BeginTransactionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSDataClient";
    const commandName = "BeginTransactionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RdsDataService",
        operation: "BeginTransaction",
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
  private serialize(input: BeginTransactionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BeginTransactionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BeginTransactionCommandOutput> {
    return de_BeginTransactionCommand(output, context);
  }
}
