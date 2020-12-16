import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { DisableDomainAutoRenewRequest, DisableDomainAutoRenewResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisableDomainAutoRenewCommand,
  serializeAws_json1_1DisableDomainAutoRenewCommand,
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

export type DisableDomainAutoRenewCommandInput = DisableDomainAutoRenewRequest;
export type DisableDomainAutoRenewCommandOutput = DisableDomainAutoRenewResponse & __MetadataBearer;

/**
 * <p>This operation disables automatic renewal of domain registration for the specified domain.</p>
 */
export class DisableDomainAutoRenewCommand extends $Command<
  DisableDomainAutoRenewCommandInput,
  DisableDomainAutoRenewCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableDomainAutoRenewCommandInput) {
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
  ): Handler<DisableDomainAutoRenewCommandInput, DisableDomainAutoRenewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "DisableDomainAutoRenewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableDomainAutoRenewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisableDomainAutoRenewResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableDomainAutoRenewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableDomainAutoRenewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableDomainAutoRenewCommandOutput> {
    return deserializeAws_json1_1DisableDomainAutoRenewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
