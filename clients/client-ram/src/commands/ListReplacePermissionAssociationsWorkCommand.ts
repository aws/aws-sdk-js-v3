// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListReplacePermissionAssociationsWorkRequest,
  ListReplacePermissionAssociationsWorkResponse,
} from "../models/models_0";
import { ListReplacePermissionAssociationsWork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListReplacePermissionAssociationsWorkCommand}.
 */
export interface ListReplacePermissionAssociationsWorkCommandInput extends ListReplacePermissionAssociationsWorkRequest {}
/**
 * @public
 *
 * The output of {@link ListReplacePermissionAssociationsWorkCommand}.
 */
export interface ListReplacePermissionAssociationsWorkCommandOutput extends ListReplacePermissionAssociationsWorkResponse, __MetadataBearer {}

/**
 * Retrieves the current status of the asynchronous tasks performed by RAM when you perform the ReplacePermissionAssociationsWork operation.
 *
 * > **Note:** Always check the `NextToken` response parameter for a `null` value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The `NextToken` response parameter value is `null` *only* when there are no more results to display.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListReplacePermissionAssociationsWorkCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListReplacePermissionAssociationsWorkCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // ListReplacePermissionAssociationsWorkRequest
 *   workIds: [ // ReplacePermissionAssociationsWorkIdList
 *     "STRING_VALUE",
 *   ],
 *   status: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListReplacePermissionAssociationsWorkCommand(input);
 * const response = await client.send(command);
 * // { // ListReplacePermissionAssociationsWorkResponse
 * //   replacePermissionAssociationsWorks: [ // ReplacePermissionAssociationsWorkList
 * //     { // ReplacePermissionAssociationsWork
 * //       id: "STRING_VALUE",
 * //       fromPermissionArn: "STRING_VALUE",
 * //       fromPermissionVersion: "STRING_VALUE",
 * //       toPermissionArn: "STRING_VALUE",
 * //       toPermissionVersion: "STRING_VALUE",
 * //       status: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //       statusMessage: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReplacePermissionAssociationsWorkCommandInput - {@link ListReplacePermissionAssociationsWorkCommandInput}
 * @returns {@link ListReplacePermissionAssociationsWorkCommandOutput}
 * @see {@link ListReplacePermissionAssociationsWorkCommandInput} for command's `input` shape.
 * @see {@link ListReplacePermissionAssociationsWorkCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The operation failed because the specified value for `NextToken` isn't valid. You must specify a value you received in the `NextToken` response of a previous call to this operation.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The operation failed because a parameter you specified isn't valid.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
 *
 * @throws {@link RAMServiceException}
 *
 * Base exception class for all service exceptions from RAM service.
 *
 * @public
 */
export class ListReplacePermissionAssociationsWorkCommand extends command<ListReplacePermissionAssociationsWorkCommandInput, ListReplacePermissionAssociationsWorkCommandOutput>(
  _ep0,
  _mw0,
  "ListReplacePermissionAssociationsWork",
  ListReplacePermissionAssociationsWork$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReplacePermissionAssociationsWorkRequest;
      output: ListReplacePermissionAssociationsWorkResponse;
    };
    sdk: {
      input: ListReplacePermissionAssociationsWorkCommandInput;
      output: ListReplacePermissionAssociationsWorkCommandOutput;
    };
  };
}
