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
  ModifyInstancePlacementRequest,
  ModifyInstancePlacementRequestFilterSensitiveLog,
  ModifyInstancePlacementResult,
  ModifyInstancePlacementResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ModifyInstancePlacementCommand,
  serializeAws_ec2ModifyInstancePlacementCommand,
} from "../protocols/Aws_ec2";

export interface ModifyInstancePlacementCommandInput extends ModifyInstancePlacementRequest {}
export interface ModifyInstancePlacementCommandOutput extends ModifyInstancePlacementResult, __MetadataBearer {}

/**
 * <p>Modifies the placement attributes for a specified instance. You can do the
 *             following:</p>
 *          <ul>
 *             <li>
 *                <p>Modify the affinity between an instance and a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated
 *                         Host</a>. When affinity is set to <code>host</code> and the instance is
 *                     not associated with a specific Dedicated Host, the next time the instance is
 *                     launched, it is automatically associated with the host on which it lands. If the
 *                     instance is restarted or rebooted, this relationship persists.</p>
 *             </li>
 *             <li>
 *                <p>Change the Dedicated Host with which an instance is associated.</p>
 *             </li>
 *             <li>
 *                <p>Change the instance tenancy of an instance.</p>
 *             </li>
 *             <li>
 *                <p>Move an instance to or from a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">placement
 *                     group</a>.</p>
 *             </li>
 *          </ul>
 *          <p>At least one attribute for affinity, host ID, tenancy, or placement group name must be
 *             specified in the request. Affinity and tenancy can be modified in the same
 *             request.</p>
 *          <p>To modify the host ID, tenancy, placement group, or partition for an instance, the
 *             instance must be in the <code>stopped</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstancePlacementCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstancePlacementCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstancePlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstancePlacementCommandInput} for command's `input` shape.
 * @see {@link ModifyInstancePlacementCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyInstancePlacementCommand extends $Command<
  ModifyInstancePlacementCommandInput,
  ModifyInstancePlacementCommandOutput,
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

  constructor(readonly input: ModifyInstancePlacementCommandInput) {
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
  ): Handler<ModifyInstancePlacementCommandInput, ModifyInstancePlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyInstancePlacementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstancePlacementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyInstancePlacementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyInstancePlacementResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyInstancePlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyInstancePlacementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyInstancePlacementCommandOutput> {
    return deserializeAws_ec2ModifyInstancePlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
