// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchEnableStandardsRequest, BatchEnableStandardsResponse } from "../models/models_2";
import { BatchEnableStandards$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchEnableStandardsCommand}.
 */
export interface BatchEnableStandardsCommandInput extends BatchEnableStandardsRequest {}
/**
 * @public
 *
 * The output of {@link BatchEnableStandardsCommand}.
 */
export interface BatchEnableStandardsCommandOutput extends BatchEnableStandardsResponse, __MetadataBearer {}

/**
 * <p>Enables the standards specified by the provided <code>StandardsArn</code>. To obtain the
 *          ARN for a standard, use the <code>DescribeStandards</code>
 *          operation.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a>
 *          section of the <i>Security Hub CSPM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchEnableStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchEnableStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // BatchEnableStandardsRequest
 *   StandardsSubscriptionRequests: [ // StandardsSubscriptionRequests // required
 *     { // StandardsSubscriptionRequest
 *       StandardsArn: "STRING_VALUE", // required
 *       StandardsInput: { // StandardsInputParameterMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchEnableStandardsCommand(input);
 * const response = await client.send(command);
 * // { // BatchEnableStandardsResponse
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
 * //         StatusReasonCode: "NO_AVAILABLE_CONFIGURATION_RECORDER" || "MAXIMUM_NUMBER_OF_CONFIG_RULES_EXCEEDED" || "NO_AVAILABLE_MULTICLOUD_CONNECTOR" || "INTERNAL_ERROR", // required
 * //       },
 * //       Provider: "AWS" || "Azure",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchEnableStandardsCommandInput - {@link BatchEnableStandardsCommandInput}
 * @returns {@link BatchEnableStandardsCommandOutput}
 * @see {@link BatchEnableStandardsCommandInput} for command's `input` shape.
 * @see {@link BatchEnableStandardsCommandOutput} for command's `response` shape.
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
 * @example To enable security standards
 * ```javascript
 * // The following example enables the security standard specified by the StandardArn. You can use this operation to enable one or more Security Hub standards.
 * const input = {
 *   StandardsSubscriptionRequests: [
 *     {
 *       StandardsArn: "arn:aws:securityhub:us-west-1::standards/pci-dss/v/3.2.1"
 *     }
 *   ]
 * };
 * const command = new BatchEnableStandardsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   StandardsSubscriptions: [
 *     {
 *       Provider: "AWS",
 *       StandardsArn: "arn:aws:securityhub:us-west-1::standards/pci-dss/v/3.2.1",
 *       StandardsControlsUpdatable: "NOT_READY_FOR_UPDATES",
 *       StandardsInput:       { /* empty *\/ },
 *       StandardsStatus: "PENDING",
 *       StandardsSubscriptionArn: "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchEnableStandardsCommand extends command<BatchEnableStandardsCommandInput, BatchEnableStandardsCommandOutput>(
  _ep0,
  _mw0,
  "BatchEnableStandards",
  BatchEnableStandards$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchEnableStandardsRequest;
      output: BatchEnableStandardsResponse;
    };
    sdk: {
      input: BatchEnableStandardsCommandInput;
      output: BatchEnableStandardsCommandOutput;
    };
  };
}
