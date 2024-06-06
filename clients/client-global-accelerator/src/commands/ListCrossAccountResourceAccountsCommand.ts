// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { ListCrossAccountResourceAccountsRequest, ListCrossAccountResourceAccountsResponse } from "../models/models_0";
import {
  de_ListCrossAccountResourceAccountsCommand,
  se_ListCrossAccountResourceAccountsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCrossAccountResourceAccountsCommand}.
 */
export interface ListCrossAccountResourceAccountsCommandInput extends ListCrossAccountResourceAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListCrossAccountResourceAccountsCommand}.
 */
export interface ListCrossAccountResourceAccountsCommandOutput
  extends ListCrossAccountResourceAccountsResponse,
    __MetadataBearer {}

/**
 * <p>List the accounts that have cross-account resources.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/cross-account-resources.html">
 * 			Working with cross-account attachments and resources in Global Accelerator</a> in the <i>
 * 				Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCrossAccountResourceAccountsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCrossAccountResourceAccountsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = {};
 * const command = new ListCrossAccountResourceAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListCrossAccountResourceAccountsResponse
 * //   ResourceOwnerAwsAccountIds: [ // AwsAccountIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCrossAccountResourceAccountsCommandInput - {@link ListCrossAccountResourceAccountsCommandInput}
 * @returns {@link ListCrossAccountResourceAccountsCommandOutput}
 * @see {@link ListCrossAccountResourceAccountsCommandInput} for command's `input` shape.
 * @see {@link ListCrossAccountResourceAccountsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 * @public
 */
export class ListCrossAccountResourceAccountsCommand extends $Command
  .classBuilder<
    ListCrossAccountResourceAccountsCommandInput,
    ListCrossAccountResourceAccountsCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "ListCrossAccountResourceAccounts", {})
  .n("GlobalAcceleratorClient", "ListCrossAccountResourceAccountsCommand")
  .f(void 0, void 0)
  .ser(se_ListCrossAccountResourceAccountsCommand)
  .de(de_ListCrossAccountResourceAccountsCommand)
  .build() {}
