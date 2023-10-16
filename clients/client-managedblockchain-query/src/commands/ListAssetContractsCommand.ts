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
import { ListAssetContractsInput, ListAssetContractsOutput } from "../models/models_0";
import { de_ListAssetContractsCommand, se_ListAssetContractsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssetContractsCommand}.
 */
export interface ListAssetContractsCommandInput extends ListAssetContractsInput {}
/**
 * @public
 *
 * The output of {@link ListAssetContractsCommand}.
 */
export interface ListAssetContractsCommandOutput extends ListAssetContractsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the contracts for a given contract type deployed by an address
 *          (either a contract address or a wallet address).</p>
 *          <p>The Bitcoin blockchain networks do not support this
 *             operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, ListAssetContractsCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, ListAssetContractsCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // ListAssetContractsInput
 *   contractFilter: { // ContractFilter
 *     network: "STRING_VALUE", // required
 *     tokenStandard: "STRING_VALUE", // required
 *     deployerAddress: "STRING_VALUE", // required
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssetContractsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetContractsOutput
 * //   contracts: [ // AssetContractList // required
 * //     { // AssetContract
 * //       contractIdentifier: { // ContractIdentifier
 * //         network: "STRING_VALUE", // required
 * //         contractAddress: "STRING_VALUE", // required
 * //       },
 * //       tokenStandard: "STRING_VALUE", // required
 * //       deployerAddress: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetContractsCommandInput - {@link ListAssetContractsCommandInput}
 * @returns {@link ListAssetContractsCommandOutput}
 * @see {@link ListAssetContractsCommandInput} for command's `input` shape.
 * @see {@link ListAssetContractsCommandOutput} for command's `response` shape.
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
export class ListAssetContractsCommand extends $Command<
  ListAssetContractsCommandInput,
  ListAssetContractsCommandOutput,
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
  constructor(readonly input: ListAssetContractsCommandInput) {
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
  ): Handler<ListAssetContractsCommandInput, ListAssetContractsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssetContractsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainQueryClient";
    const commandName = "ListAssetContractsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TietonChainQueryService",
        operation: "ListAssetContracts",
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
  private serialize(input: ListAssetContractsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssetContractsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssetContractsCommandOutput> {
    return de_ListAssetContractsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
