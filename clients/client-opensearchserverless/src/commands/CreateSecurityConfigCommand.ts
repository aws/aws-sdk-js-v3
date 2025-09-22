// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSecurityConfigRequest, CreateSecurityConfigResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { CreateSecurityConfig } from "../schemas/schemas_4_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSecurityConfigCommand}.
 */
export interface CreateSecurityConfigCommandInput extends CreateSecurityConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateSecurityConfigCommand}.
 */
export interface CreateSecurityConfigCommandOutput extends CreateSecurityConfigResponse, __MetadataBearer {}

/**
 * <p>Specifies a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, CreateSecurityConfigCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, CreateSecurityConfigCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // CreateSecurityConfigRequest
 *   type: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   samlOptions: { // SamlConfigOptions
 *     metadata: "STRING_VALUE", // required
 *     userAttribute: "STRING_VALUE",
 *     groupAttribute: "STRING_VALUE",
 *     openSearchServerlessEntityId: "STRING_VALUE",
 *     sessionTimeout: Number("int"),
 *   },
 *   iamIdentityCenterOptions: { // CreateIamIdentityCenterConfigOptions
 *     instanceArn: "STRING_VALUE", // required
 *     userAttribute: "STRING_VALUE",
 *     groupAttribute: "STRING_VALUE",
 *   },
 *   iamFederationOptions: { // IamFederationConfigOptions
 *     groupAttribute: "STRING_VALUE",
 *     userAttribute: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateSecurityConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecurityConfigResponse
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
 * @param CreateSecurityConfigCommandInput - {@link CreateSecurityConfigCommandInput}
 * @returns {@link CreateSecurityConfigCommandOutput}
 * @see {@link CreateSecurityConfigCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityConfigCommandOutput} for command's `response` shape.
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
export class CreateSecurityConfigCommand extends $Command
  .classBuilder<
    CreateSecurityConfigCommandInput,
    CreateSecurityConfigCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OpenSearchServerless", "CreateSecurityConfig", {})
  .n("OpenSearchServerlessClient", "CreateSecurityConfigCommand")
  .sc(CreateSecurityConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSecurityConfigRequest;
      output: CreateSecurityConfigResponse;
    };
    sdk: {
      input: CreateSecurityConfigCommandInput;
      output: CreateSecurityConfigCommandOutput;
    };
  };
}
