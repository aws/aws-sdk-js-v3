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
} from "@smithy/types";

import {
  ManagedBlockchainQueryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainQueryClient";
import { ListTokenBalancesInput, ListTokenBalancesOutput } from "../models/models_0";
import { de_ListTokenBalancesCommand, se_ListTokenBalancesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTokenBalancesCommand}.
 */
export interface ListTokenBalancesCommandInput extends ListTokenBalancesInput {}
/**
 * @public
 *
 * The output of {@link ListTokenBalancesCommand}.
 */
export interface ListTokenBalancesCommandOutput extends ListTokenBalancesOutput, __MetadataBearer {}

/**
 * @public
 * <p>This action returns the following for a given a blockchain network:</p>
 *          <ul>
 *             <li>
 *                <p>Lists all token balances owned by an address (either a contact
 *           address or a wallet address).</p>
 *             </li>
 *             <li>
 *                <p>Lists all token balances for all tokens created by a contract.</p>
 *             </li>
 *             <li>
 *                <p>Lists all token balances for a given token.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You must always specify the network property of
 *                               the <code>tokenFilter</code> when using this operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, ListTokenBalancesCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, ListTokenBalancesCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // ListTokenBalancesInput
 *   ownerFilter: { // OwnerFilter
 *     address: "STRING_VALUE", // required
 *   },
 *   tokenFilter: { // TokenFilter
 *     network: "STRING_VALUE", // required
 *     contractAddress: "STRING_VALUE",
 *     tokenId: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTokenBalancesCommand(input);
 * const response = await client.send(command);
 * // { // ListTokenBalancesOutput
 * //   tokenBalances: [ // TokenBalanceList // required
 * //     { // TokenBalance
 * //       ownerIdentifier: { // OwnerIdentifier
 * //         address: "STRING_VALUE", // required
 * //       },
 * //       tokenIdentifier: { // TokenIdentifier
 * //         network: "STRING_VALUE", // required
 * //         contractAddress: "STRING_VALUE",
 * //         tokenId: "STRING_VALUE",
 * //       },
 * //       balance: "STRING_VALUE", // required
 * //       atBlockchainInstant: { // BlockchainInstant
 * //         time: new Date("TIMESTAMP"),
 * //       },
 * //       lastUpdatedTime: {
 * //         time: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTokenBalancesCommandInput - {@link ListTokenBalancesCommandInput}
 * @returns {@link ListTokenBalancesCommandOutput}
 * @see {@link ListTokenBalancesCommandInput} for command's `input` shape.
 * @see {@link ListTokenBalancesCommandOutput} for command's `response` shape.
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
export class ListTokenBalancesCommand extends $Command<
  ListTokenBalancesCommandInput,
  ListTokenBalancesCommandOutput,
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
  constructor(readonly input: ListTokenBalancesCommandInput) {
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
  ): Handler<ListTokenBalancesCommandInput, ListTokenBalancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTokenBalancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainQueryClient";
    const commandName = "ListTokenBalancesCommand";
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
  private serialize(input: ListTokenBalancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTokenBalancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTokenBalancesCommandOutput> {
    return de_ListTokenBalancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
