// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RevokeClientVpnIngressRequest, RevokeClientVpnIngressResult } from "../models/models_6";
import { de_RevokeClientVpnIngressCommand, se_RevokeClientVpnIngressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RevokeClientVpnIngressCommand}.
 */
export interface RevokeClientVpnIngressCommandInput extends RevokeClientVpnIngressRequest {}
/**
 * @public
 *
 * The output of {@link RevokeClientVpnIngressCommand}.
 */
export interface RevokeClientVpnIngressCommandOutput extends RevokeClientVpnIngressResult, __MetadataBearer {}

/**
 * @public
 * <p>Removes an ingress authorization rule from a Client VPN endpoint. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RevokeClientVpnIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RevokeClientVpnIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RevokeClientVpnIngressRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   TargetNetworkCidr: "STRING_VALUE", // required
 *   AccessGroupId: "STRING_VALUE",
 *   RevokeAllGroups: true || false,
 *   DryRun: true || false,
 * };
 * const command = new RevokeClientVpnIngressCommand(input);
 * const response = await client.send(command);
 * // { // RevokeClientVpnIngressResult
 * //   Status: { // ClientVpnAuthorizationRuleStatus
 * //     Code: "authorizing" || "active" || "failed" || "revoking",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RevokeClientVpnIngressCommandInput - {@link RevokeClientVpnIngressCommandInput}
 * @returns {@link RevokeClientVpnIngressCommandOutput}
 * @see {@link RevokeClientVpnIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeClientVpnIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "RevokeClientVpnIngress",
      },
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
  private serialize(input: RevokeClientVpnIngressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RevokeClientVpnIngressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeClientVpnIngressCommandOutput> {
    return de_RevokeClientVpnIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
