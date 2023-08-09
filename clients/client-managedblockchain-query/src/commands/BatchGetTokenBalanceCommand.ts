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
import { BatchGetTokenBalanceInput, BatchGetTokenBalanceOutput } from "../models/models_0";
import { de_BatchGetTokenBalanceCommand, se_BatchGetTokenBalanceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetTokenBalanceCommand}.
 */
export interface BatchGetTokenBalanceCommandInput extends BatchGetTokenBalanceInput {}
/**
 * @public
 *
 * The output of {@link BatchGetTokenBalanceCommand}.
 */
export interface BatchGetTokenBalanceCommandOutput extends BatchGetTokenBalanceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets the token balance for a batch of tokens by using the <code>GetTokenBalance</code>
 *          action for every token in the request.</p>
 *          <note>
 *             <p>Only the native tokens BTC,ETH, and the ERC-20,
 *          ERC-721, and ERC 1155 token standards are supported.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, BatchGetTokenBalanceCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, BatchGetTokenBalanceCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // BatchGetTokenBalanceInput
 *   getTokenBalanceInputs: [ // GetTokenBalanceInputList
 *     { // BatchGetTokenBalanceInputItem
 *       tokenIdentifier: { // TokenIdentifier
 *         network: "STRING_VALUE", // required
 *         contractAddress: "STRING_VALUE",
 *         tokenId: "STRING_VALUE",
 *       },
 *       ownerIdentifier: { // OwnerIdentifier
 *         address: "STRING_VALUE", // required
 *       },
 *       atBlockchainInstant: { // BlockchainInstant
 *         time: new Date("TIMESTAMP"),
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchGetTokenBalanceCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetTokenBalanceOutput
 * //   tokenBalances: [ // BatchGetTokenBalanceOutputList // required
 * //     { // BatchGetTokenBalanceOutputItem
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
 * //   errors: [ // BatchGetTokenBalanceErrors // required
 * //     { // BatchGetTokenBalanceErrorItem
 * //       tokenIdentifier: {
 * //         network: "STRING_VALUE", // required
 * //         contractAddress: "STRING_VALUE",
 * //         tokenId: "STRING_VALUE",
 * //       },
 * //       ownerIdentifier: {
 * //         address: "STRING_VALUE", // required
 * //       },
 * //       atBlockchainInstant: {
 * //         time: new Date("TIMESTAMP"),
 * //       },
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //       errorType: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetTokenBalanceCommandInput - {@link BatchGetTokenBalanceCommandInput}
 * @returns {@link BatchGetTokenBalanceCommandOutput}
 * @see {@link BatchGetTokenBalanceCommandInput} for command's `input` shape.
 * @see {@link BatchGetTokenBalanceCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainQueryClientResolvedConfig | config} for ManagedBlockchainQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The Amazon Web Services account doesn’t have access to this resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an internal error in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
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
export class BatchGetTokenBalanceCommand extends $Command<
  BatchGetTokenBalanceCommandInput,
  BatchGetTokenBalanceCommandOutput,
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
  constructor(readonly input: BatchGetTokenBalanceCommandInput) {
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
  ): Handler<BatchGetTokenBalanceCommandInput, BatchGetTokenBalanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetTokenBalanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainQueryClient";
    const commandName = "BatchGetTokenBalanceCommand";
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
  private serialize(input: BatchGetTokenBalanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetTokenBalanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetTokenBalanceCommandOutput> {
    return de_BatchGetTokenBalanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
