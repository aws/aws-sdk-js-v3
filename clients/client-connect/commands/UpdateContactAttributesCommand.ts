import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateContactAttributesRequest, UpdateContactAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateContactAttributesCommand,
  serializeAws_restJson1UpdateContactAttributesCommand,
} from "../protocols/Aws_restJson1";
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

export type UpdateContactAttributesCommandInput = UpdateContactAttributesRequest;
export type UpdateContactAttributesCommandOutput = UpdateContactAttributesResponse & __MetadataBearer;

/**
 * <p>Creates or updates the contact attributes associated with the specified contact.</p>
 *          <p>You can add or update attributes for both ongoing and completed contacts. For example, you
 *    can update the customer's name or the reason the customer called while the call is active, or add
 *    notes about steps that the agent took during the call that are displayed to the next agent that
 *    takes the call. You can also update attributes for a contact using data from your CRM application
 *    and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis,
 *    such as legal review or identifying abusive callers.</p>
 *          <p>Contact attributes are available in Amazon Connect for 24 months, and are then deleted.</p>
 *
 *          <p>
 *             <b>Important:</b> You cannot use the operation to update
 *    attributes for contacts that occurred prior to the release of the API, September 12, 2018. You
 *    can update attributes only for contacts that started after the release of the API. If you attempt
 *    to update attributes for a contact that occurred prior to the release of the API, a 400 error is
 *    returned. This applies also to queued callbacks that were initiated prior to the release of the
 *    API but are still active in your instance.</p>
 */
export class UpdateContactAttributesCommand extends $Command<
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateContactAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateContactAttributesCommandInput, UpdateContactAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateContactAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateContactAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateContactAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateContactAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateContactAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateContactAttributesCommandOutput> {
    return deserializeAws_restJson1UpdateContactAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
