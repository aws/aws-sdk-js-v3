// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AuthorizeVpcEndpointAccessRequest, AuthorizeVpcEndpointAccessResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { AuthorizeVpcEndpointAccess } from "../schemas/schemas_18_Vpc";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AuthorizeVpcEndpointAccessCommand}.
 */
export interface AuthorizeVpcEndpointAccessCommandInput extends AuthorizeVpcEndpointAccessRequest {}
/**
 * @public
 *
 * The output of {@link AuthorizeVpcEndpointAccessCommand}.
 */
export interface AuthorizeVpcEndpointAccessCommandOutput extends AuthorizeVpcEndpointAccessResponse, __MetadataBearer {}

/**
 * <p>Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC
 *    endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AuthorizeVpcEndpointAccessCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AuthorizeVpcEndpointAccessCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // AuthorizeVpcEndpointAccessRequest
 *   DomainName: "STRING_VALUE", // required
 *   Account: "STRING_VALUE",
 *   Service: "application.opensearchservice.amazonaws.com",
 * };
 * const command = new AuthorizeVpcEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // AuthorizeVpcEndpointAccessResponse
 * //   AuthorizedPrincipal: { // AuthorizedPrincipal
 * //     PrincipalType: "AWS_ACCOUNT" || "AWS_SERVICE",
 * //     Principal: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AuthorizeVpcEndpointAccessCommandInput - {@link AuthorizeVpcEndpointAccessCommandInput}
 * @returns {@link AuthorizeVpcEndpointAccessCommandOutput}
 * @see {@link AuthorizeVpcEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link AuthorizeVpcEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class AuthorizeVpcEndpointAccessCommand extends $Command
  .classBuilder<
    AuthorizeVpcEndpointAccessCommandInput,
    AuthorizeVpcEndpointAccessCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "AuthorizeVpcEndpointAccess", {})
  .n("OpenSearchClient", "AuthorizeVpcEndpointAccessCommand")
  .sc(AuthorizeVpcEndpointAccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AuthorizeVpcEndpointAccessRequest;
      output: AuthorizeVpcEndpointAccessResponse;
    };
    sdk: {
      input: AuthorizeVpcEndpointAccessCommandInput;
      output: AuthorizeVpcEndpointAccessCommandOutput;
    };
  };
}
