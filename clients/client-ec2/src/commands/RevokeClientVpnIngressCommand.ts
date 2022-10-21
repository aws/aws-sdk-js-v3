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
  RevokeClientVpnIngressRequest,
  RevokeClientVpnIngressRequestFilterSensitiveLog,
  RevokeClientVpnIngressResult,
  RevokeClientVpnIngressResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2RevokeClientVpnIngressCommand,
  serializeAws_ec2RevokeClientVpnIngressCommand,
} from "../protocols/Aws_ec2";

export interface RevokeClientVpnIngressCommandInput extends RevokeClientVpnIngressRequest {}
export interface RevokeClientVpnIngressCommandOutput extends RevokeClientVpnIngressResult, __MetadataBearer {}

/**
 * <p>Removes an ingress authorization rule from a Client VPN endpoint. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RevokeClientVpnIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RevokeClientVpnIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RevokeClientVpnIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeClientVpnIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeClientVpnIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class RevokeClientVpnIngressCommand extends $Command<
  RevokeClientVpnIngressCommandInput,
  RevokeClientVpnIngressCommandOutput,
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

  constructor(readonly input: RevokeClientVpnIngressCommandInput) {
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
  ): Handler<RevokeClientVpnIngressCommandInput, RevokeClientVpnIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeClientVpnIngressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RevokeClientVpnIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeClientVpnIngressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RevokeClientVpnIngressResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeClientVpnIngressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RevokeClientVpnIngressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeClientVpnIngressCommandOutput> {
    return deserializeAws_ec2RevokeClientVpnIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
