import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { PutConferencePreferenceRequest, PutConferencePreferenceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutConferencePreferenceCommand,
  serializeAws_json1_1PutConferencePreferenceCommand,
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

export type PutConferencePreferenceCommandInput = PutConferencePreferenceRequest;
export type PutConferencePreferenceCommandOutput = PutConferencePreferenceResponse & __MetadataBearer;

/**
 * <p>Sets the conference preferences on a specific conference provider at the account
 *          level.</p>
 */
export class PutConferencePreferenceCommand extends $Command<
  PutConferencePreferenceCommandInput,
  PutConferencePreferenceCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutConferencePreferenceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutConferencePreferenceCommandInput, PutConferencePreferenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "PutConferencePreferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConferencePreferenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutConferencePreferenceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutConferencePreferenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutConferencePreferenceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutConferencePreferenceCommandOutput> {
    return deserializeAws_json1_1PutConferencePreferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
