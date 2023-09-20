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
import { UpdateTableStorageOptimizerRequest, UpdateTableStorageOptimizerResponse } from "../models/models_0";
import {
  de_UpdateTableStorageOptimizerCommand,
  se_UpdateTableStorageOptimizerCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTableStorageOptimizerCommand}.
 */
export interface UpdateTableStorageOptimizerCommandInput extends UpdateTableStorageOptimizerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTableStorageOptimizerCommand}.
 */
export interface UpdateTableStorageOptimizerCommandOutput
  extends UpdateTableStorageOptimizerResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the configuration of the storage optimizers for a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateTableStorageOptimizerCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateTableStorageOptimizerCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // UpdateTableStorageOptimizerRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   StorageOptimizerConfig: { // StorageOptimizerConfigMap // required
 *     "<keys>": { // StorageOptimizerConfig
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateTableStorageOptimizerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTableStorageOptimizerResponse
 * //   Result: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateTableStorageOptimizerCommandInput - {@link UpdateTableStorageOptimizerCommandInput}
 * @returns {@link UpdateTableStorageOptimizerCommandOutput}
 * @see {@link UpdateTableStorageOptimizerCommandInput} for command's `input` shape.
 * @see {@link UpdateTableStorageOptimizerCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class UpdateTableStorageOptimizerCommand extends $Command<
  UpdateTableStorageOptimizerCommandInput,
  UpdateTableStorageOptimizerCommandOutput,
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
  constructor(readonly input: UpdateTableStorageOptimizerCommandInput) {
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
  ): Handler<UpdateTableStorageOptimizerCommandInput, UpdateTableStorageOptimizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTableStorageOptimizerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "UpdateTableStorageOptimizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "UpdateTableStorageOptimizer",
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
  private serialize(input: UpdateTableStorageOptimizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTableStorageOptimizerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTableStorageOptimizerCommandOutput> {
    return de_UpdateTableStorageOptimizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
