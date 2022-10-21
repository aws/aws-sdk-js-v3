// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CreateTrafficMirrorTargetRequest,
  CreateTrafficMirrorTargetRequestFilterSensitiveLog,
  CreateTrafficMirrorTargetResult,
  CreateTrafficMirrorTargetResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2CreateTrafficMirrorTargetCommand,
  serializeAws_ec2CreateTrafficMirrorTargetCommand,
} from "../protocols/Aws_ec2";

export interface CreateTrafficMirrorTargetCommandInput extends CreateTrafficMirrorTargetRequest {}
export interface CreateTrafficMirrorTargetCommandOutput extends CreateTrafficMirrorTargetResult, __MetadataBearer {}

/**
 * <p>Creates a target for your Traffic Mirror session.</p>
 *          <p>A Traffic Mirror target is the destination for mirrored traffic. The Traffic Mirror source and
 *          the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in
 *          different VPCs connected via VPC peering or a transit gateway.</p>
 *          <p>A Traffic Mirror target can be a network interface, a Network Load Balancer, or a Gateway Load Balancer endpoint.</p>
 *          <p>To use the target in a Traffic Mirror session, use  <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorSession.htm">CreateTrafficMirrorSession</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorTargetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorTargetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTrafficMirrorTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrafficMirrorTargetCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorTargetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateTrafficMirrorTargetCommand extends $Command<
  CreateTrafficMirrorTargetCommandInput,
  CreateTrafficMirrorTargetCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTrafficMirrorTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTrafficMirrorTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrafficMirrorTargetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTrafficMirrorTargetResultFilterSensitiveLog,
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
