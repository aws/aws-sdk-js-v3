// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLifecyclePoliciesRequest, GetLifecyclePoliciesResponse } from "../models/models_0";
import { GetLifecyclePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLifecyclePoliciesCommand}.
 */
export interface GetLifecyclePoliciesCommandInput extends GetLifecyclePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link GetLifecyclePoliciesCommand}.
 */
export interface GetLifecyclePoliciesCommandOutput extends GetLifecyclePoliciesResponse, __MetadataBearer {}

/**
 * Gets summary information about all or the specified data lifecycle policies.
 *
 * To get complete information about a policy, use [GetLifecyclePolicy](https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicy.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, GetLifecyclePoliciesCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, GetLifecyclePoliciesCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * // import type { DLMClientConfig } from "@aws-sdk/client-dlm";
 * const config = {}; // type is DLMClientConfig
 * const client = new DLMClient(config);
 * const input = { // GetLifecyclePoliciesRequest
 *   PolicyIds: [ // PolicyIdList
 *     "STRING_VALUE",
 *   ],
 *   State: "ENABLED" || "DISABLED" || "ERROR",
 *   ResourceTypes: [ // ResourceTypeValuesList
 *     "VOLUME" || "INSTANCE",
 *   ],
 *   TargetTags: [ // TargetTagsFilterList
 *     "STRING_VALUE",
 *   ],
 *   TagsToAdd: [ // TagsToAddFilterList
 *     "STRING_VALUE",
 *   ],
 *   DefaultPolicyType: "VOLUME" || "INSTANCE" || "ALL",
 * };
 * const command = new GetLifecyclePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // GetLifecyclePoliciesResponse
 * //   Policies: [ // LifecyclePolicySummaryList
 * //     { // LifecyclePolicySummary
 * //       PolicyId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       State: "ENABLED" || "DISABLED" || "ERROR",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       PolicyType: "EBS_SNAPSHOT_MANAGEMENT" || "IMAGE_MANAGEMENT" || "EVENT_BASED_POLICY",
 * //       DefaultPolicy: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLifecyclePoliciesCommandInput - {@link GetLifecyclePoliciesCommandInput}
 * @returns {@link GetLifecyclePoliciesCommandOutput}
 * @see {@link GetLifecyclePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePoliciesCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for DLMClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service failed in an unexpected way.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Bad request. The request is missing required parameters or has invalid parameters.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request failed because a limit was exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource was not found.
 *
 * @throws {@link DLMServiceException}
 *
 * Base exception class for all service exceptions from DLM service.
 *
 * @public
 */
export class GetLifecyclePoliciesCommand extends command<GetLifecyclePoliciesCommandInput, GetLifecyclePoliciesCommandOutput>(
  _ep0,
  _mw0,
  "GetLifecyclePolicies",
  GetLifecyclePolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLifecyclePoliciesRequest;
      output: GetLifecyclePoliciesResponse;
    };
    sdk: {
      input: GetLifecyclePoliciesCommandInput;
      output: GetLifecyclePoliciesCommandOutput;
    };
  };
}
