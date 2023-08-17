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
import { DeleteIpamPoolRequest, DeleteIpamPoolResult } from "../models/models_2";
import { de_DeleteIpamPoolCommand, se_DeleteIpamPoolCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * const input = { // DeleteIpamPoolRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIpamPoolCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIpamPoolResult
 * //   IpamPool: { // IpamPool
 * //     OwnerId: "STRING_VALUE",
 * //     IpamPoolId: "STRING_VALUE",
 * //     SourceIpamPoolId: "STRING_VALUE",
 * //     IpamPoolArn: "STRING_VALUE",
 * //     IpamScopeArn: "STRING_VALUE",
 * //     IpamScopeType: "public" || "private",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     Locale: "STRING_VALUE",
 * //     PoolDepth: Number("int"),
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     StateMessage: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     AutoImport: true || false,
 * //     PubliclyAdvertisable: true || false,
 * //     AddressFamily: "ipv4" || "ipv6",
 * //     AllocationMinNetmaskLength: Number("int"),
 * //     AllocationMaxNetmaskLength: Number("int"),
 * //     AllocationDefaultNetmaskLength: Number("int"),
 * //     AllocationResourceTags: [ // IpamResourceTagList
 * //       { // IpamResourceTag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AwsService: "ec2",
 * //     PublicIpSource: "amazon" || "byoip",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteIpamPoolCommandInput - {@link DeleteIpamPoolCommandInput}
 * @returns {@link DeleteIpamPoolCommandOutput}
 * @see {@link DeleteIpamPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamPoolCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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
    return se_DeleteIpamPoolCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIpamPoolCommandOutput> {
    return de_DeleteIpamPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
