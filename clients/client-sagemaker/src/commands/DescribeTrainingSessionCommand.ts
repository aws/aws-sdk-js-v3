// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTrainingSessionRequest, DescribeTrainingSessionResponse } from "../models/models_3";
import { DescribeTrainingSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTrainingSessionCommand}.
 */
export interface DescribeTrainingSessionCommandInput extends DescribeTrainingSessionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrainingSessionCommand}.
 */
export interface DescribeTrainingSessionCommandOutput extends DescribeTrainingSessionResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a training session, including its current status, model configuration, Low-Rank Adaptation (LoRA) parameters, and timestamps.</p> <p>The following operations are related to <code>DescribeTrainingSession</code>:</p> <ul> <li> <p> <code>CreateTrainingSession</code> </p> </li> <li> <p> <code>ListTrainingSessions</code> </p> </li> <li> <p> <code>StopTrainingSession</code> </p> </li> <li> <p> <code>DeleteTrainingSession</code> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrainingSessionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTrainingSessionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeTrainingSessionRequest
 *   TrainingSessionName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrainingSessionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrainingSessionResponse
 * //   TrainingSessionDetail: { // TrainingSessionDetail
 * //     TrainingSessionArn: "STRING_VALUE", // required
 * //     TrainingSessionName: "STRING_VALUE", // required
 * //     TrainingSessionStatus: "Created" || "Blocked" || "Running" || "Failed" || "Scheduled" || "Stopping" || "Stopped" || "Expired" || "Deleting" || "DeletionFailed", // required
 * //     ModelPackageGroupArn: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ErrorDetails: "STRING_VALUE",
 * //     LastReceivedSequenceNumber: Number("int"),
 * //     BillableTokenUsage: { // BillableTokenUsage
 * //       PrefillTokenCount: Number("long"),
 * //       SampleTokenCount: Number("long"),
 * //       TrainingTokenCount: Number("long"),
 * //     },
 * //     VpcConfig: { // VpcConfig
 * //       SecurityGroupIds: [ // VpcSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     RoleArn: "STRING_VALUE",
 * //     LoraConfig: { // LoraConfig
 * //       Rank: Number("int"), // required
 * //       Alpha: Number("int"), // required
 * //     },
 * //     ModelConfig: { // TrainingSessionModelConfig
 * //       BaseModelArn: "STRING_VALUE", // required
 * //       AcceptEula: true || false,
 * //     },
 * //     OutputConfig: { // TrainingSessionOutputConfig
 * //       S3Location: { // TrainingSessionS3Location
 * //         Path: "STRING_VALUE", // required
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTrainingSessionCommandInput - {@link DescribeTrainingSessionCommandInput}
 * @returns {@link DescribeTrainingSessionCommandOutput}
 * @see {@link DescribeTrainingSessionCommandInput} for command's `input` shape.
 * @see {@link DescribeTrainingSessionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeTrainingSessionCommand extends command<DescribeTrainingSessionCommandInput, DescribeTrainingSessionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTrainingSession",
  DescribeTrainingSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrainingSessionRequest;
      output: DescribeTrainingSessionResponse;
    };
    sdk: {
      input: DescribeTrainingSessionCommandInput;
      output: DescribeTrainingSessionCommandOutput;
    };
  };
}
