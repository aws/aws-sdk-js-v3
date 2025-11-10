// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEnabledStandardsRequest, GetEnabledStandardsResponse } from "../models/models_2";
import { GetEnabledStandards } from "../schemas/schemas_0";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnabledStandardsCommand}.
 */
export interface GetEnabledStandardsCommandInput extends GetEnabledStandardsRequest {}
/**
 * @public
 *
 * The output of {@link GetEnabledStandardsCommand}.
 */
export interface GetEnabledStandardsCommandOutput extends GetEnabledStandardsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the standards that are currently enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetEnabledStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetEnabledStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetEnabledStandardsRequest
 *   StandardsSubscriptionArns: [ // StandardsSubscriptionArns
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetEnabledStandardsCommand(input);
 * const response = await client.send(command);
 * // { // GetEnabledStandardsResponse
 * //   StandardsSubscriptions: [ // StandardsSubscriptions
 * //     { // StandardsSubscription
 * //       StandardsSubscriptionArn: "STRING_VALUE", // required
 * //       StandardsArn: "STRING_VALUE", // required
 * //       StandardsInput: { // StandardsInputParameterMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       StandardsStatus: "PENDING" || "READY" || "FAILED" || "DELETING" || "INCOMPLETE", // required
 * //       StandardsControlsUpdatable: "READY_FOR_UPDATES" || "NOT_READY_FOR_UPDATES",
 * //       StandardsStatusReason: { // StandardsStatusReason
 * //         StatusReasonCode: "NO_AVAILABLE_CONFIGURATION_RECORDER" || "MAXIMUM_NUMBER_OF_CONFIG_RULES_EXCEEDED" || "INTERNAL_ERROR", // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEnabledStandardsCommandInput - {@link GetEnabledStandardsCommandInput}
 * @returns {@link GetEnabledStandardsCommandOutput}
 * @see {@link GetEnabledStandardsCommandInput} for command's `input` shape.
 * @see {@link GetEnabledStandardsCommandOutput} for command's `response` shape.
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
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To return a list of enabled standards
 * ```javascript
 * // The following example returns a list of Security Hub standards that are currently enabled in your account.
 * const input = {
 *   StandardsSubscriptionArns: [
 *     "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1"
 *   ]
 * };
 * const command = new GetEnabledStandardsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   StandardsSubscriptions: [
 *     {
 *       StandardsArn: "arn:aws:securityhub:us-west-1::standards/pci-dss/v/3.2.1",
 *       StandardsInput:       { /* empty *\/ },
 *       StandardsStatus: "READY",
 *       StandardsSubscriptionArn: "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetEnabledStandardsCommand extends $Command
  .classBuilder<
    GetEnabledStandardsCommandInput,
    GetEnabledStandardsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "GetEnabledStandards", {})
  .n("SecurityHubClient", "GetEnabledStandardsCommand")
  .sc(GetEnabledStandards)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnabledStandardsRequest;
      output: GetEnabledStandardsResponse;
    };
    sdk: {
      input: GetEnabledStandardsCommandInput;
      output: GetEnabledStandardsCommandOutput;
    };
  };
}
