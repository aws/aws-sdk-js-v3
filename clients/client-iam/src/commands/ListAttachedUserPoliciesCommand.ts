import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAttachedUserPoliciesRequest, ListAttachedUserPoliciesResponse } from "../models/models_0";
import {
  deserializeAws_queryListAttachedUserPoliciesCommand,
  serializeAws_queryListAttachedUserPoliciesCommand,
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

export interface ListAttachedUserPoliciesCommandInput extends ListAttachedUserPoliciesRequest {}
export interface ListAttachedUserPoliciesCommandOutput extends ListAttachedUserPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists all managed policies that are attached to the specified IAM user.</p>
 *         <p>An IAM user can also have inline policies embedded with it. To list the inline
 *             policies for a user, use <a>ListUserPolicies</a>. For information about
 *             policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. You can use the <code>PathPrefix</code> parameter to limit the list of
 *             policies to only those matching the specified path prefix. If there are no policies
 *             attached to the specified group (or none that match the specified path prefix), the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAttachedUserPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAttachedUserPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListAttachedUserPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttachedUserPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedUserPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAttachedUserPoliciesCommand extends $Command<
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAttachedUserPoliciesCommandInput) {
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
  ): Handler<ListAttachedUserPoliciesCommandInput, ListAttachedUserPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListAttachedUserPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAttachedUserPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAttachedUserPoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAttachedUserPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListAttachedUserPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAttachedUserPoliciesCommandOutput> {
    return deserializeAws_queryListAttachedUserPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
