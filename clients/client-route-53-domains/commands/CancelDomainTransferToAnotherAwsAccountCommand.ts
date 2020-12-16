import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import {
  CancelDomainTransferToAnotherAwsAccountRequest,
  CancelDomainTransferToAnotherAwsAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand,
  serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand,
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

export type CancelDomainTransferToAnotherAwsAccountCommandInput = CancelDomainTransferToAnotherAwsAccountRequest;
export type CancelDomainTransferToAnotherAwsAccountCommandOutput = CancelDomainTransferToAnotherAwsAccountResponse &
  __MetadataBearer;

/**
 * <p>Cancels the transfer of a domain from the current AWS account to another AWS account. You initiate a transfer between AWS accounts using
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.
 * 		</p>
 *
 * 		       <important>
 * 			         <p>You must cancel the transfer before the other AWS account accepts the transfer using
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p>
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
export class CancelDomainTransferToAnotherAwsAccountCommand extends $Command<
  CancelDomainTransferToAnotherAwsAccountCommandInput,
  CancelDomainTransferToAnotherAwsAccountCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelDomainTransferToAnotherAwsAccountCommandInput) {
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
  ): Handler<
    CancelDomainTransferToAnotherAwsAccountCommandInput,
    CancelDomainTransferToAnotherAwsAccountCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "CancelDomainTransferToAnotherAwsAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelDomainTransferToAnotherAwsAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelDomainTransferToAnotherAwsAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelDomainTransferToAnotherAwsAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelDomainTransferToAnotherAwsAccountCommandOutput> {
    return deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
