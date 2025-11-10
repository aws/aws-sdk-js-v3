// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccountLinksRequest, ListAccountLinksResult } from "../models/models_0";
import { ListAccountLinks } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountLinksCommand}.
 */
export interface ListAccountLinksCommandInput extends ListAccountLinksRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountLinksCommand}.
 */
export interface ListAccountLinksCommandOutput extends ListAccountLinksResult, __MetadataBearer {}

/**
 * <p>Lists all account links.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ListAccountLinksCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ListAccountLinksCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // ListAccountLinksRequest
 *   LinkStatusFilter: [ // LinkStatusFilterList
 *     "LINKED" || "LINKING_FAILED" || "LINK_NOT_FOUND" || "PENDING_ACCEPTANCE_BY_TARGET_ACCOUNT" || "REJECTED",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAccountLinksCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountLinksResult
 * //   AccountLinks: [ // AccountLinkList
 * //     { // AccountLink
 * //       AccountLinkId: "STRING_VALUE",
 * //       AccountLinkStatus: "LINKED" || "LINKING_FAILED" || "LINK_NOT_FOUND" || "PENDING_ACCEPTANCE_BY_TARGET_ACCOUNT" || "REJECTED",
 * //       SourceAccountId: "STRING_VALUE",
 * //       TargetAccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountLinksCommandInput - {@link ListAccountLinksCommandInput}
 * @returns {@link ListAccountLinksCommandOutput}
 * @see {@link ListAccountLinksCommandInput} for command's `input` shape.
 * @see {@link ListAccountLinksCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InternalServerException} (client fault)
 *  <p>Unexpected server error occured.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You either haven't provided a <code>TargetAccountId</code> or
 *          are using the same value for <code>TargetAccountId</code> and <code>SourceAccountId</code>.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class ListAccountLinksCommand extends $Command
  .classBuilder<
    ListAccountLinksCommandInput,
    ListAccountLinksCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "ListAccountLinks", {})
  .n("WorkSpacesClient", "ListAccountLinksCommand")
  .sc(ListAccountLinks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountLinksRequest;
      output: ListAccountLinksResult;
    };
    sdk: {
      input: ListAccountLinksCommandInput;
      output: ListAccountLinksCommandOutput;
    };
  };
}
