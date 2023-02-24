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
  AssociateInstanceEventWindowRequest,
  AssociateInstanceEventWindowRequestFilterSensitiveLog,
  AssociateInstanceEventWindowResult,
  AssociateInstanceEventWindowResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AssociateInstanceEventWindowCommand,
  serializeAws_ec2AssociateInstanceEventWindowCommand,
} from "../protocols/Aws_ec2";

export interface AssociateInstanceEventWindowCommandInput extends AssociateInstanceEventWindowRequest {}
export interface AssociateInstanceEventWindowCommandOutput
  extends AssociateInstanceEventWindowResult,
    __MetadataBearer {}

/**
 * <p>Associates one or more targets with an event window. Only one type of target (instance IDs,
 *          Dedicated Host IDs, or tags) can be specified with an event window.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateInstanceEventWindowCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateInstanceEventWindowCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateInstanceEventWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateInstanceEventWindowCommandInput} for command's `input` shape.
 * @see {@link AssociateInstanceEventWindowCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AssociateInstanceEventWindowCommand extends $Command<
  AssociateInstanceEventWindowCommandInput,
  AssociateInstanceEventWindowCommandOutput,
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

  constructor(readonly input: AssociateInstanceEventWindowCommandInput) {
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
  ): Handler<AssociateInstanceEventWindowCommandInput, AssociateInstanceEventWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateInstanceEventWindowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateInstanceEventWindowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateInstanceEventWindowRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateInstanceEventWindowResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateInstanceEventWindowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateInstanceEventWindowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateInstanceEventWindowCommandOutput> {
    return deserializeAws_ec2AssociateInstanceEventWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
