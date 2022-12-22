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
  DisassociateTransitGatewayPolicyTableRequest,
  DisassociateTransitGatewayPolicyTableRequestFilterSensitiveLog,
  DisassociateTransitGatewayPolicyTableResult,
  DisassociateTransitGatewayPolicyTableResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2DisassociateTransitGatewayPolicyTableCommand,
  serializeAws_ec2DisassociateTransitGatewayPolicyTableCommand,
} from "../protocols/Aws_ec2";

export interface DisassociateTransitGatewayPolicyTableCommandInput
  extends DisassociateTransitGatewayPolicyTableRequest {}
export interface DisassociateTransitGatewayPolicyTableCommandOutput
  extends DisassociateTransitGatewayPolicyTableResult,
    __MetadataBearer {}

/**
 * <p>Removes the association between an an attachment and a policy table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTransitGatewayPolicyTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTransitGatewayPolicyTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateTransitGatewayPolicyTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTransitGatewayPolicyTableCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayPolicyTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DisassociateTransitGatewayPolicyTableCommand extends $Command<
  DisassociateTransitGatewayPolicyTableCommandInput,
  DisassociateTransitGatewayPolicyTableCommandOutput,
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

  constructor(readonly input: DisassociateTransitGatewayPolicyTableCommandInput) {
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
  ): Handler<DisassociateTransitGatewayPolicyTableCommandInput, DisassociateTransitGatewayPolicyTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateTransitGatewayPolicyTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateTransitGatewayPolicyTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateTransitGatewayPolicyTableRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateTransitGatewayPolicyTableResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateTransitGatewayPolicyTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateTransitGatewayPolicyTableCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateTransitGatewayPolicyTableCommandOutput> {
    return deserializeAws_ec2DisassociateTransitGatewayPolicyTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
