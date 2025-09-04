// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLifecyclePolicyRequest, CreateLifecyclePolicyResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_CreateLifecyclePolicyCommand, se_CreateLifecyclePolicyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLifecyclePolicyCommand}.
 */
export interface CreateLifecyclePolicyCommandInput extends CreateLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateLifecyclePolicyCommand}.
 */
export interface CreateLifecyclePolicyCommandOutput extends CreateLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Creates a lifecyle policy to be applied to OpenSearch Serverless indexes. Lifecycle policies define the number of days or hours to retain the data on an OpenSearch Serverless index. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html#serverless-lifecycle-create">Creating data lifecycle policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, CreateLifecyclePolicyCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, CreateLifecyclePolicyCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // CreateLifecyclePolicyRequest
 *   type: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   policy: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateLifecyclePolicyResponse
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
 * @param CreateLifecyclePolicyCommandInput - {@link CreateLifecyclePolicyCommandInput}
 * @returns {@link CreateLifecyclePolicyCommandOutput}
 * @see {@link CreateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>When creating a resource, thrown when a resource with the same name already exists or is being created. When deleting a resource, thrown when the resource is not in the ACTIVE or FAILED state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
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
export class CreateLifecyclePolicyCommand extends $Command
  .classBuilder<
    CreateLifecyclePolicyCommandInput,
    CreateLifecyclePolicyCommandOutput,
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
  .s("OpenSearchServerless", "CreateLifecyclePolicy", {})
  .n("OpenSearchServerlessClient", "CreateLifecyclePolicyCommand")
  .f(void 0, void 0)
  .ser(se_CreateLifecyclePolicyCommand)
  .de(de_CreateLifecyclePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLifecyclePolicyRequest;
      output: CreateLifecyclePolicyResponse;
    };
    sdk: {
      input: CreateLifecyclePolicyCommandInput;
      output: CreateLifecyclePolicyCommandOutput;
    };
  };
}
