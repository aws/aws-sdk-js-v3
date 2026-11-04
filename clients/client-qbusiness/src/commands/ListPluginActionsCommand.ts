// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPluginActionsRequest, ListPluginActionsResponse } from "../models/models_0";
import { ListPluginActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPluginActionsCommand}.
 */
export interface ListPluginActionsCommandInput extends ListPluginActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPluginActionsCommand}.
 */
export interface ListPluginActionsCommandOutput extends ListPluginActionsResponse, __MetadataBearer {}

/**
 * Lists configured Amazon Q Business actions for a specific plugin in an Amazon Q Business application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListPluginActionsCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListPluginActionsCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // ListPluginActionsRequest
 *   applicationId: "STRING_VALUE", // required
 *   pluginId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPluginActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPluginActionsResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // Actions
 * //     { // ActionSummary
 * //       actionIdentifier: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       instructionExample: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPluginActionsCommandInput - {@link ListPluginActionsCommandInput}
 * @returns {@link ListPluginActionsCommandOutput}
 * @see {@link ListPluginActionsCommandInput} for command's `input` shape.
 * @see {@link ListPluginActionsCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class ListPluginActionsCommand extends command<ListPluginActionsCommandInput, ListPluginActionsCommandOutput>(
  _ep0,
  _mw0,
  "ListPluginActions",
  ListPluginActions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPluginActionsRequest;
      output: ListPluginActionsResponse;
    };
    sdk: {
      input: ListPluginActionsCommandInput;
      output: ListPluginActionsCommandOutput;
    };
  };
}
