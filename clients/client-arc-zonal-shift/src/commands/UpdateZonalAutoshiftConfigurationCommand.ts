// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateZonalAutoshiftConfigurationRequest,
  UpdateZonalAutoshiftConfigurationResponse,
} from "../models/models_0";
import {
  de_UpdateZonalAutoshiftConfigurationCommand,
  se_UpdateZonalAutoshiftConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateZonalAutoshiftConfigurationCommand}.
 */
export interface UpdateZonalAutoshiftConfigurationCommandInput extends UpdateZonalAutoshiftConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateZonalAutoshiftConfigurationCommand}.
 */
export interface UpdateZonalAutoshiftConfigurationCommandOutput
  extends UpdateZonalAutoshiftConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>You can update the zonal autoshift status for a resource, to enable or disable zonal
 * 			autoshift. When zonal autoshift is <code>ENABLED</code>, Amazon Web Services shifts away
 * 			resource traffic from an Availability Zone, on your behalf, when Amazon Web Services
 * 			determines that there's an issue in the Availability Zone that could potentially affect customers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, UpdateZonalAutoshiftConfigurationCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, UpdateZonalAutoshiftConfigurationCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const input = { // UpdateZonalAutoshiftConfigurationRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 *   zonalAutoshiftStatus: "ENABLED" || "DISABLED", // required
 * };
 * const command = new UpdateZonalAutoshiftConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateZonalAutoshiftConfigurationResponse
 * //   resourceIdentifier: "STRING_VALUE", // required
 * //   zonalAutoshiftStatus: "ENABLED" || "DISABLED", // required
 * // };
 *
 * ```
 *
 * @param UpdateZonalAutoshiftConfigurationCommandInput - {@link UpdateZonalAutoshiftConfigurationCommandInput}
 * @returns {@link UpdateZonalAutoshiftConfigurationCommandOutput}
 * @see {@link UpdateZonalAutoshiftConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateZonalAutoshiftConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The input requested a resource that was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ARCZonalShiftServiceException}
 * <p>Base exception class for all service exceptions from ARCZonalShift service.</p>
 *
 * @public
 */
export class UpdateZonalAutoshiftConfigurationCommand extends $Command
  .classBuilder<
    UpdateZonalAutoshiftConfigurationCommandInput,
    UpdateZonalAutoshiftConfigurationCommandOutput,
    ARCZonalShiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ARCZonalShiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PercDataPlane", "UpdateZonalAutoshiftConfiguration", {})
  .n("ARCZonalShiftClient", "UpdateZonalAutoshiftConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateZonalAutoshiftConfigurationCommand)
  .de(de_UpdateZonalAutoshiftConfigurationCommand)
  .build() {}
