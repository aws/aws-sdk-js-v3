import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { EnableDomainTransferLockRequest, EnableDomainTransferLockResponse } from "../models/models_0";
import {
  deserializeAws_json1_1EnableDomainTransferLockCommand,
  serializeAws_json1_1EnableDomainTransferLockCommand,
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

export interface EnableDomainTransferLockCommandInput extends EnableDomainTransferLockRequest {}
export interface EnableDomainTransferLockCommandOutput extends EnableDomainTransferLockResponse, __MetadataBearer {}

/**
 * <p>This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status)
 * 			to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and
 * 			completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, EnableDomainTransferLockCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, EnableDomainTransferLockCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new EnableDomainTransferLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableDomainTransferLockCommandInput} for command's `input` shape.
 * @see {@link EnableDomainTransferLockCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class EnableDomainTransferLockCommand extends $Command<
  EnableDomainTransferLockCommandInput,
  EnableDomainTransferLockCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableDomainTransferLockCommandInput) {
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
  ): Handler<EnableDomainTransferLockCommandInput, EnableDomainTransferLockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "EnableDomainTransferLockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableDomainTransferLockRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableDomainTransferLockResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableDomainTransferLockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableDomainTransferLockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableDomainTransferLockCommandOutput> {
    return deserializeAws_json1_1EnableDomainTransferLockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
