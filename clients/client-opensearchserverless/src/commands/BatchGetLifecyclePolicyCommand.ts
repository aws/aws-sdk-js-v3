// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetLifecyclePolicyRequest, BatchGetLifecyclePolicyResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_BatchGetLifecyclePolicyCommand, se_BatchGetLifecyclePolicyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetLifecyclePolicyCommand}.
 */
export interface BatchGetLifecyclePolicyCommandInput extends BatchGetLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetLifecyclePolicyCommand}.
 */
export interface BatchGetLifecyclePolicyCommandOutput extends BatchGetLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Returns one or more configured OpenSearch Serverless lifecycle policies. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html#serverless-lifecycle-list">Viewing data lifecycle policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, BatchGetLifecyclePolicyCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, BatchGetLifecyclePolicyCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // BatchGetLifecyclePolicyRequest
 *   identifiers: [ // LifecyclePolicyIdentifiers // required
 *     { // LifecyclePolicyIdentifier
 *       type: "STRING_VALUE", // required
 *       name: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetLifecyclePolicyResponse
 * //   lifecyclePolicyDetails: [ // LifecyclePolicyDetails
 * //     { // LifecyclePolicyDetail
 * //       type: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       policyVersion: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       policy: "DOCUMENT_VALUE",
 * //       createdDate: Number("long"),
 * //       lastModifiedDate: Number("long"),
 * //     },
 * //   ],
 * //   lifecyclePolicyErrorDetails: [ // LifecyclePolicyErrorDetails
 * //     { // LifecyclePolicyErrorDetail
 * //       type: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetLifecyclePolicyCommandInput - {@link BatchGetLifecyclePolicyCommandInput}
 * @returns {@link BatchGetLifecyclePolicyCommandOutput}
 * @see {@link BatchGetLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link BatchGetLifecyclePolicyCommandOutput} for command's `response` shape.
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
export class BatchGetLifecyclePolicyCommand extends $Command
  .classBuilder<
    BatchGetLifecyclePolicyCommandInput,
    BatchGetLifecyclePolicyCommandOutput,
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
  .s("OpenSearchServerless", "BatchGetLifecyclePolicy", {})
  .n("OpenSearchServerlessClient", "BatchGetLifecyclePolicyCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetLifecyclePolicyCommand)
  .de(de_BatchGetLifecyclePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetLifecyclePolicyRequest;
      output: BatchGetLifecyclePolicyResponse;
    };
    sdk: {
      input: BatchGetLifecyclePolicyCommandInput;
      output: BatchGetLifecyclePolicyCommandOutput;
    };
  };
}
