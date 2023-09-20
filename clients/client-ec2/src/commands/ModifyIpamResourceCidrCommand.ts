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
import { ModifyIpamResourceCidrRequest, ModifyIpamResourceCidrResult } from "../models/models_6";
import { de_ModifyIpamResourceCidrCommand, se_ModifyIpamResourceCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyIpamResourceCidrCommand}.
 */
export interface ModifyIpamResourceCidrCommandInput extends ModifyIpamResourceCidrRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamResourceCidrCommand}.
 */
export interface ModifyIpamResourceCidrCommandOutput extends ModifyIpamResourceCidrResult, __MetadataBearer {}

/**
 * @public
 * <p>Modify a resource CIDR. You can use this action to transfer resource CIDRs between scopes and ignore resource CIDRs that you do not want to manage. If set to false, the resource will not be tracked for overlap, it cannot be auto-imported into a pool, and it will be removed from any pool it has an allocation in.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/move-resource-ipam.html">Move resource CIDRs between scopes</a> and <a href="https://docs.aws.amazon.com/vpc/latest/ipam/change-monitoring-state-ipam.html">Change the monitoring state of resource CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamResourceCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamResourceCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamResourceCidrRequest
 *   DryRun: true || false,
 *   ResourceId: "STRING_VALUE", // required
 *   ResourceCidr: "STRING_VALUE", // required
 *   ResourceRegion: "STRING_VALUE", // required
 *   CurrentIpamScopeId: "STRING_VALUE", // required
 *   DestinationIpamScopeId: "STRING_VALUE",
 *   Monitored: true || false, // required
 * };
 * const command = new ModifyIpamResourceCidrCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpamResourceCidrResult
 * //   IpamResourceCidr: { // IpamResourceCidr
 * //     IpamId: "STRING_VALUE",
 * //     IpamScopeId: "STRING_VALUE",
 * //     IpamPoolId: "STRING_VALUE",
 * //     ResourceRegion: "STRING_VALUE",
 * //     ResourceOwnerId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceName: "STRING_VALUE",
 * //     ResourceCidr: "STRING_VALUE",
 * //     ResourceType: "vpc" || "subnet" || "eip" || "public-ipv4-pool" || "ipv6-pool",
 * //     ResourceTags: [ // IpamResourceTagList
 * //       { // IpamResourceTag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IpUsage: Number("double"),
 * //     ComplianceStatus: "compliant" || "noncompliant" || "unmanaged" || "ignored",
 * //     ManagementState: "managed" || "unmanaged" || "ignored",
 * //     OverlapStatus: "overlapping" || "nonoverlapping" || "ignored",
 * //     VpcId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIpamResourceCidrCommandInput - {@link ModifyIpamResourceCidrCommandInput}
 * @returns {@link ModifyIpamResourceCidrCommandOutput}
 * @see {@link ModifyIpamResourceCidrCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamResourceCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyIpamResourceCidrCommand extends $Command<
  ModifyIpamResourceCidrCommandInput,
  ModifyIpamResourceCidrCommandOutput,
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
  constructor(readonly input: ModifyIpamResourceCidrCommandInput) {
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
  ): Handler<ModifyIpamResourceCidrCommandInput, ModifyIpamResourceCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyIpamResourceCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyIpamResourceCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyIpamResourceCidr",
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
  private serialize(input: ModifyIpamResourceCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyIpamResourceCidrCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyIpamResourceCidrCommandOutput> {
    return de_ModifyIpamResourceCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
