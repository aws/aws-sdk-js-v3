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
  DisassociateTrunkInterfaceRequest,
  DisassociateTrunkInterfaceRequestFilterSensitiveLog,
  DisassociateTrunkInterfaceResult,
  DisassociateTrunkInterfaceResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2DisassociateTrunkInterfaceCommand,
  serializeAws_ec2DisassociateTrunkInterfaceCommand,
} from "../protocols/Aws_ec2";

export interface DisassociateTrunkInterfaceCommandInput extends DisassociateTrunkInterfaceRequest {}
export interface DisassociateTrunkInterfaceCommandOutput extends DisassociateTrunkInterfaceResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This API action is currently in <b>limited preview only</b>.
 *                 If you are interested in using this feature, contact your account manager.</p>
 *          </note>
 *          <p>Removes an association between a branch network interface with a trunk network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTrunkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTrunkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateTrunkInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTrunkInterfaceCommandInput} for command's `input` shape.
 * @see {@link DisassociateTrunkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DisassociateTrunkInterfaceCommand extends $Command<
  DisassociateTrunkInterfaceCommandInput,
  DisassociateTrunkInterfaceCommandOutput,
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

  constructor(readonly input: DisassociateTrunkInterfaceCommandInput) {
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
  ): Handler<DisassociateTrunkInterfaceCommandInput, DisassociateTrunkInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateTrunkInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateTrunkInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateTrunkInterfaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateTrunkInterfaceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateTrunkInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateTrunkInterfaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateTrunkInterfaceCommandOutput> {
    return deserializeAws_ec2DisassociateTrunkInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
