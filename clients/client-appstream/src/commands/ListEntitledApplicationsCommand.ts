// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEntitledApplicationsRequest, ListEntitledApplicationsResult } from "../models/models_0";
import { ListEntitledApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEntitledApplicationsCommand}.
 */
export interface ListEntitledApplicationsCommandInput extends ListEntitledApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListEntitledApplicationsCommand}.
 */
export interface ListEntitledApplicationsCommandOutput extends ListEntitledApplicationsResult, __MetadataBearer {}

/**
 * Retrieves a list of entitled applications.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ListEntitledApplicationsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ListEntitledApplicationsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // ListEntitledApplicationsRequest
 *   StackName: "STRING_VALUE", // required
 *   EntitlementName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEntitledApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEntitledApplicationsResult
 * //   EntitledApplications: [ // EntitledApplicationList
 * //     { // EntitledApplication
 * //       ApplicationIdentifier: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntitledApplicationsCommandInput - {@link ListEntitledApplicationsCommandInput}
 * @returns {@link ListEntitledApplicationsCommandOutput}
 * @see {@link ListEntitledApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListEntitledApplicationsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link EntitlementNotFoundException} (client fault)
 *
 * The entitlement can't be found.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class ListEntitledApplicationsCommand extends command<ListEntitledApplicationsCommandInput, ListEntitledApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "ListEntitledApplications",
  ListEntitledApplications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEntitledApplicationsRequest;
      output: ListEntitledApplicationsResult;
    };
    sdk: {
      input: ListEntitledApplicationsCommandInput;
      output: ListEntitledApplicationsCommandOutput;
    };
  };
}
