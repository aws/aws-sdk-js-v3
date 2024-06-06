// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHubRequest, DescribeHubResponse } from "../models/models_2";
import { de_DescribeHubCommand, se_DescribeHubCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHubCommand}.
 */
export interface DescribeHubCommandInput extends DescribeHubRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHubCommand}.
 */
export interface DescribeHubCommandOutput extends DescribeHubResponse, __MetadataBearer {}

/**
 * <p>Returns details about the Hub resource in your account, including the
 *          <code>HubArn</code> and the time when you enabled Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeHubCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeHubCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // DescribeHubRequest
 *   HubArn: "STRING_VALUE",
 * };
 * const command = new DescribeHubCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHubResponse
 * //   HubArn: "STRING_VALUE",
 * //   SubscribedAt: "STRING_VALUE",
 * //   AutoEnableControls: true || false,
 * //   ControlFindingGenerator: "STANDARD_CONTROL" || "SECURITY_CONTROL",
 * // };
 *
 * ```
 *
 * @param DescribeHubCommandInput - {@link DescribeHubCommandInput}
 * @returns {@link DescribeHubCommandOutput}
 * @see {@link DescribeHubCommandInput} for command's `input` shape.
 * @see {@link DescribeHubCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 * @example To return details about Hub resource
 * ```javascript
 * // The following example returns details about the Hub resource in the calling account. The Hub resource represents the implementation of  the AWS Security Hub service in the calling account.
 * const input = {
 *   "HubArn": "arn:aws:securityhub:us-west-1:123456789012:hub/default"
 * };
 * const command = new DescribeHubCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AutoEnableControls": true,
 *   "ControlFindingGenerator": "SECURITY_CONTROL",
 *   "HubArn": "arn:aws:securityhub:us-west-1:123456789012:hub/default",
 *   "SubscribedAt": "2019-11-19T23:15:10.046Z"
 * }
 * *\/
 * // example id: to-return-details-about-hub-resource-1675884542597
 * ```
 *
 */
export class DescribeHubCommand extends $Command
  .classBuilder<
    DescribeHubCommandInput,
    DescribeHubCommandOutput,
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
  .s("SecurityHubAPIService", "DescribeHub", {})
  .n("SecurityHubClient", "DescribeHubCommand")
  .f(void 0, void 0)
  .ser(se_DescribeHubCommand)
  .de(de_DescribeHubCommand)
  .build() {}
