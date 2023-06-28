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
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReleaseIpamPoolAllocationRequest, ReleaseIpamPoolAllocationResult } from "../models/models_6";
import { de_ReleaseIpamPoolAllocationCommand, se_ReleaseIpamPoolAllocationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReleaseIpamPoolAllocationCommand}.
 */
export interface ReleaseIpamPoolAllocationCommandInput extends ReleaseIpamPoolAllocationRequest {}
/**
 * @public
 *
 * The output of {@link ReleaseIpamPoolAllocationCommand}.
 */
export interface ReleaseIpamPoolAllocationCommandOutput extends ReleaseIpamPoolAllocationResult, __MetadataBearer {}

/**
 * @public
 * <p>Release an allocation within an IPAM pool. The Region you use should be the IPAM pool locale. The locale is the Amazon Web Services Region where this IPAM pool is available for allocations. You can only use this action to release manual allocations. To remove an allocation for a resource without deleting the resource, set its monitored state to false using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpamResourceCidr.html">ModifyIpamResourceCidr</a>. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/release-pool-alloc-ipam.html">Release an allocation</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 *          <note>
 *             <p>All EC2 API actions follow an <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/query-api-troubleshooting.html#eventual-consistency">eventual consistency</a> model.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReleaseIpamPoolAllocationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReleaseIpamPoolAllocationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReleaseIpamPoolAllocationRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE", // required
 *   IpamPoolAllocationId: "STRING_VALUE", // required
 * };
 * const command = new ReleaseIpamPoolAllocationCommand(input);
 * const response = await client.send(command);
 * // { // ReleaseIpamPoolAllocationResult
 * //   Success: true || false,
 * // };
 *
 * ```
 *
 * @param ReleaseIpamPoolAllocationCommandInput - {@link ReleaseIpamPoolAllocationCommandInput}
 * @returns {@link ReleaseIpamPoolAllocationCommandOutput}
 * @see {@link ReleaseIpamPoolAllocationCommandInput} for command's `input` shape.
 * @see {@link ReleaseIpamPoolAllocationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ReleaseIpamPoolAllocationCommand extends $Command<
  ReleaseIpamPoolAllocationCommandInput,
  ReleaseIpamPoolAllocationCommandOutput,
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
  constructor(readonly input: ReleaseIpamPoolAllocationCommandInput) {
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
  ): Handler<ReleaseIpamPoolAllocationCommandInput, ReleaseIpamPoolAllocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReleaseIpamPoolAllocationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReleaseIpamPoolAllocationCommand";
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
  private serialize(input: ReleaseIpamPoolAllocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReleaseIpamPoolAllocationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReleaseIpamPoolAllocationCommandOutput> {
    return de_ReleaseIpamPoolAllocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
