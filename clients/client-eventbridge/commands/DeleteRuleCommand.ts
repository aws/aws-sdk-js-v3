import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeleteRuleRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteRuleCommand,
  serializeAws_json1_1DeleteRuleCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DeleteRuleCommandInput = DeleteRuleRequest;
export type DeleteRuleCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the specified rule.</p>
 *         <p>Before you can delete the rule, you must remove all targets, using <a>RemoveTargets</a>.</p>
 *
 *         <p>When you delete a rule, incoming events might continue to match to the deleted
 *             rule. Allow a short period of time for changes to take effect.</p>
 *
 *         <p>Managed rules are rules created and managed by another AWS service on your behalf.
 *             These rules are created by those other AWS services to support functionality in those
 *             services. You can delete these rules using the <code>Force</code> option, but you should
 *             do so only if you are sure the other service is not still using that rule.</p>
 */
export class DeleteRuleCommand extends $Command<
  DeleteRuleCommandInput,
  DeleteRuleCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRuleCommandInput, DeleteRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "DeleteRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRuleRequest.filterSensitiveLog,
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
