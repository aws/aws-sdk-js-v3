import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { DisableDomainTransferLockRequest, DisableDomainTransferLockResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisableDomainTransferLockCommand,
  serializeAws_json1_1DisableDomainTransferLockCommand,
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

export type DisableDomainTransferLockCommandInput = DisableDomainTransferLockRequest;
export type DisableDomainTransferLockCommandOutput = DisableDomainTransferLockResponse & __MetadataBearer;

/**
 * <p>This operation removes the transfer lock on the domain (specifically the
 * 			<code>clientTransferProhibited</code> status) to allow domain transfers. We recommend
 * 			you refrain from performing this action unless you intend to transfer the domain to a
 * 			different registrar. Successful submission returns an operation ID that you can use to track
 * 			the progress and completion of the action. If the request is not completed successfully, the
 * 			domain registrant will be notified by email.</p>
 */
export class DisableDomainTransferLockCommand extends $Command<
  DisableDomainTransferLockCommandInput,
  DisableDomainTransferLockCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableDomainTransferLockCommandInput) {
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
  ): Handler<DisableDomainTransferLockCommandInput, DisableDomainTransferLockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "DisableDomainTransferLockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableDomainTransferLockRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisableDomainTransferLockResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableDomainTransferLockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableDomainTransferLockCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableDomainTransferLockCommandOutput> {
    return deserializeAws_json1_1DisableDomainTransferLockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
