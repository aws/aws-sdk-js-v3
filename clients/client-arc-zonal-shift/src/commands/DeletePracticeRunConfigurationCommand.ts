// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePracticeRunConfigurationRequest, DeletePracticeRunConfigurationResponse } from "../models/models_0";
import { DeletePracticeRunConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePracticeRunConfigurationCommand}.
 */
export interface DeletePracticeRunConfigurationCommandInput extends DeletePracticeRunConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeletePracticeRunConfigurationCommand}.
 */
export interface DeletePracticeRunConfigurationCommandOutput extends DeletePracticeRunConfigurationResponse, __MetadataBearer {}

/**
 * Deletes the practice run configuration for a resource. Before you can delete a practice run configuration for a resource., you must disable zonal autoshift for the resource. Practice runs must be configured for zonal autoshift to be enabled.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, DeletePracticeRunConfigurationCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, DeletePracticeRunConfigurationCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * // import type { ARCZonalShiftClientConfig } from "@aws-sdk/client-arc-zonal-shift";
 * const config = {}; // type is ARCZonalShiftClientConfig
 * const client = new ARCZonalShiftClient(config);
 * const input = { // DeletePracticeRunConfigurationRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeletePracticeRunConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeletePracticeRunConfigurationResponse
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   zonalAutoshiftStatus: "ENABLED" || "DISABLED", // required
 * // };
 *
 * ```
 *
 * @param DeletePracticeRunConfigurationCommandInput - {@link DeletePracticeRunConfigurationCommandInput}
 * @returns {@link DeletePracticeRunConfigurationCommandOutput}
 * @see {@link DeletePracticeRunConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeletePracticeRunConfigurationCommandOutput} for command's `response` shape.
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
export class DeletePracticeRunConfigurationCommand extends command<DeletePracticeRunConfigurationCommandInput, DeletePracticeRunConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeletePracticeRunConfiguration",
  DeletePracticeRunConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePracticeRunConfigurationRequest;
      output: DeletePracticeRunConfigurationResponse;
    };
    sdk: {
      input: DeletePracticeRunConfigurationCommandInput;
      output: DeletePracticeRunConfigurationCommandOutput;
    };
  };
}
