// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEntitledApplicationsRequest, ListEntitledApplicationsResult } from "../models/models_0";
import { de_ListEntitledApplicationsCommand, se_ListEntitledApplicationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a list of entitled applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ListEntitledApplicationsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ListEntitledApplicationsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
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
 *  <p>The entitlement can't be found.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class ListEntitledApplicationsCommand extends $Command
  .classBuilder<
    ListEntitledApplicationsCommandInput,
    ListEntitledApplicationsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "ListEntitledApplications", {})
  .n("AppStreamClient", "ListEntitledApplicationsCommand")
  .f(void 0, void 0)
  .ser(se_ListEntitledApplicationsCommand)
  .de(de_ListEntitledApplicationsCommand)
  .build() {
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
