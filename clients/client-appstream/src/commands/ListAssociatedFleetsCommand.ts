// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssociatedFleetsRequest, ListAssociatedFleetsResult } from "../models/models_0";
import { de_ListAssociatedFleetsCommand, se_ListAssociatedFleetsCommand } from "../protocols/Aws_json1_1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "ListAssociatedFleets", {})
  .n("AppStreamClient", "ListAssociatedFleetsCommand")
  .f(void 0, void 0)
  .ser(se_ListAssociatedFleetsCommand)
  .de(de_ListAssociatedFleetsCommand)
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
