import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListHandshakesForAccountRequest, ListHandshakesForAccountResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListHandshakesForAccountCommand,
  serializeAws_json1_1ListHandshakesForAccountCommand,
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

export type ListHandshakesForAccountCommandInput = ListHandshakesForAccountRequest;
export type ListHandshakesForAccountCommandOutput = ListHandshakesForAccountResponse & __MetadataBearer;

/**
 * <p>Lists the current handshakes that are associated with the account of the requesting
 *             user.</p>
 *         <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or
 *                 <code>CANCELED</code> appear in the results of this API for only 30 days after
 *             changing to that state. After that, they're deleted and no longer accessible.</p>
 *         <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
 * occasionally return an empty set of results even when there are more results available. The
 * <code>NextToken</code> response parameter value is <code>null</code>
 *                <i>only</i>
 * when there are no more results to display.</p>
 *          </note>
 *          <p>This operation can be called from any account in the organization.</p>
 */
export class ListHandshakesForAccountCommand extends $Command<
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListHandshakesForAccountCommandInput) {
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
  ): Handler<ListHandshakesForAccountCommandInput, ListHandshakesForAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListHandshakesForAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListHandshakesForAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListHandshakesForAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListHandshakesForAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListHandshakesForAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHandshakesForAccountCommandOutput> {
    return deserializeAws_json1_1ListHandshakesForAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
