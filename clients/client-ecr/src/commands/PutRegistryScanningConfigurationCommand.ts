// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRegistryScanningConfigurationRequest, PutRegistryScanningConfigurationResponse } from "../models/models_0";
import {
  de_PutRegistryScanningConfigurationCommand,
  se_PutRegistryScanningConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRegistryScanningConfigurationCommand}.
 */
export interface PutRegistryScanningConfigurationCommandInput extends PutRegistryScanningConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutRegistryScanningConfigurationCommand}.
 */
export interface PutRegistryScanningConfigurationCommandOutput
  extends PutRegistryScanningConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates or updates the scanning configuration for your private registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutRegistryScanningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutRegistryScanningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // PutRegistryScanningConfigurationRequest
 *   scanType: "BASIC" || "ENHANCED",
 *   rules: [ // RegistryScanningRuleList
 *     { // RegistryScanningRule
 *       scanFrequency: "SCAN_ON_PUSH" || "CONTINUOUS_SCAN" || "MANUAL", // required
 *       repositoryFilters: [ // ScanningRepositoryFilterList // required
 *         { // ScanningRepositoryFilter
 *           filter: "STRING_VALUE", // required
 *           filterType: "WILDCARD", // required
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutRegistryScanningConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutRegistryScanningConfigurationResponse
 * //   registryScanningConfiguration: { // RegistryScanningConfiguration
 * //     scanType: "BASIC" || "ENHANCED",
 * //     rules: [ // RegistryScanningRuleList
 * //       { // RegistryScanningRule
 * //         scanFrequency: "SCAN_ON_PUSH" || "CONTINUOUS_SCAN" || "MANUAL", // required
 * //         repositoryFilters: [ // ScanningRepositoryFilterList // required
 * //           { // ScanningRepositoryFilter
 * //             filter: "STRING_VALUE", // required
 * //             filterType: "WILDCARD", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param PutRegistryScanningConfigurationCommandInput - {@link PutRegistryScanningConfigurationCommandInput}
 * @returns {@link PutRegistryScanningConfigurationCommandOutput}
 * @see {@link PutRegistryScanningConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutRegistryScanningConfigurationCommandOutput} for command's `response` shape.
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
export class PutRegistryScanningConfigurationCommand extends $Command
  .classBuilder<
    PutRegistryScanningConfigurationCommandInput,
    PutRegistryScanningConfigurationCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "PutRegistryScanningConfiguration", {})
  .n("ECRClient", "PutRegistryScanningConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutRegistryScanningConfigurationCommand)
  .de(de_PutRegistryScanningConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRegistryScanningConfigurationRequest;
      output: PutRegistryScanningConfigurationResponse;
    };
    sdk: {
      input: PutRegistryScanningConfigurationCommandInput;
      output: PutRegistryScanningConfigurationCommandOutput;
    };
  };
}
