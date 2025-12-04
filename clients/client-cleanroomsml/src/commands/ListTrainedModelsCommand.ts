// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTrainedModelsRequest, ListTrainedModelsResponse } from "../models/models_0";
import { ListTrainedModels } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrainedModelsCommand}.
 */
export interface ListTrainedModelsCommandInput extends ListTrainedModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrainedModelsCommand}.
 */
export interface ListTrainedModelsCommandOutput extends ListTrainedModelsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of trained models.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListTrainedModelsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListTrainedModelsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListTrainedModelsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ListTrainedModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrainedModelsResponse
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
 * @param ListTrainedModelsCommandInput - {@link ListTrainedModelsCommandInput}
 * @returns {@link ListTrainedModelsCommandOutput}
 * @see {@link ListTrainedModelsCommandInput} for command's `input` shape.
 * @see {@link ListTrainedModelsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class ListTrainedModelsCommand extends $Command
  .classBuilder<
    ListTrainedModelsCommandInput,
    ListTrainedModelsCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "ListTrainedModels", {})
  .n("CleanRoomsMLClient", "ListTrainedModelsCommand")
  .sc(ListTrainedModels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrainedModelsRequest;
      output: ListTrainedModelsResponse;
    };
    sdk: {
      input: ListTrainedModelsCommandInput;
      output: ListTrainedModelsCommandOutput;
    };
  };
}
