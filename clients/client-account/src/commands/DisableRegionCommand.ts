// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableRegionRequest } from "../models/models_0";
import { de_DisableRegionCommand, se_DisableRegionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableRegionCommand}.
 */
export interface DisableRegionCommandInput extends DisableRegionRequest {}
/**
 * @public
 *
 * The output of {@link DisableRegionCommand}.
 */
export interface DisableRegionCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables (opts-out) a particular Region for an account.</p>
 *          <note>
 *             <p>The act of disabling a Region will remove all IAM access to any resources that
 *                 reside in that Region.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, DisableRegionCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, DisableRegionCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * const client = new AccountClient(config);
 * const input = { // DisableRegionRequest
 *   AccountId: "STRING_VALUE",
 *   RegionName: "STRING_VALUE", // required
 * };
 * const command = new DisableRegionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableRegionCommandInput - {@link DisableRegionCommandInput}
 * @returns {@link DisableRegionCommandOutput}
 * @see {@link DisableRegionCommandInput} for command's `input` shape.
 * @see {@link DisableRegionCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation failed because the calling identity doesn't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of a conflict in the current status of the
 *             resource. For example, this happens if you try to enable a Region that is currently being disabled
 *             (in a status of DISABLING).</p>
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
 *
 * @public
 */
export class DisableRegionCommand extends $Command
  .classBuilder<
    DisableRegionCommandInput,
    DisableRegionCommandOutput,
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
  .s("Account", "DisableRegion", {})
  .n("AccountClient", "DisableRegionCommand")
  .f(void 0, void 0)
  .ser(se_DisableRegionCommand)
  .de(de_DisableRegionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableRegionRequest;
      output: {};
    };
    sdk: {
      input: DisableRegionCommandInput;
      output: DisableRegionCommandOutput;
    };
  };
}
