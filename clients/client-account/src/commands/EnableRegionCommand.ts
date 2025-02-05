// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableRegionRequest } from "../models/models_0";
import { de_EnableRegionCommand, se_EnableRegionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableRegionCommand}.
 */
export interface EnableRegionCommandInput extends EnableRegionRequest {}
/**
 * @public
 *
 * The output of {@link EnableRegionCommand}.
 */
export interface EnableRegionCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables (opts-in) a particular Region for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, EnableRegionCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, EnableRegionCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AccountClient(config);
 * const input = { // EnableRegionRequest
 *   AccountId: "STRING_VALUE",
 *   RegionName: "STRING_VALUE", // required
 * };
 * const command = new EnableRegionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableRegionCommandInput - {@link EnableRegionCommandInput}
 * @returns {@link EnableRegionCommandOutput}
 * @see {@link EnableRegionCommandInput} for command's `input` shape.
 * @see {@link EnableRegionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class EnableRegionCommand extends $Command
  .classBuilder<
    EnableRegionCommandInput,
    EnableRegionCommandOutput,
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
  .s("Account", "EnableRegion", {})
  .n("AccountClient", "EnableRegionCommand")
  .f(void 0, void 0)
  .ser(se_EnableRegionCommand)
  .de(de_EnableRegionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableRegionRequest;
      output: {};
    };
    sdk: {
      input: EnableRegionCommandInput;
      output: EnableRegionCommandOutput;
    };
  };
}
