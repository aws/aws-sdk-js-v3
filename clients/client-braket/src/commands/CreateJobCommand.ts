// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateJobRequest, CreateJobResponse } from "../models/models_0";
import { CreateJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateJobCommand}.
 */
export interface CreateJobCommandInput extends CreateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobCommand}.
 */
export interface CreateJobCommandOutput extends CreateJobResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Braket hybrid job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, CreateJobCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, CreateJobCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * // import type { BraketClientConfig } from "@aws-sdk/client-braket";
 * const config = {}; // type is BraketClientConfig
 * const client = new BraketClient(config);
 * const input = { // CreateJobRequest
 *   clientToken: "STRING_VALUE", // required
 *   algorithmSpecification: { // AlgorithmSpecification
 *     scriptModeConfig: { // ScriptModeConfig
 *       entryPoint: "STRING_VALUE", // required
 *       s3Uri: "STRING_VALUE", // required
 *       compressionType: "STRING_VALUE",
 *     },
 *     containerImage: { // ContainerImage
 *       uri: "STRING_VALUE", // required
 *     },
 *   },
 *   inputDataConfig: [ // InputConfigList
 *     { // InputFileConfig
 *       channelName: "STRING_VALUE", // required
 *       contentType: "STRING_VALUE",
 *       dataSource: { // DataSource
 *         s3DataSource: { // S3DataSource
 *           s3Uri: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 *   outputDataConfig: { // JobOutputDataConfig
 *     kmsKeyId: "STRING_VALUE",
 *     s3Path: "STRING_VALUE", // required
 *   },
 *   checkpointConfig: { // JobCheckpointConfig
 *     localPath: "STRING_VALUE",
 *     s3Uri: "STRING_VALUE", // required
 *   },
 *   jobName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   stoppingCondition: { // JobStoppingCondition
 *     maxRuntimeInSeconds: Number("int"),
 *   },
 *   instanceConfig: { // InstanceConfig
 *     instanceType: "STRING_VALUE", // required
 *     volumeSizeInGb: Number("int"), // required
 *     instanceCount: Number("int"),
 *   },
 *   hyperParameters: { // HyperParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   deviceConfig: { // DeviceConfig
 *     device: "STRING_VALUE", // required
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   associations: [ // Associations
 *     { // Association
 *       arn: "STRING_VALUE", // required
 *       type: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateJobCommandInput - {@link CreateJobCommandInput}
 * @returns {@link CreateJobCommandOutput}
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred due to a conflict.</p>
 *
 * @throws {@link DeviceOfflineException} (client fault)
 *  <p>The specified device is currently offline.</p>
 *
 * @throws {@link DeviceRetiredException} (client fault)
 *  <p>The specified device has been retired.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request failed because of an unknown error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because a service quota is exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The API throttling rate limit is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input request failed to satisfy constraints expected by Amazon Braket.</p>
 *
 * @throws {@link BraketServiceException}
 * <p>Base exception class for all service exceptions from Braket service.</p>
 *
 *
 * @public
 */
export class CreateJobCommand extends $Command
  .classBuilder<
    CreateJobCommandInput,
    CreateJobCommandOutput,
    BraketClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BraketClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Braket", "CreateJob", {})
  .n("BraketClient", "CreateJobCommand")
  .sc(CreateJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateJobRequest;
      output: CreateJobResponse;
    };
    sdk: {
      input: CreateJobCommandInput;
      output: CreateJobCommandOutput;
    };
  };
}
