// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyListenerAttributesInput, ModifyListenerAttributesOutput } from "../models/models_0";
import { ModifyListenerAttributes } from "../schemas/schemas_9_Listener";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyListenerAttributesCommand}.
 */
export interface ModifyListenerAttributesCommandInput extends ModifyListenerAttributesInput {}
/**
 * @public
 *
 * The output of {@link ModifyListenerAttributesCommand}.
 */
export interface ModifyListenerAttributesCommandOutput extends ModifyListenerAttributesOutput, __MetadataBearer {}

/**
 * <p>Modifies the specified attributes of the specified listener.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyListenerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyListenerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // ModifyListenerAttributesInput
 *   ListenerArn: "STRING_VALUE", // required
 *   Attributes: [ // ListenerAttributes // required
 *     { // ListenerAttribute
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyListenerAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyListenerAttributesOutput
 * //   Attributes: [ // ListenerAttributes
 * //     { // ListenerAttribute
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyListenerAttributesCommandInput - {@link ModifyListenerAttributesCommandInput}
 * @returns {@link ModifyListenerAttributesCommandOutput}
 * @see {@link ModifyListenerAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyListenerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The specified listener does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @public
 */
export class ModifyListenerAttributesCommand extends $Command
  .classBuilder<
    ModifyListenerAttributesCommandInput,
    ModifyListenerAttributesCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "ModifyListenerAttributes", {})
  .n("ElasticLoadBalancingV2Client", "ModifyListenerAttributesCommand")
  .sc(ModifyListenerAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyListenerAttributesInput;
      output: ModifyListenerAttributesOutput;
    };
    sdk: {
      input: ModifyListenerAttributesCommandInput;
      output: ModifyListenerAttributesCommandOutput;
    };
  };
}
