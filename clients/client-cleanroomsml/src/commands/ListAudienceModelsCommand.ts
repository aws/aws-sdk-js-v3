// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAudienceModelsRequest, ListAudienceModelsResponse } from "../models/models_0";
import { ListAudienceModels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of audience models.
 *
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
 *
 * You do not have sufficient access to perform this action.
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
export class ListAudienceModelsCommand extends command<ListAudienceModelsCommandInput, ListAudienceModelsCommandOutput>(
  _ep0,
  _mw0,
  "ListAudienceModels",
  ListAudienceModels$
) {
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
