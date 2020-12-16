import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UnpeerVpcRequest, UnpeerVpcResult } from "../models/models_1";
import { deserializeAws_json1_1UnpeerVpcCommand, serializeAws_json1_1UnpeerVpcCommand } from "../protocols/Aws_json1_1";
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

export type UnpeerVpcCommandInput = UnpeerVpcRequest;
export type UnpeerVpcCommandOutput = UnpeerVpcResult & __MetadataBearer;

/**
 * <p>Attempts to unpeer the Lightsail VPC from the user's default VPC.</p>
 */
export class UnpeerVpcCommand extends $Command<
  UnpeerVpcCommandInput,
  UnpeerVpcCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnpeerVpcCommandInput) {
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
  ): Handler<UnpeerVpcCommandInput, UnpeerVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UnpeerVpcCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnpeerVpcRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UnpeerVpcResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnpeerVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UnpeerVpcCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnpeerVpcCommandOutput> {
    return deserializeAws_json1_1UnpeerVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
