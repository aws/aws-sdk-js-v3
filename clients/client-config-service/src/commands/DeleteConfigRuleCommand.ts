import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteConfigRuleRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteConfigRuleCommand,
  serializeAws_json1_1DeleteConfigRuleCommand,
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

export interface DeleteConfigRuleCommandInput extends DeleteConfigRuleRequest {}
export interface DeleteConfigRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified Config rule and all of its evaluation
 * 			results.</p>
 * 		       <p>Config sets the state of a rule to <code>DELETING</code>
 * 			until the deletion is complete. You cannot update a rule while it is
 * 			in this state. If you make a <code>PutConfigRule</code> or
 * 				<code>DeleteConfigRule</code> request for the rule, you will
 * 			receive a <code>ResourceInUseException</code>.</p>
 * 		       <p>You can check the state of a rule by using the
 * 				<code>DescribeConfigRules</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteConfigRuleCommand extends $Command<
  DeleteConfigRuleCommandInput,
  DeleteConfigRuleCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteConfigRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConfigRuleCommandInput, DeleteConfigRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DeleteConfigRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConfigRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteConfigRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteConfigRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteConfigRuleCommandOutput> {
    return deserializeAws_json1_1DeleteConfigRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
