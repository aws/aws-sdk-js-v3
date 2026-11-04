// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAIPromptVersionsRequest, ListAIPromptVersionsResponse } from "../models/models_0";
import { ListAIPromptVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAIPromptVersionsCommand}.
 */
export interface ListAIPromptVersionsCommandInput extends ListAIPromptVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAIPromptVersionsCommand}.
 */
export interface ListAIPromptVersionsCommandOutput extends ListAIPromptVersionsResponse, __MetadataBearer {}

/**
 * Lists AI Prompt versions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListAIPromptVersionsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListAIPromptVersionsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // ListAIPromptVersionsRequest
 *   assistantId: "STRING_VALUE", // required
 *   aiPromptId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   origin: "STRING_VALUE",
 * };
 * const command = new ListAIPromptVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAIPromptVersionsResponse
 * //   aiPromptVersionSummaries: [ // AIPromptVersionSummariesList // required
 * //     { // AIPromptVersionSummary
 * //       aiPromptSummary: { // AIPromptSummary
 * //         name: "STRING_VALUE", // required
 * //         assistantId: "STRING_VALUE", // required
 * //         assistantArn: "STRING_VALUE", // required
 * //         aiPromptId: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         aiPromptArn: "STRING_VALUE", // required
 * //         modifiedTime: new Date("TIMESTAMP"),
 * //         templateType: "STRING_VALUE", // required
 * //         modelId: "STRING_VALUE", // required
 * //         apiFormat: "STRING_VALUE", // required
 * //         visibilityStatus: "STRING_VALUE", // required
 * //         origin: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //         tags: { // Tags
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       versionNumber: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAIPromptVersionsCommandInput - {@link ListAIPromptVersionsCommandInput}
 * @returns {@link ListAIPromptVersionsCommandOutput}
 * @see {@link ListAIPromptVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAIPromptVersionsCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class ListAIPromptVersionsCommand extends command<ListAIPromptVersionsCommandInput, ListAIPromptVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListAIPromptVersions",
  ListAIPromptVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAIPromptVersionsRequest;
      output: ListAIPromptVersionsResponse;
    };
    sdk: {
      input: ListAIPromptVersionsCommandInput;
      output: ListAIPromptVersionsCommandOutput;
    };
  };
}
