import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceRequest, GetInstanceResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetInstanceCommand,
  serializeAws_json1_1GetInstanceCommand,
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

export type GetInstanceCommandInput = GetInstanceRequest;
export type GetInstanceCommandOutput = GetInstanceResult & __MetadataBearer;

/**
 * <p>Returns information about a specific Amazon Lightsail instance, which is a virtual private
 *       server.</p>
 */
export class GetInstanceCommand extends $Command<
  GetInstanceCommandInput,
  GetInstanceCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInstanceCommandInput) {
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
  ): Handler<GetInstanceCommandInput, GetInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInstanceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstanceCommandOutput> {
    return deserializeAws_json1_1GetInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
