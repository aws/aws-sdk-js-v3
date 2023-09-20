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
import { ProvisionPublicIpv4PoolCidrRequest, ProvisionPublicIpv4PoolCidrResult } from "../models/models_6";
import { de_ProvisionPublicIpv4PoolCidrCommand, se_ProvisionPublicIpv4PoolCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ProvisionPublicIpv4PoolCidrCommand}.
 */
export interface ProvisionPublicIpv4PoolCidrCommandInput extends ProvisionPublicIpv4PoolCidrRequest {}
/**
 * @public
 *
 * The output of {@link ProvisionPublicIpv4PoolCidrCommand}.
 */
export interface ProvisionPublicIpv4PoolCidrCommandOutput extends ProvisionPublicIpv4PoolCidrResult, __MetadataBearer {}

/**
 * @public
 * <p>Provision a CIDR to a public IPv4 pool.</p>
 *          <p>For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ProvisionPublicIpv4PoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ProvisionPublicIpv4PoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ProvisionPublicIpv4PoolCidrRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   PoolId: "STRING_VALUE", // required
 *   NetmaskLength: Number("int"), // required
 * };
 * const command = new ProvisionPublicIpv4PoolCidrCommand(input);
 * const response = await client.send(command);
 * // { // ProvisionPublicIpv4PoolCidrResult
 * //   PoolId: "STRING_VALUE",
 * //   PoolAddressRange: { // PublicIpv4PoolRange
 * //     FirstAddress: "STRING_VALUE",
 * //     LastAddress: "STRING_VALUE",
 * //     AddressCount: Number("int"),
 * //     AvailableAddressCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ProvisionPublicIpv4PoolCidrCommandInput - {@link ProvisionPublicIpv4PoolCidrCommandInput}
 * @returns {@link ProvisionPublicIpv4PoolCidrCommandOutput}
 * @see {@link ProvisionPublicIpv4PoolCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionPublicIpv4PoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ProvisionPublicIpv4PoolCidrCommand extends $Command<
  ProvisionPublicIpv4PoolCidrCommandInput,
  ProvisionPublicIpv4PoolCidrCommandOutput,
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
  constructor(readonly input: ProvisionPublicIpv4PoolCidrCommandInput) {
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
  ): Handler<ProvisionPublicIpv4PoolCidrCommandInput, ProvisionPublicIpv4PoolCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ProvisionPublicIpv4PoolCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ProvisionPublicIpv4PoolCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ProvisionPublicIpv4PoolCidr",
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
  private serialize(input: ProvisionPublicIpv4PoolCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ProvisionPublicIpv4PoolCidrCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ProvisionPublicIpv4PoolCidrCommandOutput> {
    return de_ProvisionPublicIpv4PoolCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
