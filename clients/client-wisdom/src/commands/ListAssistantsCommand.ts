// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssistantsRequest, ListAssistantsResponse } from "../models/models_0";
import { ListAssistants$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssistantsCommand}.
 */
export interface ListAssistantsCommandInput extends ListAssistantsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssistantsCommand}.
 */
export interface ListAssistantsCommandOutput extends ListAssistantsResponse, __MetadataBearer {}

/**
 * Lists information about assistants.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, ListAssistantsCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, ListAssistantsCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // ListAssistantsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssistantsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssistantsResponse
 * //   assistantSummaries: [ // AssistantList // required
 * //     { // AssistantSummary
 * //       assistantId: "STRING_VALUE", // required
 * //       assistantArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //         kmsKeyId: "STRING_VALUE",
 * //       },
 * //       integrationConfiguration: { // AssistantIntegrationConfiguration
 * //         topicIntegrationArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssistantsCommandInput - {@link ListAssistantsCommandInput}
 * @returns {@link ListAssistantsCommandOutput}
 * @see {@link ListAssistantsCommandInput} for command's `input` shape.
 * @see {@link ListAssistantsCommandOutput} for command's `response` shape.
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
export class ListAssistantsCommand extends command<ListAssistantsCommandInput, ListAssistantsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssistants",
  ListAssistants$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssistantsRequest;
      output: ListAssistantsResponse;
    };
    sdk: {
      input: ListAssistantsCommandInput;
      output: ListAssistantsCommandOutput;
    };
  };
}
