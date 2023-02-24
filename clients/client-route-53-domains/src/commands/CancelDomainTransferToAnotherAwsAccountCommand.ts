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
  CancelDomainTransferToAnotherAwsAccountRequest,
  CancelDomainTransferToAnotherAwsAccountRequestFilterSensitiveLog,
  CancelDomainTransferToAnotherAwsAccountResponse,
  CancelDomainTransferToAnotherAwsAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand,
  serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

export interface CancelDomainTransferToAnotherAwsAccountCommandInput
  extends CancelDomainTransferToAnotherAwsAccountRequest {}
export interface CancelDomainTransferToAnotherAwsAccountCommandOutput
  extends CancelDomainTransferToAnotherAwsAccountResponse,
    __MetadataBearer {}

/**
 * <p>Cancels the transfer of a domain from the current Amazon Web Services account to
 * 			another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p>
 *          <important>
 *             <p>You must cancel the transfer before the other Amazon Web Services account accepts
 * 				the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p>
 *          </important>
 *          <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example,
 * 				<code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, CancelDomainTransferToAnotherAwsAccountCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, CancelDomainTransferToAnotherAwsAccountCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new CancelDomainTransferToAnotherAwsAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelDomainTransferToAnotherAwsAccountCommandInput} for command's `input` shape.
 * @see {@link CancelDomainTransferToAnotherAwsAccountCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 */
export class CancelDomainTransferToAnotherAwsAccountCommand extends $Command<
  CancelDomainTransferToAnotherAwsAccountCommandInput,
  CancelDomainTransferToAnotherAwsAccountCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CancelDomainTransferToAnotherAwsAccountCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "CancelDomainTransferToAnotherAwsAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelDomainTransferToAnotherAwsAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelDomainTransferToAnotherAwsAccountResponseFilterSensitiveLog,
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
