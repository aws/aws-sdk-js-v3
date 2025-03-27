// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartTrainedModelInferenceJobRequest, StartTrainedModelInferenceJobResponse } from "../models/models_0";
import {
  de_StartTrainedModelInferenceJobCommand,
  se_StartTrainedModelInferenceJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTrainedModelInferenceJobCommand}.
 */
export interface StartTrainedModelInferenceJobCommandInput extends StartTrainedModelInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link StartTrainedModelInferenceJobCommand}.
 */
export interface StartTrainedModelInferenceJobCommandOutput
  extends StartTrainedModelInferenceJobResponse,
    __MetadataBearer {}

/**
 * <p>Defines the information necessary to begin a trained model inference job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, StartTrainedModelInferenceJobCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, StartTrainedModelInferenceJobCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // StartTrainedModelInferenceJobRequest
 *   membershipIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   trainedModelArn: "STRING_VALUE", // required
 *   configuredModelAlgorithmAssociationArn: "STRING_VALUE",
 *   resourceConfig: { // InferenceResourceConfig
 *     instanceType: "ml.r7i.48xlarge" || "ml.r6i.16xlarge" || "ml.m6i.xlarge" || "ml.m5.4xlarge" || "ml.p2.xlarge" || "ml.m4.16xlarge" || "ml.r7i.16xlarge" || "ml.m7i.xlarge" || "ml.m6i.12xlarge" || "ml.r7i.8xlarge" || "ml.r7i.large" || "ml.m7i.12xlarge" || "ml.m6i.24xlarge" || "ml.m7i.24xlarge" || "ml.r6i.8xlarge" || "ml.r6i.large" || "ml.g5.2xlarge" || "ml.m5.large" || "ml.p3.16xlarge" || "ml.m7i.48xlarge" || "ml.m6i.16xlarge" || "ml.p2.16xlarge" || "ml.g5.4xlarge" || "ml.m7i.16xlarge" || "ml.c4.2xlarge" || "ml.c5.2xlarge" || "ml.c6i.32xlarge" || "ml.c4.4xlarge" || "ml.g5.8xlarge" || "ml.c6i.xlarge" || "ml.c5.4xlarge" || "ml.g4dn.xlarge" || "ml.c7i.xlarge" || "ml.c6i.12xlarge" || "ml.g4dn.12xlarge" || "ml.c7i.12xlarge" || "ml.c6i.24xlarge" || "ml.g4dn.2xlarge" || "ml.c7i.24xlarge" || "ml.c7i.2xlarge" || "ml.c4.8xlarge" || "ml.c6i.2xlarge" || "ml.g4dn.4xlarge" || "ml.c7i.48xlarge" || "ml.c7i.4xlarge" || "ml.c6i.16xlarge" || "ml.c5.9xlarge" || "ml.g4dn.16xlarge" || "ml.c7i.16xlarge" || "ml.c6i.4xlarge" || "ml.c5.xlarge" || "ml.c4.xlarge" || "ml.g4dn.8xlarge" || "ml.c7i.8xlarge" || "ml.c7i.large" || "ml.g5.xlarge" || "ml.c6i.8xlarge" || "ml.c6i.large" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.m7i.2xlarge" || "ml.c5.18xlarge" || "ml.g5.48xlarge" || "ml.m6i.2xlarge" || "ml.g5.16xlarge" || "ml.m7i.4xlarge" || "ml.p3.2xlarge" || "ml.r6i.32xlarge" || "ml.m6i.4xlarge" || "ml.m5.xlarge" || "ml.m4.10xlarge" || "ml.r6i.xlarge" || "ml.m5.12xlarge" || "ml.m4.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.xlarge" || "ml.r6i.12xlarge" || "ml.m5.24xlarge" || "ml.r7i.12xlarge" || "ml.m7i.8xlarge" || "ml.m7i.large" || "ml.r6i.24xlarge" || "ml.r6i.2xlarge" || "ml.m4.2xlarge" || "ml.r7i.24xlarge" || "ml.r7i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.large" || "ml.m5.2xlarge" || "ml.p2.8xlarge" || "ml.r6i.4xlarge" || "ml.m6i.32xlarge" || "ml.p3.8xlarge" || "ml.m4.4xlarge", // required
 *     instanceCount: Number("int"),
 *   },
 *   outputConfiguration: { // InferenceOutputConfiguration
 *     accept: "STRING_VALUE",
 *     members: [ // InferenceReceiverMembers // required
 *       { // InferenceReceiverMember
 *         accountId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   dataSource: { // ModelInferenceDataSource
 *     mlInputChannelArn: "STRING_VALUE", // required
 *   },
 *   description: "STRING_VALUE",
 *   containerExecutionParameters: { // InferenceContainerExecutionParameters
 *     maxPayloadInMB: Number("int"),
 *   },
 *   environment: { // InferenceEnvironmentMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   kmsKeyArn: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartTrainedModelInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // StartTrainedModelInferenceJobResponse
 * //   trainedModelInferenceJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartTrainedModelInferenceJobCommandInput - {@link StartTrainedModelInferenceJobCommandInput}
 * @returns {@link StartTrainedModelInferenceJobCommandOutput}
 * @see {@link StartTrainedModelInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StartTrainedModelInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't complete this action because another resource depends on this resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota.</p>
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
export class StartTrainedModelInferenceJobCommand extends $Command
  .classBuilder<
    StartTrainedModelInferenceJobCommandInput,
    StartTrainedModelInferenceJobCommandOutput,
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
  .s("AWSStarkControlService", "StartTrainedModelInferenceJob", {})
  .n("CleanRoomsMLClient", "StartTrainedModelInferenceJobCommand")
  .f(void 0, void 0)
  .ser(se_StartTrainedModelInferenceJobCommand)
  .de(de_StartTrainedModelInferenceJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTrainedModelInferenceJobRequest;
      output: StartTrainedModelInferenceJobResponse;
    };
    sdk: {
      input: StartTrainedModelInferenceJobCommandInput;
      output: StartTrainedModelInferenceJobCommandOutput;
    };
  };
}
