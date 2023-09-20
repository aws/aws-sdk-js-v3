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
import { MoveByoipCidrToIpamRequest, MoveByoipCidrToIpamResult } from "../models/models_6";
import { de_MoveByoipCidrToIpamCommand, se_MoveByoipCidrToIpamCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link MoveByoipCidrToIpamCommand}.
 */
export interface MoveByoipCidrToIpamCommandInput extends MoveByoipCidrToIpamRequest {}
/**
 * @public
 *
 * The output of {@link MoveByoipCidrToIpamCommand}.
 */
export interface MoveByoipCidrToIpamCommandOutput extends MoveByoipCidrToIpamResult, __MetadataBearer {}

/**
 * @public
 * <p>Move a BYOIPv4 CIDR to IPAM from a public IPv4 pool.</p>
 *          <p>If you already have a BYOIPv4 CIDR with Amazon Web Services, you can move the CIDR to IPAM from a public IPv4 pool. You cannot move an IPv6 CIDR to IPAM. If you are bringing a new IP address to Amazon Web Services for the first time, complete the steps in <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoip-ipam.html">Tutorial: BYOIP address CIDRs to IPAM</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, MoveByoipCidrToIpamCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, MoveByoipCidrToIpamCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // MoveByoipCidrToIpamRequest
 *   DryRun: true || false,
 *   Cidr: "STRING_VALUE", // required
 *   IpamPoolId: "STRING_VALUE", // required
 *   IpamPoolOwner: "STRING_VALUE", // required
 * };
 * const command = new MoveByoipCidrToIpamCommand(input);
 * const response = await client.send(command);
 * // { // MoveByoipCidrToIpamResult
 * //   ByoipCidr: { // ByoipCidr
 * //     Cidr: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     State: "advertised" || "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-deprovision" || "pending-provision" || "provisioned" || "provisioned-not-publicly-advertisable",
 * //   },
 * // };
 *
 * ```
 *
 * @param MoveByoipCidrToIpamCommandInput - {@link MoveByoipCidrToIpamCommandInput}
 * @returns {@link MoveByoipCidrToIpamCommandOutput}
 * @see {@link MoveByoipCidrToIpamCommandInput} for command's `input` shape.
 * @see {@link MoveByoipCidrToIpamCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class MoveByoipCidrToIpamCommand extends $Command<
  MoveByoipCidrToIpamCommandInput,
  MoveByoipCidrToIpamCommandOutput,
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
  constructor(readonly input: MoveByoipCidrToIpamCommandInput) {
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
  ): Handler<MoveByoipCidrToIpamCommandInput, MoveByoipCidrToIpamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, MoveByoipCidrToIpamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "MoveByoipCidrToIpamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "MoveByoipCidrToIpam",
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
  private serialize(input: MoveByoipCidrToIpamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_MoveByoipCidrToIpamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MoveByoipCidrToIpamCommandOutput> {
    return de_MoveByoipCidrToIpamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
