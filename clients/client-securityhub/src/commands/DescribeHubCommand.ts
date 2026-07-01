// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeHubRequest, DescribeHubResponse } from "../models/models_2";
import { DescribeHub$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *          <code>HubArn</code> and the time when you enabled Security Hub CSPM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeHubCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeHubCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
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
 *
 * @example To return details about Hub resource
 * ```javascript
 * // The following example returns details about the Hub resource in the calling account. The Hub resource represents the implementation of  the AWS Security Hub service in the calling account.
 * const input = {
 *   HubArn: "arn:aws:securityhub:us-west-1:123456789012:hub/default"
 * };
 * const command = new DescribeHubCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AutoEnableControls: true,
 *   ControlFindingGenerator: "SECURITY_CONTROL",
 *   HubArn: "arn:aws:securityhub:us-west-1:123456789012:hub/default",
 *   SubscribedAt: "2019-11-19T23:15:10.046Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeHubCommand extends command<DescribeHubCommandInput, DescribeHubCommandOutput>(
  _ep0,
  _mw0,
  "DescribeHub",
  DescribeHub$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHubRequest;
      output: DescribeHubResponse;
    };
    sdk: {
      input: DescribeHubCommandInput;
      output: DescribeHubCommandOutput;
    };
  };
}
