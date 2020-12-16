import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetOperationsForResourceRequest, GetOperationsForResourceResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetOperationsForResourceCommand,
  serializeAws_json1_1GetOperationsForResourceCommand,
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

export type GetOperationsForResourceCommandInput = GetOperationsForResourceRequest;
export type GetOperationsForResourceCommandOutput = GetOperationsForResourceResult & __MetadataBearer;

/**
 * <p>Gets operations for a specific resource (e.g., an instance or a static IP).</p>
 */
export class GetOperationsForResourceCommand extends $Command<
  GetOperationsForResourceCommandInput,
  GetOperationsForResourceCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOperationsForResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOperationsForResourceCommandInput, GetOperationsForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetOperationsForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOperationsForResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOperationsForResourceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOperationsForResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOperationsForResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOperationsForResourceCommandOutput> {
    return deserializeAws_json1_1GetOperationsForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
