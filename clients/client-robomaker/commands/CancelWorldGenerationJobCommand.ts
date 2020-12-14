import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { CancelWorldGenerationJobRequest, CancelWorldGenerationJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CancelWorldGenerationJobCommand,
  serializeAws_restJson1CancelWorldGenerationJobCommand,
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

export type CancelWorldGenerationJobCommandInput = CancelWorldGenerationJobRequest;
export type CancelWorldGenerationJobCommandOutput = CancelWorldGenerationJobResponse & __MetadataBearer;

/**
 * <p>Cancels the specified world generator job.</p>
 */
export class CancelWorldGenerationJobCommand extends $Command<
  CancelWorldGenerationJobCommandInput,
  CancelWorldGenerationJobCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelWorldGenerationJobCommandInput) {
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
  ): Handler<CancelWorldGenerationJobCommandInput, CancelWorldGenerationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CancelWorldGenerationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelWorldGenerationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelWorldGenerationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelWorldGenerationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelWorldGenerationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelWorldGenerationJobCommandOutput> {
    return deserializeAws_restJson1CancelWorldGenerationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
