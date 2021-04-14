import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UnlabelParameterVersionRequest, UnlabelParameterVersionResult } from "../models/models_1";
import {
  deserializeAws_json1_1UnlabelParameterVersionCommand,
  serializeAws_json1_1UnlabelParameterVersionCommand,
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

export type UnlabelParameterVersionCommandInput = UnlabelParameterVersionRequest;
export type UnlabelParameterVersionCommandOutput = UnlabelParameterVersionResult & __MetadataBearer;

/**
 * <p>Remove a label or labels from a parameter.</p>
 */
export class UnlabelParameterVersionCommand extends $Command<
  UnlabelParameterVersionCommandInput,
  UnlabelParameterVersionCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnlabelParameterVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnlabelParameterVersionCommandInput, UnlabelParameterVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UnlabelParameterVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnlabelParameterVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UnlabelParameterVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnlabelParameterVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UnlabelParameterVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnlabelParameterVersionCommandOutput> {
    return deserializeAws_json1_1UnlabelParameterVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
