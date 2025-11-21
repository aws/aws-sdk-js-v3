// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSigningConfigurationRequest, DeleteSigningConfigurationResponse } from "../models/models_0";
import { DeleteSigningConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSigningConfigurationCommand}.
 */
export interface DeleteSigningConfigurationCommandInput extends DeleteSigningConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSigningConfigurationCommand}.
 */
export interface DeleteSigningConfigurationCommandOutput extends DeleteSigningConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes the registry's signing configuration. Images pushed after deletion of the signing
 *             configuration will no longer be automatically signed.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/managed-signing.html">Managed signing</a> in the
 *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
 *          <note>
 *             <p>Deleting the signing configuration does not affect existing image signatures.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteSigningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteSigningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = {};
 * const command = new DeleteSigningConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSigningConfigurationResponse
 * //   registryId: "STRING_VALUE",
 * //   signingConfiguration: { // SigningConfiguration
 * //     rules: [ // SigningRuleList // required
 * //       { // SigningRule
 * //         signingProfileArn: "STRING_VALUE", // required
 * //         repositoryFilters: [ // SigningRepositoryFilterList
 * //           { // SigningRepositoryFilter
 * //             filter: "STRING_VALUE", // required
 * //             filterType: "WILDCARD_MATCH", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteSigningConfigurationCommandInput - {@link DeleteSigningConfigurationCommandInput}
 * @returns {@link DeleteSigningConfigurationCommandOutput}
 * @see {@link DeleteSigningConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSigningConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link SigningConfigurationNotFoundException} (client fault)
 *  <p>The specified signing configuration was not found. This occurs when
 *             attempting to retrieve or delete a signing configuration that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @public
 */
export class DeleteSigningConfigurationCommand extends $Command
  .classBuilder<
    DeleteSigningConfigurationCommandInput,
    DeleteSigningConfigurationCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "DeleteSigningConfiguration", {})
  .n("ECRClient", "DeleteSigningConfigurationCommand")
  .sc(DeleteSigningConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeleteSigningConfigurationResponse;
    };
    sdk: {
      input: DeleteSigningConfigurationCommandInput;
      output: DeleteSigningConfigurationCommandOutput;
    };
  };
}
