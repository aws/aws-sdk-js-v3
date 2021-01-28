import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { AddProfileKeyRequest, AddProfileKeyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AddProfileKeyCommand,
  serializeAws_restJson1AddProfileKeyCommand,
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

export type AddProfileKeyCommandInput = AddProfileKeyRequest;
export type AddProfileKeyCommandOutput = AddProfileKeyResponse & __MetadataBearer;

/**
 * <p>Associates a new key value with a specific profile, such as a Contact Trace Record (CTR)
 *          ContactId.</p>
 *          <p>A profile object can have a single unique key and any number of additional keys that can
 *          be used to identify the profile that it belongs to.</p>
 */
export class AddProfileKeyCommand extends $Command<
  AddProfileKeyCommandInput,
  AddProfileKeyCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddProfileKeyCommandInput) {
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
  ): Handler<AddProfileKeyCommandInput, AddProfileKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "AddProfileKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddProfileKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddProfileKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddProfileKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddProfileKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddProfileKeyCommandOutput> {
    return deserializeAws_restJson1AddProfileKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
