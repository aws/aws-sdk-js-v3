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
 * <p>The zonal autoshift configuration for a resource includes the practice run configuration and the status for
 * 			running autoshifts, zonal autoshift status. When a resource has a practice run configuation, Route 53 ARC
 * 			starts weekly zonal shifts for the resource, to shift traffic away from an Availability Zone. Weekly practice
 * 			runs help you to make sure that your application can continue to operate normally with the loss of one Availability Zone.</p>
 *          <p>You can update the zonal autoshift autoshift status to enable or disable zonal autoshift. When zonal
 * 			autoshift is <code>ENABLED</code>, you authorize Amazon Web Services to shift away resource traffic for
 * 			an application from an Availability Zone during events, on your behalf, to help reduce time to recovery.
 * 			Traffic is also shifted away for the required weekly practice runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, UpdateZonalAutoshiftConfigurationCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, UpdateZonalAutoshiftConfigurationCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
  .ep(commonParams)
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
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateZonalAutoshiftConfigurationRequest;
      output: UpdateZonalAutoshiftConfigurationResponse;
    };
    sdk: {
      input: UpdateZonalAutoshiftConfigurationCommandInput;
      output: UpdateZonalAutoshiftConfigurationCommandOutput;
    };
  };
}
