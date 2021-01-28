import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { GetWorldTemplateBodyRequest, GetWorldTemplateBodyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetWorldTemplateBodyCommand,
  serializeAws_restJson1GetWorldTemplateBodyCommand,
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

export type GetWorldTemplateBodyCommandInput = GetWorldTemplateBodyRequest;
export type GetWorldTemplateBodyCommandOutput = GetWorldTemplateBodyResponse & __MetadataBearer;

/**
 * <p>Gets the world template body.</p>
 */
export class GetWorldTemplateBodyCommand extends $Command<
  GetWorldTemplateBodyCommandInput,
  GetWorldTemplateBodyCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetWorldTemplateBodyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorldTemplateBodyCommandInput, GetWorldTemplateBodyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "GetWorldTemplateBodyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWorldTemplateBodyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetWorldTemplateBodyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWorldTemplateBodyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetWorldTemplateBodyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorldTemplateBodyCommandOutput> {
    return deserializeAws_restJson1GetWorldTemplateBodyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
