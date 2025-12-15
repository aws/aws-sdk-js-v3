// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAssociatedFleetsRequest, ListAssociatedFleetsResult } from "../models/models_0";
import { ListAssociatedFleets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociatedFleetsCommand}.
 */
export interface ListAssociatedFleetsCommandInput extends ListAssociatedFleetsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedFleetsCommand}.
 */
export interface ListAssociatedFleetsCommandOutput extends ListAssociatedFleetsResult, __MetadataBearer {}

/**
 * <p>Retrieves the name of the fleet that is associated with the specified stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ListAssociatedFleetsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ListAssociatedFleetsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // ListAssociatedFleetsRequest
 *   StackName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociatedFleetsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedFleetsResult
 * //   Names: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedFleetsCommandInput - {@link ListAssociatedFleetsCommandInput}
 * @returns {@link ListAssociatedFleetsCommandOutput}
 * @see {@link ListAssociatedFleetsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedFleetsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class ListAssociatedFleetsCommand extends $Command
  .classBuilder<
    ListAssociatedFleetsCommandInput,
    ListAssociatedFleetsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "ListAssociatedFleets", {})
  .n("AppStreamClient", "ListAssociatedFleetsCommand")
  .sc(ListAssociatedFleets$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedFleetsRequest;
      output: ListAssociatedFleetsResult;
    };
    sdk: {
      input: ListAssociatedFleetsCommandInput;
      output: ListAssociatedFleetsCommandOutput;
    };
  };
}
