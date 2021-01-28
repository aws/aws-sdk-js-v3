import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateDomainContactRequest, UpdateDomainContactResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDomainContactCommand,
  serializeAws_json1_1UpdateDomainContactCommand,
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

export type UpdateDomainContactCommandInput = UpdateDomainContactRequest;
export type UpdateDomainContactCommandOutput = UpdateDomainContactResponse & __MetadataBearer;

/**
 * <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact:
 * 			registrant, administrator, or technical.</p>
 * 		       <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action.
 * 			If the request is not completed successfully, the domain registrant will be notified by email.</p>
 */
export class UpdateDomainContactCommand extends $Command<
  UpdateDomainContactCommandInput,
  UpdateDomainContactCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDomainContactCommandInput) {
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
  ): Handler<UpdateDomainContactCommandInput, UpdateDomainContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "UpdateDomainContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDomainContactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDomainContactResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDomainContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDomainContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDomainContactCommandOutput> {
    return deserializeAws_json1_1UpdateDomainContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
