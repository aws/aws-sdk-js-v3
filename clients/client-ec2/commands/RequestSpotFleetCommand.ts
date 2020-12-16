import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RequestSpotFleetRequest, RequestSpotFleetResponse } from "../models/models_4";
import {
  deserializeAws_ec2RequestSpotFleetCommand,
  serializeAws_ec2RequestSpotFleetCommand,
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

export type RequestSpotFleetCommandInput = RequestSpotFleetRequest;
export type RequestSpotFleetCommandOutput = RequestSpotFleetResponse & __MetadataBearer;

/**
 * <p>Creates a Spot Fleet request.</p>
 *         <p>The Spot Fleet request specifies the total target capacity and the On-Demand target
 *             capacity. Amazon EC2 calculates the difference between the total capacity and On-Demand
 *             capacity, and launches the difference as Spot capacity.</p>
 *          <p>You can submit a single request that includes multiple launch specifications that vary by instance type, AMI, Availability Zone, or subnet.</p>
 *          <p>By default, the Spot Fleet requests Spot Instances in the Spot Instance pool where the
 *             price per unit is the lowest. Each launch specification can include its own instance
 *             weighting that reflects the value of the instance type to your application
 *             workload.</p>
 *          <p>Alternatively, you can specify that the Spot Fleet distribute the target capacity across the Spot pools included in its launch specifications. By ensuring that the Spot Instances in your Spot Fleet are in different Spot pools, you can improve the availability of your fleet.</p>
 *          <p>You can specify tags for the Spot Fleet request and instances launched by the fleet. You
 *             cannot tag other resource types in a Spot Fleet request because only the
 *                 <code>spot-fleet-request</code> and <code>instance</code> resource types are
 *             supported.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html">Spot Fleet requests</a>
 *        in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 */
export class RequestSpotFleetCommand extends $Command<
  RequestSpotFleetCommandInput,
  RequestSpotFleetCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RequestSpotFleetCommandInput) {
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
  ): Handler<RequestSpotFleetCommandInput, RequestSpotFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RequestSpotFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RequestSpotFleetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RequestSpotFleetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RequestSpotFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RequestSpotFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RequestSpotFleetCommandOutput> {
    return deserializeAws_ec2RequestSpotFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
