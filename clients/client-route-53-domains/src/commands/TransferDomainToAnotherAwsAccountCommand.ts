// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  TransferDomainToAnotherAwsAccountRequest,
  TransferDomainToAnotherAwsAccountRequestFilterSensitiveLog,
  TransferDomainToAnotherAwsAccountResponse,
  TransferDomainToAnotherAwsAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommand,
  serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

export interface TransferDomainToAnotherAwsAccountCommandInput extends TransferDomainToAnotherAwsAccountRequest {}
export interface TransferDomainToAnotherAwsAccountCommandOutput
  extends TransferDomainToAnotherAwsAccountResponse,
    __MetadataBearer {}

/**
 * <p>Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following:</p>
 *          <ul>
 *             <li>
 *                <p>The Amazon Web Services account that you're transferring the domain to must
 * 					accept the transfer. If the other account doesn't accept the transfer within 3
 * 					days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p>
 *             </li>
 *             <li>
 *                <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p>
 *             </li>
 *             <li>
 *                <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>When you transfer a domain from one Amazon Web Services account to another, Route
 * 				53 doesn't transfer the hosted zone that is associated with the domain. DNS
 * 				resolution isn't affected if the domain and the hosted zone are owned by separate
 * 				accounts, so transferring the hosted zone is optional. For information about
 * 				transferring the hosted zone to another Amazon Web Services account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a
 * 					Hosted Zone to a Different Amazon Web Services Account</a> in the
 * 					<i>Amazon Route 53 Developer Guide</i>.</p>
 *          </important>
 *          <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example,
 * 				<code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, TransferDomainToAnotherAwsAccountCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, TransferDomainToAnotherAwsAccountCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new TransferDomainToAnotherAwsAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransferDomainToAnotherAwsAccountCommandInput} for command's `input` shape.
 * @see {@link TransferDomainToAnotherAwsAccountCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 */
export class TransferDomainToAnotherAwsAccountCommand extends $Command<
  TransferDomainToAnotherAwsAccountCommandInput,
  TransferDomainToAnotherAwsAccountCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TransferDomainToAnotherAwsAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "TransferDomainToAnotherAwsAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TransferDomainToAnotherAwsAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TransferDomainToAnotherAwsAccountResponseFilterSensitiveLog,
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
