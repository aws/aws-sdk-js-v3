// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeVpcEndpointServicePermissionsRequest,
  DescribeVpcEndpointServicePermissionsResult,
} from "../models/models_6";
import {
  de_DescribeVpcEndpointServicePermissionsCommand,
  se_DescribeVpcEndpointServicePermissionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointServicePermissionsCommand}.
 */
export interface DescribeVpcEndpointServicePermissionsCommandInput
  extends DescribeVpcEndpointServicePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointServicePermissionsCommand}.
 */
export interface DescribeVpcEndpointServicePermissionsCommandOutput
  extends DescribeVpcEndpointServicePermissionsResult,
    __MetadataBearer {}

/**
 * <p>Describes the principals (service consumers) that are permitted to discover your VPC
 *             endpoint service. Principal ARNs with path components aren't supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointServicePermissionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointServicePermissionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointServicePermissionsRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE", // required
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
 * };
 * const command = new DescribeVpcEndpointServicePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointServicePermissionsResult
 * //   AllowedPrincipals: [ // AllowedPrincipalSet
 * //     { // AllowedPrincipal
 * //       PrincipalType: "All" || "Service" || "OrganizationUnit" || "Account" || "User" || "Role",
 * //       Principal: "STRING_VALUE",
 * //       ServicePermissionId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ServiceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointServicePermissionsCommandInput - {@link DescribeVpcEndpointServicePermissionsCommandInput}
 * @returns {@link DescribeVpcEndpointServicePermissionsCommandOutput}
 * @see {@link DescribeVpcEndpointServicePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointServicePermissionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpcEndpointServicePermissionsCommand extends $Command
  .classBuilder<
    DescribeVpcEndpointServicePermissionsCommandInput,
    DescribeVpcEndpointServicePermissionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeVpcEndpointServicePermissions", {})
  .n("EC2Client", "DescribeVpcEndpointServicePermissionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVpcEndpointServicePermissionsCommand)
  .de(de_DescribeVpcEndpointServicePermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcEndpointServicePermissionsRequest;
      output: DescribeVpcEndpointServicePermissionsResult;
    };
    sdk: {
      input: DescribeVpcEndpointServicePermissionsCommandInput;
      output: DescribeVpcEndpointServicePermissionsCommandOutput;
    };
  };
}
