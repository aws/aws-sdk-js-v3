// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDisableStandardsRequest, BatchDisableStandardsResponse } from "../models/models_2";
import { BatchDisableStandards$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Disables the standards specified by the provided `StandardsSubscriptionArns`.
 *
 * For more information, see [Security Standards](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html) section of the *Security Hub CSPM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchDisableStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchDisableStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
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
 * //         StatusReasonCode: "NO_AVAILABLE_CONFIGURATION_RECORDER" || "MAXIMUM_NUMBER_OF_CONFIG_RULES_EXCEEDED" || "NO_AVAILABLE_MULTICLOUD_CONNECTOR" || "INTERNAL_ERROR", // required
 * //       },
 * //       Provider: "AWS" || "Azure",
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
 *
 * You don't have permission to perform the action specified in the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link InvalidAccessException} (client fault)
 *
 * The account doesn't have permission to perform this action.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because you supplied an invalid or out-of-range value for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account or throttling limits. The error code describes the limit exceeded.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
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
 *       Provider: "AWS",
 *       StandardsArn: "arn:aws:securityhub:eu-central-1::standards/pci-dss/v/3.2.1",
 *       StandardsControlsUpdatable: "NOT_READY_FOR_UPDATES",
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
export class BatchDisableStandardsCommand extends command<BatchDisableStandardsCommandInput, BatchDisableStandardsCommandOutput>(
  _ep0,
  _mw0,
  "BatchDisableStandards",
  BatchDisableStandards$
) {
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
