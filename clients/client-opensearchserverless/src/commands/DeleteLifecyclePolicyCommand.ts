// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLifecyclePolicyRequest, DeleteLifecyclePolicyResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_DeleteLifecyclePolicyCommand, se_DeleteLifecyclePolicyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLifecyclePolicyCommand}.
 */
export interface DeleteLifecyclePolicyCommandInput extends DeleteLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLifecyclePolicyCommand}.
 */
export interface DeleteLifecyclePolicyCommandOutput extends DeleteLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes an OpenSearch Serverless lifecycle policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html#serverless-lifecycle-delete">Deleting data lifecycle policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, DeleteLifecyclePolicyCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, DeleteLifecyclePolicyCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // DeleteLifecyclePolicyRequest
 *   type: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLifecyclePolicyCommandInput - {@link DeleteLifecyclePolicyCommandInput}
 * @returns {@link DeleteLifecyclePolicyCommandOutput}
 * @see {@link DeleteLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLifecyclePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 *
 * @public
 */
export class DeleteLifecyclePolicyCommand extends $Command
  .classBuilder<
    DeleteLifecyclePolicyCommandInput,
    DeleteLifecyclePolicyCommandOutput,
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
  .s("OpenSearchServerless", "DeleteLifecyclePolicy", {})
  .n("OpenSearchServerlessClient", "DeleteLifecyclePolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLifecyclePolicyCommand)
  .de(de_DeleteLifecyclePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLifecyclePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteLifecyclePolicyCommandInput;
      output: DeleteLifecyclePolicyCommandOutput;
    };
  };
}
