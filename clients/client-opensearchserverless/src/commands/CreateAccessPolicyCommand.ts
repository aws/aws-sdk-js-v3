// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccessPolicyRequest, CreateAccessPolicyResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { CreateAccessPolicy } from "../schemas/schemas_4_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessPolicyCommand}.
 */
export interface CreateAccessPolicyCommandInput extends CreateAccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessPolicyCommand}.
 */
export interface CreateAccessPolicyCommandOutput extends CreateAccessPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, CreateAccessPolicyCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, CreateAccessPolicyCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // CreateAccessPolicyRequest
 *   type: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   policy: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessPolicyResponse
 * //   accessPolicyDetail: { // AccessPolicyDetail
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
 * @param CreateAccessPolicyCommandInput - {@link CreateAccessPolicyCommandInput}
 * @returns {@link CreateAccessPolicyCommandOutput}
 * @see {@link CreateAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPolicyCommandOutput} for command's `response` shape.
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
export class CreateAccessPolicyCommand extends $Command
  .classBuilder<
    CreateAccessPolicyCommandInput,
    CreateAccessPolicyCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OpenSearchServerless", "CreateAccessPolicy", {})
  .n("OpenSearchServerlessClient", "CreateAccessPolicyCommand")
  .sc(CreateAccessPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessPolicyRequest;
      output: CreateAccessPolicyResponse;
    };
    sdk: {
      input: CreateAccessPolicyCommandInput;
      output: CreateAccessPolicyCommandOutput;
    };
  };
}
