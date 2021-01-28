import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { GetProfileObjectTypeRequest, GetProfileObjectTypeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetProfileObjectTypeCommand,
  serializeAws_restJson1GetProfileObjectTypeCommand,
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

export type GetProfileObjectTypeCommandInput = GetProfileObjectTypeRequest;
export type GetProfileObjectTypeCommandOutput = GetProfileObjectTypeResponse & __MetadataBearer;

/**
 * <p>Returns the object types for a specific domain.</p>
 */
export class GetProfileObjectTypeCommand extends $Command<
  GetProfileObjectTypeCommandInput,
  GetProfileObjectTypeCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetProfileObjectTypeCommandInput) {
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
  ): Handler<GetProfileObjectTypeCommandInput, GetProfileObjectTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "GetProfileObjectTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProfileObjectTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetProfileObjectTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetProfileObjectTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetProfileObjectTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProfileObjectTypeCommandOutput> {
    return deserializeAws_restJson1GetProfileObjectTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
