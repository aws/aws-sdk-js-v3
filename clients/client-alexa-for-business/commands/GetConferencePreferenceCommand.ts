import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetConferencePreferenceRequest, GetConferencePreferenceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetConferencePreferenceCommand,
  serializeAws_json1_1GetConferencePreferenceCommand,
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

export type GetConferencePreferenceCommandInput = GetConferencePreferenceRequest;
export type GetConferencePreferenceCommandOutput = GetConferencePreferenceResponse & __MetadataBearer;

/**
 * <p>Retrieves the existing conference preferences.</p>
 */
export class GetConferencePreferenceCommand extends $Command<
  GetConferencePreferenceCommandInput,
  GetConferencePreferenceCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConferencePreferenceCommandInput) {
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
  ): Handler<GetConferencePreferenceCommandInput, GetConferencePreferenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "GetConferencePreferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConferencePreferenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetConferencePreferenceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetConferencePreferenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetConferencePreferenceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConferencePreferenceCommandOutput> {
    return deserializeAws_json1_1GetConferencePreferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
