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
  RejectDomainTransferFromAnotherAwsAccountRequest,
  RejectDomainTransferFromAnotherAwsAccountRequestFilterSensitiveLog,
  RejectDomainTransferFromAnotherAwsAccountResponse,
  RejectDomainTransferFromAnotherAwsAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand,
  serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

export interface RejectDomainTransferFromAnotherAwsAccountCommandInput
  extends RejectDomainTransferFromAnotherAwsAccountRequest {}
export interface RejectDomainTransferFromAnotherAwsAccountCommandOutput
  extends RejectDomainTransferFromAnotherAwsAccountResponse,
    __MetadataBearer {}

/**
 * <p>Rejects the transfer of a domain from another Amazon Web Services account to the
 * 			current Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p>
 *          <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example,
 * 				<code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, RejectDomainTransferFromAnotherAwsAccountCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, RejectDomainTransferFromAnotherAwsAccountCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new RejectDomainTransferFromAnotherAwsAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectDomainTransferFromAnotherAwsAccountCommandInput} for command's `input` shape.
 * @see {@link RejectDomainTransferFromAnotherAwsAccountCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 */
export class RejectDomainTransferFromAnotherAwsAccountCommand extends $Command<
  RejectDomainTransferFromAnotherAwsAccountCommandInput,
  RejectDomainTransferFromAnotherAwsAccountCommandOutput,
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

  constructor(readonly input: RejectDomainTransferFromAnotherAwsAccountCommandInput) {
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
    RejectDomainTransferFromAnotherAwsAccountCommandInput,
    RejectDomainTransferFromAnotherAwsAccountCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        RejectDomainTransferFromAnotherAwsAccountCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "RejectDomainTransferFromAnotherAwsAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectDomainTransferFromAnotherAwsAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RejectDomainTransferFromAnotherAwsAccountResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RejectDomainTransferFromAnotherAwsAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectDomainTransferFromAnotherAwsAccountCommandOutput> {
    return deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
