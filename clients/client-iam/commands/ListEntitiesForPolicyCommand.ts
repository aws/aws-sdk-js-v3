import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListEntitiesForPolicyRequest, ListEntitiesForPolicyResponse } from "../models/models_0";
import {
  deserializeAws_queryListEntitiesForPolicyCommand,
  serializeAws_queryListEntitiesForPolicyCommand,
} from "../protocols/Aws_query";
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

export interface ListEntitiesForPolicyCommandInput extends ListEntitiesForPolicyRequest {}
export interface ListEntitiesForPolicyCommandOutput extends ListEntitiesForPolicyResponse, __MetadataBearer {}

/**
 * <p>Lists all IAM users, groups, and roles that the specified managed policy is attached
 *             to.</p>
 *         <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a
 *             particular type of entity (users, groups, or roles). For example, to list only the roles
 *             that are attached to the specified policy, set <code>EntityFilter</code> to
 *                 <code>Role</code>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListEntitiesForPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListEntitiesForPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListEntitiesForPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEntitiesForPolicyCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesForPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListEntitiesForPolicyCommand extends $Command<
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEntitiesForPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEntitiesForPolicyCommandInput, ListEntitiesForPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListEntitiesForPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEntitiesForPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEntitiesForPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEntitiesForPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListEntitiesForPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEntitiesForPolicyCommandOutput> {
    return deserializeAws_queryListEntitiesForPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
