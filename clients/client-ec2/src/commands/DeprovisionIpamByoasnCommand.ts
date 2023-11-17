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
import { DeprovisionIpamByoasnRequest, DeprovisionIpamByoasnResult } from "../models/models_3";
import { de_DeprovisionIpamByoasnCommand, se_DeprovisionIpamByoasnCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeprovisionIpamByoasnCommand}.
 */
export interface DeprovisionIpamByoasnCommandInput extends DeprovisionIpamByoasnRequest {}
/**
 * @public
 *
 * The output of {@link DeprovisionIpamByoasnCommand}.
 */
export interface DeprovisionIpamByoasnCommandOutput extends DeprovisionIpamByoasnResult, __MetadataBearer {}

/**
 * @public
 * <p>Deprovisions your Autonomous System Number (ASN) from your Amazon Web Services account. This action can only be called after any BYOIP CIDR associations are removed from your Amazon Web Services account with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIpamByoasn.html">DisassociateIpamByoasn</a>.
 *             For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionIpamByoasnCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionIpamByoasnCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeprovisionIpamByoasnRequest
 *   DryRun: true || false,
 *   IpamId: "STRING_VALUE", // required
 *   Asn: "STRING_VALUE", // required
 * };
 * const command = new DeprovisionIpamByoasnCommand(input);
 * const response = await client.send(command);
 * // { // DeprovisionIpamByoasnResult
 * //   Byoasn: { // Byoasn
 * //     Asn: "STRING_VALUE",
 * //     IpamId: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     State: "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-deprovision" || "pending-provision" || "provisioned",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeprovisionIpamByoasnCommandInput - {@link DeprovisionIpamByoasnCommandInput}
 * @returns {@link DeprovisionIpamByoasnCommandOutput}
 * @see {@link DeprovisionIpamByoasnCommandInput} for command's `input` shape.
 * @see {@link DeprovisionIpamByoasnCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeprovisionIpamByoasnCommand extends $Command<
  DeprovisionIpamByoasnCommandInput,
  DeprovisionIpamByoasnCommandOutput,
  EC2ClientResolvedConfig
> {
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
  constructor(readonly input: DeprovisionIpamByoasnCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeprovisionIpamByoasnCommandInput, DeprovisionIpamByoasnCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeprovisionIpamByoasnCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeprovisionIpamByoasnCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeprovisionIpamByoasn",
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
  private serialize(input: DeprovisionIpamByoasnCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeprovisionIpamByoasnCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeprovisionIpamByoasnCommandOutput> {
    return de_DeprovisionIpamByoasnCommand(output, context);
  }
}
