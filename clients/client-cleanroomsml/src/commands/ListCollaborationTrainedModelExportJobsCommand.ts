// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCollaborationTrainedModelExportJobsRequest,
  ListCollaborationTrainedModelExportJobsResponse,
} from "../models/models_0";
import {
  de_ListCollaborationTrainedModelExportJobsCommand,
  se_ListCollaborationTrainedModelExportJobsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCollaborationTrainedModelExportJobsCommand}.
 */
export interface ListCollaborationTrainedModelExportJobsCommandInput
  extends ListCollaborationTrainedModelExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListCollaborationTrainedModelExportJobsCommand}.
 */
export interface ListCollaborationTrainedModelExportJobsCommandOutput
  extends ListCollaborationTrainedModelExportJobsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of the export jobs for a trained model in a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListCollaborationTrainedModelExportJobsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListCollaborationTrainedModelExportJobsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListCollaborationTrainedModelExportJobsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   trainedModelArn: "STRING_VALUE", // required
 * };
 * const command = new ListCollaborationTrainedModelExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollaborationTrainedModelExportJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   collaborationTrainedModelExportJobs: [ // CollaborationTrainedModelExportJobList // required
 * //     { // CollaborationTrainedModelExportJobSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       name: "STRING_VALUE", // required
 * //       outputConfiguration: { // TrainedModelExportOutputConfiguration
 * //         members: [ // TrainedModelExportReceiverMembers // required
 * //           { // TrainedModelExportReceiverMember
 * //             accountId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE", // required
 * //       statusDetails: { // StatusDetails
 * //         statusCode: "STRING_VALUE",
 * //         message: "STRING_VALUE",
 * //       },
 * //       description: "STRING_VALUE",
 * //       creatorAccountId: "STRING_VALUE", // required
 * //       trainedModelArn: "STRING_VALUE", // required
 * //       membershipIdentifier: "STRING_VALUE", // required
 * //       collaborationIdentifier: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCollaborationTrainedModelExportJobsCommandInput - {@link ListCollaborationTrainedModelExportJobsCommandInput}
 * @returns {@link ListCollaborationTrainedModelExportJobsCommandOutput}
 * @see {@link ListCollaborationTrainedModelExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListCollaborationTrainedModelExportJobsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListCollaborationTrainedModelExportJobsCommand extends $Command
  .classBuilder<
    ListCollaborationTrainedModelExportJobsCommandInput,
    ListCollaborationTrainedModelExportJobsCommandOutput,
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
  .s("AWSStarkControlService", "ListCollaborationTrainedModelExportJobs", {})
  .n("CleanRoomsMLClient", "ListCollaborationTrainedModelExportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListCollaborationTrainedModelExportJobsCommand)
  .de(de_ListCollaborationTrainedModelExportJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCollaborationTrainedModelExportJobsRequest;
      output: ListCollaborationTrainedModelExportJobsResponse;
    };
    sdk: {
      input: ListCollaborationTrainedModelExportJobsCommandInput;
      output: ListCollaborationTrainedModelExportJobsCommandOutput;
    };
  };
}
