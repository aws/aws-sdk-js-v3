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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { ExtendTransactionRequest, ExtendTransactionResponse } from "../models/models_0";
import { de_ExtendTransactionCommand, se_ExtendTransactionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExtendTransactionCommand}.
 */
export interface ExtendTransactionCommandInput extends ExtendTransactionRequest {}
/**
 * @public
 *
 * The output of {@link ExtendTransactionCommand}.
 */
export interface ExtendTransactionCommandOutput extends ExtendTransactionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p>
 *          <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ExtendTransactionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ExtendTransactionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // ExtendTransactionRequest
 *   TransactionId: "STRING_VALUE",
 * };
 * const command = new ExtendTransactionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExtendTransactionCommandInput - {@link ExtendTransactionCommandInput}
 * @returns {@link ExtendTransactionCommandOutput}
 * @see {@link ExtendTransactionCommandInput} for command's `input` shape.
 * @see {@link ExtendTransactionCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link TransactionCanceledException} (client fault)
 *  <p>Contains details about an error related to a transaction that was cancelled.</p>
 *
 * @throws {@link TransactionCommitInProgressException} (client fault)
 *  <p>Contains details about an error related to a transaction commit that was in progress.</p>
 *
 * @throws {@link TransactionCommittedException} (client fault)
 *  <p>Contains details about an error where the specified transaction has already been committed and cannot be used for <code>UpdateTableObjects</code>.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class ExtendTransactionCommand extends $Command<
  ExtendTransactionCommandInput,
  ExtendTransactionCommandOutput,
  LakeFormationClientResolvedConfig
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
  constructor(readonly input: ExtendTransactionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExtendTransactionCommandInput, ExtendTransactionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExtendTransactionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "ExtendTransactionCommand";
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
  private serialize(input: ExtendTransactionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExtendTransactionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExtendTransactionCommandOutput> {
    return de_ExtendTransactionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
