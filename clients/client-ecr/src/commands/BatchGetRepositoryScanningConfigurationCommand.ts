// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchGetRepositoryScanningConfigurationRequest,
  BatchGetRepositoryScanningConfigurationResponse,
} from "../models/models_0";
import {
  de_BatchGetRepositoryScanningConfigurationCommand,
  se_BatchGetRepositoryScanningConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetRepositoryScanningConfigurationCommand}.
 */
export interface BatchGetRepositoryScanningConfigurationCommandInput
  extends BatchGetRepositoryScanningConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetRepositoryScanningConfigurationCommand}.
 */
export interface BatchGetRepositoryScanningConfigurationCommandOutput
  extends BatchGetRepositoryScanningConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets the scanning configuration for one or more repositories.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchGetRepositoryScanningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchGetRepositoryScanningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // BatchGetRepositoryScanningConfigurationRequest
 *   repositoryNames: [ // ScanningConfigurationRepositoryNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetRepositoryScanningConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetRepositoryScanningConfigurationResponse
 * //   scanningConfigurations: [ // RepositoryScanningConfigurationList
 * //     { // RepositoryScanningConfiguration
 * //       repositoryArn: "STRING_VALUE",
 * //       repositoryName: "STRING_VALUE",
 * //       scanOnPush: true || false,
 * //       scanFrequency: "SCAN_ON_PUSH" || "CONTINUOUS_SCAN" || "MANUAL",
 * //       appliedScanFilters: [ // ScanningRepositoryFilterList
 * //         { // ScanningRepositoryFilter
 * //           filter: "STRING_VALUE", // required
 * //           filterType: "WILDCARD", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   failures: [ // RepositoryScanningConfigurationFailureList
 * //     { // RepositoryScanningConfigurationFailure
 * //       repositoryName: "STRING_VALUE",
 * //       failureCode: "REPOSITORY_NOT_FOUND",
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetRepositoryScanningConfigurationCommandInput - {@link BatchGetRepositoryScanningConfigurationCommandInput}
 * @returns {@link BatchGetRepositoryScanningConfigurationCommandOutput}
 * @see {@link BatchGetRepositoryScanningConfigurationCommandInput} for command's `input` shape.
 * @see {@link BatchGetRepositoryScanningConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
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
export class BatchGetRepositoryScanningConfigurationCommand extends $Command
  .classBuilder<
    BatchGetRepositoryScanningConfigurationCommandInput,
    BatchGetRepositoryScanningConfigurationCommandOutput,
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
  .s("AmazonEC2ContainerRegistry_V20150921", "BatchGetRepositoryScanningConfiguration", {})
  .n("ECRClient", "BatchGetRepositoryScanningConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetRepositoryScanningConfigurationCommand)
  .de(de_BatchGetRepositoryScanningConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetRepositoryScanningConfigurationRequest;
      output: BatchGetRepositoryScanningConfigurationResponse;
    };
    sdk: {
      input: BatchGetRepositoryScanningConfigurationCommandInput;
      output: BatchGetRepositoryScanningConfigurationCommandOutput;
    };
  };
}
