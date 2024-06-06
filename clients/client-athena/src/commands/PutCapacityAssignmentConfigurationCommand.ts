// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutCapacityAssignmentConfigurationInput, PutCapacityAssignmentConfigurationOutput } from "../models/models_0";
import {
  de_PutCapacityAssignmentConfigurationCommand,
  se_PutCapacityAssignmentConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutCapacityAssignmentConfigurationCommand}.
 */
export interface PutCapacityAssignmentConfigurationCommandInput extends PutCapacityAssignmentConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutCapacityAssignmentConfigurationCommand}.
 */
export interface PutCapacityAssignmentConfigurationCommandOutput
  extends PutCapacityAssignmentConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Puts a new capacity assignment configuration for a specified capacity reservation. If
 *             a capacity assignment configuration already exists for the capacity reservation,
 *             replaces the existing capacity assignment configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, PutCapacityAssignmentConfigurationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, PutCapacityAssignmentConfigurationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // PutCapacityAssignmentConfigurationInput
 *   CapacityReservationName: "STRING_VALUE", // required
 *   CapacityAssignments: [ // CapacityAssignmentsList // required
 *     { // CapacityAssignment
 *       WorkGroupNames: [ // WorkGroupNamesList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutCapacityAssignmentConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutCapacityAssignmentConfigurationCommandInput - {@link PutCapacityAssignmentConfigurationCommandInput}
 * @returns {@link PutCapacityAssignmentConfigurationCommandOutput}
 * @see {@link PutCapacityAssignmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutCapacityAssignmentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 * @public
 */
export class PutCapacityAssignmentConfigurationCommand extends $Command
  .classBuilder<
    PutCapacityAssignmentConfigurationCommandInput,
    PutCapacityAssignmentConfigurationCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "PutCapacityAssignmentConfiguration", {})
  .n("AthenaClient", "PutCapacityAssignmentConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutCapacityAssignmentConfigurationCommand)
  .de(de_PutCapacityAssignmentConfigurationCommand)
  .build() {}
