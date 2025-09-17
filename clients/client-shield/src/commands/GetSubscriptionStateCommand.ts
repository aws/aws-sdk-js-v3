// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSubscriptionStateRequest, GetSubscriptionStateResponse } from "../models/models_0";
import { de_GetSubscriptionStateCommand, se_GetSubscriptionStateCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSubscriptionStateCommand}.
 */
export interface GetSubscriptionStateCommandInput extends GetSubscriptionStateRequest {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionStateCommand}.
 */
export interface GetSubscriptionStateCommandOutput extends GetSubscriptionStateResponse, __MetadataBearer {}

/**
 * <p>Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, GetSubscriptionStateCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, GetSubscriptionStateCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = {};
 * const command = new GetSubscriptionStateCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionStateResponse
 * //   SubscriptionState: "ACTIVE" || "INACTIVE", // required
 * // };
 *
 * ```
 *
 * @param GetSubscriptionStateCommandInput - {@link GetSubscriptionStateCommandInput}
 * @returns {@link GetSubscriptionStateCommandOutput}
 * @see {@link GetSubscriptionStateCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionStateCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 *
 * @public
 */
export class GetSubscriptionStateCommand extends $Command
  .classBuilder<
    GetSubscriptionStateCommandInput,
    GetSubscriptionStateCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShield_20160616", "GetSubscriptionState", {})
  .n("ShieldClient", "GetSubscriptionStateCommand")
  .f(void 0, void 0)
  .ser(se_GetSubscriptionStateCommand)
  .de(de_GetSubscriptionStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetSubscriptionStateResponse;
    };
    sdk: {
      input: GetSubscriptionStateCommandInput;
      output: GetSubscriptionStateCommandOutput;
    };
  };
}
