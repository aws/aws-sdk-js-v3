// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetEffectiveLifecyclePolicyRequest, BatchGetEffectiveLifecyclePolicyResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import {
  de_BatchGetEffectiveLifecyclePolicyCommand,
  se_BatchGetEffectiveLifecyclePolicyCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetEffectiveLifecyclePolicyCommand}.
 */
export interface BatchGetEffectiveLifecyclePolicyCommandInput extends BatchGetEffectiveLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetEffectiveLifecyclePolicyCommand}.
 */
export interface BatchGetEffectiveLifecyclePolicyCommandOutput
  extends BatchGetEffectiveLifecyclePolicyResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of successful and failed retrievals for the OpenSearch Serverless indexes. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html#serverless-lifecycle-list">Viewing data lifecycle policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, BatchGetEffectiveLifecyclePolicyCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, BatchGetEffectiveLifecyclePolicyCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // BatchGetEffectiveLifecyclePolicyRequest
 *   resourceIdentifiers: [ // LifecyclePolicyResourceIdentifiers // required
 *     { // LifecyclePolicyResourceIdentifier
 *       type: "STRING_VALUE", // required
 *       resource: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetEffectiveLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetEffectiveLifecyclePolicyResponse
 * //   effectiveLifecyclePolicyDetails: [ // EffectiveLifecyclePolicyDetails
 * //     { // EffectiveLifecyclePolicyDetail
 * //       type: "STRING_VALUE",
 * //       resource: "STRING_VALUE",
 * //       policyName: "STRING_VALUE",
 * //       resourceType: "STRING_VALUE",
 * //       retentionPeriod: "STRING_VALUE",
 * //       noMinRetentionPeriod: true || false,
 * //     },
 * //   ],
 * //   effectiveLifecyclePolicyErrorDetails: [ // EffectiveLifecyclePolicyErrorDetails
 * //     { // EffectiveLifecyclePolicyErrorDetail
 * //       type: "STRING_VALUE",
 * //       resource: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetEffectiveLifecyclePolicyCommandInput - {@link BatchGetEffectiveLifecyclePolicyCommandInput}
 * @returns {@link BatchGetEffectiveLifecyclePolicyCommandOutput}
 * @see {@link BatchGetEffectiveLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link BatchGetEffectiveLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 *
 * @public
 */
export class BatchGetEffectiveLifecyclePolicyCommand extends $Command
  .classBuilder<
    BatchGetEffectiveLifecyclePolicyCommandInput,
    BatchGetEffectiveLifecyclePolicyCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpenSearchServerless", "BatchGetEffectiveLifecyclePolicy", {})
  .n("OpenSearchServerlessClient", "BatchGetEffectiveLifecyclePolicyCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetEffectiveLifecyclePolicyCommand)
  .de(de_BatchGetEffectiveLifecyclePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetEffectiveLifecyclePolicyRequest;
      output: BatchGetEffectiveLifecyclePolicyResponse;
    };
    sdk: {
      input: BatchGetEffectiveLifecyclePolicyCommandInput;
      output: BatchGetEffectiveLifecyclePolicyCommandOutput;
    };
  };
}
