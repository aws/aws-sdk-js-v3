// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTriggersRequest, ListTriggersResponse } from "../models/models_2";
import { ListTriggers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTriggersCommand}.
 */
export interface ListTriggersCommandInput extends ListTriggersRequest {}
/**
 * @public
 *
 * The output of {@link ListTriggersCommand}.
 */
export interface ListTriggersCommandOutput extends ListTriggersResponse, __MetadataBearer {}

/**
 * Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.
 *
 * This operation takes the optional `Tags` field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListTriggersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListTriggersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListTriggersRequest
 *   NextToken: "STRING_VALUE",
 *   DependentJobName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ListTriggersCommand(input);
 * const response = await client.send(command);
 * // { // ListTriggersResponse
 * //   TriggerNames: [ // TriggerNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTriggersCommandInput - {@link ListTriggersCommandInput}
 * @returns {@link ListTriggersCommandOutput}
 * @see {@link ListTriggersCommandInput} for command's `input` shape.
 * @see {@link ListTriggersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class ListTriggersCommand extends command<ListTriggersCommandInput, ListTriggersCommandOutput>(
  _ep0,
  _mw0,
  "ListTriggers",
  ListTriggers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTriggersRequest;
      output: ListTriggersResponse;
    };
    sdk: {
      input: ListTriggersCommandInput;
      output: ListTriggersCommandOutput;
    };
  };
}
