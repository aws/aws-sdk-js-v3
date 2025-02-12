// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSecurityConfigRequest, UpdateSecurityConfigResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_UpdateSecurityConfigCommand, se_UpdateSecurityConfigCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityConfigCommand}.
 */
export interface UpdateSecurityConfigCommandInput extends UpdateSecurityConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityConfigCommand}.
 */
export interface UpdateSecurityConfigCommandOutput extends UpdateSecurityConfigResponse, __MetadataBearer {}

/**
 * <p>Updates a security configuration for OpenSearch Serverless. For more information, see
 *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML
 *                 authentication for Amazon OpenSearch Serverless</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, UpdateSecurityConfigCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, UpdateSecurityConfigCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // UpdateSecurityConfigRequest
 *   id: "STRING_VALUE", // required
 *   configVersion: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   samlOptions: { // SamlConfigOptions
 *     metadata: "STRING_VALUE", // required
 *     userAttribute: "STRING_VALUE",
 *     groupAttribute: "STRING_VALUE",
 *     openSearchServerlessEntityId: "STRING_VALUE",
 *     sessionTimeout: Number("int"),
 *   },
 *   iamIdentityCenterOptionsUpdates: { // UpdateIamIdentityCenterConfigOptions
 *     userAttribute: "STRING_VALUE",
 *     groupAttribute: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateSecurityConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecurityConfigResponse
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
 * //     createdDate: Number("long"),
 * //     lastModifiedDate: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSecurityConfigCommandInput - {@link UpdateSecurityConfigCommandInput}
 * @returns {@link UpdateSecurityConfigCommandOutput}
 * @see {@link UpdateSecurityConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityConfigCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>When creating a resource, thrown when a resource with the same name already exists
 *             or is being created. When deleting a resource, thrown when the resource is not in
 *             the ACTIVE or FAILED state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when accessing or deleting a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required
 *             input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 * @public
 */
export class UpdateSecurityConfigCommand extends $Command
  .classBuilder<
    UpdateSecurityConfigCommandInput,
    UpdateSecurityConfigCommandOutput,
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
  .s("OpenSearchServerless", "UpdateSecurityConfig", {})
  .n("OpenSearchServerlessClient", "UpdateSecurityConfigCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSecurityConfigCommand)
  .de(de_UpdateSecurityConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSecurityConfigRequest;
      output: UpdateSecurityConfigResponse;
    };
    sdk: {
      input: UpdateSecurityConfigCommandInput;
      output: UpdateSecurityConfigCommandOutput;
    };
  };
}
