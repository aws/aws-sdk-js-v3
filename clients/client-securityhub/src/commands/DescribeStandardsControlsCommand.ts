// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStandardsControlsRequest, DescribeStandardsControlsResponse } from "../models/models_2";
import { de_DescribeStandardsControlsCommand, se_DescribeStandardsControlsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStandardsControlsCommand}.
 */
export interface DescribeStandardsControlsCommandInput extends DescribeStandardsControlsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStandardsControlsCommand}.
 */
export interface DescribeStandardsControlsCommandOutput extends DescribeStandardsControlsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of security standards controls.</p>
 *          <p>For each control, the results include information about whether it is currently enabled,
 *          the severity, and a link to remediation information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeStandardsControlsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeStandardsControlsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // DescribeStandardsControlsRequest
 *   StandardsSubscriptionArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeStandardsControlsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStandardsControlsResponse
 * //   Controls: [ // StandardsControls
 * //     { // StandardsControl
 * //       StandardsControlArn: "STRING_VALUE",
 * //       ControlStatus: "ENABLED" || "DISABLED",
 * //       DisabledReason: "STRING_VALUE",
 * //       ControlStatusUpdatedAt: new Date("TIMESTAMP"),
 * //       ControlId: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       RemediationUrl: "STRING_VALUE",
 * //       SeverityRating: "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //       RelatedRequirements: [ // RelatedRequirementsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStandardsControlsCommandInput - {@link DescribeStandardsControlsCommandInput}
 * @returns {@link DescribeStandardsControlsCommandOutput}
 * @see {@link DescribeStandardsControlsCommandInput} for command's `input` shape.
 * @see {@link DescribeStandardsControlsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 * @example To get a list of controls for a security standard
 * ```javascript
 * // The following example returns a list of security controls and control details that apply to a specified security standard. The list includes controls that are enabled and disabled in the standard.
 * const input = {
 *   "MaxResults": 2,
 *   "NextToken": "NULL",
 *   "StandardsSubscriptionArn": "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1"
 * };
 * const command = new DescribeStandardsControlsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Controls": [
 *     {
 *       "ControlId": "PCI.AutoScaling.1",
 *       "ControlStatus": "ENABLED",
 *       "ControlStatusUpdatedAt": "2020-05-15T18:49:04.473000+00:00",
 *       "Description": "This AWS control checks whether your Auto Scaling groups that are associated with a load balancer are using Elastic Load Balancing health checks.",
 *       "RelatedRequirements": [
 *         "PCI DSS 2.2"
 *       ],
 *       "RemediationUrl": "https://docs.aws.amazon.com/console/securityhub/PCI.AutoScaling.1/remediation",
 *       "SeverityRating": "LOW",
 *       "StandardsControlArn": "arn:aws:securityhub:us-west-1:123456789012:control/pci-dss/v/3.2.1/PCI.AutoScaling.1",
 *       "Title": "Auto scaling groups associated with a load balancer should use health checks"
 *     },
 *     {
 *       "ControlId": "PCI.CW.1",
 *       "ControlStatus": "ENABLED",
 *       "ControlStatusUpdatedAt": "2020-05-15T18:49:04.498000+00:00",
 *       "Description": "This control checks for the CloudWatch metric filters using the following pattern { $.userIdentity.type = \"Root\" && $.userIdentity.invokedBy NOT EXISTS && $.eventType != \"AwsServiceEvent\" } It checks that the log group name is configured for use with active multi-region CloudTrail, that there is at least one Event Selector for a Trail with IncludeManagementEvents set to true and ReadWriteType set to All, and that there is at least one active subscriber to an SNS topic associated with the alarm.",
 *       "RelatedRequirements": [
 *         "PCI DSS 7.2.1"
 *       ],
 *       "RemediationUrl": "https://docs.aws.amazon.com/console/securityhub/PCI.CW.1/remediation",
 *       "SeverityRating": "MEDIUM",
 *       "StandardsControlArn": "arn:aws:securityhub:us-west-1:123456789012:control/pci-dss/v/3.2.1/PCI.CW.1",
 *       "Title": "A log metric filter and alarm should exist for usage of the \"root\" user"
 *     }
 *   ],
 *   "NextToken": "U2FsdGVkX1+eNkPoZHVl11ip5HUYQPWSWZGmftcmJiHL8JoKEsCDuaKayiPDyLK+LiTkShveoOdvfxXCkOBaGhohIXhsIedN+LSjQV/l7kfCfJcq4PziNC1N9xe9aq2pjlLVZnznTfSImrodT5bRNHe4fELCQq/z+5ka+5Lzmc11axcwTd5lKgQyQqmUVoeriHZhyIiBgWKf7oNYdBVG8OEortVWvSkoUTt+B2ThcnC7l43kI0UNxlkZ6sc64AsW"
 * }
 * *\/
 * // example id: to-get-a-list-of-controls-for-a-security-standard-1676308027759
 * ```
 *
 */
export class DescribeStandardsControlsCommand extends $Command
  .classBuilder<
    DescribeStandardsControlsCommandInput,
    DescribeStandardsControlsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "DescribeStandardsControls", {})
  .n("SecurityHubClient", "DescribeStandardsControlsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStandardsControlsCommand)
  .de(de_DescribeStandardsControlsCommand)
  .build() {}
