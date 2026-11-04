// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateZonalAutoshiftConfigurationRequest,
  UpdateZonalAutoshiftConfigurationResponse,
} from "../models/models_0";
import { UpdateZonalAutoshiftConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateZonalAutoshiftConfigurationCommandOutput extends UpdateZonalAutoshiftConfigurationResponse, __MetadataBearer {}

/**
 * The zonal autoshift configuration for a resource includes the practice run configuration and the status for running autoshifts, zonal autoshift status. When a resource has a practice run configuration, ARC starts weekly zonal shifts for the resource, to shift traffic away from an Availability Zone. Weekly practice runs help you to make sure that your application can continue to operate normally with the loss of one Availability Zone.
 *
 * You can update the zonal autoshift status to enable or disable zonal autoshift. When zonal autoshift is `ENABLED`, you authorize Amazon Web Services to shift away resource traffic for an application from an Availability Zone during events, on your behalf, to help reduce time to recovery. Traffic is also shifted away for the required weekly practice runs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, UpdateZonalAutoshiftConfigurationCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, UpdateZonalAutoshiftConfigurationCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * // import type { ARCZonalShiftClientConfig } from "@aws-sdk/client-arc-zonal-shift";
 * const config = {}; // type is ARCZonalShiftClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The input requested a resource that was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link ARCZonalShiftServiceException}
 *
 * Base exception class for all service exceptions from ARCZonalShift service.
 *
 * @public
 */
export class UpdateZonalAutoshiftConfigurationCommand extends command<UpdateZonalAutoshiftConfigurationCommandInput, UpdateZonalAutoshiftConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateZonalAutoshiftConfiguration",
  UpdateZonalAutoshiftConfiguration$
) {
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
