// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeNetworkInsightsAccessScopesRequest,
  DescribeNetworkInsightsAccessScopesResult,
} from "../models/models_4";
import {
  de_DescribeNetworkInsightsAccessScopesCommand,
  se_DescribeNetworkInsightsAccessScopesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkInsightsAccessScopesCommand}.
 */
export interface DescribeNetworkInsightsAccessScopesCommandInput extends DescribeNetworkInsightsAccessScopesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInsightsAccessScopesCommand}.
 */
export interface DescribeNetworkInsightsAccessScopesCommandOutput
  extends DescribeNetworkInsightsAccessScopesResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified Network Access Scopes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInsightsAccessScopesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInsightsAccessScopesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInsightsAccessScopesRequest
 *   NetworkInsightsAccessScopeIds: [ // NetworkInsightsAccessScopeIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeNetworkInsightsAccessScopesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkInsightsAccessScopesResult
 * //   NetworkInsightsAccessScopes: [ // NetworkInsightsAccessScopeList
 * //     { // NetworkInsightsAccessScope
 * //       NetworkInsightsAccessScopeId: "STRING_VALUE",
 * //       NetworkInsightsAccessScopeArn: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       UpdatedDate: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkInsightsAccessScopesCommandInput - {@link DescribeNetworkInsightsAccessScopesCommandInput}
 * @returns {@link DescribeNetworkInsightsAccessScopesCommandOutput}
 * @see {@link DescribeNetworkInsightsAccessScopesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInsightsAccessScopesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeNetworkInsightsAccessScopesCommand extends $Command
  .classBuilder<
    DescribeNetworkInsightsAccessScopesCommandInput,
    DescribeNetworkInsightsAccessScopesCommandOutput,
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
  .s("AmazonEC2", "DescribeNetworkInsightsAccessScopes", {})
  .n("EC2Client", "DescribeNetworkInsightsAccessScopesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeNetworkInsightsAccessScopesCommand)
  .de(de_DescribeNetworkInsightsAccessScopesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNetworkInsightsAccessScopesRequest;
      output: DescribeNetworkInsightsAccessScopesResult;
    };
    sdk: {
      input: DescribeNetworkInsightsAccessScopesCommandInput;
      output: DescribeNetworkInsightsAccessScopesCommandOutput;
    };
  };
}
