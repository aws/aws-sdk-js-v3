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
import { ProvisionIpamPoolCidrRequest, ProvisionIpamPoolCidrResult } from "../models/models_6";
import { de_ProvisionIpamPoolCidrCommand, se_ProvisionIpamPoolCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ProvisionIpamPoolCidrCommand}.
 */
export interface ProvisionIpamPoolCidrCommandInput extends ProvisionIpamPoolCidrRequest {}
/**
 * @public
 *
 * The output of {@link ProvisionIpamPoolCidrCommand}.
 */
export interface ProvisionIpamPoolCidrCommandOutput extends ProvisionIpamPoolCidrResult, __MetadataBearer {}

/**
 * @public
 * <p>Provision a CIDR to an IPAM pool. You can use this action to provision new CIDRs to a top-level pool or to transfer a CIDR from a top-level pool to a pool within it.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/prov-cidr-ipam.html">Provision CIDRs to pools</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ProvisionIpamPoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ProvisionIpamPoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ProvisionIpamPoolCidrRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE",
 *   CidrAuthorizationContext: { // IpamCidrAuthorizationContext
 *     Message: "STRING_VALUE",
 *     Signature: "STRING_VALUE",
 *   },
 *   NetmaskLength: Number("int"),
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ProvisionIpamPoolCidrCommand(input);
 * const response = await client.send(command);
 * // { // ProvisionIpamPoolCidrResult
 * //   IpamPoolCidr: { // IpamPoolCidr
 * //     Cidr: "STRING_VALUE",
 * //     State: "pending-provision" || "provisioned" || "failed-provision" || "pending-deprovision" || "deprovisioned" || "failed-deprovision" || "pending-import" || "failed-import",
 * //     FailureReason: { // IpamPoolCidrFailureReason
 * //       Code: "cidr-not-available" || "limit-exceeded",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     IpamPoolCidrId: "STRING_VALUE",
 * //     NetmaskLength: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ProvisionIpamPoolCidrCommandInput - {@link ProvisionIpamPoolCidrCommandInput}
 * @returns {@link ProvisionIpamPoolCidrCommandOutput}
 * @see {@link ProvisionIpamPoolCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionIpamPoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ProvisionIpamPoolCidrCommand extends $Command<
  ProvisionIpamPoolCidrCommandInput,
  ProvisionIpamPoolCidrCommandOutput,
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
  constructor(readonly input: ProvisionIpamPoolCidrCommandInput) {
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
  ): Handler<ProvisionIpamPoolCidrCommandInput, ProvisionIpamPoolCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ProvisionIpamPoolCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ProvisionIpamPoolCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ProvisionIpamPoolCidr",
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
  private serialize(input: ProvisionIpamPoolCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ProvisionIpamPoolCidrCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ProvisionIpamPoolCidrCommandOutput> {
    return de_ProvisionIpamPoolCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
