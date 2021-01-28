import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstancePlacementRequest, ModifyInstancePlacementResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyInstancePlacementCommand,
  serializeAws_ec2ModifyInstancePlacementCommand,
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

export type ModifyInstancePlacementCommandInput = ModifyInstancePlacementRequest;
export type ModifyInstancePlacementCommandOutput = ModifyInstancePlacementResult & __MetadataBearer;

/**
 * <p>Modifies the placement attributes for a specified instance. You can do the
 *             following:</p>
 *         <ul>
 *             <li>
 *                 <p>Modify the affinity between an instance and a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated
 *                         Host</a>. When affinity is set to <code>host</code> and the instance is
 *                     not associated with a specific Dedicated Host, the next time the instance is
 *                     launched, it is automatically associated with the host on which it lands. If the
 *                     instance is restarted or rebooted, this relationship persists.</p>
 *             </li>
 *             <li>
 *                 <p>Change the Dedicated Host with which an instance is associated.</p>
 *             </li>
 *             <li>
 *                 <p>Change the instance tenancy of an instance from <code>host</code> to
 *                         <code>dedicated</code>, or from <code>dedicated</code> to
 *                     <code>host</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Move an instance to or from a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">placement
 *                     group</a>.</p>
 *             </li>
 *          </ul>
 *         <p>At least one attribute for affinity, host ID, tenancy, or placement group name must
 *             be specified in the request. Affinity and tenancy can be modified in the same
 *             request.</p>
 *         <p>To modify the host ID, tenancy, placement group, or partition for an instance, the
 *             instance must be in the <code>stopped</code> state.</p>
 */
export class ModifyInstancePlacementCommand extends $Command<
  ModifyInstancePlacementCommandInput,
  ModifyInstancePlacementCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstancePlacementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyInstancePlacementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyInstancePlacementResult.filterSensitiveLog,
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
