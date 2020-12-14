import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTrafficMirrorTargetRequest, CreateTrafficMirrorTargetResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateTrafficMirrorTargetCommand,
  serializeAws_ec2CreateTrafficMirrorTargetCommand,
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

export type CreateTrafficMirrorTargetCommandInput = CreateTrafficMirrorTargetRequest;
export type CreateTrafficMirrorTargetCommandOutput = CreateTrafficMirrorTargetResult & __MetadataBearer;

/**
 * <p>Creates a target for your Traffic Mirror session.</p>
 *          <p>A Traffic Mirror target is the destination for mirrored traffic. The Traffic Mirror source and
 *          the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in
 *          different VPCs connected via VPC peering or a transit gateway.</p>
 *          <p>A Traffic Mirror target can be a network interface, or a Network Load Balancer.</p>
 *          <p>To use the target in a Traffic Mirror session, use  <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorSession.htm">CreateTrafficMirrorSession</a>.</p>
 */
export class CreateTrafficMirrorTargetCommand extends $Command<
  CreateTrafficMirrorTargetCommandInput,
  CreateTrafficMirrorTargetCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTrafficMirrorTargetCommandInput) {
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
  ): Handler<CreateTrafficMirrorTargetCommandInput, CreateTrafficMirrorTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTrafficMirrorTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrafficMirrorTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTrafficMirrorTargetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrafficMirrorTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTrafficMirrorTargetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTrafficMirrorTargetCommandOutput> {
    return deserializeAws_ec2CreateTrafficMirrorTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
