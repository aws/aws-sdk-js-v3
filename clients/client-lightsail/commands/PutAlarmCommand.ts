import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { PutAlarmRequest, PutAlarmResult } from "../models/index";
import { deserializeAws_json1_1PutAlarmCommand, serializeAws_json1_1PutAlarmCommand } from "../protocols/Aws_json1_1";
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

export type PutAlarmCommandInput = PutAlarmRequest;
export type PutAlarmCommandOutput = PutAlarmResult & __MetadataBearer;

export class PutAlarmCommand extends $Command<
  PutAlarmCommandInput,
  PutAlarmCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAlarmCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAlarmCommandInput, PutAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PutAlarmRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAlarmResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAlarmCommandOutput> {
    return deserializeAws_json1_1PutAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
