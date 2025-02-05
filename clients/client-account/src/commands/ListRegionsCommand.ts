// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRegionsRequest, ListRegionsResponse } from "../models/models_0";
import { de_ListRegionsCommand, se_ListRegionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRegionsCommand}.
 */
export interface ListRegionsCommandInput extends ListRegionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRegionsCommand}.
 */
export interface ListRegionsCommandOutput extends ListRegionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the Regions for a given account and their respective opt-in statuses.
 *             Optionally, this list can be filtered by the <code>region-opt-status-contains</code>
 *             parameter. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, ListRegionsCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, ListRegionsCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AccountClient(config);
 * const input = { // ListRegionsRequest
 *   AccountId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RegionOptStatusContains: [ // RegionOptStatusList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListRegionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRegionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Regions: [ // RegionOptList
 * //     { // Region
 * //       RegionName: "STRING_VALUE",
 * //       RegionOptStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRegionsCommandInput - {@link ListRegionsCommandInput}
 * @returns {@link ListRegionsCommandOutput}
 * @see {@link ListRegionsCommandInput} for command's `input` shape.
 * @see {@link ListRegionsCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation failed because the calling identity doesn't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again
 *             later.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The operation failed because it was called too frequently and exceeded a throttle
 *             limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed because one of the input parameters was invalid.</p>
 *
 * @throws {@link AccountServiceException}
 * <p>Base exception class for all service exceptions from Account service.</p>
 *
 * @public
 */
export class ListRegionsCommand extends $Command
  .classBuilder<
    ListRegionsCommandInput,
    ListRegionsCommandOutput,
    AccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccountClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Account", "ListRegions", {})
  .n("AccountClient", "ListRegionsCommand")
  .f(void 0, void 0)
  .ser(se_ListRegionsCommand)
  .de(de_ListRegionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegionsRequest;
      output: ListRegionsResponse;
    };
    sdk: {
      input: ListRegionsCommandInput;
      output: ListRegionsCommandOutput;
    };
  };
}
