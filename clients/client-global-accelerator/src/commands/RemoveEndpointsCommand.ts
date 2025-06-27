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
import { RemoveEndpointsRequest } from "../models/models_0";
import { de_RemoveEndpointsCommand, se_RemoveEndpointsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveEndpointsCommand}.
 */
export interface RemoveEndpointsCommandInput extends RemoveEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link RemoveEndpointsCommand}.
 */
export interface RemoveEndpointsCommandOutput extends __MetadataBearer {}

/**
 * <p>Remove endpoints from an endpoint group. </p>
 *          <p>The <code>RemoveEndpoints</code> API operation is the recommended option for removing endpoints. The alternative is to remove
 * 			endpoints by updating an endpoint group by using the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a>
 * 			API operation. There are two advantages to using <code>AddEndpoints</code> to remove endpoints instead:</p>
 *          <ul>
 *             <li>
 *                <p>It's more convenient, because you only need to specify the endpoints that you want to remove. With the
 * 				<code>UpdateEndpointGroup</code> API operation, you must specify all of the endpoints in the
 * 				endpoint group except the ones that you want to remove from the group.</p>
 *             </li>
 *             <li>
 *                <p>It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the
 * 				<code>UpdateEndpointGroup</code> API operation, Global Accelerator must resolve all of the endpoints that
 * 				remain in the group.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, RemoveEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, RemoveEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // RemoveEndpointsRequest
 *   EndpointIdentifiers: [ // EndpointIdentifiers // required
 *     { // EndpointIdentifier
 *       EndpointId: "STRING_VALUE", // required
 *       ClientIPPreservationEnabled: true || false,
 *     },
 *   ],
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new RemoveEndpointsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveEndpointsCommandInput - {@link RemoveEndpointsCommandInput}
 * @returns {@link RemoveEndpointsCommandOutput}
 * @see {@link RemoveEndpointsCommandInput} for command's `input` shape.
 * @see {@link RemoveEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link EndpointGroupNotFoundException} (client fault)
 *  <p>The endpoint group that you specified doesn't exist.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *  <p>There's already a transaction in progress. Another transaction can't be processed.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class RemoveEndpointsCommand extends $Command
  .classBuilder<
    RemoveEndpointsCommandInput,
    RemoveEndpointsCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "RemoveEndpoints", {})
  .n("GlobalAcceleratorClient", "RemoveEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_RemoveEndpointsCommand)
  .de(de_RemoveEndpointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveEndpointsRequest;
      output: {};
    };
    sdk: {
      input: RemoveEndpointsCommandInput;
      output: RemoveEndpointsCommandOutput;
    };
  };
}
