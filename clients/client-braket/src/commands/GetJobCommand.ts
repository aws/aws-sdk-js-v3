// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetJobRequest, GetJobResponse } from "../models/models_0";
import { de_GetJobCommand, se_GetJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobCommand}.
 */
export interface GetJobCommandInput extends GetJobRequest {}
/**
 * @public
 *
 * The output of {@link GetJobCommand}.
 */
export interface GetJobCommandOutput extends GetJobResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified Amazon Braket job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, GetJobCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, GetJobCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const input = { // GetJobRequest
 *   jobArn: "STRING_VALUE", // required
 *   additionalAttributeNames: [ // HybridJobAdditionalAttributeNamesList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetJobCommand(input);
 * const response = await client.send(command);
 * // { // GetJobResponse
 * //   status: "STRING_VALUE", // required
 * //   jobArn: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   failureReason: "STRING_VALUE",
 * //   jobName: "STRING_VALUE", // required
 * //   hyperParameters: { // HyperParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   inputDataConfig: [ // InputConfigList
 * //     { // InputFileConfig
 * //       channelName: "STRING_VALUE", // required
 * //       contentType: "STRING_VALUE",
 * //       dataSource: { // DataSource
 * //         s3DataSource: { // S3DataSource
 * //           s3Uri: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   outputDataConfig: { // JobOutputDataConfig
 * //     kmsKeyId: "STRING_VALUE",
 * //     s3Path: "STRING_VALUE", // required
 * //   },
 * //   stoppingCondition: { // JobStoppingCondition
 * //     maxRuntimeInSeconds: Number("int"),
 * //   },
 * //   checkpointConfig: { // JobCheckpointConfig
 * //     localPath: "STRING_VALUE",
 * //     s3Uri: "STRING_VALUE", // required
 * //   },
 * //   algorithmSpecification: { // AlgorithmSpecification
 * //     scriptModeConfig: { // ScriptModeConfig
 * //       entryPoint: "STRING_VALUE", // required
 * //       s3Uri: "STRING_VALUE", // required
 * //       compressionType: "STRING_VALUE",
 * //     },
 * //     containerImage: { // ContainerImage
 * //       uri: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   instanceConfig: { // InstanceConfig
 * //     instanceType: "STRING_VALUE", // required
 * //     volumeSizeInGb: Number("int"), // required
 * //     instanceCount: Number("int"),
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   startedAt: new Date("TIMESTAMP"),
 * //   endedAt: new Date("TIMESTAMP"),
 * //   billableDuration: Number("int"),
 * //   deviceConfig: { // DeviceConfig
 * //     device: "STRING_VALUE", // required
 * //   },
 * //   events: [ // JobEvents
 * //     { // JobEventDetails
 * //       eventType: "STRING_VALUE",
 * //       timeOfEvent: new Date("TIMESTAMP"),
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   queueInfo: { // HybridJobQueueInfo
 * //     queue: "STRING_VALUE", // required
 * //     position: "STRING_VALUE", // required
 * //     message: "STRING_VALUE",
 * //   },
 * //   associations: [ // Associations
 * //     { // Association
 * //       arn: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetJobCommandInput - {@link GetJobCommandInput}
 * @returns {@link GetJobCommandOutput}
 * @see {@link GetJobCommandInput} for command's `input` shape.
 * @see {@link GetJobCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling rate limit is met.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link BraketServiceException}
 * <p>Base exception class for all service exceptions from Braket service.</p>
 *
 * @public
 */
export class GetJobCommand extends $Command
  .classBuilder<
    GetJobCommandInput,
    GetJobCommandOutput,
    BraketClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BraketClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Braket", "GetJob", {})
  .n("BraketClient", "GetJobCommand")
  .f(void 0, void 0)
  .ser(se_GetJobCommand)
  .de(de_GetJobCommand)
  .build() {}
