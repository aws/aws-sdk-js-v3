// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EnableReachabilityAnalyzerOrganizationSharingRequest,
  EnableReachabilityAnalyzerOrganizationSharingResult,
} from "../models/models_5";
import { EnableReachabilityAnalyzerOrganizationSharing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableReachabilityAnalyzerOrganizationSharingCommand}.
 */
export interface EnableReachabilityAnalyzerOrganizationSharingCommandInput
  extends EnableReachabilityAnalyzerOrganizationSharingRequest {}
/**
 * @public
 *
 * The output of {@link EnableReachabilityAnalyzerOrganizationSharingCommand}.
 */
export interface EnableReachabilityAnalyzerOrganizationSharingCommandOutput
  extends EnableReachabilityAnalyzerOrganizationSharingResult,
    __MetadataBearer {}

/**
 * <p>Establishes a trust relationship between Reachability Analyzer and Organizations.
 *          This operation must be performed by the management account for the organization.</p>
 *          <p>After you establish a trust relationship, a user in the management account or
 *          a delegated administrator account can run a cross-account analysis using resources
 *          from the member accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableReachabilityAnalyzerOrganizationSharingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableReachabilityAnalyzerOrganizationSharingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // EnableReachabilityAnalyzerOrganizationSharingRequest
 *   DryRun: true || false,
 * };
 * const command = new EnableReachabilityAnalyzerOrganizationSharingCommand(input);
 * const response = await client.send(command);
 * // { // EnableReachabilityAnalyzerOrganizationSharingResult
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param EnableReachabilityAnalyzerOrganizationSharingCommandInput - {@link EnableReachabilityAnalyzerOrganizationSharingCommandInput}
 * @returns {@link EnableReachabilityAnalyzerOrganizationSharingCommandOutput}
 * @see {@link EnableReachabilityAnalyzerOrganizationSharingCommandInput} for command's `input` shape.
 * @see {@link EnableReachabilityAnalyzerOrganizationSharingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableReachabilityAnalyzerOrganizationSharingCommand extends $Command
  .classBuilder<
    EnableReachabilityAnalyzerOrganizationSharingCommandInput,
    EnableReachabilityAnalyzerOrganizationSharingCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "EnableReachabilityAnalyzerOrganizationSharing", {})
  .n("EC2Client", "EnableReachabilityAnalyzerOrganizationSharingCommand")
  .sc(EnableReachabilityAnalyzerOrganizationSharing$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableReachabilityAnalyzerOrganizationSharingRequest;
      output: EnableReachabilityAnalyzerOrganizationSharingResult;
    };
    sdk: {
      input: EnableReachabilityAnalyzerOrganizationSharingCommandInput;
      output: EnableReachabilityAnalyzerOrganizationSharingCommandOutput;
    };
  };
}
