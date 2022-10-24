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
  DescribeSubscribersForNotificationRequest,
  DescribeSubscribersForNotificationRequestFilterSensitiveLog,
  DescribeSubscribersForNotificationResponse,
  DescribeSubscribersForNotificationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSubscribersForNotificationCommand,
  serializeAws_json1_1DescribeSubscribersForNotificationCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeSubscribersForNotificationCommandInput extends DescribeSubscribersForNotificationRequest {}
export interface DescribeSubscribersForNotificationCommandOutput
  extends DescribeSubscribersForNotificationResponse,
    __MetadataBearer {}

/**
 * <p>Lists the subscribers that are associated with a notification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeSubscribersForNotificationCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeSubscribersForNotificationCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeSubscribersForNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSubscribersForNotificationCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscribersForNotificationCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 */
export class DescribeSubscribersForNotificationCommand extends $Command<
  DescribeSubscribersForNotificationCommandInput,
  DescribeSubscribersForNotificationCommandOutput,
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

  constructor(readonly input: DescribeSubscribersForNotificationCommandInput) {
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
  ): Handler<DescribeSubscribersForNotificationCommandInput, DescribeSubscribersForNotificationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSubscribersForNotificationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeSubscribersForNotificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSubscribersForNotificationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSubscribersForNotificationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeSubscribersForNotificationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSubscribersForNotificationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSubscribersForNotificationCommandOutput> {
    return deserializeAws_json1_1DescribeSubscribersForNotificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
