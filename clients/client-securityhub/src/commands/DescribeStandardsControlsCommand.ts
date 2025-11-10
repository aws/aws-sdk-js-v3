// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStandardsControlsRequest, DescribeStandardsControlsResponse } from "../models/models_2";
import { DescribeStandardsControls } from "../schemas/schemas_0";
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
 *          <p>This operation returns an empty list for standard subscriptions where <code>StandardsControlsUpdatable</code> has value <code>NOT_READY_FOR_UPDATES</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeStandardsControlsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeStandardsControlsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
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
 *
 * @public
 */
export class DescribeStandardsControlsCommand extends $Command
  .classBuilder<
    DescribeStandardsControlsCommandInput,
    DescribeStandardsControlsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "DescribeStandardsControls", {})
  .n("SecurityHubClient", "DescribeStandardsControlsCommand")
  .sc(DescribeStandardsControls)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStandardsControlsRequest;
      output: DescribeStandardsControlsResponse;
    };
    sdk: {
      input: DescribeStandardsControlsCommandInput;
      output: DescribeStandardsControlsCommandOutput;
    };
  };
}
