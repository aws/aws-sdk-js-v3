// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { PurchaseProvisionedCapacityInput, PurchaseProvisionedCapacityOutput } from "../models/models_0";
import {
  de_PurchaseProvisionedCapacityCommand,
  se_PurchaseProvisionedCapacityCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PurchaseProvisionedCapacityCommand}.
 */
export interface PurchaseProvisionedCapacityCommandInput extends PurchaseProvisionedCapacityInput {}
/**
 * @public
 *
 * The output of {@link PurchaseProvisionedCapacityCommand}.
 */
export interface PurchaseProvisionedCapacityCommandOutput extends PurchaseProvisionedCapacityOutput, __MetadataBearer {}

/**
 * <p>This operation purchases a provisioned capacity unit for an AWS account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, PurchaseProvisionedCapacityCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, PurchaseProvisionedCapacityCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // PurchaseProvisionedCapacityInput
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new PurchaseProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseProvisionedCapacityOutput
 * //   capacityId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PurchaseProvisionedCapacityCommandInput - {@link PurchaseProvisionedCapacityCommandInput}
 * @returns {@link PurchaseProvisionedCapacityCommandOutput}
 * @see {@link PurchaseProvisionedCapacityCommandInput} for command's `input` shape.
 * @see {@link PurchaseProvisionedCapacityCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Returned if the request results in a vault or account limit being exceeded.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @public
 * @example To purchases a provisioned capacity unit for an AWS account
 * ```javascript
 * // The example purchases provisioned capacity unit for an AWS account.
 * const input = {
 *   "accountId": "-"
 * };
 * const command = new PurchaseProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "capacityId": "zSaq7NzHFQDANTfQkDen4V7z"
 * }
 * *\/
 * // example id: to-purchases-a-provisioned-capacity-unit-for-an-aws-account-1481927446662
 * ```
 *
 */
export class PurchaseProvisionedCapacityCommand extends $Command
  .classBuilder<
    PurchaseProvisionedCapacityCommandInput,
    PurchaseProvisionedCapacityCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Glacier", "PurchaseProvisionedCapacity", {})
  .n("GlacierClient", "PurchaseProvisionedCapacityCommand")
  .f(void 0, void 0)
  .ser(se_PurchaseProvisionedCapacityCommand)
  .de(de_PurchaseProvisionedCapacityCommand)
  .build() {}
