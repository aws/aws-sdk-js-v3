// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAutomaticTapeCreationPoliciesInput,
  ListAutomaticTapeCreationPoliciesOutput,
} from "../models/models_0";
import { ListAutomaticTapeCreationPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAutomaticTapeCreationPoliciesCommand}.
 */
export interface ListAutomaticTapeCreationPoliciesCommandInput extends ListAutomaticTapeCreationPoliciesInput {}
/**
 * @public
 *
 * The output of {@link ListAutomaticTapeCreationPoliciesCommand}.
 */
export interface ListAutomaticTapeCreationPoliciesCommandOutput extends ListAutomaticTapeCreationPoliciesOutput, __MetadataBearer {}

/**
 * <p>Lists the automatic tape creation policies for a gateway. If there are no automatic tape
 *          creation policies for the gateway, it returns an empty list.</p>
 *          <p>This operation is only supported for tape gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListAutomaticTapeCreationPoliciesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListAutomaticTapeCreationPoliciesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // ListAutomaticTapeCreationPoliciesInput
 *   GatewayARN: "STRING_VALUE",
 * };
 * const command = new ListAutomaticTapeCreationPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomaticTapeCreationPoliciesOutput
 * //   AutomaticTapeCreationPolicyInfos: [ // AutomaticTapeCreationPolicyInfos
 * //     { // AutomaticTapeCreationPolicyInfo
 * //       AutomaticTapeCreationRules: [ // AutomaticTapeCreationRules
 * //         { // AutomaticTapeCreationRule
 * //           TapeBarcodePrefix: "STRING_VALUE", // required
 * //           PoolId: "STRING_VALUE", // required
 * //           TapeSizeInBytes: Number("long"), // required
 * //           MinimumNumTapes: Number("int"), // required
 * //           Worm: true || false,
 * //         },
 * //       ],
 * //       GatewayARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAutomaticTapeCreationPoliciesCommandInput - {@link ListAutomaticTapeCreationPoliciesCommandInput}
 * @returns {@link ListAutomaticTapeCreationPoliciesCommandOutput}
 * @see {@link ListAutomaticTapeCreationPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAutomaticTapeCreationPoliciesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @public
 */
export class ListAutomaticTapeCreationPoliciesCommand extends command<ListAutomaticTapeCreationPoliciesCommandInput, ListAutomaticTapeCreationPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListAutomaticTapeCreationPolicies",
  ListAutomaticTapeCreationPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutomaticTapeCreationPoliciesInput;
      output: ListAutomaticTapeCreationPoliciesOutput;
    };
    sdk: {
      input: ListAutomaticTapeCreationPoliciesCommandInput;
      output: ListAutomaticTapeCreationPoliciesCommandOutput;
    };
  };
}
