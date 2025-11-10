// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchUpdateRecommendationResourceExclusionRequest,
  BatchUpdateRecommendationResourceExclusionResponse,
} from "../models/models_0";
import { BatchUpdateRecommendationResourceExclusion } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TrustedAdvisorClientResolvedConfig } from "../TrustedAdvisorClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateRecommendationResourceExclusionCommand}.
 */
export interface BatchUpdateRecommendationResourceExclusionCommandInput
  extends BatchUpdateRecommendationResourceExclusionRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateRecommendationResourceExclusionCommand}.
 */
export interface BatchUpdateRecommendationResourceExclusionCommandOutput
  extends BatchUpdateRecommendationResourceExclusionResponse,
    __MetadataBearer {}

/**
 * <p>Update one or more exclusion status for a list of recommendation resources</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, BatchUpdateRecommendationResourceExclusionCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, BatchUpdateRecommendationResourceExclusionCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * // import type { TrustedAdvisorClientConfig } from "@aws-sdk/client-trustedadvisor";
 * const config = {}; // type is TrustedAdvisorClientConfig
 * const client = new TrustedAdvisorClient(config);
 * const input = { // BatchUpdateRecommendationResourceExclusionRequest
 *   recommendationResourceExclusions: [ // RecommendationResourceExclusionList // required
 *     { // RecommendationResourceExclusion
 *       arn: "STRING_VALUE", // required
 *       isExcluded: true || false, // required
 *     },
 *   ],
 * };
 * const command = new BatchUpdateRecommendationResourceExclusionCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateRecommendationResourceExclusionResponse
 * //   batchUpdateRecommendationResourceExclusionErrors: [ // UpdateRecommendationResourceExclusionErrorList // required
 * //     { // UpdateRecommendationResourceExclusionError
 * //       arn: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateRecommendationResourceExclusionCommandInput - {@link BatchUpdateRecommendationResourceExclusionCommandInput}
 * @returns {@link BatchUpdateRecommendationResourceExclusionCommandOutput}
 * @see {@link BatchUpdateRecommendationResourceExclusionCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateRecommendationResourceExclusionCommandOutput} for command's `response` shape.
 * @see {@link TrustedAdvisorClientResolvedConfig | config} for TrustedAdvisorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Exception that access has been denied due to insufficient access</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Exception that the request was denied due to conflictions in state</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Exception to notify that an unexpected internal error occurred during processing of the request</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception to notify that requests are being throttled</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Exception that the request failed to satisfy service constraints</p>
 *
 * @throws {@link TrustedAdvisorServiceException}
 * <p>Base exception class for all service exceptions from TrustedAdvisor service.</p>
 *
 *
 * @example Batch updates the exclusion status for a list of recommendation resources
 * ```javascript
 * //
 * const input = {
 *   recommendationResourceExclusions: [
 *     {
 *       arn: "arn:aws:trustedadvisor::000000000000:recommendation-resource/55fa4d2e-bbb7-491a-833b-5773e9589578/18959a1f1973cff8e706e9d9bde28bba36cd602a6b2cb86c8b61252835236010",
 *       isExcluded: true
 *     }
 *   ]
 * };
 * const command = new BatchUpdateRecommendationResourceExclusionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   batchUpdateRecommendationResourceExclusionErrors: [
 *     {
 *       arn: "arn:aws:trustedadvisor::000000000000:recommendation-resource/55fa4d2e-bbb7-491a-833b-5773e9589578/18959a1f1973cff8e706e9d9bde28bba36cd602a6b2cb86c8b61252835236010",
 *       errorCode: "404",
 *       errorMessage: "Exception that the requested resource has not been found"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchUpdateRecommendationResourceExclusionCommand extends $Command
  .classBuilder<
    BatchUpdateRecommendationResourceExclusionCommandInput,
    BatchUpdateRecommendationResourceExclusionCommandOutput,
    TrustedAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TrustedAdvisorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrustedAdvisor", "BatchUpdateRecommendationResourceExclusion", {})
  .n("TrustedAdvisorClient", "BatchUpdateRecommendationResourceExclusionCommand")
  .sc(BatchUpdateRecommendationResourceExclusion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateRecommendationResourceExclusionRequest;
      output: BatchUpdateRecommendationResourceExclusionResponse;
    };
    sdk: {
      input: BatchUpdateRecommendationResourceExclusionCommandInput;
      output: BatchUpdateRecommendationResourceExclusionCommandOutput;
    };
  };
}
