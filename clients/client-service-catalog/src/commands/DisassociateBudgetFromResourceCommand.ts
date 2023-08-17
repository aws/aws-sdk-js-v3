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

import { DisassociateBudgetFromResourceInput, DisassociateBudgetFromResourceOutput } from "../models/models_0";
import {
  de_DisassociateBudgetFromResourceCommand,
  se_DisassociateBudgetFromResourceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateBudgetFromResourceCommand}.
 */
export interface DisassociateBudgetFromResourceCommandInput extends DisassociateBudgetFromResourceInput {}
/**
 * @public
 *
 * The output of {@link DisassociateBudgetFromResourceCommand}.
 */
export interface DisassociateBudgetFromResourceCommandOutput
  extends DisassociateBudgetFromResourceOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates the specified budget from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateBudgetFromResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateBudgetFromResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DisassociateBudgetFromResourceInput
 *   BudgetName: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateBudgetFromResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateBudgetFromResourceCommandInput - {@link DisassociateBudgetFromResourceCommandInput}
 * @returns {@link DisassociateBudgetFromResourceCommandOutput}
 * @see {@link DisassociateBudgetFromResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateBudgetFromResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class DisassociateBudgetFromResourceCommand extends $Command<
  DisassociateBudgetFromResourceCommandInput,
  DisassociateBudgetFromResourceCommandOutput,
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
  constructor(readonly input: DisassociateBudgetFromResourceCommandInput) {
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
  ): Handler<DisassociateBudgetFromResourceCommandInput, DisassociateBudgetFromResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateBudgetFromResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DisassociateBudgetFromResourceCommand";
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
  private serialize(
    input: DisassociateBudgetFromResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisassociateBudgetFromResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateBudgetFromResourceCommandOutput> {
    return de_DisassociateBudgetFromResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
