import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetSamplingTargetsRequest, GetSamplingTargetsResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetSamplingTargetsCommand,
  serializeAws_restJson1GetSamplingTargetsCommand,
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

export type GetSamplingTargetsCommandInput = GetSamplingTargetsRequest;
export type GetSamplingTargetsCommandOutput = GetSamplingTargetsResult & __MetadataBearer;

/**
 * <p>Requests a sampling quota for rules that the service is using to sample requests.
 *       </p>
 */
export class GetSamplingTargetsCommand extends $Command<
  GetSamplingTargetsCommandInput,
  GetSamplingTargetsCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSamplingTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSamplingTargetsCommandInput, GetSamplingTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetSamplingTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSamplingTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSamplingTargetsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSamplingTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSamplingTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSamplingTargetsCommandOutput> {
    return deserializeAws_restJson1GetSamplingTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
