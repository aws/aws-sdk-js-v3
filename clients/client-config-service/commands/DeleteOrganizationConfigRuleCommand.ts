import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteOrganizationConfigRuleRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteOrganizationConfigRuleCommand,
  serializeAws_json1_1DeleteOrganizationConfigRuleCommand,
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

export interface DeleteOrganizationConfigRuleCommandInput extends DeleteOrganizationConfigRuleRequest {}
export interface DeleteOrganizationConfigRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization. </p>
 * 	        <p>Only a master account and a delegated administrator account can delete an organization config rule.
 * 		When calling this API with a delegated administrator, you must ensure Organizations
 * 			<code>ListDelegatedAdministrator</code> permissions are added.</p>
 * 		       <p>Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete.
 * 			You cannot update a rule while it is in this state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteOrganizationConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteOrganizationConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteOrganizationConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOrganizationConfigRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteOrganizationConfigRuleCommand extends $Command<
  DeleteOrganizationConfigRuleCommandInput,
  DeleteOrganizationConfigRuleCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteOrganizationConfigRuleCommandInput) {
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
  ): Handler<DeleteOrganizationConfigRuleCommandInput, DeleteOrganizationConfigRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DeleteOrganizationConfigRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteOrganizationConfigRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteOrganizationConfigRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteOrganizationConfigRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteOrganizationConfigRuleCommandOutput> {
    return deserializeAws_json1_1DeleteOrganizationConfigRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
