// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartTrainedModelInferenceJobRequest, StartTrainedModelInferenceJobResponse } from "../models/models_0";
import { StartTrainedModelInferenceJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface StartTrainedModelInferenceJobCommandOutput extends StartTrainedModelInferenceJobResponse, __MetadataBearer {}

/**
 * Defines the information necessary to begin a trained model inference job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, StartTrainedModelInferenceJobCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, StartTrainedModelInferenceJobCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // StartTrainedModelInferenceJobRequest
 *   membershipIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   trainedModelArn: "STRING_VALUE", // required
 *   trainedModelVersionIdentifier: "STRING_VALUE",
 *   configuredModelAlgorithmAssociationArn: "STRING_VALUE",
 *   resourceConfig: { // InferenceResourceConfig
 *     instanceType: "ml.r7i.48xlarge" || "ml.r6i.16xlarge" || "ml.m6i.xlarge" || "ml.m5.4xlarge" || "ml.p2.xlarge" || "ml.m4.16xlarge" || "ml.r7i.16xlarge" || "ml.m7i.xlarge" || "ml.m6i.12xlarge" || "ml.r7i.8xlarge" || "ml.r7i.large" || "ml.m7i.12xlarge" || "ml.m6i.24xlarge" || "ml.m7i.24xlarge" || "ml.r6i.8xlarge" || "ml.r6i.large" || "ml.g5.2xlarge" || "ml.m5.large" || "ml.m7i.48xlarge" || "ml.m6i.16xlarge" || "ml.p2.16xlarge" || "ml.g5.4xlarge" || "ml.m7i.16xlarge" || "ml.c4.2xlarge" || "ml.c5.2xlarge" || "ml.c6i.32xlarge" || "ml.c4.4xlarge" || "ml.g5.8xlarge" || "ml.c6i.xlarge" || "ml.c5.4xlarge" || "ml.g4dn.xlarge" || "ml.c7i.xlarge" || "ml.c6i.12xlarge" || "ml.g4dn.12xlarge" || "ml.c7i.12xlarge" || "ml.c6i.24xlarge" || "ml.g4dn.2xlarge" || "ml.c7i.24xlarge" || "ml.c7i.2xlarge" || "ml.c4.8xlarge" || "ml.c6i.2xlarge" || "ml.g4dn.4xlarge" || "ml.c7i.48xlarge" || "ml.c7i.4xlarge" || "ml.c6i.16xlarge" || "ml.c5.9xlarge" || "ml.g4dn.16xlarge" || "ml.c7i.16xlarge" || "ml.c6i.4xlarge" || "ml.c5.xlarge" || "ml.c4.xlarge" || "ml.g4dn.8xlarge" || "ml.c7i.8xlarge" || "ml.c7i.large" || "ml.g5.xlarge" || "ml.c6i.8xlarge" || "ml.c6i.large" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.m7i.2xlarge" || "ml.c5.18xlarge" || "ml.g5.48xlarge" || "ml.m6i.2xlarge" || "ml.g5.16xlarge" || "ml.m7i.4xlarge" || "ml.r6i.32xlarge" || "ml.m6i.4xlarge" || "ml.m5.xlarge" || "ml.m4.10xlarge" || "ml.r6i.xlarge" || "ml.m5.12xlarge" || "ml.m4.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.xlarge" || "ml.r6i.12xlarge" || "ml.m5.24xlarge" || "ml.r7i.12xlarge" || "ml.m7i.8xlarge" || "ml.m7i.large" || "ml.r6i.24xlarge" || "ml.r6i.2xlarge" || "ml.m4.2xlarge" || "ml.r7i.24xlarge" || "ml.r7i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.large" || "ml.m5.2xlarge" || "ml.p2.8xlarge" || "ml.r6i.4xlarge" || "ml.m6i.32xlarge" || "ml.m4.4xlarge" || "ml.p3.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge", // required
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
 *   mlModelInferencePayerAccountId: "STRING_VALUE",
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You can't complete this action because another resource depends on this resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you are requesting does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded your service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request parameters for this request are incorrect.
 *
 * @throws {@link CleanRoomsMLServiceException}
 *
 * Base exception class for all service exceptions from CleanRoomsML service.
 *
 * @public
 */
export class StartTrainedModelInferenceJobCommand extends command<StartTrainedModelInferenceJobCommandInput, StartTrainedModelInferenceJobCommandOutput>(
  _ep0,
  _mw0,
  "StartTrainedModelInferenceJob",
  StartTrainedModelInferenceJob$
) {
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
