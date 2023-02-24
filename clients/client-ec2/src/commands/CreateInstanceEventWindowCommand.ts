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
  CreateInstanceEventWindowRequest,
  CreateInstanceEventWindowRequestFilterSensitiveLog,
  CreateInstanceEventWindowResult,
  CreateInstanceEventWindowResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateInstanceEventWindowCommand,
  serializeAws_ec2CreateInstanceEventWindowCommand,
} from "../protocols/Aws_ec2";

export interface CreateInstanceEventWindowCommandInput extends CreateInstanceEventWindowRequest {}
export interface CreateInstanceEventWindowCommandOutput extends CreateInstanceEventWindowResult, __MetadataBearer {}

/**
 * <p>Creates an event window in which scheduled events for the associated Amazon EC2 instances can
 *          run.</p>
 *          <p>You can define either a set of time ranges or a cron expression when creating the event
 *          window, but not both. All event window times are in UTC.</p>
 *          <p>You can create up to 200 event windows per Amazon Web Services Region.</p>
 *          <p>When you create the event window, targets (instance IDs, Dedicated Host IDs, or tags)
 *          are not yet associated with it. To ensure that the event window can be used, you must
 *          associate one or more targets with it by using the <a>AssociateInstanceEventWindow</a> API.</p>
 *          <important>
 *             <p>Event windows are applicable only for scheduled events that stop, reboot, or
 *             terminate instances.</p>
 *             <p>Event windows are <i>not</i> applicable for:</p>
 *             <ul>
 *                <li>
 *                   <p>Expedited scheduled events and network maintenance events. </p>
 *                </li>
 *                <li>
 *                   <p>Unscheduled maintenance such as AutoRecovery and unplanned reboots.</p>
 *                </li>
 *             </ul>
 *          </important>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateInstanceEventWindowCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateInstanceEventWindowCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateInstanceEventWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceEventWindowCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceEventWindowCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateInstanceEventWindowCommand extends $Command<
  CreateInstanceEventWindowCommandInput,
  CreateInstanceEventWindowCommandOutput,
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

  constructor(readonly input: CreateInstanceEventWindowCommandInput) {
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
  ): Handler<CreateInstanceEventWindowCommandInput, CreateInstanceEventWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInstanceEventWindowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateInstanceEventWindowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInstanceEventWindowRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateInstanceEventWindowResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateInstanceEventWindowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateInstanceEventWindowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateInstanceEventWindowCommandOutput> {
    return deserializeAws_ec2CreateInstanceEventWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
