import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import {
  TransferDomainToAnotherAwsAccountRequest,
  TransferDomainToAnotherAwsAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommand,
  serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand,
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

export type TransferDomainToAnotherAwsAccountCommandInput = TransferDomainToAnotherAwsAccountRequest;
export type TransferDomainToAnotherAwsAccountCommandOutput = TransferDomainToAnotherAwsAccountResponse &
  __MetadataBearer;

/**
 * <p>Transfers a domain from the current AWS account to another AWS account. Note the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>The AWS account that you're transferring the domain to must accept the transfer. If the other account
 * 				doesn't accept the transfer within 3 days, we cancel the transfer. See
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.
 * 				</p>
 * 			         </li>
 *             <li>
 *                <p>You can cancel the transfer before the other account accepts it. See
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>.
 * 				</p>
 * 			         </li>
 *             <li>
 *                <p>The other account can reject the transfer. See
 * 					<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>.
 * 				</p>
 * 			         </li>
 *          </ul>
 *
 * 		       <important>
 * 			         <p>When you transfer a domain from one AWS account to another, Route 53 doesn't transfer the hosted zone that is associated
 * 				with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts,
 * 				so transferring the hosted zone is optional. For information about transferring the hosted zone to another AWS account, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a
 * 				Different AWS Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       </important>
 *
 * 		       <p>Use either
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>
 * 			to determine whether the operation succeeded.
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>
 * 			provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>.
 * 		</p>
 */
export class TransferDomainToAnotherAwsAccountCommand extends $Command<
  TransferDomainToAnotherAwsAccountCommandInput,
  TransferDomainToAnotherAwsAccountCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TransferDomainToAnotherAwsAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TransferDomainToAnotherAwsAccountCommandInput, TransferDomainToAnotherAwsAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "TransferDomainToAnotherAwsAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TransferDomainToAnotherAwsAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TransferDomainToAnotherAwsAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: TransferDomainToAnotherAwsAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TransferDomainToAnotherAwsAccountCommandOutput> {
    return deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
