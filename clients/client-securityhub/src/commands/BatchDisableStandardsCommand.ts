// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDisableStandardsRequest, BatchDisableStandardsResponse } from "../models/models_2";
import { de_BatchDisableStandardsCommand, se_BatchDisableStandardsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDisableStandardsCommand}.
 */
export interface BatchDisableStandardsCommandInput extends BatchDisableStandardsRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisableStandardsCommand}.
 */
export interface BatchDisableStandardsCommandOutput extends BatchDisableStandardsResponse, __MetadataBearer {}

/**
 * <p>Disables the standards specified by the provided
 *          <code>StandardsSubscriptionArns</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User
 *          Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchDisableStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchDisableStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // BatchDisableStandardsRequest
 *   StandardsSubscriptionArns: [ // StandardsSubscriptionArns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDisableStandardsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisableStandardsResponse
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
 * // };
 *
 * ```
 *
 * @param BatchDisableStandardsCommandInput - {@link BatchDisableStandardsCommandInput}
 * @returns {@link BatchDisableStandardsCommandOutput}
 * @see {@link BatchDisableStandardsCommandInput} for command's `input` shape.
 * @see {@link BatchDisableStandardsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
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
 * @example To disable one or more security standards
 * ```javascript
 * // The following example disables a security standard in Security Hub.
 * const input = {
 *   StandardsSubscriptionArns: [
 *     "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1"
 *   ]
 * };
 * const command = new BatchDisableStandardsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   StandardsSubscriptions: [
 *     {
 *       StandardsArn: "arn:aws:securityhub:eu-central-1::standards/pci-dss/v/3.2.1",
 *       StandardsInput:       { /* empty *\/ },
 *       StandardsStatus: "DELETING",
 *       StandardsSubscriptionArn: "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchDisableStandardsCommand extends $Command
  .classBuilder<
    BatchDisableStandardsCommandInput,
    BatchDisableStandardsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "BatchDisableStandards", {})
  .n("SecurityHubClient", "BatchDisableStandardsCommand")
  .f(void 0, void 0)
  .ser(se_BatchDisableStandardsCommand)
  .de(de_BatchDisableStandardsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisableStandardsRequest;
      output: BatchDisableStandardsResponse;
    };
    sdk: {
      input: BatchDisableStandardsCommandInput;
      output: BatchDisableStandardsCommandOutput;
    };
  };
}
