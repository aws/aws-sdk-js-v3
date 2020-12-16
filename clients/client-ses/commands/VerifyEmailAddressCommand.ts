import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { VerifyEmailAddressRequest } from "../models/models_0";
import {
  deserializeAws_queryVerifyEmailAddressCommand,
  serializeAws_queryVerifyEmailAddressCommand,
} from "../protocols/Aws_query";
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

export type VerifyEmailAddressCommandInput = VerifyEmailAddressRequest;
export type VerifyEmailAddressCommandOutput = __MetadataBearer;

/**
 * <p>Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email
 *             address.</p>
 */
export class VerifyEmailAddressCommand extends $Command<
  VerifyEmailAddressCommandInput,
  VerifyEmailAddressCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: VerifyEmailAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifyEmailAddressCommandInput, VerifyEmailAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "VerifyEmailAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyEmailAddressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifyEmailAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryVerifyEmailAddressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyEmailAddressCommandOutput> {
    return deserializeAws_queryVerifyEmailAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
