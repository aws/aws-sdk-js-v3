// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLaunchActionsRequest, ListLaunchActionsResponse } from "../models/models_0";
import { ListLaunchActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListLaunchActionsCommand}.
 */
export interface ListLaunchActionsCommandInput extends ListLaunchActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListLaunchActionsCommand}.
 */
export interface ListLaunchActionsCommandOutput extends ListLaunchActionsResponse, __MetadataBearer {}

/**
 * <p>Lists resource launch actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ListLaunchActionsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ListLaunchActionsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // ListLaunchActionsRequest
 *   resourceId: "STRING_VALUE", // required
 *   filters: { // LaunchActionsRequestFilters
 *     actionIds: [ // LaunchActionIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListLaunchActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListLaunchActionsResponse
 * //   items: [ // LaunchActions
 * //     { // LaunchAction
 * //       actionId: "STRING_VALUE",
 * //       actionCode: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       active: true || false,
 * //       order: Number("int"),
 * //       actionVersion: "STRING_VALUE",
 * //       optional: true || false,
 * //       parameters: { // LaunchActionParameters
 * //         "<keys>": { // LaunchActionParameter
 * //           value: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //         },
 * //       },
 * //       description: "STRING_VALUE",
 * //       category: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLaunchActionsCommandInput - {@link ListLaunchActionsCommandInput}
 * @returns {@link ListLaunchActionsCommandOutput}
 * @see {@link ListLaunchActionsCommandInput} for command's `input` shape.
 * @see {@link ListLaunchActionsCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class ListLaunchActionsCommand extends command<ListLaunchActionsCommandInput, ListLaunchActionsCommandOutput>(
  _ep0,
  _mw0,
  "ListLaunchActions",
  ListLaunchActions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLaunchActionsRequest;
      output: ListLaunchActionsResponse;
    };
    sdk: {
      input: ListLaunchActionsCommandInput;
      output: ListLaunchActionsCommandOutput;
    };
  };
}
