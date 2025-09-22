// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTrainedModelVersionsRequest, ListTrainedModelVersionsResponse } from "../models/models_0";
import { ListTrainedModelVersions } from "../schemas/schemas_3_Trained";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrainedModelVersionsCommand}.
 */
export interface ListTrainedModelVersionsCommandInput extends ListTrainedModelVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrainedModelVersionsCommand}.
 */
export interface ListTrainedModelVersionsCommandOutput extends ListTrainedModelVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of trained model versions for a specified trained model. This operation allows you to view all versions of a trained model, including information about their status and creation details. You can use this to track the evolution of your trained models and select specific versions for inference or further training.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListTrainedModelVersionsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListTrainedModelVersionsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListTrainedModelVersionsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   membershipIdentifier: "STRING_VALUE", // required
 *   trainedModelArn: "STRING_VALUE", // required
 *   status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "INACTIVE" || "CANCEL_PENDING" || "CANCEL_IN_PROGRESS" || "CANCEL_FAILED",
 * };
 * const command = new ListTrainedModelVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrainedModelVersionsResponse
 * //   nextToken: "STRING_VALUE",
 * //   trainedModels: [ // TrainedModelList // required
 * //     { // TrainedModelSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       trainedModelArn: "STRING_VALUE", // required
 * //       versionIdentifier: "STRING_VALUE",
 * //       incrementalTrainingDataChannels: [ // IncrementalTrainingDataChannelsOutput
 * //         { // IncrementalTrainingDataChannelOutput
 * //           channelName: "STRING_VALUE", // required
 * //           versionIdentifier: "STRING_VALUE",
 * //           modelName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       membershipIdentifier: "STRING_VALUE", // required
 * //       collaborationIdentifier: "STRING_VALUE", // required
 * //       status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "INACTIVE" || "CANCEL_PENDING" || "CANCEL_IN_PROGRESS" || "CANCEL_FAILED", // required
 * //       configuredModelAlgorithmAssociationArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTrainedModelVersionsCommandInput - {@link ListTrainedModelVersionsCommandInput}
 * @returns {@link ListTrainedModelVersionsCommandOutput}
 * @see {@link ListTrainedModelVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTrainedModelVersionsCommandOutput} for command's `response` shape.
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
export class ListTrainedModelVersionsCommand extends $Command
  .classBuilder<
    ListTrainedModelVersionsCommandInput,
    ListTrainedModelVersionsCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "ListTrainedModelVersions", {})
  .n("CleanRoomsMLClient", "ListTrainedModelVersionsCommand")
  .sc(ListTrainedModelVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrainedModelVersionsRequest;
      output: ListTrainedModelVersionsResponse;
    };
    sdk: {
      input: ListTrainedModelVersionsCommandInput;
      output: ListTrainedModelVersionsCommandOutput;
    };
  };
}
