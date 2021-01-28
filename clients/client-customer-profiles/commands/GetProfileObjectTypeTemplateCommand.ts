import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { GetProfileObjectTypeTemplateRequest, GetProfileObjectTypeTemplateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetProfileObjectTypeTemplateCommand,
  serializeAws_restJson1GetProfileObjectTypeTemplateCommand,
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

export type GetProfileObjectTypeTemplateCommandInput = GetProfileObjectTypeTemplateRequest;
export type GetProfileObjectTypeTemplateCommandOutput = GetProfileObjectTypeTemplateResponse & __MetadataBearer;

/**
 * <p>Returns the template information for a specific object type.</p>
 *          <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or
 *          “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API,
 *          with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the
 *          template.</p>
 */
export class GetProfileObjectTypeTemplateCommand extends $Command<
  GetProfileObjectTypeTemplateCommandInput,
  GetProfileObjectTypeTemplateCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetProfileObjectTypeTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProfileObjectTypeTemplateCommandInput, GetProfileObjectTypeTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "GetProfileObjectTypeTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProfileObjectTypeTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetProfileObjectTypeTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetProfileObjectTypeTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetProfileObjectTypeTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProfileObjectTypeTemplateCommandOutput> {
    return deserializeAws_restJson1GetProfileObjectTypeTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
