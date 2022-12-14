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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import {
  DeleteInsightRulesInput,
  DeleteInsightRulesInputFilterSensitiveLog,
  DeleteInsightRulesOutput,
  DeleteInsightRulesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteInsightRulesCommand,
  serializeAws_queryDeleteInsightRulesCommand,
} from "../protocols/Aws_query";

export interface DeleteInsightRulesCommandInput extends DeleteInsightRulesInput {}
export interface DeleteInsightRulesCommandOutput extends DeleteInsightRulesOutput, __MetadataBearer {}

/**
 * <p>Permanently deletes the specified Contributor Insights rules.</p>
 *          <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time
 * 			the rule was created might
 * 			not be available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DeleteInsightRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInsightRulesCommandInput} for command's `input` shape.
 * @see {@link DeleteInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class DeleteInsightRulesCommand extends $Command<
  DeleteInsightRulesCommandInput,
  DeleteInsightRulesCommandOutput,
  CloudWatchClientResolvedConfig
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

  constructor(readonly input: DeleteInsightRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteInsightRulesCommandInput, DeleteInsightRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteInsightRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DeleteInsightRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInsightRulesInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteInsightRulesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteInsightRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteInsightRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteInsightRulesCommandOutput> {
    return deserializeAws_queryDeleteInsightRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
