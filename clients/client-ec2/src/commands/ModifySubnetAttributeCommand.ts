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
import { ModifySubnetAttributeRequest, ModifySubnetAttributeRequestFilterSensitiveLog } from "../models/models_6";
import {
  deserializeAws_ec2ModifySubnetAttributeCommand,
  serializeAws_ec2ModifySubnetAttributeCommand,
} from "../protocols/Aws_ec2";

export interface ModifySubnetAttributeCommandInput extends ModifySubnetAttributeRequest {}
export interface ModifySubnetAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies a subnet attribute. You can only modify one attribute at a time.</p>
 *          <p>Use this action to modify subnets on Amazon Web Services Outposts.</p>
 *          <ul>
 *             <li>
 *                <p>To modify a subnet on an Outpost rack, set both
 *                         <code>MapCustomerOwnedIpOnLaunch</code> and
 *                         <code>CustomerOwnedIpv4Pool</code>. These two parameters act as a single
 *                     attribute.</p>
 *             </li>
 *             <li>
 *                <p>To modify a subnet on an Outpost server, set either
 *                         <code>EnableLniAtDeviceIndex</code> or
 *                     <code>DisableLniAtDeviceIndex</code>.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about Amazon Web Services Outposts, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/outposts/latest/userguide/how-servers-work.html">Outpost servers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/outposts/latest/userguide/how-racks-work.html">Outpost racks</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySubnetAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySubnetAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifySubnetAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySubnetAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifySubnetAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifySubnetAttributeCommand extends $Command<
  ModifySubnetAttributeCommandInput,
  ModifySubnetAttributeCommandOutput,
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

  constructor(readonly input: ModifySubnetAttributeCommandInput) {
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
  ): Handler<ModifySubnetAttributeCommandInput, ModifySubnetAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifySubnetAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifySubnetAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifySubnetAttributeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifySubnetAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifySubnetAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySubnetAttributeCommandOutput> {
    return deserializeAws_ec2ModifySubnetAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
