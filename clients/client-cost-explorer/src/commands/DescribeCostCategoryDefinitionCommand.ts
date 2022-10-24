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
  DescribeCostCategoryDefinitionRequest,
  DescribeCostCategoryDefinitionRequestFilterSensitiveLog,
  DescribeCostCategoryDefinitionResponse,
  DescribeCostCategoryDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCostCategoryDefinitionCommand,
  serializeAws_json1_1DescribeCostCategoryDefinitionCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeCostCategoryDefinitionCommandInput extends DescribeCostCategoryDefinitionRequest {}
export interface DescribeCostCategoryDefinitionCommandOutput
  extends DescribeCostCategoryDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a
 *       Cost Category that's defined in the account.</p>
 *          <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's
 *       active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost
 *       Category that's effective on the current date. If Cost Category is still effective,
 *         <code>EffectiveEnd</code> is omitted in the response. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DescribeCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DescribeCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new DescribeCostCategoryDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCostCategoryDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeCostCategoryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class DescribeCostCategoryDefinitionCommand extends $Command<
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput,
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

  constructor(readonly input: DescribeCostCategoryDefinitionCommandInput) {
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
  ): Handler<DescribeCostCategoryDefinitionCommandInput, DescribeCostCategoryDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCostCategoryDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "DescribeCostCategoryDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCostCategoryDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeCostCategoryDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeCostCategoryDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCostCategoryDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCostCategoryDefinitionCommandOutput> {
    return deserializeAws_json1_1DescribeCostCategoryDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
