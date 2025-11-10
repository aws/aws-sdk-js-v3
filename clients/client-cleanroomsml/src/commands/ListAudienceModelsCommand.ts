// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAudienceModelsRequest, ListAudienceModelsResponse } from "../models/models_0";
import { ListAudienceModels } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAudienceModelsCommand}.
 */
export interface ListAudienceModelsCommandInput extends ListAudienceModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListAudienceModelsCommand}.
 */
export interface ListAudienceModelsCommandOutput extends ListAudienceModelsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of audience models.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListAudienceModelsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListAudienceModelsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListAudienceModelsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAudienceModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListAudienceModelsResponse
 * //   nextToken: "STRING_VALUE",
 * //   audienceModels: [ // AudienceModelList // required
 * //     { // AudienceModelSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       audienceModelArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       trainingDatasetArn: "STRING_VALUE", // required
 * //       status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAudienceModelsCommandInput - {@link ListAudienceModelsCommandInput}
 * @returns {@link ListAudienceModelsCommandOutput}
 * @see {@link ListAudienceModelsCommandInput} for command's `input` shape.
 * @see {@link ListAudienceModelsCommandOutput} for command's `response` shape.
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
export class ListAudienceModelsCommand extends $Command
  .classBuilder<
    ListAudienceModelsCommandInput,
    ListAudienceModelsCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "ListAudienceModels", {})
  .n("CleanRoomsMLClient", "ListAudienceModelsCommand")
  .sc(ListAudienceModels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAudienceModelsRequest;
      output: ListAudienceModelsResponse;
    };
    sdk: {
      input: ListAudienceModelsCommandInput;
      output: ListAudienceModelsCommandOutput;
    };
  };
}
