// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutSigningConfigurationRequest, PutSigningConfigurationResponse } from "../models/models_0";
import { PutSigningConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutSigningConfigurationCommand}.
 */
export interface PutSigningConfigurationCommandInput extends PutSigningConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutSigningConfigurationCommand}.
 */
export interface PutSigningConfigurationCommandOutput extends PutSigningConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates or updates the registry's signing configuration, which defines
 *             rules for automatically signing images with Amazon Web Services Signer.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/managed-signing.html">Managed signing</a> in the
 *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
 *          <note>
 *             <p>To successfully generate a signature, the IAM principal pushing images must have
 *                 permission to sign payloads with the Amazon Web Services Signer signing profile referenced in the signing
 *                 configuration.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutSigningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutSigningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // PutSigningConfigurationRequest
 *   signingConfiguration: { // SigningConfiguration
 *     rules: [ // SigningRuleList // required
 *       { // SigningRule
 *         signingProfileArn: "STRING_VALUE", // required
 *         repositoryFilters: [ // SigningRepositoryFilterList
 *           { // SigningRepositoryFilter
 *             filter: "STRING_VALUE", // required
 *             filterType: "WILDCARD_MATCH", // required
 *           },
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new PutSigningConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutSigningConfigurationResponse
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
 * @param PutSigningConfigurationCommandInput - {@link PutSigningConfigurationCommandInput}
 * @returns {@link PutSigningConfigurationCommandOutput}
 * @see {@link PutSigningConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutSigningConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
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
export class PutSigningConfigurationCommand extends $Command
  .classBuilder<
    PutSigningConfigurationCommandInput,
    PutSigningConfigurationCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "PutSigningConfiguration", {})
  .n("ECRClient", "PutSigningConfigurationCommand")
  .sc(PutSigningConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSigningConfigurationRequest;
      output: PutSigningConfigurationResponse;
    };
    sdk: {
      input: PutSigningConfigurationCommandInput;
      output: PutSigningConfigurationCommandOutput;
    };
  };
}
