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
  DeleteSubscriberRequest,
  DeleteSubscriberRequestFilterSensitiveLog,
  DeleteSubscriberResponse,
  DeleteSubscriberResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSubscriberCommand,
  serializeAws_json1_1DeleteSubscriberCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteSubscriberCommandInput extends DeleteSubscriberRequest {}
export interface DeleteSubscriberCommandOutput extends DeleteSubscriberResponse, __MetadataBearer {}

/**
 * <p>Deletes a subscriber.</p>
 * 		       <important>
 * 			         <p>Deleting the last subscriber to a notification also deletes the notification.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DeleteSubscriberCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DeleteSubscriberCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DeleteSubscriberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubscriberCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriberCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 */
export class DeleteSubscriberCommand extends $Command<
  DeleteSubscriberCommandInput,
  DeleteSubscriberCommandOutput,
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

  constructor(readonly input: DeleteSubscriberCommandInput) {
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
  ): Handler<DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSubscriberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DeleteSubscriberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSubscriberRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteSubscriberResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSubscriberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSubscriberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSubscriberCommandOutput> {
    return deserializeAws_json1_1DeleteSubscriberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
