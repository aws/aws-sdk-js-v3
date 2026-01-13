// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeletePracticeRunConfigurationRequest, DeletePracticeRunConfigurationResponse } from "../models/models_0";
import { DeletePracticeRunConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the practice run configuration for a resource. Before you can delete a practice run configuration for a resource., you must disable zonal autoshift for the resource. Practice runs must be configured for zonal autoshift to be enabled.</p>
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
 *
 * @public
 */
export class DeletePracticeRunConfigurationCommand extends $Command
  .classBuilder<
    DeletePracticeRunConfigurationCommandInput,
    DeletePracticeRunConfigurationCommandOutput,
    ARCZonalShiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCZonalShiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PercDataPlane", "DeletePracticeRunConfiguration", {})
  .n("ARCZonalShiftClient", "DeletePracticeRunConfigurationCommand")
  .sc(DeletePracticeRunConfiguration$)
  .build() {
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
