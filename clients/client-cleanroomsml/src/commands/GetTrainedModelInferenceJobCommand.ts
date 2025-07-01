// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTrainedModelInferenceJobRequest, GetTrainedModelInferenceJobResponse } from "../models/models_0";
import {
  de_GetTrainedModelInferenceJobCommand,
  se_GetTrainedModelInferenceJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrainedModelInferenceJobCommand}.
 */
export interface GetTrainedModelInferenceJobCommandInput extends GetTrainedModelInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link GetTrainedModelInferenceJobCommand}.
 */
export interface GetTrainedModelInferenceJobCommandOutput
  extends GetTrainedModelInferenceJobResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a trained model inference job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetTrainedModelInferenceJobCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetTrainedModelInferenceJobCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetTrainedModelInferenceJobRequest
 *   membershipIdentifier: "STRING_VALUE", // required
 *   trainedModelInferenceJobArn: "STRING_VALUE", // required
 * };
 * const command = new GetTrainedModelInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // GetTrainedModelInferenceJobResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   trainedModelInferenceJobArn: "STRING_VALUE", // required
 * //   configuredModelAlgorithmAssociationArn: "STRING_VALUE",
 * //   name: "STRING_VALUE", // required
 * //   status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "CANCEL_PENDING" || "CANCEL_IN_PROGRESS" || "CANCEL_FAILED" || "INACTIVE", // required
 * //   trainedModelArn: "STRING_VALUE", // required
 * //   trainedModelVersionIdentifier: "STRING_VALUE",
 * //   resourceConfig: { // InferenceResourceConfig
 * //     instanceType: "ml.r7i.48xlarge" || "ml.r6i.16xlarge" || "ml.m6i.xlarge" || "ml.m5.4xlarge" || "ml.p2.xlarge" || "ml.m4.16xlarge" || "ml.r7i.16xlarge" || "ml.m7i.xlarge" || "ml.m6i.12xlarge" || "ml.r7i.8xlarge" || "ml.r7i.large" || "ml.m7i.12xlarge" || "ml.m6i.24xlarge" || "ml.m7i.24xlarge" || "ml.r6i.8xlarge" || "ml.r6i.large" || "ml.g5.2xlarge" || "ml.m5.large" || "ml.p3.16xlarge" || "ml.m7i.48xlarge" || "ml.m6i.16xlarge" || "ml.p2.16xlarge" || "ml.g5.4xlarge" || "ml.m7i.16xlarge" || "ml.c4.2xlarge" || "ml.c5.2xlarge" || "ml.c6i.32xlarge" || "ml.c4.4xlarge" || "ml.g5.8xlarge" || "ml.c6i.xlarge" || "ml.c5.4xlarge" || "ml.g4dn.xlarge" || "ml.c7i.xlarge" || "ml.c6i.12xlarge" || "ml.g4dn.12xlarge" || "ml.c7i.12xlarge" || "ml.c6i.24xlarge" || "ml.g4dn.2xlarge" || "ml.c7i.24xlarge" || "ml.c7i.2xlarge" || "ml.c4.8xlarge" || "ml.c6i.2xlarge" || "ml.g4dn.4xlarge" || "ml.c7i.48xlarge" || "ml.c7i.4xlarge" || "ml.c6i.16xlarge" || "ml.c5.9xlarge" || "ml.g4dn.16xlarge" || "ml.c7i.16xlarge" || "ml.c6i.4xlarge" || "ml.c5.xlarge" || "ml.c4.xlarge" || "ml.g4dn.8xlarge" || "ml.c7i.8xlarge" || "ml.c7i.large" || "ml.g5.xlarge" || "ml.c6i.8xlarge" || "ml.c6i.large" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.m7i.2xlarge" || "ml.c5.18xlarge" || "ml.g5.48xlarge" || "ml.m6i.2xlarge" || "ml.g5.16xlarge" || "ml.m7i.4xlarge" || "ml.p3.2xlarge" || "ml.r6i.32xlarge" || "ml.m6i.4xlarge" || "ml.m5.xlarge" || "ml.m4.10xlarge" || "ml.r6i.xlarge" || "ml.m5.12xlarge" || "ml.m4.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.xlarge" || "ml.r6i.12xlarge" || "ml.m5.24xlarge" || "ml.r7i.12xlarge" || "ml.m7i.8xlarge" || "ml.m7i.large" || "ml.r6i.24xlarge" || "ml.r6i.2xlarge" || "ml.m4.2xlarge" || "ml.r7i.24xlarge" || "ml.r7i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.large" || "ml.m5.2xlarge" || "ml.p2.8xlarge" || "ml.r6i.4xlarge" || "ml.m6i.32xlarge" || "ml.p3.8xlarge" || "ml.m4.4xlarge", // required
 * //     instanceCount: Number("int"),
 * //   },
 * //   outputConfiguration: { // InferenceOutputConfiguration
 * //     accept: "STRING_VALUE",
 * //     members: [ // InferenceReceiverMembers // required
 * //       { // InferenceReceiverMember
 * //         accountId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   membershipIdentifier: "STRING_VALUE", // required
 * //   dataSource: { // ModelInferenceDataSource
 * //     mlInputChannelArn: "STRING_VALUE", // required
 * //   },
 * //   containerExecutionParameters: { // InferenceContainerExecutionParameters
 * //     maxPayloadInMB: Number("int"),
 * //   },
 * //   statusDetails: { // StatusDetails
 * //     statusCode: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * //   description: "STRING_VALUE",
 * //   inferenceContainerImageDigest: "STRING_VALUE",
 * //   environment: { // InferenceEnvironmentMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   kmsKeyArn: "STRING_VALUE",
 * //   metricsStatus: "PUBLISH_SUCCEEDED" || "PUBLISH_FAILED",
 * //   metricsStatusDetails: "STRING_VALUE",
 * //   logsStatus: "PUBLISH_SUCCEEDED" || "PUBLISH_FAILED",
 * //   logsStatusDetails: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrainedModelInferenceJobCommandInput - {@link GetTrainedModelInferenceJobCommandInput}
 * @returns {@link GetTrainedModelInferenceJobCommandOutput}
 * @see {@link GetTrainedModelInferenceJobCommandInput} for command's `input` shape.
 * @see {@link GetTrainedModelInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class GetTrainedModelInferenceJobCommand extends $Command
  .classBuilder<
    GetTrainedModelInferenceJobCommandInput,
    GetTrainedModelInferenceJobCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "GetTrainedModelInferenceJob", {})
  .n("CleanRoomsMLClient", "GetTrainedModelInferenceJobCommand")
  .f(void 0, void 0)
  .ser(se_GetTrainedModelInferenceJobCommand)
  .de(de_GetTrainedModelInferenceJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrainedModelInferenceJobRequest;
      output: GetTrainedModelInferenceJobResponse;
    };
    sdk: {
      input: GetTrainedModelInferenceJobCommandInput;
      output: GetTrainedModelInferenceJobCommandOutput;
    };
  };
}
