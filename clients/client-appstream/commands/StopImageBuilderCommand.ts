import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { StopImageBuilderRequest, StopImageBuilderResult } from "../models/models_0";
import {
  deserializeAws_json1_1StopImageBuilderCommand,
  serializeAws_json1_1StopImageBuilderCommand,
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

export type StopImageBuilderCommandInput = StopImageBuilderRequest;
export type StopImageBuilderCommandOutput = StopImageBuilderResult & __MetadataBearer;

/**
 * <p>Stops the specified image builder.</p>
 */
export class StopImageBuilderCommand extends $Command<
  StopImageBuilderCommandInput,
  StopImageBuilderCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopImageBuilderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopImageBuilderCommandInput, StopImageBuilderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "StopImageBuilderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopImageBuilderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopImageBuilderResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopImageBuilderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopImageBuilderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopImageBuilderCommandOutput> {
    return deserializeAws_json1_1StopImageBuilderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
