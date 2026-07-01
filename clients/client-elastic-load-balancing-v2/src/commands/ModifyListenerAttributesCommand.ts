// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyListenerAttributesInput, ModifyListenerAttributesOutput } from "../models/models_0";
import { ModifyListenerAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class ModifyListenerAttributesCommand extends command<ModifyListenerAttributesCommandInput, ModifyListenerAttributesCommandOutput>(
  _ep0,
  _mw0,
  "ModifyListenerAttributes",
  ModifyListenerAttributes$
) {
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
