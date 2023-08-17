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
import { GetIpamResourceCidrsRequest, GetIpamResourceCidrsResult } from "../models/models_5";
import { de_GetIpamResourceCidrsCommand, se_GetIpamResourceCidrsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIpamResourceCidrsCommand}.
 */
export interface GetIpamResourceCidrsCommandInput extends GetIpamResourceCidrsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamResourceCidrsCommand}.
 */
export interface GetIpamResourceCidrsCommandOutput extends GetIpamResourceCidrsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns resource CIDRs managed by IPAM in a given scope. If an IPAM is associated with more than one resource discovery, the resource CIDRs across all of the resource discoveries is returned. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamResourceCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamResourceCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetIpamResourceCidrsRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   IpamScopeId: "STRING_VALUE", // required
 *   IpamPoolId: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE",
 *   ResourceType: "vpc" || "subnet" || "eip" || "public-ipv4-pool" || "ipv6-pool",
 *   ResourceTag: { // RequestIpamResourceTag
 *     Key: "STRING_VALUE",
 *     Value: "STRING_VALUE",
 *   },
 *   ResourceOwner: "STRING_VALUE",
 * };
 * const command = new GetIpamResourceCidrsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamResourceCidrsResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamResourceCidrs: [ // IpamResourceCidrSet
 * //     { // IpamResourceCidr
 * //       IpamId: "STRING_VALUE",
 * //       IpamScopeId: "STRING_VALUE",
 * //       IpamPoolId: "STRING_VALUE",
 * //       ResourceRegion: "STRING_VALUE",
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceName: "STRING_VALUE",
 * //       ResourceCidr: "STRING_VALUE",
 * //       ResourceType: "vpc" || "subnet" || "eip" || "public-ipv4-pool" || "ipv6-pool",
 * //       ResourceTags: [ // IpamResourceTagList
 * //         { // IpamResourceTag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IpUsage: Number("double"),
 * //       ComplianceStatus: "compliant" || "noncompliant" || "unmanaged" || "ignored",
 * //       ManagementState: "managed" || "unmanaged" || "ignored",
 * //       OverlapStatus: "overlapping" || "nonoverlapping" || "ignored",
 * //       VpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetIpamResourceCidrsCommandInput - {@link GetIpamResourceCidrsCommandInput}
 * @returns {@link GetIpamResourceCidrsCommandOutput}
 * @see {@link GetIpamResourceCidrsCommandInput} for command's `input` shape.
 * @see {@link GetIpamResourceCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetIpamResourceCidrsCommand extends $Command<
  GetIpamResourceCidrsCommandInput,
  GetIpamResourceCidrsCommandOutput,
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
  constructor(readonly input: GetIpamResourceCidrsCommandInput) {
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
  ): Handler<GetIpamResourceCidrsCommandInput, GetIpamResourceCidrsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIpamResourceCidrsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetIpamResourceCidrsCommand";
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
  private serialize(input: GetIpamResourceCidrsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIpamResourceCidrsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIpamResourceCidrsCommandOutput> {
    return de_GetIpamResourceCidrsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
