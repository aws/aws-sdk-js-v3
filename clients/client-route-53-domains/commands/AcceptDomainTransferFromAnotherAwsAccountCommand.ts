import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import {
  AcceptDomainTransferFromAnotherAwsAccountRequest,
  AcceptDomainTransferFromAnotherAwsAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand,
  serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand,
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

export type AcceptDomainTransferFromAnotherAwsAccountCommandInput = AcceptDomainTransferFromAnotherAwsAccountRequest;
export type AcceptDomainTransferFromAnotherAwsAccountCommandOutput = AcceptDomainTransferFromAnotherAwsAccountResponse &
  __MetadataBearer;

/**
 * <p>Accepts the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.
 * 		</p>
 *
 * 		       <p>Use either
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>
 * 			to determine whether the operation succeeded.
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>
 * 			provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>.
 * 		</p>
 */
export class AcceptDomainTransferFromAnotherAwsAccountCommand extends $Command<
  AcceptDomainTransferFromAnotherAwsAccountCommandInput,
  AcceptDomainTransferFromAnotherAwsAccountCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptDomainTransferFromAnotherAwsAccountCommandInput) {
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
    AcceptDomainTransferFromAnotherAwsAccountCommandInput,
    AcceptDomainTransferFromAnotherAwsAccountCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "AcceptDomainTransferFromAnotherAwsAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptDomainTransferFromAnotherAwsAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptDomainTransferFromAnotherAwsAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AcceptDomainTransferFromAnotherAwsAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptDomainTransferFromAnotherAwsAccountCommandOutput> {
    return deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
