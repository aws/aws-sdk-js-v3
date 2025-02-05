// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLifecyclePoliciesRequest, GetLifecyclePoliciesResponse } from "../models/models_0";
import { de_GetLifecyclePoliciesCommand, se_GetLifecyclePoliciesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets summary information about all or the specified data lifecycle policies.</p>
 *          <p>To get complete information about a policy, use <a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicy.html">GetLifecyclePolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, GetLifecyclePoliciesCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, GetLifecyclePoliciesCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>The service failed in an unexpected way.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Bad request. The request is missing required parameters or has invalid
 * 			parameters.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because a limit was exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource was not found.</p>
 *
 * @throws {@link DLMServiceException}
 * <p>Base exception class for all service exceptions from DLM service.</p>
 *
 * @public
 */
export class GetLifecyclePoliciesCommand extends $Command
  .classBuilder<
    GetLifecyclePoliciesCommandInput,
    GetLifecyclePoliciesCommandOutput,
    DLMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DLMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("dlm_20180112", "GetLifecyclePolicies", {})
  .n("DLMClient", "GetLifecyclePoliciesCommand")
  .f(void 0, void 0)
  .ser(se_GetLifecyclePoliciesCommand)
  .de(de_GetLifecyclePoliciesCommand)
  .build() {
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
