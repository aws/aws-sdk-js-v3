import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListCreateAccountStatusRequest, ListCreateAccountStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListCreateAccountStatusCommand,
  serializeAws_json1_1ListCreateAccountStatusCommand,
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

export type ListCreateAccountStatusCommandInput = ListCreateAccountStatusRequest;
export type ListCreateAccountStatusCommandOutput = ListCreateAccountStatusResponse & __MetadataBearer;

/**
 * <p>Lists the account creation requests that match the specified status that is currently
 *             being tracked for the organization.</p>
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
export class ListCreateAccountStatusCommand extends $Command<
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCreateAccountStatusCommandInput) {
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
  ): Handler<ListCreateAccountStatusCommandInput, ListCreateAccountStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListCreateAccountStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCreateAccountStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCreateAccountStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCreateAccountStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCreateAccountStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCreateAccountStatusCommandOutput> {
    return deserializeAws_json1_1ListCreateAccountStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
