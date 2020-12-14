import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { UpdateProfileRequest, UpdateProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateProfileCommand,
  serializeAws_restJson1UpdateProfileCommand,
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

export type UpdateProfileCommandInput = UpdateProfileRequest;
export type UpdateProfileCommandOutput = UpdateProfileResponse & __MetadataBearer;

/**
 * <p>Updates the properties of a profile. The ProfileId is required for updating a customer
 *          profile.</p>
 *          <p>When calling the UpdateProfile API, specifying an empty string value means that any
 *          existing value will be removed. Not specifying a string value means that any value already
 *          there will be kept.</p>
 */
export class UpdateProfileCommand extends $Command<
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateProfileCommandInput) {
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
  ): Handler<UpdateProfileCommandInput, UpdateProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "UpdateProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProfileCommandOutput> {
    return deserializeAws_restJson1UpdateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
