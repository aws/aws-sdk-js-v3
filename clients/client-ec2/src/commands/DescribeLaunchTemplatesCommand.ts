// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLaunchTemplatesRequest, DescribeLaunchTemplatesResult } from "../models/models_5";
import { de_DescribeLaunchTemplatesCommand, se_DescribeLaunchTemplatesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLaunchTemplatesCommand}.
 */
export interface DescribeLaunchTemplatesCommandInput extends DescribeLaunchTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLaunchTemplatesCommand}.
 */
export interface DescribeLaunchTemplatesCommandOutput extends DescribeLaunchTemplatesResult, __MetadataBearer {}

/**
 * <p>Describes one or more launch templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLaunchTemplatesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLaunchTemplatesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeLaunchTemplatesRequest
 *   DryRun: true || false,
 *   LaunchTemplateIds: [ // LaunchTemplateIdStringList
 *     "STRING_VALUE",
 *   ],
 *   LaunchTemplateNames: [ // LaunchTemplateNameStringList
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
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeLaunchTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLaunchTemplatesResult
 * //   LaunchTemplates: [ // LaunchTemplateSet
 * //     { // LaunchTemplate
 * //       LaunchTemplateId: "STRING_VALUE",
 * //       LaunchTemplateName: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //       DefaultVersionNumber: Number("long"),
 * //       LatestVersionNumber: Number("long"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Operator: { // OperatorResponse
 * //         Managed: true || false,
 * //         Principal: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLaunchTemplatesCommandInput - {@link DescribeLaunchTemplatesCommandInput}
 * @returns {@link DescribeLaunchTemplatesCommandOutput}
 * @see {@link DescribeLaunchTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchTemplatesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe a launch template
 * ```javascript
 * // This example describes the specified launch template.
 * const input = {
 *   LaunchTemplateIds: [
 *     "lt-01238c059e3466abc"
 *   ]
 * };
 * const command = new DescribeLaunchTemplatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LaunchTemplates: [
 *     {
 *       CreateTime: "2018-01-16T04:32:57.000Z",
 *       CreatedBy: "arn:aws:iam::123456789012:root",
 *       DefaultVersionNumber: 1,
 *       LatestVersionNumber: 1,
 *       LaunchTemplateId: "lt-01238c059e3466abc",
 *       LaunchTemplateName: "my-template"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeLaunchTemplatesCommand extends $Command
  .classBuilder<
    DescribeLaunchTemplatesCommandInput,
    DescribeLaunchTemplatesCommandOutput,
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
  .s("AmazonEC2", "DescribeLaunchTemplates", {})
  .n("EC2Client", "DescribeLaunchTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLaunchTemplatesCommand)
  .de(de_DescribeLaunchTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLaunchTemplatesRequest;
      output: DescribeLaunchTemplatesResult;
    };
    sdk: {
      input: DescribeLaunchTemplatesCommandInput;
      output: DescribeLaunchTemplatesCommandOutput;
    };
  };
}
