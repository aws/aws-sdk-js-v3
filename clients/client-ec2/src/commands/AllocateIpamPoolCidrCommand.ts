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
import { AllocateIpamPoolCidrRequest, AllocateIpamPoolCidrResult } from "../models/models_0";
import { de_AllocateIpamPoolCidrCommand, se_AllocateIpamPoolCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AllocateIpamPoolCidrCommand}.
 */
export interface AllocateIpamPoolCidrCommandInput extends AllocateIpamPoolCidrRequest {}
/**
 * @public
 *
 * The output of {@link AllocateIpamPoolCidrCommand}.
 */
export interface AllocateIpamPoolCidrCommandOutput extends AllocateIpamPoolCidrResult, __MetadataBearer {}

/**
 * @public
 * <p>Allocate a CIDR from an IPAM pool. The Region you use should be the IPAM pool locale. The locale is the Amazon Web Services Region where this IPAM pool is available for allocations.</p>
 *          <p>In IPAM, an allocation is a CIDR assignment from an IPAM pool to another IPAM pool or to a resource. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/allocate-cidrs-ipam.html">Allocate CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 *          <note>
 *             <p>This action creates an allocation with strong consistency. The returned CIDR will not overlap with any other allocations from the same pool.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AllocateIpamPoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AllocateIpamPoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AllocateIpamPoolCidrRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE",
 *   NetmaskLength: Number("int"),
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   PreviewNextCidr: true || false,
 *   DisallowedCidrs: [ // IpamPoolAllocationDisallowedCidrs
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AllocateIpamPoolCidrCommand(input);
 * const response = await client.send(command);
 * // { // AllocateIpamPoolCidrResult
 * //   IpamPoolAllocation: { // IpamPoolAllocation
 * //     Cidr: "STRING_VALUE",
 * //     IpamPoolAllocationId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "ipam-pool" || "vpc" || "ec2-public-ipv4-pool" || "custom",
 * //     ResourceRegion: "STRING_VALUE",
 * //     ResourceOwner: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AllocateIpamPoolCidrCommandInput - {@link AllocateIpamPoolCidrCommandInput}
 * @returns {@link AllocateIpamPoolCidrCommandOutput}
 * @see {@link AllocateIpamPoolCidrCommandInput} for command's `input` shape.
 * @see {@link AllocateIpamPoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class AllocateIpamPoolCidrCommand extends $Command<
  AllocateIpamPoolCidrCommandInput,
  AllocateIpamPoolCidrCommandOutput,
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
  constructor(readonly input: AllocateIpamPoolCidrCommandInput) {
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
  ): Handler<AllocateIpamPoolCidrCommandInput, AllocateIpamPoolCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AllocateIpamPoolCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AllocateIpamPoolCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "AllocateIpamPoolCidr",
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
  private serialize(input: AllocateIpamPoolCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AllocateIpamPoolCidrCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AllocateIpamPoolCidrCommandOutput> {
    return de_AllocateIpamPoolCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
