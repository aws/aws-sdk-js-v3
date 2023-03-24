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
  ApplySecurityGroupsToClientVpnTargetNetworkRequest,
  ApplySecurityGroupsToClientVpnTargetNetworkResult,
} from "../models/models_0";
import {
  deserializeAws_ec2ApplySecurityGroupsToClientVpnTargetNetworkCommand,
  serializeAws_ec2ApplySecurityGroupsToClientVpnTargetNetworkCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link ApplySecurityGroupsToClientVpnTargetNetworkCommand}.
 */
export interface ApplySecurityGroupsToClientVpnTargetNetworkCommandInput
  extends ApplySecurityGroupsToClientVpnTargetNetworkRequest {}
/**
 * @public
 *
 * The output of {@link ApplySecurityGroupsToClientVpnTargetNetworkCommand}.
 */
export interface ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput
  extends ApplySecurityGroupsToClientVpnTargetNetworkResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Applies a security group to the association between the target network and the Client VPN endpoint. This action replaces the existing
 * 			security groups with the specified security groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ApplySecurityGroupsToClientVpnTargetNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ApplySecurityGroupsToClientVpnTargetNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = {
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   SecurityGroupIds: [ // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ApplySecurityGroupsToClientVpnTargetNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ApplySecurityGroupsToClientVpnTargetNetworkCommandInput - {@link ApplySecurityGroupsToClientVpnTargetNetworkCommandInput}
 * @returns {@link ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput}
 * @see {@link ApplySecurityGroupsToClientVpnTargetNetworkCommandInput} for command's `input` shape.
 * @see {@link ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class ApplySecurityGroupsToClientVpnTargetNetworkCommand extends $Command<
  ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
  ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput) {
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
  ): Handler<
    ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ApplySecurityGroupsToClientVpnTargetNetworkCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ApplySecurityGroupsToClientVpnTargetNetworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ApplySecurityGroupsToClientVpnTargetNetworkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput> {
    return deserializeAws_ec2ApplySecurityGroupsToClientVpnTargetNetworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
