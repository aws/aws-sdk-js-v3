// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListKnowledgeBasesRequest, ListKnowledgeBasesResponse } from "../models/models_0";
import { ListKnowledgeBases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListKnowledgeBasesCommand}.
 */
export interface ListKnowledgeBasesCommandInput extends ListKnowledgeBasesRequest {}
/**
 * @public
 *
 * The output of {@link ListKnowledgeBasesCommand}.
 */
export interface ListKnowledgeBasesCommandOutput extends ListKnowledgeBasesResponse, __MetadataBearer {}

/**
 * Lists the knowledge bases.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, ListKnowledgeBasesCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, ListKnowledgeBasesCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // ListKnowledgeBasesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKnowledgeBasesCommand(input);
 * const response = await client.send(command);
 * // { // ListKnowledgeBasesResponse
 * //   knowledgeBaseSummaries: [ // KnowledgeBaseList // required
 * //     { // KnowledgeBaseSummary
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       knowledgeBaseArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       knowledgeBaseType: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       sourceConfiguration: { // SourceConfiguration Union: only one key present
 * //         appIntegrations: { // AppIntegrationsConfiguration
 * //           appIntegrationArn: "STRING_VALUE", // required
 * //           objectFields: [ // ObjectFieldsList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       renderingConfiguration: { // RenderingConfiguration
 * //         templateUri: "STRING_VALUE",
 * //       },
 * //       serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //         kmsKeyId: "STRING_VALUE",
 * //       },
 * //       description: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKnowledgeBasesCommandInput - {@link ListKnowledgeBasesCommandInput}
 * @returns {@link ListKnowledgeBasesCommandOutput}
 * @see {@link ListKnowledgeBasesCommandInput} for command's `input` shape.
 * @see {@link ListKnowledgeBasesCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link WisdomServiceException}
 *
 * Base exception class for all service exceptions from Wisdom service.
 *
 * @public
 */
export class ListKnowledgeBasesCommand extends command<ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput>(
  _ep0,
  _mw0,
  "ListKnowledgeBases",
  ListKnowledgeBases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKnowledgeBasesRequest;
      output: ListKnowledgeBasesResponse;
    };
    sdk: {
      input: ListKnowledgeBasesCommandInput;
      output: ListKnowledgeBasesCommandOutput;
    };
  };
}
