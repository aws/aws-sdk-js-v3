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
  ModifyInstanceEventWindowRequest,
  ModifyInstanceEventWindowRequestFilterSensitiveLog,
  ModifyInstanceEventWindowResult,
  ModifyInstanceEventWindowResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ModifyInstanceEventWindowCommand,
  serializeAws_ec2ModifyInstanceEventWindowCommand,
} from "../protocols/Aws_ec2";

export interface ModifyInstanceEventWindowCommandInput extends ModifyInstanceEventWindowRequest {}
export interface ModifyInstanceEventWindowCommandOutput extends ModifyInstanceEventWindowResult, __MetadataBearer {}

/**
 * <p>Modifies the specified event window.</p>
 *          <p>You can define either a set of time ranges or a cron expression when modifying the event
 *          window, but not both.</p>
 *          <p>To modify the targets associated with the event window, use the <a>AssociateInstanceEventWindow</a> and <a>DisassociateInstanceEventWindow</a> API.</p>
 *          <p>If Amazon Web Services has already scheduled an event, modifying an event window won't change the time
 *          of the scheduled event.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceEventWindowCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceEventWindowCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceEventWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceEventWindowCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceEventWindowCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyInstanceEventWindowCommand extends $Command<
  ModifyInstanceEventWindowCommandInput,
  ModifyInstanceEventWindowCommandOutput,
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

  constructor(readonly input: ModifyInstanceEventWindowCommandInput) {
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
  ): Handler<ModifyInstanceEventWindowCommandInput, ModifyInstanceEventWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyInstanceEventWindowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstanceEventWindowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyInstanceEventWindowRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyInstanceEventWindowResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyInstanceEventWindowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyInstanceEventWindowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyInstanceEventWindowCommandOutput> {
    return deserializeAws_ec2ModifyInstanceEventWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
