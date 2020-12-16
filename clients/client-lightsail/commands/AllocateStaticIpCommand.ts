import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AllocateStaticIpRequest, AllocateStaticIpResult } from "../models/models_0";
import {
  deserializeAws_json1_1AllocateStaticIpCommand,
  serializeAws_json1_1AllocateStaticIpCommand,
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

export type AllocateStaticIpCommandInput = AllocateStaticIpRequest;
export type AllocateStaticIpCommandOutput = AllocateStaticIpResult & __MetadataBearer;

/**
 * <p>Allocates a static IP address.</p>
 */
export class AllocateStaticIpCommand extends $Command<
  AllocateStaticIpCommandInput,
  AllocateStaticIpCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AllocateStaticIpCommandInput) {
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
  ): Handler<AllocateStaticIpCommandInput, AllocateStaticIpCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "AllocateStaticIpCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AllocateStaticIpRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AllocateStaticIpResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AllocateStaticIpCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AllocateStaticIpCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AllocateStaticIpCommandOutput> {
    return deserializeAws_json1_1AllocateStaticIpCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
