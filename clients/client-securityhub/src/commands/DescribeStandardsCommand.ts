// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStandardsRequest, DescribeStandardsResponse } from "../models/models_2";
import { DescribeStandards } from "../schemas/schemas_21_DescribeStandards";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStandardsCommand}.
 */
export interface DescribeStandardsCommandInput extends DescribeStandardsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStandardsCommand}.
 */
export interface DescribeStandardsCommandOutput extends DescribeStandardsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the available standards in Security Hub.</p>
 *          <p>For each standard, the results include the standard ARN, the name, and a description. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DescribeStandardsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeStandardsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStandardsResponse
 * //   Standards: [ // Standards
 * //     { // Standard
 * //       StandardsArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EnabledByDefault: true || false,
 * //       StandardsManagedBy: { // StandardsManagedBy
 * //         Company: "STRING_VALUE",
 * //         Product: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStandardsCommandInput - {@link DescribeStandardsCommandInput}
 * @returns {@link DescribeStandardsCommandOutput}
 * @see {@link DescribeStandardsCommandInput} for command's `input` shape.
 * @see {@link DescribeStandardsCommandOutput} for command's `response` shape.
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
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To get available Security Hub standards
 * ```javascript
 * // The following example returns a list of available security standards in Security Hub.
 * const input = { /* empty *\/ };
 * const command = new DescribeStandardsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Standards: [
 *     {
 *       Description: "The AWS Foundational Security Best Practices standard is a set of automated security checks that detect when AWS accounts and deployed resources do not align to security best practices. The standard is defined by AWS security experts. This curated set of controls helps improve your security posture in AWS, and cover AWS's most popular and foundational services.",
 *       EnabledByDefault: true,
 *       Name: "AWS Foundational Security Best Practices v1.0.0",
 *       StandardsArn: "arn:aws:securityhub:us-west-1::standards/aws-foundational-security-best-practices/v/1.0.0"
 *     },
 *     {
 *       Description: "The Center for Internet Security (CIS) AWS Foundations Benchmark v1.2.0 is a set of security configuration best practices for AWS. This Security Hub standard automatically checks for your compliance readiness against a subset of CIS requirements.",
 *       EnabledByDefault: true,
 *       Name: "CIS AWS Foundations Benchmark v1.2.0",
 *       StandardsArn: "arn:aws:securityhub:us-west-1::ruleset/cis-aws-foundations-benchmark/v/1.2.0"
 *     },
 *     {
 *       Description: "The Center for Internet Security (CIS) AWS Foundations Benchmark v1.4.0 is a set of security configuration best practices for AWS. This Security Hub standard automatically checks for your compliance readiness against a subset of CIS requirements.",
 *       EnabledByDefault: false,
 *       Name: "CIS AWS Foundations Benchmark v1.4.0",
 *       StandardsArn: "arn:aws::securityhub:us-west-1::standards/cis-aws-foundations-benchmark/v/1.4.0"
 *     },
 *     {
 *       Description: "The Payment Card Industry Data Security Standard (PCI DSS) v3.2.1 is an information security standard for entities that store, process, and/or transmit cardholder data. This Security Hub standard automatically checks for your compliance readiness against a subset of PCI DSS requirements.",
 *       EnabledByDefault: false,
 *       Name: "PCI DSS v3.2.1",
 *       StandardsArn: "arn:aws:securityhub:us-west-1::standards/pci-dss/v/3.2.1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeStandardsCommand extends $Command
  .classBuilder<
    DescribeStandardsCommandInput,
    DescribeStandardsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "DescribeStandards", {})
  .n("SecurityHubClient", "DescribeStandardsCommand")
  .sc(DescribeStandards)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStandardsRequest;
      output: DescribeStandardsResponse;
    };
    sdk: {
      input: DescribeStandardsCommandInput;
      output: DescribeStandardsCommandOutput;
    };
  };
}
