import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListPoliciesRequest, ListPoliciesResponse } from "../models/models_0";
import { deserializeAws_queryListPoliciesCommand, serializeAws_queryListPoliciesCommand } from "../protocols/Aws_query";
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

export type ListPoliciesCommandInput = ListPoliciesRequest;
export type ListPoliciesCommandOutput = ListPoliciesResponse & __MetadataBearer;

/**
 * <p>Lists all the managed policies that are available in your AWS account, including your
 *          own customer-defined managed policies and all AWS managed policies.</p>
 *          <p>You can filter the list of policies that is returned using the optional
 *             <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters.
 *          For example, to list only the customer managed policies in your AWS account, set
 *             <code>Scope</code> to <code>Local</code>. To list only AWS managed policies, set
 *             <code>Scope</code> to <code>AWS</code>.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *          parameters.</p>
 *          <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>.</p>
 */
export class ListPoliciesCommand extends $Command<
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPoliciesCommandInput) {
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
  ): Handler<ListPoliciesCommandInput, ListPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPoliciesCommandOutput> {
    return deserializeAws_queryListPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
