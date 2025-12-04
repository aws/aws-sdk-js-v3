// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTrainingDatasetsRequest, ListTrainingDatasetsResponse } from "../models/models_0";
import { ListTrainingDatasets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrainingDatasetsCommand}.
 */
export interface ListTrainingDatasetsCommandInput extends ListTrainingDatasetsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrainingDatasetsCommand}.
 */
export interface ListTrainingDatasetsCommandOutput extends ListTrainingDatasetsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of training datasets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListTrainingDatasetsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListTrainingDatasetsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListTrainingDatasetsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTrainingDatasetsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrainingDatasetsResponse
 * //   nextToken: "STRING_VALUE",
 * //   trainingDatasets: [ // TrainingDatasetList // required
 * //     { // TrainingDatasetSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       trainingDatasetArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "ACTIVE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTrainingDatasetsCommandInput - {@link ListTrainingDatasetsCommandInput}
 * @returns {@link ListTrainingDatasetsCommandOutput}
 * @see {@link ListTrainingDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListTrainingDatasetsCommandOutput} for command's `response` shape.
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
export class ListTrainingDatasetsCommand extends $Command
  .classBuilder<
    ListTrainingDatasetsCommandInput,
    ListTrainingDatasetsCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "ListTrainingDatasets", {})
  .n("CleanRoomsMLClient", "ListTrainingDatasetsCommand")
  .sc(ListTrainingDatasets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrainingDatasetsRequest;
      output: ListTrainingDatasetsResponse;
    };
    sdk: {
      input: ListTrainingDatasetsCommandInput;
      output: ListTrainingDatasetsCommandOutput;
    };
  };
}
