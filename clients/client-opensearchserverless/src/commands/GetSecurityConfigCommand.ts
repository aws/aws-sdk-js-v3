// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSecurityConfigRequest, GetSecurityConfigResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_GetSecurityConfigCommand, se_GetSecurityConfigCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSecurityConfigCommand}.
 */
export interface GetSecurityConfigCommandInput extends GetSecurityConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetSecurityConfigCommand}.
 */
export interface GetSecurityConfigCommandOutput extends GetSecurityConfigResponse, __MetadataBearer {}

/**
 * <p>Returns information about an OpenSearch Serverless security configuration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, GetSecurityConfigCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, GetSecurityConfigCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // GetSecurityConfigRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetSecurityConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetSecurityConfigResponse
 * //   securityConfigDetail: { // SecurityConfigDetail
 * //     id: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //     configVersion: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     samlOptions: { // SamlConfigOptions
 * //       metadata: "STRING_VALUE", // required
 * //       userAttribute: "STRING_VALUE",
 * //       groupAttribute: "STRING_VALUE",
 * //       openSearchServerlessEntityId: "STRING_VALUE",
 * //       sessionTimeout: Number("int"),
 * //     },
 * //     iamIdentityCenterOptions: { // IamIdentityCenterConfigOptions
 * //       instanceArn: "STRING_VALUE",
 * //       applicationArn: "STRING_VALUE",
 * //       applicationName: "STRING_VALUE",
 * //       applicationDescription: "STRING_VALUE",
 * //       userAttribute: "STRING_VALUE",
 * //       groupAttribute: "STRING_VALUE",
 * //     },
 * //     iamFederationOptions: { // IamFederationConfigOptions
 * //       groupAttribute: "STRING_VALUE",
 * //       userAttribute: "STRING_VALUE",
 * //     },
 * //     createdDate: Number("long"),
 * //     lastModifiedDate: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSecurityConfigCommandInput - {@link GetSecurityConfigCommandInput}
 * @returns {@link GetSecurityConfigCommandOutput}
 * @see {@link GetSecurityConfigCommandInput} for command's `input` shape.
 * @see {@link GetSecurityConfigCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
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
export class GetSecurityConfigCommand extends $Command
  .classBuilder<
    GetSecurityConfigCommandInput,
    GetSecurityConfigCommandOutput,
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
  .s("OpenSearchServerless", "GetSecurityConfig", {})
  .n("OpenSearchServerlessClient", "GetSecurityConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetSecurityConfigCommand)
  .de(de_GetSecurityConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSecurityConfigRequest;
      output: GetSecurityConfigResponse;
    };
    sdk: {
      input: GetSecurityConfigCommandInput;
      output: GetSecurityConfigCommandOutput;
    };
  };
}
