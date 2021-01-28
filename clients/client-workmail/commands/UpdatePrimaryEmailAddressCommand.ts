import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { UpdatePrimaryEmailAddressRequest, UpdatePrimaryEmailAddressResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdatePrimaryEmailAddressCommand,
  serializeAws_json1_1UpdatePrimaryEmailAddressCommand,
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

export type UpdatePrimaryEmailAddressCommandInput = UpdatePrimaryEmailAddressRequest;
export type UpdatePrimaryEmailAddressCommandOutput = UpdatePrimaryEmailAddressResponse & __MetadataBearer;

/**
 * <p>Updates the primary email for a user, group, or resource. The current email is moved
 *          into the list of aliases (or swapped between an existing alias and the current primary
 *          email), and the email provided in the input is promoted as the primary.</p>
 */
export class UpdatePrimaryEmailAddressCommand extends $Command<
  UpdatePrimaryEmailAddressCommandInput,
  UpdatePrimaryEmailAddressCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePrimaryEmailAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePrimaryEmailAddressCommandInput, UpdatePrimaryEmailAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "UpdatePrimaryEmailAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePrimaryEmailAddressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePrimaryEmailAddressResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePrimaryEmailAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePrimaryEmailAddressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePrimaryEmailAddressCommandOutput> {
    return deserializeAws_json1_1UpdatePrimaryEmailAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
