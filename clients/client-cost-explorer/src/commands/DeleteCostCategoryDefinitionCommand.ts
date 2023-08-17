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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { DeleteCostCategoryDefinitionRequest, DeleteCostCategoryDefinitionResponse } from "../models/models_0";
import {
  de_DeleteCostCategoryDefinitionCommand,
  se_DeleteCostCategoryDefinitionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCostCategoryDefinitionCommand}.
 */
export interface DeleteCostCategoryDefinitionCommandInput extends DeleteCostCategoryDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCostCategoryDefinitionCommand}.
 */
export interface DeleteCostCategoryDefinitionCommandOutput
  extends DeleteCostCategoryDefinitionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a Cost Category. Expenses from this month going forward will no longer be
 *       categorized with this Cost Category.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DeleteCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DeleteCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // DeleteCostCategoryDefinitionRequest
 *   CostCategoryArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCostCategoryDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCostCategoryDefinitionResponse
 * //   CostCategoryArn: "STRING_VALUE",
 * //   EffectiveEnd: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCostCategoryDefinitionCommandInput - {@link DeleteCostCategoryDefinitionCommandInput}
 * @returns {@link DeleteCostCategoryDefinitionCommandOutput}
 * @see {@link DeleteCostCategoryDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteCostCategoryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ARN in the request doesn't exist. </p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 */
export class DeleteCostCategoryDefinitionCommand extends $Command<
  DeleteCostCategoryDefinitionCommandInput,
  DeleteCostCategoryDefinitionCommandOutput,
  CostExplorerClientResolvedConfig
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
  constructor(readonly input: DeleteCostCategoryDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCostCategoryDefinitionCommandInput, DeleteCostCategoryDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCostCategoryDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "DeleteCostCategoryDefinitionCommand";
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
  private serialize(input: DeleteCostCategoryDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCostCategoryDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCostCategoryDefinitionCommandOutput> {
    return de_DeleteCostCategoryDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
