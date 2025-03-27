// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AuthorizeVpcEndpointAccessRequest, AuthorizeVpcEndpointAccessResponse } from "../models/models_0";
import { de_AuthorizeVpcEndpointAccessCommand, se_AuthorizeVpcEndpointAccessCommand } from "../protocols/Aws_restJson1";

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
 * <p>Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, AuthorizeVpcEndpointAccessCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, AuthorizeVpcEndpointAccessCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // AuthorizeVpcEndpointAccessRequest
 *   DomainName: "STRING_VALUE", // required
 *   Account: "STRING_VALUE", // required
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
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class AuthorizeVpcEndpointAccessCommand extends $Command
  .classBuilder<
    AuthorizeVpcEndpointAccessCommandInput,
    AuthorizeVpcEndpointAccessCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElasticsearchService2015", "AuthorizeVpcEndpointAccess", {})
  .n("ElasticsearchServiceClient", "AuthorizeVpcEndpointAccessCommand")
  .f(void 0, void 0)
  .ser(se_AuthorizeVpcEndpointAccessCommand)
  .de(de_AuthorizeVpcEndpointAccessCommand)
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
