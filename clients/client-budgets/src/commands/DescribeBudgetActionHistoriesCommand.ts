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

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import {
  DescribeBudgetActionHistoriesRequest,
  DescribeBudgetActionHistoriesRequestFilterSensitiveLog,
  DescribeBudgetActionHistoriesResponse,
  DescribeBudgetActionHistoriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBudgetActionHistoriesCommand,
  serializeAws_json1_1DescribeBudgetActionHistoriesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeBudgetActionHistoriesCommandInput extends DescribeBudgetActionHistoriesRequest {}
export interface DescribeBudgetActionHistoriesCommandOutput
  extends DescribeBudgetActionHistoriesResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Describes a budget action history detail.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionHistoriesCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionHistoriesCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetActionHistoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetActionHistoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionHistoriesCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 */
export class DescribeBudgetActionHistoriesCommand extends $Command<
  DescribeBudgetActionHistoriesCommandInput,
  DescribeBudgetActionHistoriesCommandOutput,
  BudgetsClientResolvedConfig
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

  constructor(readonly input: DescribeBudgetActionHistoriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBudgetActionHistoriesCommandInput, DescribeBudgetActionHistoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBudgetActionHistoriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeBudgetActionHistoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBudgetActionHistoriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetActionHistoriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBudgetActionHistoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBudgetActionHistoriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBudgetActionHistoriesCommandOutput> {
    return deserializeAws_json1_1DescribeBudgetActionHistoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
