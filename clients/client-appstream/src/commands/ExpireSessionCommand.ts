// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExpireSessionRequest, ExpireSessionResult } from "../models/models_0";
import { de_ExpireSessionCommand, se_ExpireSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExpireSessionCommand}.
 */
export interface ExpireSessionCommandInput extends ExpireSessionRequest {}
/**
 * @public
 *
 * The output of {@link ExpireSessionCommand}.
 */
export interface ExpireSessionCommandOutput extends ExpireSessionResult, __MetadataBearer {}

/**
 * <p>Immediately stops the specified streaming session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ExpireSessionCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ExpireSessionCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // ExpireSessionRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new ExpireSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExpireSessionCommandInput - {@link ExpireSessionCommandInput}
 * @returns {@link ExpireSessionCommandOutput}
 * @see {@link ExpireSessionCommandInput} for command's `input` shape.
 * @see {@link ExpireSessionCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 * @public
 */
export class ExpireSessionCommand extends $Command
  .classBuilder<
    ExpireSessionCommandInput,
    ExpireSessionCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "ExpireSession", {})
  .n("AppStreamClient", "ExpireSessionCommand")
  .f(void 0, void 0)
  .ser(se_ExpireSessionCommand)
  .de(de_ExpireSessionCommand)
  .build() {}
