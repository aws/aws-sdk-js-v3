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
  ModifyFleetRequest,
  ModifyFleetRequestFilterSensitiveLog,
  ModifyFleetResult,
  ModifyFleetResultFilterSensitiveLog,
} from "../models/models_6";
import { deserializeAws_ec2ModifyFleetCommand, serializeAws_ec2ModifyFleetCommand } from "../protocols/Aws_ec2";

export interface ModifyFleetCommandInput extends ModifyFleetRequest {}
export interface ModifyFleetCommandOutput extends ModifyFleetResult, __MetadataBearer {}

/**
 * <p>Modifies the specified EC2 Fleet.</p>
 *          <p>You can only modify an EC2 Fleet request of type <code>maintain</code>.</p>
 *          <p>While the EC2 Fleet is being modified, it is in the <code>modifying</code> state.</p>
 *          <p>To scale up your EC2 Fleet, increase its target capacity. The EC2 Fleet launches the additional
 *          Spot Instances according to the allocation strategy for the EC2 Fleet request. If the allocation
 *          strategy is <code>lowest-price</code>, the EC2 Fleet launches instances using the Spot Instance
 *          pool with the lowest price. If the allocation strategy is <code>diversified</code>, the
 *          EC2 Fleet distributes the instances across the Spot Instance pools. If the allocation strategy
 *          is <code>capacity-optimized</code>, EC2 Fleet launches instances from Spot Instance pools with optimal
 *          capacity for the number of instances that are launching.</p>
 *          <p>To scale down your EC2 Fleet, decrease its target capacity. First, the EC2 Fleet cancels any open
 *          requests that exceed the new target capacity. You can request that the EC2 Fleet terminate Spot
 *          Instances until the size of the fleet no longer exceeds the new target capacity. If the
 *          allocation strategy is <code>lowest-price</code>, the EC2 Fleet terminates the instances with
 *          the highest price per unit. If the allocation strategy is <code>capacity-optimized</code>,
 *          the EC2 Fleet terminates the instances in the Spot Instance pools that have the least available
 *          Spot Instance capacity. If the allocation strategy is <code>diversified</code>, the EC2 Fleet terminates
 *          instances across the Spot Instance pools. Alternatively, you can request that the EC2 Fleet keep
 *          the fleet at its current size, but not replace any Spot Instances that are interrupted or
 *          that you terminate manually.</p>
 *          <p>If you are finished with your EC2 Fleet for now, but will use it again later, you can set the
 *          target capacity to 0.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyFleetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyFleetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyFleetCommandInput} for command's `input` shape.
 * @see {@link ModifyFleetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyFleetCommand extends $Command<
  ModifyFleetCommandInput,
  ModifyFleetCommandOutput,
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

  constructor(readonly input: ModifyFleetCommandInput) {
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
  ): Handler<ModifyFleetCommandInput, ModifyFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ModifyFleetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyFleetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyFleetResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyFleetCommandOutput> {
    return deserializeAws_ec2ModifyFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
