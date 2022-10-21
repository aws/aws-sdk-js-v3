// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import {
  ListCostCategoryDefinitionsRequest,
  ListCostCategoryDefinitionsRequestFilterSensitiveLog,
  ListCostCategoryDefinitionsResponse,
  ListCostCategoryDefinitionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListCostCategoryDefinitionsCommand,
  serializeAws_json1_1ListCostCategoryDefinitionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListCostCategoryDefinitionsCommandInput extends ListCostCategoryDefinitionsRequest {}
export interface ListCostCategoryDefinitionsCommandOutput
  extends ListCostCategoryDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective
 *       dates of all Cost Categories defined in the account. You have the option to use
 *         <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific
 *       date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are
 *       effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code>
 *       is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The
 *       request can have a <code>MaxResults</code> range up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListCostCategoryDefinitionsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListCostCategoryDefinitionsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new ListCostCategoryDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCostCategoryDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListCostCategoryDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class ListCostCategoryDefinitionsCommand extends $Command<
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
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

  constructor(readonly input: ListCostCategoryDefinitionsCommandInput) {
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
  ): Handler<ListCostCategoryDefinitionsCommandInput, ListCostCategoryDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCostCategoryDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "ListCostCategoryDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCostCategoryDefinitionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCostCategoryDefinitionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCostCategoryDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCostCategoryDefinitionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCostCategoryDefinitionsCommandOutput> {
    return deserializeAws_json1_1ListCostCategoryDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
