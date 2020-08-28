import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartContentModerationRequest, StartContentModerationResponse } from "../models/index";
import {
  deserializeAws_json1_1StartContentModerationCommand,
  serializeAws_json1_1StartContentModerationCommand,
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

export type StartContentModerationCommandInput = StartContentModerationRequest;
export type StartContentModerationCommandOutput = StartContentModerationResponse & __MetadataBearer;

export class StartContentModerationCommand extends $Command<
  StartContentModerationCommandInput,
  StartContentModerationCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartContentModerationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartContentModerationCommandInput, StartContentModerationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StartContentModerationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartContentModerationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartContentModerationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartContentModerationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartContentModerationCommandOutput> {
    return deserializeAws_json1_1StartContentModerationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
