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
import { AssociateIpamByoasnRequest, AssociateIpamByoasnResult } from "../models/models_0";
import { de_AssociateIpamByoasnCommand, se_AssociateIpamByoasnCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateIpamByoasnCommand}.
 */
export interface AssociateIpamByoasnCommandInput extends AssociateIpamByoasnRequest {}
/**
 * @public
 *
 * The output of {@link AssociateIpamByoasnCommand}.
 */
export interface AssociateIpamByoasnCommandOutput extends AssociateIpamByoasnResult, __MetadataBearer {}

/**
 * @public
 * <p>Associates your Autonomous System Number (ASN) with a BYOIP CIDR that you own in the same Amazon Web Services Region.
 *             For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 *          <p>After the association succeeds, the ASN is eligible for
 *             advertisement. You can view the association with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeByoipCidrs.html">DescribeByoipCidrs</a>. You can advertise the CIDR with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AdvertiseByoipCidr.html">AdvertiseByoipCidr</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateIpamByoasnCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateIpamByoasnCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateIpamByoasnRequest
 *   DryRun: true || false,
 *   Asn: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE", // required
 * };
 * const command = new AssociateIpamByoasnCommand(input);
 * const response = await client.send(command);
 * // { // AssociateIpamByoasnResult
 * //   AsnAssociation: { // AsnAssociation
 * //     Asn: "STRING_VALUE",
 * //     Cidr: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     State: "disassociated" || "failed-disassociation" || "failed-association" || "pending-disassociation" || "pending-association" || "associated",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateIpamByoasnCommandInput - {@link AssociateIpamByoasnCommandInput}
 * @returns {@link AssociateIpamByoasnCommandOutput}
 * @see {@link AssociateIpamByoasnCommandInput} for command's `input` shape.
 * @see {@link AssociateIpamByoasnCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class AssociateIpamByoasnCommand extends $Command<
  AssociateIpamByoasnCommandInput,
  AssociateIpamByoasnCommandOutput,
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
  constructor(readonly input: AssociateIpamByoasnCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateIpamByoasnCommandInput, AssociateIpamByoasnCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateIpamByoasnCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateIpamByoasnCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "AssociateIpamByoasn",
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
  private serialize(input: AssociateIpamByoasnCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateIpamByoasnCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateIpamByoasnCommandOutput> {
    return de_AssociateIpamByoasnCommand(output, context);
  }
}
