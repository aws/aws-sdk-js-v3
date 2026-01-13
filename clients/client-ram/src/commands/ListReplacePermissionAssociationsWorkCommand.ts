// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListReplacePermissionAssociationsWorkRequest,
  ListReplacePermissionAssociationsWorkResponse,
} from "../models/models_0";
import type { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { ListReplacePermissionAssociationsWork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the current status of the asynchronous tasks performed by RAM when you
 *             perform the <a>ReplacePermissionAssociationsWork</a> operation.</p>
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
 *  <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class ListReplacePermissionAssociationsWorkCommand extends $Command
  .classBuilder<
    ListReplacePermissionAssociationsWorkCommandInput,
    ListReplacePermissionAssociationsWorkCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonResourceSharing", "ListReplacePermissionAssociationsWork", {})
  .n("RAMClient", "ListReplacePermissionAssociationsWorkCommand")
  .sc(ListReplacePermissionAssociationsWork$)
  .build() {
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
