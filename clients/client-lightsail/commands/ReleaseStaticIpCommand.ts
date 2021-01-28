import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { ReleaseStaticIpRequest, ReleaseStaticIpResult } from "../models/models_1";
import {
  deserializeAws_json1_1ReleaseStaticIpCommand,
  serializeAws_json1_1ReleaseStaticIpCommand,
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

export type ReleaseStaticIpCommandInput = ReleaseStaticIpRequest;
export type ReleaseStaticIpCommandOutput = ReleaseStaticIpResult & __MetadataBearer;

/**
 * <p>Deletes a specific static IP from your account.</p>
 */
export class ReleaseStaticIpCommand extends $Command<
  ReleaseStaticIpCommandInput,
  ReleaseStaticIpCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReleaseStaticIpCommandInput) {
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
  ): Handler<ReleaseStaticIpCommandInput, ReleaseStaticIpCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "ReleaseStaticIpCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReleaseStaticIpRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ReleaseStaticIpResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReleaseStaticIpCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ReleaseStaticIpCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReleaseStaticIpCommandOutput> {
    return deserializeAws_json1_1ReleaseStaticIpCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
