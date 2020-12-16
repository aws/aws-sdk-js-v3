import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { CheckDomainTransferabilityRequest, CheckDomainTransferabilityResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CheckDomainTransferabilityCommand,
  serializeAws_json1_1CheckDomainTransferabilityCommand,
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

export type CheckDomainTransferabilityCommandInput = CheckDomainTransferabilityRequest;
export type CheckDomainTransferabilityCommandOutput = CheckDomainTransferabilityResponse & __MetadataBearer;

/**
 * <p>Checks whether a domain name can be transferred to Amazon Route 53. </p>
 */
export class CheckDomainTransferabilityCommand extends $Command<
  CheckDomainTransferabilityCommandInput,
  CheckDomainTransferabilityCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CheckDomainTransferabilityCommandInput) {
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
  ): Handler<CheckDomainTransferabilityCommandInput, CheckDomainTransferabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "CheckDomainTransferabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckDomainTransferabilityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CheckDomainTransferabilityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckDomainTransferabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CheckDomainTransferabilityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CheckDomainTransferabilityCommandOutput> {
    return deserializeAws_json1_1CheckDomainTransferabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
