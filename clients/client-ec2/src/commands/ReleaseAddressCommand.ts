// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReleaseAddressRequest } from "../models/models_6";
import { deserializeAws_ec2ReleaseAddressCommand, serializeAws_ec2ReleaseAddressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link ReleaseAddressCommand}.
 */
export interface ReleaseAddressCommandInput extends ReleaseAddressRequest {}
/**
 * @public
 *
 * The output of {@link ReleaseAddressCommand}.
 */
export interface ReleaseAddressCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Releases the specified Elastic IP address.</p>
 *          <p>[EC2-Classic, default VPC] Releasing an Elastic IP address automatically disassociates it
 * 				from any instance that it's associated with. To disassociate an Elastic IP address without
 * 				releasing it, use <a>DisassociateAddress</a>.</p>
 *          <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 *          <p>[Nondefault VPC] You must use <a>DisassociateAddress</a> to disassociate the Elastic IP address
 * 			  before you can release it. Otherwise, Amazon EC2 returns an error (<code>InvalidIPAddress.InUse</code>).</p>
 *          <p>After releasing an Elastic IP address, it is released to the IP address pool.
 *         Be sure to update your DNS records and any servers or devices that communicate with the address.
 *         If you attempt to release an Elastic IP address that you already released, you'll get an
 *        <code>AuthFailure</code> error if the address is already allocated to another Amazon Web Services account.</p>
 *          <p>[EC2-VPC] After you release an Elastic IP address for use in a VPC, you might be able to recover it.
 *         For more information, see <a>AllocateAddress</a>.</p>
 *          <p>For more
 *        information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP
 *          Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReleaseAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReleaseAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = {
 *   AllocationId: "STRING_VALUE",
 *   PublicIp: "STRING_VALUE",
 *   NetworkBorderGroup: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new ReleaseAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ReleaseAddressCommandInput - {@link ReleaseAddressCommandInput}
 * @returns {@link ReleaseAddressCommandOutput}
 * @see {@link ReleaseAddressCommandInput} for command's `input` shape.
 * @see {@link ReleaseAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To release an Elastic IP address for EC2-VPC
 * ```javascript
 * // This example releases an Elastic IP address for use with instances in a VPC.
 * const input = {
 *   "AllocationId": "eipalloc-64d5890a"
 * };
 * const command = new ReleaseAddressCommand(input);
 * await client.send(command);
 * // example id: ec2-release-address-1
 * ```
 *
 * @example To release an Elastic IP addresses for EC2-Classic
 * ```javascript
 * // This example releases an Elastic IP address for use with instances in EC2-Classic.
 * const input = {
 *   "PublicIp": "198.51.100.0"
 * };
 * const command = new ReleaseAddressCommand(input);
 * await client.send(command);
 * // example id: ec2-release-address-2
 * ```
 *
 */
export class ReleaseAddressCommand extends $Command<
  ReleaseAddressCommandInput,
  ReleaseAddressCommandOutput,
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
  constructor(readonly input: ReleaseAddressCommandInput) {
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
  ): Handler<ReleaseAddressCommandInput, ReleaseAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReleaseAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReleaseAddressCommand";
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
  private serialize(input: ReleaseAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ReleaseAddressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReleaseAddressCommandOutput> {
    return deserializeAws_ec2ReleaseAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
