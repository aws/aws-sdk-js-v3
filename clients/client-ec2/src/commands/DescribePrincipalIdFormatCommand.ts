// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePrincipalIdFormatRequest, DescribePrincipalIdFormatResult } from "../models/models_5";
import { de_DescribePrincipalIdFormatCommand, se_DescribePrincipalIdFormatCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePrincipalIdFormatCommand}.
 */
export interface DescribePrincipalIdFormatCommandInput extends DescribePrincipalIdFormatRequest {}
/**
 * @public
 *
 * The output of {@link DescribePrincipalIdFormatCommand}.
 */
export interface DescribePrincipalIdFormatCommandOutput extends DescribePrincipalIdFormatResult, __MetadataBearer {}

/**
 * <p>Describes the ID format settings for the root user and all IAM roles and IAM users
 *             that have explicitly specified a longer ID (17-character ID) preference. </p>
 *          <p>By default, all IAM roles and IAM users default to the same ID settings as the root user, unless they
 *             explicitly override the settings. This request is useful for identifying those IAM users and IAM roles
 *             that have overridden the default ID settings.</p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *           <code>network-acl</code> | <code>network-acl-association</code> |
 *           <code>network-interface</code> | <code>network-interface-attachment</code> |
 *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *           <code>route-table-association</code> | <code>security-group</code> |
 *           <code>snapshot</code> | <code>subnet</code> |
 *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
 *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePrincipalIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePrincipalIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribePrincipalIdFormatRequest
 *   DryRun: true || false,
 *   Resources: [ // ResourceList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribePrincipalIdFormatCommand(input);
 * const response = await client.send(command);
 * // { // DescribePrincipalIdFormatResult
 * //   Principals: [ // PrincipalIdFormatList
 * //     { // PrincipalIdFormat
 * //       Arn: "STRING_VALUE",
 * //       Statuses: [ // IdFormatList
 * //         { // IdFormat
 * //           Deadline: new Date("TIMESTAMP"),
 * //           Resource: "STRING_VALUE",
 * //           UseLongIds: true || false,
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePrincipalIdFormatCommandInput - {@link DescribePrincipalIdFormatCommandInput}
 * @returns {@link DescribePrincipalIdFormatCommandOutput}
 * @see {@link DescribePrincipalIdFormatCommandInput} for command's `input` shape.
 * @see {@link DescribePrincipalIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribePrincipalIdFormatCommand extends $Command
  .classBuilder<
    DescribePrincipalIdFormatCommandInput,
    DescribePrincipalIdFormatCommandOutput,
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
  .s("AmazonEC2", "DescribePrincipalIdFormat", {})
  .n("EC2Client", "DescribePrincipalIdFormatCommand")
  .f(void 0, void 0)
  .ser(se_DescribePrincipalIdFormatCommand)
  .de(de_DescribePrincipalIdFormatCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePrincipalIdFormatRequest;
      output: DescribePrincipalIdFormatResult;
    };
    sdk: {
      input: DescribePrincipalIdFormatCommandInput;
      output: DescribePrincipalIdFormatCommandOutput;
    };
  };
}
