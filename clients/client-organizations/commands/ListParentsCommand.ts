import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListParentsRequest, ListParentsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListParentsCommand,
  serializeAws_json1_1ListParentsCommand,
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

export type ListParentsCommandInput = ListParentsRequest;
export type ListParentsCommandOutput = ListParentsResponse & __MetadataBearer;

/**
 * <p>Lists the root or organizational units (OUs) that serve as the immediate parent of the
 *             specified child OU or account. This operation, along with <a>ListChildren</a>
 *             enables you to traverse the tree structure that makes up this root.</p>
 *         <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
 * occasionally return an empty set of results even when there are more results available. The
 * <code>NextToken</code> response parameter value is <code>null</code>
 *                <i>only</i>
 * when there are no more results to display.</p>
 *          </note>
 *          <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 *         <note>
 *             <p>In the current release, a child can have only a single parent.</p>
 *         </note>
 */
export class ListParentsCommand extends $Command<
  ListParentsCommandInput,
  ListParentsCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListParentsCommandInput) {
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
  ): Handler<ListParentsCommandInput, ListParentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListParentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListParentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListParentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListParentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListParentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListParentsCommandOutput> {
    return deserializeAws_json1_1ListParentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
