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
import { DeprovisionIpamPoolCidrRequest, DeprovisionIpamPoolCidrResult } from "../models/models_3";
import { de_DeprovisionIpamPoolCidrCommand, se_DeprovisionIpamPoolCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeprovisionIpamPoolCidrCommand}.
 */
export interface DeprovisionIpamPoolCidrCommandInput extends DeprovisionIpamPoolCidrRequest {}
/**
 * @public
 *
 * The output of {@link DeprovisionIpamPoolCidrCommand}.
 */
export interface DeprovisionIpamPoolCidrCommandOutput extends DeprovisionIpamPoolCidrResult, __MetadataBearer {}

/**
 * @public
 * <p>Deprovision a CIDR provisioned from an IPAM pool. If you deprovision a CIDR from a pool that has a source pool, the CIDR is recycled back into the source pool. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/depro-pool-cidr-ipam.html">Deprovision pool CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionIpamPoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionIpamPoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeprovisionIpamPoolCidrRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE",
 * };
 * const command = new DeprovisionIpamPoolCidrCommand(input);
 * const response = await client.send(command);
 * // { // DeprovisionIpamPoolCidrResult
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
 * @param DeprovisionIpamPoolCidrCommandInput - {@link DeprovisionIpamPoolCidrCommandInput}
 * @returns {@link DeprovisionIpamPoolCidrCommandOutput}
 * @see {@link DeprovisionIpamPoolCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionIpamPoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeprovisionIpamPoolCidrCommand extends $Command<
  DeprovisionIpamPoolCidrCommandInput,
  DeprovisionIpamPoolCidrCommandOutput,
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
  constructor(readonly input: DeprovisionIpamPoolCidrCommandInput) {
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
  ): Handler<DeprovisionIpamPoolCidrCommandInput, DeprovisionIpamPoolCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeprovisionIpamPoolCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeprovisionIpamPoolCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeprovisionIpamPoolCidr",
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
  private serialize(input: DeprovisionIpamPoolCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeprovisionIpamPoolCidrCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeprovisionIpamPoolCidrCommandOutput> {
    return de_DeprovisionIpamPoolCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
