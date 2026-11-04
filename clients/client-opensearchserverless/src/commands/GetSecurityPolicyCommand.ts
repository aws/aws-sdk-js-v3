// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSecurityPolicyRequest, GetSecurityPolicyResponse } from "../models/models_0";
import { GetSecurityPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSecurityPolicyCommand}.
 */
export interface GetSecurityPolicyCommandInput extends GetSecurityPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetSecurityPolicyCommand}.
 */
export interface GetSecurityPolicyCommandOutput extends GetSecurityPolicyResponse, __MetadataBearer {}

/**
 * Returns information about a configured OpenSearch Serverless security policy. For more information, see [Network access for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html) and [Encryption at rest for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, GetSecurityPolicyCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, GetSecurityPolicyCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // GetSecurityPolicyRequest
 *   type: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetSecurityPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetSecurityPolicyResponse
 * //   securityPolicyDetail: { // SecurityPolicyDetail
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
 * @param GetSecurityPolicyCommandInput - {@link GetSecurityPolicyCommandInput}
 * @returns {@link GetSecurityPolicyCommandOutput}
 * @see {@link GetSecurityPolicyCommandInput} for command's `input` shape.
 * @see {@link GetSecurityPolicyCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Thrown when an error internal to the service occurs while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Thrown when accessing or deleting a resource that does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Thrown when the HTTP request contains invalid input or is missing required input.
 *
 * @throws {@link OpenSearchServerlessServiceException}
 *
 * Base exception class for all service exceptions from OpenSearchServerless service.
 *
 * @public
 */
export class GetSecurityPolicyCommand extends command<GetSecurityPolicyCommandInput, GetSecurityPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetSecurityPolicy",
  GetSecurityPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSecurityPolicyRequest;
      output: GetSecurityPolicyResponse;
    };
    sdk: {
      input: GetSecurityPolicyCommandInput;
      output: GetSecurityPolicyCommandOutput;
    };
  };
}
