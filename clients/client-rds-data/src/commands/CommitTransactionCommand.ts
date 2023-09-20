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

import { CommitTransactionRequest, CommitTransactionResponse } from "../models/models_0";
import { de_CommitTransactionCommand, se_CommitTransactionCommand } from "../protocols/Aws_restJson1";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CommitTransactionCommand}.
 */
export interface CommitTransactionCommandInput extends CommitTransactionRequest {}
/**
 * @public
 *
 * The output of {@link CommitTransactionCommand}.
 */
export interface CommitTransactionCommandOutput extends CommitTransactionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Ends a SQL transaction started with the <code>BeginTransaction</code> operation and
 *             commits the changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, CommitTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, CommitTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const input = { // CommitTransactionRequest
 *   resourceArn: "STRING_VALUE", // required
 *   secretArn: "STRING_VALUE", // required
 *   transactionId: "STRING_VALUE", // required
 * };
 * const command = new CommitTransactionCommand(input);
 * const response = await client.send(command);
 * // { // CommitTransactionResponse
 * //   transactionStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CommitTransactionCommandInput - {@link CommitTransactionCommandInput}
 * @returns {@link CommitTransactionCommandOutput}
 * @see {@link CommitTransactionCommandInput} for command's `input` shape.
 * @see {@link CommitTransactionCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for RDSDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>There is an error in the call or in a SQL statement.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>There are insufficient privileges to make the call.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The <code>resourceArn</code>, <code>secretArn</code>, or <code>transactionId</code> value can't be found.</p>
 *
 * @throws {@link ServiceUnavailableError} (server fault)
 *  <p>The service specified by the <code>resourceArn</code> parameter is not
 *             available.</p>
 *
 * @throws {@link StatementTimeoutException} (client fault)
 *  <p>The execution of the SQL statement timed out.</p>
 *
 * @throws {@link RDSDataServiceException}
 * <p>Base exception class for all service exceptions from RDSData service.</p>
 *
 */
export class CommitTransactionCommand extends $Command<
  CommitTransactionCommandInput,
  CommitTransactionCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: CommitTransactionCommandInput) {
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
  ): Handler<CommitTransactionCommandInput, CommitTransactionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CommitTransactionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSDataClient";
    const commandName = "CommitTransactionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RdsDataService",
        operation: "CommitTransaction",
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
  private serialize(input: CommitTransactionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CommitTransactionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CommitTransactionCommandOutput> {
    return de_CommitTransactionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
