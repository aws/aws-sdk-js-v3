import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTrafficMirrorSessionRequest, CreateTrafficMirrorSessionResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateTrafficMirrorSessionCommand,
  serializeAws_ec2CreateTrafficMirrorSessionCommand,
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

export type CreateTrafficMirrorSessionCommandInput = CreateTrafficMirrorSessionRequest;
export type CreateTrafficMirrorSessionCommandOutput = CreateTrafficMirrorSessionResult & __MetadataBearer;

/**
 * <p>Creates a Traffic Mirror session.</p>
 *          <p>A Traffic Mirror session actively copies packets from a Traffic Mirror source to a Traffic Mirror target. Create a filter, and then assign it
 *          to the session to define a subset of the traffic to mirror, for example all TCP
 *          traffic.</p>
 *          <p>The Traffic Mirror source and the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in a different VPC connected via VPC peering or a transit gateway. </p>
 *          <p>By default, no traffic is mirrored. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilter.htm">CreateTrafficMirrorFilter</a> to
 *          create filter rules that specify the traffic to mirror.</p>
 */
export class CreateTrafficMirrorSessionCommand extends $Command<
  CreateTrafficMirrorSessionCommandInput,
  CreateTrafficMirrorSessionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTrafficMirrorSessionCommandInput) {
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
  ): Handler<CreateTrafficMirrorSessionCommandInput, CreateTrafficMirrorSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTrafficMirrorSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrafficMirrorSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTrafficMirrorSessionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrafficMirrorSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTrafficMirrorSessionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTrafficMirrorSessionCommandOutput> {
    return deserializeAws_ec2CreateTrafficMirrorSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
