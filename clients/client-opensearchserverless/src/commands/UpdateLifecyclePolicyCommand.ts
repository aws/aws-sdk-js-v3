// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateLifecyclePolicyRequest, UpdateLifecyclePolicyResponse } from "../models/models_0";
import type {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { UpdateLifecyclePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLifecyclePolicyCommand}.
 */
export interface UpdateLifecyclePolicyCommandInput extends UpdateLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLifecyclePolicyCommand}.
 */
export interface UpdateLifecyclePolicyCommandOutput extends UpdateLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html#serverless-lifecycle-update">Updating data lifecycle policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, UpdateLifecyclePolicyCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, UpdateLifecyclePolicyCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // UpdateLifecyclePolicyRequest
 *   type: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   policyVersion: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   policy: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLifecyclePolicyResponse
 * //   lifecyclePolicyDetail: { // LifecyclePolicyDetail
 * //     type: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     policyVersion: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     policy: "DOCUMENT_VALUE",
 * //     createdDate: Number("long"),
 * //     lastModifiedDate: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLifecyclePolicyCommandInput - {@link UpdateLifecyclePolicyCommandInput}
 * @returns {@link UpdateLifecyclePolicyCommandOutput}
 * @see {@link UpdateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>When creating a resource, thrown when a resource with the same name already exists or is being created. When deleting a resource, thrown when the resource is not in the ACTIVE or FAILED state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when accessing or deleting a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Thrown when you attempt to create more resources than the service allows based on service quotas.</p>
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
export class UpdateLifecyclePolicyCommand extends $Command
  .classBuilder<
    UpdateLifecyclePolicyCommandInput,
    UpdateLifecyclePolicyCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OpenSearchServerless", "UpdateLifecyclePolicy", {})
  .n("OpenSearchServerlessClient", "UpdateLifecyclePolicyCommand")
  .sc(UpdateLifecyclePolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLifecyclePolicyRequest;
      output: UpdateLifecyclePolicyResponse;
    };
    sdk: {
      input: UpdateLifecyclePolicyCommandInput;
      output: UpdateLifecyclePolicyCommandOutput;
    };
  };
}
