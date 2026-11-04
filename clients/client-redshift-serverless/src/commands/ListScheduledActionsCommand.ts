// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListScheduledActionsRequest, ListScheduledActionsResponse } from "../models/models_0";
import { ListScheduledActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListScheduledActionsCommand}.
 */
export interface ListScheduledActionsCommandInput extends ListScheduledActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListScheduledActionsCommand}.
 */
export interface ListScheduledActionsCommandOutput extends ListScheduledActionsResponse, __MetadataBearer {}

/**
 * Returns a list of scheduled actions. You can use the flags to filter the list of returned scheduled actions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListScheduledActionsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListScheduledActionsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListScheduledActionsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   namespaceName: "STRING_VALUE",
 * };
 * const command = new ListScheduledActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListScheduledActionsResponse
 * //   nextToken: "STRING_VALUE",
 * //   scheduledActions: [ // ScheduledActionsList
 * //     { // ScheduledActionAssociation
 * //       namespaceName: "STRING_VALUE",
 * //       scheduledActionName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListScheduledActionsCommandInput - {@link ListScheduledActionsCommandInput}
 * @returns {@link ListScheduledActionsCommandOutput}
 * @see {@link ListScheduledActionsCommandInput} for command's `input` shape.
 * @see {@link ListScheduledActionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link InvalidPaginationException} (client fault)
 *
 * The provided pagination token is invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link RedshiftServerlessServiceException}
 *
 * Base exception class for all service exceptions from RedshiftServerless service.
 *
 * @public
 */
export class ListScheduledActionsCommand extends command<ListScheduledActionsCommandInput, ListScheduledActionsCommandOutput>(
  _ep0,
  _mw0,
  "ListScheduledActions",
  ListScheduledActions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScheduledActionsRequest;
      output: ListScheduledActionsResponse;
    };
    sdk: {
      input: ListScheduledActionsCommandInput;
      output: ListScheduledActionsCommandOutput;
    };
  };
}
