// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCollaborationTrainedModelRequest, GetCollaborationTrainedModelResponse } from "../models/models_0";
import {
  de_GetCollaborationTrainedModelCommand,
  se_GetCollaborationTrainedModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCollaborationTrainedModelCommand}.
 */
export interface GetCollaborationTrainedModelCommandInput extends GetCollaborationTrainedModelRequest {}
/**
 * @public
 *
 * The output of {@link GetCollaborationTrainedModelCommand}.
 */
export interface GetCollaborationTrainedModelCommandOutput
  extends GetCollaborationTrainedModelResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a trained model in a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetCollaborationTrainedModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetCollaborationTrainedModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetCollaborationTrainedModelRequest
 *   trainedModelArn: "STRING_VALUE", // required
 *   collaborationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationTrainedModelCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationTrainedModelResponse
 * //   membershipIdentifier: "STRING_VALUE", // required
 * //   collaborationIdentifier: "STRING_VALUE", // required
 * //   trainedModelArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "INACTIVE" || "CANCEL_PENDING" || "CANCEL_IN_PROGRESS" || "CANCEL_FAILED", // required
 * //   statusDetails: { // StatusDetails
 * //     statusCode: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * //   configuredModelAlgorithmAssociationArn: "STRING_VALUE", // required
 * //   resourceConfig: { // ResourceConfig
 * //     instanceCount: Number("int"),
 * //     instanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.8xlarge" || "ml.c6i.4xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.8xlarge" || "ml.r5d.12xlarge" || "ml.r5d.16xlarge" || "ml.r5d.24xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge", // required
 * //     volumeSizeInGB: Number("int"), // required
 * //   },
 * //   stoppingCondition: { // StoppingCondition
 * //     maxRuntimeInSeconds: Number("int"),
 * //   },
 * //   metricsStatus: "PUBLISH_SUCCEEDED" || "PUBLISH_FAILED",
 * //   metricsStatusDetails: "STRING_VALUE",
 * //   logsStatus: "PUBLISH_SUCCEEDED" || "PUBLISH_FAILED",
 * //   logsStatusDetails: "STRING_VALUE",
 * //   trainingContainerImageDigest: "STRING_VALUE",
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   creatorAccountId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetCollaborationTrainedModelCommandInput - {@link GetCollaborationTrainedModelCommandInput}
 * @returns {@link GetCollaborationTrainedModelCommandOutput}
 * @see {@link GetCollaborationTrainedModelCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationTrainedModelCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 * @public
 */
export class GetCollaborationTrainedModelCommand extends $Command
  .classBuilder<
    GetCollaborationTrainedModelCommandInput,
    GetCollaborationTrainedModelCommandOutput,
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
  .s("AWSStarkControlService", "GetCollaborationTrainedModel", {})
  .n("CleanRoomsMLClient", "GetCollaborationTrainedModelCommand")
  .f(void 0, void 0)
  .ser(se_GetCollaborationTrainedModelCommand)
  .de(de_GetCollaborationTrainedModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCollaborationTrainedModelRequest;
      output: GetCollaborationTrainedModelResponse;
    };
    sdk: {
      input: GetCollaborationTrainedModelCommandInput;
      output: GetCollaborationTrainedModelCommandOutput;
    };
  };
}
