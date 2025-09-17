// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { ListAddonInstancesRequest, ListAddonInstancesResponse } from "../models/models_0";
import { de_ListAddonInstancesCommand, se_ListAddonInstancesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAddonInstancesCommand}.
 */
export interface ListAddonInstancesCommandInput extends ListAddonInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListAddonInstancesCommand}.
 */
export interface ListAddonInstancesCommandOutput extends ListAddonInstancesResponse, __MetadataBearer {}

/**
 * <p>Lists all Add On instances in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, ListAddonInstancesCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, ListAddonInstancesCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // ListAddonInstancesRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListAddonInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListAddonInstancesResponse
 * //   AddonInstances: [ // AddonInstances
 * //     { // AddonInstance
 * //       AddonInstanceId: "STRING_VALUE",
 * //       AddonSubscriptionId: "STRING_VALUE",
 * //       AddonName: "STRING_VALUE",
 * //       AddonInstanceArn: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAddonInstancesCommandInput - {@link ListAddonInstancesCommandInput}
 * @returns {@link ListAddonInstancesCommandOutput}
 * @see {@link ListAddonInstancesCommandInput} for command's `input` shape.
 * @see {@link ListAddonInstancesCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class ListAddonInstancesCommand extends $Command
  .classBuilder<
    ListAddonInstancesCommandInput,
    ListAddonInstancesCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "ListAddonInstances", {})
  .n("MailManagerClient", "ListAddonInstancesCommand")
  .f(void 0, void 0)
  .ser(se_ListAddonInstancesCommand)
  .de(de_ListAddonInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAddonInstancesRequest;
      output: ListAddonInstancesResponse;
    };
    sdk: {
      input: ListAddonInstancesCommandInput;
      output: ListAddonInstancesCommandOutput;
    };
  };
}
