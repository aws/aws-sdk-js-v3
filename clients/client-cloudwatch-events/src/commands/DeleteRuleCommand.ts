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

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DeleteRuleRequest, DeleteRuleRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteRuleCommand,
  serializeAws_json1_1DeleteRuleCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteRuleCommandInput extends DeleteRuleRequest {}
export interface DeleteRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified rule.</p>
 *          <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p>
 *
 *          <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow
 *       a short period of time for changes to take effect.</p>
 *
 *          <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you
 *       call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is
 *       returned.</p>
 *
 *          <p>Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These
 *       rules are created by those other Amazon Web Services services to support functionality in those services. You
 *       can delete these rules using the <code>Force</code> option, but you should do so only if you
 *       are sure the other service is not still using that rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DeleteRuleCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DeleteRuleCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new DeleteRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 */
export class DeleteRuleCommand extends $Command<
  DeleteRuleCommandInput,
  DeleteRuleCommandOutput,
  CloudWatchEventsClientResolvedConfig
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

  constructor(readonly input: DeleteRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRuleCommandInput, DeleteRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteRuleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "DeleteRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRuleCommandOutput> {
    return deserializeAws_json1_1DeleteRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
