import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DetachClassicLinkVpcRequest, DetachClassicLinkVpcResult } from "../models/models_3";
import {
  deserializeAws_ec2DetachClassicLinkVpcCommand,
  serializeAws_ec2DetachClassicLinkVpcCommand,
} from "../protocols/Aws_ec2";
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

export type DetachClassicLinkVpcCommandInput = DetachClassicLinkVpcRequest;
export type DetachClassicLinkVpcCommandOutput = DetachClassicLinkVpcResult & __MetadataBearer;

/**
 * <p>Unlinks (detaches) a linked EC2-Classic instance from a VPC. After the instance has been unlinked, the VPC security groups are no longer associated with it. An instance is automatically unlinked from a VPC when it's stopped.</p>
 */
export class DetachClassicLinkVpcCommand extends $Command<
  DetachClassicLinkVpcCommandInput,
  DetachClassicLinkVpcCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachClassicLinkVpcCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachClassicLinkVpcCommandInput, DetachClassicLinkVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DetachClassicLinkVpcCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachClassicLinkVpcRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetachClassicLinkVpcResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachClassicLinkVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DetachClassicLinkVpcCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachClassicLinkVpcCommandOutput> {
    return deserializeAws_ec2DetachClassicLinkVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
