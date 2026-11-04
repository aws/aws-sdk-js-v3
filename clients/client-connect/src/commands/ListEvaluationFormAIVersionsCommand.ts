// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEvaluationFormAIVersionsRequest, ListEvaluationFormAIVersionsResponse } from "../models/models_2";
import { ListEvaluationFormAIVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEvaluationFormAIVersionsCommand}.
 */
export interface ListEvaluationFormAIVersionsCommandInput extends ListEvaluationFormAIVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListEvaluationFormAIVersionsCommand}.
 */
export interface ListEvaluationFormAIVersionsCommandOutput extends ListEvaluationFormAIVersionsResponse, __MetadataBearer {}

/**
 * Lists the available AI versions for evaluation forms in the specified Connect Customer instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListEvaluationFormAIVersionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListEvaluationFormAIVersionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListEvaluationFormAIVersionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactInteractionType: "AGENT" || "AUTOMATED" || "CUSTOMER", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEvaluationFormAIVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEvaluationFormAIVersionsResponse
 * //   AIVersionSummaries: [ // EvaluationFormAIVersionSummaryList // required
 * //     { // EvaluationFormAIVersionSummary
 * //       AIVersionName: "STRING_VALUE", // required
 * //       AIVersionLifecycle: { // EvaluationFormAIVersionLifecycle
 * //         Status: "LATEST" || "PREVIEW" || "ACTIVE" || "DEPRECATED", // required
 * //         StartOfLifeTime: new Date("TIMESTAMP"), // required
 * //         EndOfLifeTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEvaluationFormAIVersionsCommandInput - {@link ListEvaluationFormAIVersionsCommandInput}
 * @returns {@link ListEvaluationFormAIVersionsCommandOutput}
 * @see {@link ListEvaluationFormAIVersionsCommandInput} for command's `input` shape.
 * @see {@link ListEvaluationFormAIVersionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class ListEvaluationFormAIVersionsCommand extends command<ListEvaluationFormAIVersionsCommandInput, ListEvaluationFormAIVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListEvaluationFormAIVersions",
  ListEvaluationFormAIVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEvaluationFormAIVersionsRequest;
      output: ListEvaluationFormAIVersionsResponse;
    };
    sdk: {
      input: ListEvaluationFormAIVersionsCommandInput;
      output: ListEvaluationFormAIVersionsCommandOutput;
    };
  };
}
