// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_TagResourceCommand, se_TagResourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {}

/**
 * <p>Applies tags to an OpsWorks for Chef Automate or OpsWorks for Puppet Enterprise server, or to server backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, TagResourceCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, TagResourceCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // TagResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The resource is in a state that does not allow you to perform a specified action.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the provided request parameters are not valid.
 *     </p>
 *
 * @throws {@link OpsWorksCMServiceException}
 * <p>Base exception class for all service exceptions from OpsWorksCM service.</p>
 *
 *
 * @public
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    OpsWorksCMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksCMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorksCM_V2016_11_01", "TagResource", {})
  .n("OpsWorksCMClient", "TagResourceCommand")
  .f(void 0, void 0)
  .ser(se_TagResourceCommand)
  .de(de_TagResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagResourceRequest;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
