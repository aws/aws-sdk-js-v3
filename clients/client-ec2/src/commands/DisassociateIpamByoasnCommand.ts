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
import { DisassociateIpamByoasnRequest, DisassociateIpamByoasnResult } from "../models/models_5";
import { de_DisassociateIpamByoasnCommand, se_DisassociateIpamByoasnCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateIpamByoasnCommand}.
 */
export interface DisassociateIpamByoasnCommandInput extends DisassociateIpamByoasnRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateIpamByoasnCommand}.
 */
export interface DisassociateIpamByoasnCommandOutput extends DisassociateIpamByoasnResult, __MetadataBearer {}

/**
 * @public
 * <p>Remove the association between your Autonomous System Number (ASN) and your BYOIP CIDR. You may want to use this action to disassociate an ASN from a CIDR or if you want to swap ASNs.
 *             For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateIpamByoasnCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateIpamByoasnCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateIpamByoasnRequest
 *   DryRun: true || false,
 *   Asn: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE", // required
 * };
 * const command = new DisassociateIpamByoasnCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateIpamByoasnResult
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
 * @param DisassociateIpamByoasnCommandInput - {@link DisassociateIpamByoasnCommandInput}
 * @returns {@link DisassociateIpamByoasnCommandOutput}
 * @see {@link DisassociateIpamByoasnCommandInput} for command's `input` shape.
 * @see {@link DisassociateIpamByoasnCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DisassociateIpamByoasnCommand extends $Command<
  DisassociateIpamByoasnCommandInput,
  DisassociateIpamByoasnCommandOutput,
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
  constructor(readonly input: DisassociateIpamByoasnCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateIpamByoasnCommandInput, DisassociateIpamByoasnCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateIpamByoasnCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateIpamByoasnCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisassociateIpamByoasn",
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
  private serialize(input: DisassociateIpamByoasnCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateIpamByoasnCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateIpamByoasnCommandOutput> {
    return de_DisassociateIpamByoasnCommand(output, context);
  }
}
