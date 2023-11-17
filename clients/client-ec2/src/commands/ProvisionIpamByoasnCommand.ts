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
import { ProvisionIpamByoasnRequest, ProvisionIpamByoasnResult } from "../models/models_6";
import { de_ProvisionIpamByoasnCommand, se_ProvisionIpamByoasnCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ProvisionIpamByoasnCommand}.
 */
export interface ProvisionIpamByoasnCommandInput extends ProvisionIpamByoasnRequest {}
/**
 * @public
 *
 * The output of {@link ProvisionIpamByoasnCommand}.
 */
export interface ProvisionIpamByoasnCommandOutput extends ProvisionIpamByoasnResult, __MetadataBearer {}

/**
 * @public
 * <p>Provisions your Autonomous System Number (ASN) for use in your Amazon Web Services account. This action requires authorization context for Amazon to bring the ASN to an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ProvisionIpamByoasnCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ProvisionIpamByoasnCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ProvisionIpamByoasnRequest
 *   DryRun: true || false,
 *   IpamId: "STRING_VALUE", // required
 *   Asn: "STRING_VALUE", // required
 *   AsnAuthorizationContext: { // AsnAuthorizationContext
 *     Message: "STRING_VALUE", // required
 *     Signature: "STRING_VALUE", // required
 *   },
 * };
 * const command = new ProvisionIpamByoasnCommand(input);
 * const response = await client.send(command);
 * // { // ProvisionIpamByoasnResult
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
 * @param ProvisionIpamByoasnCommandInput - {@link ProvisionIpamByoasnCommandInput}
 * @returns {@link ProvisionIpamByoasnCommandOutput}
 * @see {@link ProvisionIpamByoasnCommandInput} for command's `input` shape.
 * @see {@link ProvisionIpamByoasnCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ProvisionIpamByoasnCommand extends $Command<
  ProvisionIpamByoasnCommandInput,
  ProvisionIpamByoasnCommandOutput,
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
  constructor(readonly input: ProvisionIpamByoasnCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ProvisionIpamByoasnCommandInput, ProvisionIpamByoasnCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ProvisionIpamByoasnCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ProvisionIpamByoasnCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ProvisionIpamByoasn",
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
  private serialize(input: ProvisionIpamByoasnCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ProvisionIpamByoasnCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ProvisionIpamByoasnCommandOutput> {
    return de_ProvisionIpamByoasnCommand(output, context);
  }
}
