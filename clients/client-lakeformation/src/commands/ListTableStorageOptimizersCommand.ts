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
import { ListTableStorageOptimizersRequest, ListTableStorageOptimizersResponse } from "../models/models_0";
import { de_ListTableStorageOptimizersCommand, se_ListTableStorageOptimizersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTableStorageOptimizersCommand}.
 */
export interface ListTableStorageOptimizersCommandInput extends ListTableStorageOptimizersRequest {}
/**
 * @public
 *
 * The output of {@link ListTableStorageOptimizersCommand}.
 */
export interface ListTableStorageOptimizersCommandOutput extends ListTableStorageOptimizersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the configuration of all storage optimizers associated with a specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListTableStorageOptimizersCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListTableStorageOptimizersCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // ListTableStorageOptimizersRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   StorageOptimizerType: "COMPACTION" || "GARBAGE_COLLECTION" || "ALL",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTableStorageOptimizersCommand(input);
 * const response = await client.send(command);
 * // { // ListTableStorageOptimizersResponse
 * //   StorageOptimizerList: [ // StorageOptimizerList
 * //     { // StorageOptimizer
 * //       StorageOptimizerType: "COMPACTION" || "GARBAGE_COLLECTION" || "ALL",
 * //       Config: { // StorageOptimizerConfig
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ErrorMessage: "STRING_VALUE",
 * //       Warnings: "STRING_VALUE",
 * //       LastRunDetails: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTableStorageOptimizersCommandInput - {@link ListTableStorageOptimizersCommandInput}
 * @returns {@link ListTableStorageOptimizersCommandOutput}
 * @see {@link ListTableStorageOptimizersCommandInput} for command's `input` shape.
 * @see {@link ListTableStorageOptimizersCommandOutput} for command's `response` shape.
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
export class ListTableStorageOptimizersCommand extends $Command<
  ListTableStorageOptimizersCommandInput,
  ListTableStorageOptimizersCommandOutput,
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
  constructor(readonly input: ListTableStorageOptimizersCommandInput) {
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
  ): Handler<ListTableStorageOptimizersCommandInput, ListTableStorageOptimizersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTableStorageOptimizersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "ListTableStorageOptimizersCommand";
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
  private serialize(input: ListTableStorageOptimizersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTableStorageOptimizersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTableStorageOptimizersCommandOutput> {
    return de_ListTableStorageOptimizersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
