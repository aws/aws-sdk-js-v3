import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifySpotFleetRequestRequest, ModifySpotFleetRequestResponse } from "../models/models_4";
import {
  deserializeAws_ec2ModifySpotFleetRequestCommand,
  serializeAws_ec2ModifySpotFleetRequestCommand,
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

export type ModifySpotFleetRequestCommandInput = ModifySpotFleetRequestRequest;
export type ModifySpotFleetRequestCommandOutput = ModifySpotFleetRequestResponse & __MetadataBearer;

/**
 * <p>Modifies the specified Spot Fleet request.</p>
 *          <p>You can only modify a Spot Fleet request of type <code>maintain</code>.</p>
 *          <p>While the Spot Fleet request is being modified, it is in the <code>modifying</code> state.</p>
 *          <p>To scale up your Spot Fleet, increase its target capacity. The Spot Fleet launches the
 *             additional Spot Instances according to the allocation strategy for the Spot Fleet
 *             request. If the allocation strategy is <code>lowestPrice</code>, the Spot Fleet launches
 *             instances using the Spot Instance pool with the lowest price. If the allocation strategy
 *             is <code>diversified</code>, the Spot Fleet distributes the instances across the Spot
 *             Instance pools. If the allocation strategy is <code>capacityOptimized</code>, Spot Fleet
 *             launches instances from Spot Instance pools with optimal capacity for the number of instances
 *             that are launching.</p>
 *          <p>To scale down your Spot Fleet, decrease its target capacity. First, the Spot Fleet
 *             cancels any open requests that exceed the new target capacity. You can request that the
 *             Spot Fleet terminate Spot Instances until the size of the fleet no longer exceeds the
 *             new target capacity. If the allocation strategy is <code>lowestPrice</code>, the Spot
 *             Fleet terminates the instances with the highest price per unit. If the allocation
 *             strategy is <code>capacityOptimized</code>, the Spot Fleet terminates the instances in
 *             the Spot Instance pools that have the least available Spot Instance capacity. If the allocation
 *             strategy is <code>diversified</code>, the Spot Fleet terminates instances across the
 *             Spot Instance pools. Alternatively, you can request that the Spot Fleet keep the fleet
 *             at its current size, but not replace any Spot Instances that are interrupted or that you
 *             terminate manually.</p>
 *          <p>If you are finished with your Spot Fleet for now, but will use it again later, you can set the
 *        target capacity to 0.</p>
 */
export class ModifySpotFleetRequestCommand extends $Command<
  ModifySpotFleetRequestCommandInput,
  ModifySpotFleetRequestCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifySpotFleetRequestCommandInput) {
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
  ): Handler<ModifySpotFleetRequestCommandInput, ModifySpotFleetRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifySpotFleetRequestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifySpotFleetRequestRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifySpotFleetRequestResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifySpotFleetRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifySpotFleetRequestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySpotFleetRequestCommandOutput> {
    return deserializeAws_ec2ModifySpotFleetRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
