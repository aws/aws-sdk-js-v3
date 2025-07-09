// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIpamScopesRequest, DescribeIpamScopesResult } from "../models/models_5";
import { de_DescribeIpamScopesCommand, se_DescribeIpamScopesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamScopesCommand}.
 */
export interface DescribeIpamScopesCommandInput extends DescribeIpamScopesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamScopesCommand}.
 */
export interface DescribeIpamScopesCommandOutput extends DescribeIpamScopesResult, __MetadataBearer {}

/**
 * <p>Get information about your IPAM scopes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamScopesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamScopesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamScopesRequest
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
 *   IpamScopeIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeIpamScopesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamScopesResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamScopes: [ // IpamScopeSet
 * //     { // IpamScope
 * //       OwnerId: "STRING_VALUE",
 * //       IpamScopeId: "STRING_VALUE",
 * //       IpamScopeArn: "STRING_VALUE",
 * //       IpamArn: "STRING_VALUE",
 * //       IpamRegion: "STRING_VALUE",
 * //       IpamScopeType: "public" || "private",
 * //       IsDefault: true || false,
 * //       Description: "STRING_VALUE",
 * //       PoolCount: Number("int"),
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIpamScopesCommandInput - {@link DescribeIpamScopesCommandInput}
 * @returns {@link DescribeIpamScopesCommandOutput}
 * @see {@link DescribeIpamScopesCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamScopesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIpamScopesCommand extends $Command
  .classBuilder<
    DescribeIpamScopesCommandInput,
    DescribeIpamScopesCommandOutput,
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
  .s("AmazonEC2", "DescribeIpamScopes", {})
  .n("EC2Client", "DescribeIpamScopesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIpamScopesCommand)
  .de(de_DescribeIpamScopesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpamScopesRequest;
      output: DescribeIpamScopesResult;
    };
    sdk: {
      input: DescribeIpamScopesCommandInput;
      output: DescribeIpamScopesCommandOutput;
    };
  };
}
