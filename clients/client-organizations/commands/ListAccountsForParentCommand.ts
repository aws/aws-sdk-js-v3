import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListAccountsForParentRequest, ListAccountsForParentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAccountsForParentCommand,
  serializeAws_json1_1ListAccountsForParentCommand,
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

export type ListAccountsForParentCommandInput = ListAccountsForParentRequest;
export type ListAccountsForParentCommandOutput = ListAccountsForParentResponse & __MetadataBearer;

/**
 * <p>Lists the accounts in an organization that are contained by the specified target root
 *             or organizational unit (OU). If you specify the root, you get a list of all the accounts
 *             that aren't in any OU. If you specify an OU, you get a list of all the accounts in only
 *             that OU and not in any child OUs. To get a list of all accounts in the organization, use
 *             the <a>ListAccounts</a> operation.</p>
 *          <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
 * occasionally return an empty set of results even when there are more results available. The
 * <code>NextToken</code> response parameter value is <code>null</code>
 *                <i>only</i>
 * when there are no more results to display.</p>
 *          </note>
 *             <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 */
export class ListAccountsForParentCommand extends $Command<
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccountsForParentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountsForParentCommandInput, ListAccountsForParentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListAccountsForParentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountsForParentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccountsForParentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccountsForParentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAccountsForParentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountsForParentCommandOutput> {
    return deserializeAws_json1_1ListAccountsForParentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
