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

import { AssociateBudgetWithResourceInput, AssociateBudgetWithResourceOutput } from "../models/models_0";
import { de_AssociateBudgetWithResourceCommand, se_AssociateBudgetWithResourceCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateBudgetWithResourceCommand}.
 */
export interface AssociateBudgetWithResourceCommandInput extends AssociateBudgetWithResourceInput {}
/**
 * @public
 *
 * The output of {@link AssociateBudgetWithResourceCommand}.
 */
export interface AssociateBudgetWithResourceCommandOutput extends AssociateBudgetWithResourceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Associates the specified budget with the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateBudgetWithResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateBudgetWithResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // AssociateBudgetWithResourceInput
 *   BudgetName: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new AssociateBudgetWithResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateBudgetWithResourceCommandInput - {@link AssociateBudgetWithResourceCommandInput}
 * @returns {@link AssociateBudgetWithResourceCommandOutput}
 * @see {@link AssociateBudgetWithResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateBudgetWithResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>The specified resource is a duplicate.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class AssociateBudgetWithResourceCommand extends $Command<
  AssociateBudgetWithResourceCommandInput,
  AssociateBudgetWithResourceCommandOutput,
  ServiceCatalogClientResolvedConfig
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
  constructor(readonly input: AssociateBudgetWithResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateBudgetWithResourceCommandInput, AssociateBudgetWithResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateBudgetWithResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "AssociateBudgetWithResourceCommand";
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
  private serialize(input: AssociateBudgetWithResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateBudgetWithResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateBudgetWithResourceCommandOutput> {
    return de_AssociateBudgetWithResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
