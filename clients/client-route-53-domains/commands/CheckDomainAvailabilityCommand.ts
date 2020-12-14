import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { CheckDomainAvailabilityRequest, CheckDomainAvailabilityResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CheckDomainAvailabilityCommand,
  serializeAws_json1_1CheckDomainAvailabilityCommand,
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

export type CheckDomainAvailabilityCommandInput = CheckDomainAvailabilityRequest;
export type CheckDomainAvailabilityCommandOutput = CheckDomainAvailabilityResponse & __MetadataBearer;

/**
 * <p>This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must
 * 			submit another request to determine the availability of the domain name.</p>
 */
export class CheckDomainAvailabilityCommand extends $Command<
  CheckDomainAvailabilityCommandInput,
  CheckDomainAvailabilityCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CheckDomainAvailabilityCommandInput) {
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
  ): Handler<CheckDomainAvailabilityCommandInput, CheckDomainAvailabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "CheckDomainAvailabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckDomainAvailabilityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CheckDomainAvailabilityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckDomainAvailabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CheckDomainAvailabilityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckDomainAvailabilityCommandOutput> {
    return deserializeAws_json1_1CheckDomainAvailabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
