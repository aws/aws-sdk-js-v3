// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCollaborationTrainedModelInferenceJobsRequest,
  ListCollaborationTrainedModelInferenceJobsResponse,
} from "../models/models_0";
import {
  de_ListCollaborationTrainedModelInferenceJobsCommand,
  se_ListCollaborationTrainedModelInferenceJobsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCollaborationTrainedModelInferenceJobsCommand}.
 */
export interface ListCollaborationTrainedModelInferenceJobsCommandInput
  extends ListCollaborationTrainedModelInferenceJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListCollaborationTrainedModelInferenceJobsCommand}.
 */
export interface ListCollaborationTrainedModelInferenceJobsCommandOutput
  extends ListCollaborationTrainedModelInferenceJobsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of trained model inference jobs in a specified collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListCollaborationTrainedModelInferenceJobsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListCollaborationTrainedModelInferenceJobsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListCollaborationTrainedModelInferenceJobsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   trainedModelArn: "STRING_VALUE",
 * };
 * const command = new ListCollaborationTrainedModelInferenceJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollaborationTrainedModelInferenceJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   collaborationTrainedModelInferenceJobs: [ // CollaborationTrainedModelInferenceJobList // required
 * //     { // CollaborationTrainedModelInferenceJobSummary
 * //       trainedModelInferenceJobArn: "STRING_VALUE", // required
 * //       configuredModelAlgorithmAssociationArn: "STRING_VALUE",
 * //       membershipIdentifier: "STRING_VALUE", // required
 * //       trainedModelArn: "STRING_VALUE", // required
 * //       collaborationIdentifier: "STRING_VALUE", // required
 * //       status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "CANCEL_PENDING" || "CANCEL_IN_PROGRESS" || "CANCEL_FAILED" || "INACTIVE", // required
 * //       outputConfiguration: { // InferenceOutputConfiguration
 * //         accept: "STRING_VALUE",
 * //         members: [ // InferenceReceiverMembers // required
 * //           { // InferenceReceiverMember
 * //             accountId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       metricsStatus: "PUBLISH_SUCCEEDED" || "PUBLISH_FAILED",
 * //       metricsStatusDetails: "STRING_VALUE",
 * //       logsStatus: "PUBLISH_SUCCEEDED" || "PUBLISH_FAILED",
 * //       logsStatusDetails: "STRING_VALUE",
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       creatorAccountId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCollaborationTrainedModelInferenceJobsCommandInput - {@link ListCollaborationTrainedModelInferenceJobsCommandInput}
 * @returns {@link ListCollaborationTrainedModelInferenceJobsCommandOutput}
 * @see {@link ListCollaborationTrainedModelInferenceJobsCommandInput} for command's `input` shape.
 * @see {@link ListCollaborationTrainedModelInferenceJobsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 * @public
 */
export class ListCollaborationTrainedModelInferenceJobsCommand extends $Command
  .classBuilder<
    ListCollaborationTrainedModelInferenceJobsCommandInput,
    ListCollaborationTrainedModelInferenceJobsCommandOutput,
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
  .s("AWSStarkControlService", "ListCollaborationTrainedModelInferenceJobs", {})
  .n("CleanRoomsMLClient", "ListCollaborationTrainedModelInferenceJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListCollaborationTrainedModelInferenceJobsCommand)
  .de(de_ListCollaborationTrainedModelInferenceJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCollaborationTrainedModelInferenceJobsRequest;
      output: ListCollaborationTrainedModelInferenceJobsResponse;
    };
    sdk: {
      input: ListCollaborationTrainedModelInferenceJobsCommandInput;
      output: ListCollaborationTrainedModelInferenceJobsCommandOutput;
    };
  };
}
