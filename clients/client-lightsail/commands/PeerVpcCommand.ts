import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { PeerVpcRequest, PeerVpcResult } from "../models/models_1";
import { deserializeAws_json1_1PeerVpcCommand, serializeAws_json1_1PeerVpcCommand } from "../protocols/Aws_json1_1";
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

export type PeerVpcCommandInput = PeerVpcRequest;
export type PeerVpcCommandOutput = PeerVpcResult & __MetadataBearer;

/**
 * <p>Tries to peer the Lightsail VPC with the user's default VPC.</p>
 */
export class PeerVpcCommand extends $Command<PeerVpcCommandInput, PeerVpcCommandOutput, LightsailClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PeerVpcCommandInput) {
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
  ): Handler<PeerVpcCommandInput, PeerVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "PeerVpcCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PeerVpcRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PeerVpcResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PeerVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PeerVpcCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PeerVpcCommandOutput> {
    return deserializeAws_json1_1PeerVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
