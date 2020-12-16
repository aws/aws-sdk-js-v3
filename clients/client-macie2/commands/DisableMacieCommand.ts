import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DisableMacieRequest, DisableMacieResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DisableMacieCommand,
  serializeAws_restJson1DisableMacieCommand,
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

export type DisableMacieCommandInput = DisableMacieRequest;
export type DisableMacieCommandOutput = DisableMacieResponse & __MetadataBearer;

/**
 * <p>Disables an Amazon Macie account and deletes Macie resources for the account.</p>
 */
export class DisableMacieCommand extends $Command<
  DisableMacieCommandInput,
  DisableMacieCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableMacieCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableMacieCommandInput, DisableMacieCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "DisableMacieCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableMacieRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisableMacieResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableMacieCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisableMacieCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableMacieCommandOutput> {
    return deserializeAws_restJson1DisableMacieCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
