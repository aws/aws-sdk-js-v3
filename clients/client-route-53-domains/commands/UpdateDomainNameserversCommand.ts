import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateDomainNameserversRequest, UpdateDomainNameserversResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDomainNameserversCommand,
  serializeAws_json1_1UpdateDomainNameserversCommand,
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

export type UpdateDomainNameserversCommandInput = UpdateDomainNameserversRequest;
export type UpdateDomainNameserversCommandOutput = UpdateDomainNameserversResponse & __MetadataBearer;

/**
 * <p>This operation replaces the current set of name servers for the domain with the specified set of name servers.
 * 			If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p>
 * 		       <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action.
 * 			If the request is not completed successfully, the domain registrant will be notified by email.</p>
 */
export class UpdateDomainNameserversCommand extends $Command<
  UpdateDomainNameserversCommandInput,
  UpdateDomainNameserversCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDomainNameserversCommandInput) {
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
  ): Handler<UpdateDomainNameserversCommandInput, UpdateDomainNameserversCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "UpdateDomainNameserversCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDomainNameserversRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDomainNameserversResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDomainNameserversCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDomainNameserversCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDomainNameserversCommandOutput> {
    return deserializeAws_json1_1UpdateDomainNameserversCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
