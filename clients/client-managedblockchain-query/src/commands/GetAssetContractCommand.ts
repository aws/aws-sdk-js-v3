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
import { GetAssetContractInput, GetAssetContractOutput } from "../models/models_0";
import { de_GetAssetContractCommand, se_GetAssetContractCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAssetContractCommand}.
 */
export interface GetAssetContractCommandInput extends GetAssetContractInput {}
/**
 * @public
 *
 * The output of {@link GetAssetContractCommand}.
 */
export interface GetAssetContractCommandOutput extends GetAssetContractOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets the information about a specific contract deployed on the blockchain.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>The Bitcoin blockchain networks do not support this
 *              operation.</p>
 *                </li>
 *                <li>
 *                   <p>Metadata is currently only available for some <code>ERC-20</code> contracts.
 *                 Metadata will be available for additional contracts in the future.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, GetAssetContractCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, GetAssetContractCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // GetAssetContractInput
 *   contractIdentifier: { // ContractIdentifier
 *     network: "STRING_VALUE", // required
 *     contractAddress: "STRING_VALUE", // required
 *   },
 * };
 * const command = new GetAssetContractCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetContractOutput
 * //   contractIdentifier: { // ContractIdentifier
 * //     network: "STRING_VALUE", // required
 * //     contractAddress: "STRING_VALUE", // required
 * //   },
 * //   tokenStandard: "STRING_VALUE", // required
 * //   deployerAddress: "STRING_VALUE", // required
 * //   metadata: { // ContractMetadata
 * //     name: "STRING_VALUE",
 * //     symbol: "STRING_VALUE",
 * //     decimals: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAssetContractCommandInput - {@link GetAssetContractCommandInput}
 * @returns {@link GetAssetContractCommandOutput}
 * @see {@link GetAssetContractCommandInput} for command's `input` shape.
 * @see {@link GetAssetContractCommandOutput} for command's `response` shape.
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
export class GetAssetContractCommand extends $Command<
  GetAssetContractCommandInput,
  GetAssetContractCommandOutput,
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
  constructor(readonly input: GetAssetContractCommandInput) {
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
  ): Handler<GetAssetContractCommandInput, GetAssetContractCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAssetContractCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainQueryClient";
    const commandName = "GetAssetContractCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TietonChainQueryService",
        operation: "GetAssetContract",
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
  private serialize(input: GetAssetContractCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAssetContractCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAssetContractCommandOutput> {
    return de_GetAssetContractCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
