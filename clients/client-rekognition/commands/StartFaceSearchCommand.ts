import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartFaceSearchRequest, StartFaceSearchResponse } from "../models/index";
import {
  deserializeAws_json1_1StartFaceSearchCommand,
  serializeAws_json1_1StartFaceSearchCommand,
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

export type StartFaceSearchCommandInput = StartFaceSearchRequest;
export type StartFaceSearchCommandOutput = StartFaceSearchResponse & __MetadataBearer;

export class StartFaceSearchCommand extends $Command<
  StartFaceSearchCommandInput,
  StartFaceSearchCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartFaceSearchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartFaceSearchCommandInput, StartFaceSearchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StartFaceSearchRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartFaceSearchResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartFaceSearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartFaceSearchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartFaceSearchCommandOutput> {
    return deserializeAws_json1_1StartFaceSearchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
