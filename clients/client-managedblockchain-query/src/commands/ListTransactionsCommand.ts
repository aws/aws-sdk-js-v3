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

import {
  ManagedBlockchainQueryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainQueryClient";
import { ListTransactionsInput, ListTransactionsOutput } from "../models/models_0";
import { de_ListTransactionsCommand, se_ListTransactionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTransactionsCommand}.
 */
export interface ListTransactionsCommandInput extends ListTransactionsInput {}
/**
 * @public
 *
 * The output of {@link ListTransactionsCommand}.
 */
export interface ListTransactionsCommandOutput extends ListTransactionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the transactions on a given wallet address or to a specific contract.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, ListTransactionsCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, ListTransactionsCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // ListTransactionsInput
 *   address: "STRING_VALUE", // required
 *   network: "STRING_VALUE", // required
 *   fromBlockchainInstant: { // BlockchainInstant
 *     time: new Date("TIMESTAMP"),
 *   },
 *   toBlockchainInstant: {
 *     time: new Date("TIMESTAMP"),
 *   },
 *   sort: { // ListTransactionsSort
 *     sortBy: "STRING_VALUE",
 *     sortOrder: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTransactionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTransactionsOutput
 * //   transactions: [ // TransactionOutputList // required
 * //     { // TransactionOutputItem
 * //       transactionHash: "STRING_VALUE", // required
 * //       network: "STRING_VALUE", // required
 * //       transactionTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTransactionsCommandInput - {@link ListTransactionsCommandInput}
 * @returns {@link ListTransactionsCommandOutput}
 * @see {@link ListTransactionsCommandInput} for command's `input` shape.
 * @see {@link ListTransactionsCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainQueryClientResolvedConfig | config} for ManagedBlockchainQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The Amazon Web Services account doesn’t have access to this resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an internal error in the service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded for this resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is throttling
 *       requests. The most common source of throttling errors is when you create resources
 *       that exceed your service limit for this resource type. Request a limit increase or
 *       delete unused resources, if possible.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource passed is invalid.</p>
 *
 * @throws {@link ManagedBlockchainQueryServiceException}
 * <p>Base exception class for all service exceptions from ManagedBlockchainQuery service.</p>
 *
 */
export class ListTransactionsCommand extends $Command<
  ListTransactionsCommandInput,
  ListTransactionsCommandOutput,
  ManagedBlockchainQueryClientResolvedConfig
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
  constructor(readonly input: ListTransactionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainQueryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTransactionsCommandInput, ListTransactionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTransactionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainQueryClient";
    const commandName = "ListTransactionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TietonChainQueryService",
        operation: "ListTransactions",
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
  private serialize(input: ListTransactionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTransactionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTransactionsCommandOutput> {
    return de_ListTransactionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
