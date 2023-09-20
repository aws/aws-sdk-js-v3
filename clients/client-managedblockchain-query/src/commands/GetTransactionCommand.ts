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
import { GetTransactionInput, GetTransactionOutput } from "../models/models_0";
import { de_GetTransactionCommand, se_GetTransactionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTransactionCommand}.
 */
export interface GetTransactionCommandInput extends GetTransactionInput {}
/**
 * @public
 *
 * The output of {@link GetTransactionCommand}.
 */
export interface GetTransactionCommandOutput extends GetTransactionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Get the details of a transaction.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, GetTransactionCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, GetTransactionCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // GetTransactionInput
 *   transactionHash: "STRING_VALUE", // required
 *   network: "STRING_VALUE", // required
 * };
 * const command = new GetTransactionCommand(input);
 * const response = await client.send(command);
 * // { // GetTransactionOutput
 * //   transaction: { // Transaction
 * //     network: "STRING_VALUE", // required
 * //     blockHash: "STRING_VALUE",
 * //     transactionHash: "STRING_VALUE", // required
 * //     blockNumber: "STRING_VALUE",
 * //     transactionTimestamp: new Date("TIMESTAMP"), // required
 * //     transactionIndex: Number("long"), // required
 * //     numberOfTransactions: Number("long"), // required
 * //     status: "STRING_VALUE", // required
 * //     to: "STRING_VALUE", // required
 * //     from: "STRING_VALUE",
 * //     contractAddress: "STRING_VALUE",
 * //     gasUsed: "STRING_VALUE",
 * //     cumulativeGasUsed: "STRING_VALUE",
 * //     effectiveGasPrice: "STRING_VALUE",
 * //     signatureV: Number("int"),
 * //     signatureR: "STRING_VALUE",
 * //     signatureS: "STRING_VALUE",
 * //     transactionFee: "STRING_VALUE",
 * //     transactionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTransactionCommandInput - {@link GetTransactionCommandInput}
 * @returns {@link GetTransactionCommandOutput}
 * @see {@link GetTransactionCommandInput} for command's `input` shape.
 * @see {@link GetTransactionCommandOutput} for command's `response` shape.
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
export class GetTransactionCommand extends $Command<
  GetTransactionCommandInput,
  GetTransactionCommandOutput,
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
  constructor(readonly input: GetTransactionCommandInput) {
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
  ): Handler<GetTransactionCommandInput, GetTransactionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTransactionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainQueryClient";
    const commandName = "GetTransactionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TietonChainQueryService",
        operation: "GetTransaction",
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
  private serialize(input: GetTransactionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTransactionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTransactionCommandOutput> {
    return de_GetTransactionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
