// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeActionTargetsRequest, DescribeActionTargetsResponse } from "../models/models_2";
import { DescribeActionTargets } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeActionTargetsCommand}.
 */
export interface DescribeActionTargetsCommandInput extends DescribeActionTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeActionTargetsCommand}.
 */
export interface DescribeActionTargetsCommandOutput extends DescribeActionTargetsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the custom action targets in Security Hub in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeActionTargetsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeActionTargetsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DescribeActionTargetsRequest
 *   ActionTargetArns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeActionTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActionTargetsResponse
 * //   ActionTargets: [ // ActionTargetList // required
 * //     { // ActionTarget
 * //       ActionTargetArn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeActionTargetsCommandInput - {@link DescribeActionTargetsCommandInput}
 * @returns {@link DescribeActionTargetsCommandOutput}
 * @see {@link DescribeActionTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeActionTargetsCommandOutput} for command's `response` shape.
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
 *
 * @example To return custom action targets
 * ```javascript
 * // The following example returns a list of custom action targets. You use custom actions on findings and insights in Security Hub to trigger target actions in Amazon CloudWatch Events.
 * const input = {
 *   ActionTargetArns: [
 *     "arn:aws:securityhub:us-west-1:123456789012:action/custom/Remediation"
 *   ]
 * };
 * const command = new DescribeActionTargetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ActionTargets: [
 *     {
 *       ActionTargetArn: "arn:aws:securityhub:us-west-1:123456789012:action/custom/Remediation",
 *       Description: "Action to send the finding for remediation tracking",
 *       Name: "Send to remediation"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeActionTargetsCommand extends $Command
  .classBuilder<
    DescribeActionTargetsCommandInput,
    DescribeActionTargetsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "DescribeActionTargets", {})
  .n("SecurityHubClient", "DescribeActionTargetsCommand")
  .sc(DescribeActionTargets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeActionTargetsRequest;
      output: DescribeActionTargetsResponse;
    };
    sdk: {
      input: DescribeActionTargetsCommandInput;
      output: DescribeActionTargetsCommandOutput;
    };
  };
}
