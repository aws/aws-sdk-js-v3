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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { DeleteObjectsOnCancelRequest, DeleteObjectsOnCancelResponse } from "../models/models_0";
import { de_DeleteObjectsOnCancelCommand, se_DeleteObjectsOnCancelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteObjectsOnCancelCommand}.
 */
export interface DeleteObjectsOnCancelCommandInput extends DeleteObjectsOnCancelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteObjectsOnCancelCommand}.
 */
export interface DeleteObjectsOnCancelCommandOutput extends DeleteObjectsOnCancelResponse, __MetadataBearer {}

/**
 * @public
 * <p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted
 *       if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels.
 *     </p>
 *          <p>
 *       The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically
 *       call <code>DeleteObjectsOnCancel</code> before writes. For more information, see
 *       <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteObjectsOnCancelCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteObjectsOnCancelCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // DeleteObjectsOnCancelRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   TransactionId: "STRING_VALUE", // required
 *   Objects: [ // VirtualObjectList // required
 *     { // VirtualObject
 *       Uri: "STRING_VALUE", // required
 *       ETag: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DeleteObjectsOnCancelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteObjectsOnCancelCommandInput - {@link DeleteObjectsOnCancelCommandInput}
 * @returns {@link DeleteObjectsOnCancelCommandOutput}
 * @see {@link DeleteObjectsOnCancelCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectsOnCancelCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>Contains details about an error related to a resource which is not ready for a transaction.</p>
 *
 * @throws {@link TransactionCanceledException} (client fault)
 *  <p>Contains details about an error related to a transaction that was cancelled.</p>
 *
 * @throws {@link TransactionCommittedException} (client fault)
 *  <p>Contains details about an error where the specified transaction has already been committed and cannot be used for <code>UpdateTableObjects</code>.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class DeleteObjectsOnCancelCommand extends $Command<
  DeleteObjectsOnCancelCommandInput,
  DeleteObjectsOnCancelCommandOutput,
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
  constructor(readonly input: DeleteObjectsOnCancelCommandInput) {
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
  ): Handler<DeleteObjectsOnCancelCommandInput, DeleteObjectsOnCancelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteObjectsOnCancelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "DeleteObjectsOnCancelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "DeleteObjectsOnCancel",
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
  private serialize(input: DeleteObjectsOnCancelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteObjectsOnCancelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteObjectsOnCancelCommandOutput> {
    return de_DeleteObjectsOnCancelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
