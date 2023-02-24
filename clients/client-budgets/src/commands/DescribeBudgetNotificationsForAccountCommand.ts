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
  DescribeBudgetNotificationsForAccountRequest,
  DescribeBudgetNotificationsForAccountRequestFilterSensitiveLog,
  DescribeBudgetNotificationsForAccountResponse,
  DescribeBudgetNotificationsForAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBudgetNotificationsForAccountCommand,
  serializeAws_json1_1DescribeBudgetNotificationsForAccountCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeBudgetNotificationsForAccountCommandInput
  extends DescribeBudgetNotificationsForAccountRequest {}
export interface DescribeBudgetNotificationsForAccountCommandOutput
  extends DescribeBudgetNotificationsForAccountResponse,
    __MetadataBearer {}

/**
 * <p>
 * 			Lists the budget names and notifications that are associated with an account.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetNotificationsForAccountCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetNotificationsForAccountCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetNotificationsForAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetNotificationsForAccountCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetNotificationsForAccountCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 */
export class DescribeBudgetNotificationsForAccountCommand extends $Command<
  DescribeBudgetNotificationsForAccountCommandInput,
  DescribeBudgetNotificationsForAccountCommandOutput,
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

  constructor(readonly input: DescribeBudgetNotificationsForAccountCommandInput) {
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
  ): Handler<DescribeBudgetNotificationsForAccountCommandInput, DescribeBudgetNotificationsForAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBudgetNotificationsForAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeBudgetNotificationsForAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBudgetNotificationsForAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetNotificationsForAccountResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeBudgetNotificationsForAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBudgetNotificationsForAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBudgetNotificationsForAccountCommandOutput> {
    return deserializeAws_json1_1DescribeBudgetNotificationsForAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
