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
  AssociateTransitGatewayPolicyTableRequest,
  AssociateTransitGatewayPolicyTableRequestFilterSensitiveLog,
  AssociateTransitGatewayPolicyTableResult,
  AssociateTransitGatewayPolicyTableResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AssociateTransitGatewayPolicyTableCommand,
  serializeAws_ec2AssociateTransitGatewayPolicyTableCommand,
} from "../protocols/Aws_ec2";

export interface AssociateTransitGatewayPolicyTableCommandInput extends AssociateTransitGatewayPolicyTableRequest {}
export interface AssociateTransitGatewayPolicyTableCommandOutput
  extends AssociateTransitGatewayPolicyTableResult,
    __MetadataBearer {}

/**
 * <p>Associates the specified transit gateway attachment with a transit gateway policy table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTransitGatewayPolicyTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTransitGatewayPolicyTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateTransitGatewayPolicyTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTransitGatewayPolicyTableCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayPolicyTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AssociateTransitGatewayPolicyTableCommand extends $Command<
  AssociateTransitGatewayPolicyTableCommandInput,
  AssociateTransitGatewayPolicyTableCommandOutput,
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

  constructor(readonly input: AssociateTransitGatewayPolicyTableCommandInput) {
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
  ): Handler<AssociateTransitGatewayPolicyTableCommandInput, AssociateTransitGatewayPolicyTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateTransitGatewayPolicyTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateTransitGatewayPolicyTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateTransitGatewayPolicyTableRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateTransitGatewayPolicyTableResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateTransitGatewayPolicyTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateTransitGatewayPolicyTableCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateTransitGatewayPolicyTableCommandOutput> {
    return deserializeAws_ec2AssociateTransitGatewayPolicyTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
