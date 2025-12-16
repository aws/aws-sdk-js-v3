// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSigningConfigurationRequest, GetSigningConfigurationResponse } from "../models/models_0";
import { GetSigningConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSigningConfigurationCommand}.
 */
export interface GetSigningConfigurationCommandInput extends GetSigningConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetSigningConfigurationCommand}.
 */
export interface GetSigningConfigurationCommandOutput extends GetSigningConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the registry's signing configuration, which defines
 *             rules for automatically signing images using Amazon Web Services Signer.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/managed-signing.html">Managed signing</a> in the
 *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetSigningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetSigningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = {};
 * const command = new GetSigningConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetSigningConfigurationResponse
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
 * @param GetSigningConfigurationCommandInput - {@link GetSigningConfigurationCommandInput}
 * @returns {@link GetSigningConfigurationCommandOutput}
 * @see {@link GetSigningConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSigningConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
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
export class GetSigningConfigurationCommand extends $Command
  .classBuilder<
    GetSigningConfigurationCommandInput,
    GetSigningConfigurationCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "GetSigningConfiguration", {})
  .n("ECRClient", "GetSigningConfigurationCommand")
  .sc(GetSigningConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetSigningConfigurationResponse;
    };
    sdk: {
      input: GetSigningConfigurationCommandInput;
      output: GetSigningConfigurationCommandOutput;
    };
  };
}
