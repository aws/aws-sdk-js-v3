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
import { DeleteIpamPoolRequest, DeleteIpamPoolResult } from "../models/models_2";
import { deserializeAws_ec2DeleteIpamPoolCommand, serializeAws_ec2DeleteIpamPoolCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DeleteIpamPoolCommand}.
 */
export interface DeleteIpamPoolCommandInput extends DeleteIpamPoolRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpamPoolCommand}.
 */
export interface DeleteIpamPoolCommandOutput extends DeleteIpamPoolResult, __MetadataBearer {}

/**
 * @public
 * <p>Delete an IPAM pool.</p>
 *          <note>
 *             <p>You cannot delete an IPAM pool if there are allocations in it or CIDRs provisioned to it. To release
 *          allocations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseIpamPoolAllocation.html">ReleaseIpamPoolAllocation</a>. To deprovision pool
 *          CIDRs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeprovisionIpamPoolCidr.html">DeprovisionIpamPoolCidr</a>.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/delete-pool-ipam.html">Delete a pool</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteIpamPoolCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteIpamPoolCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = {
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIpamPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteIpamPoolCommandInput - {@link DeleteIpamPoolCommandInput}
 * @returns {@link DeleteIpamPoolCommandOutput}
 * @see {@link DeleteIpamPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamPoolCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DeleteIpamPoolCommand extends $Command<
  DeleteIpamPoolCommandInput,
  DeleteIpamPoolCommandOutput,
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
  constructor(readonly input: DeleteIpamPoolCommandInput) {
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
  ): Handler<DeleteIpamPoolCommandInput, DeleteIpamPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteIpamPoolCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteIpamPoolCommand";
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
  private serialize(input: DeleteIpamPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteIpamPoolCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIpamPoolCommandOutput> {
    return deserializeAws_ec2DeleteIpamPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
