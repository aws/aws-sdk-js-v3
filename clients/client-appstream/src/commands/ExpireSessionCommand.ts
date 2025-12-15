// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ExpireSessionRequest, ExpireSessionResult } from "../models/models_0";
import { ExpireSession$ } from "../schemas/schemas_0";

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
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "ExpireSession", {})
  .n("AppStreamClient", "ExpireSessionCommand")
  .sc(ExpireSession$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExpireSessionRequest;
      output: {};
    };
    sdk: {
      input: ExpireSessionCommandInput;
      output: ExpireSessionCommandOutput;
    };
  };
}
