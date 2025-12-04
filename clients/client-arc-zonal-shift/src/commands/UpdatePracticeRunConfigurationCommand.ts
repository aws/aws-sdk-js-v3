// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdatePracticeRunConfigurationRequest, UpdatePracticeRunConfigurationResponse } from "../models/models_0";
import { UpdatePracticeRunConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePracticeRunConfigurationCommand}.
 */
export interface UpdatePracticeRunConfigurationCommandInput extends UpdatePracticeRunConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePracticeRunConfigurationCommand}.
 */
export interface UpdatePracticeRunConfigurationCommandOutput
  extends UpdatePracticeRunConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Update a practice run configuration to change one or more of the following: add, change, or remove the blocking alarm; change the outcome alarm; or add, change, or remove blocking dates or time windows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, UpdatePracticeRunConfigurationCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, UpdatePracticeRunConfigurationCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * // import type { ARCZonalShiftClientConfig } from "@aws-sdk/client-arc-zonal-shift";
 * const config = {}; // type is ARCZonalShiftClientConfig
 * const client = new ARCZonalShiftClient(config);
 * const input = { // UpdatePracticeRunConfigurationRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 *   blockedWindows: [ // BlockedWindows
 *     "STRING_VALUE",
 *   ],
 *   blockedDates: [ // BlockedDates
 *     "STRING_VALUE",
 *   ],
 *   blockingAlarms: [ // BlockingAlarms
 *     { // ControlCondition
 *       type: "CLOUDWATCH", // required
 *       alarmIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   allowedWindows: [ // AllowedWindows
 *     "STRING_VALUE",
 *   ],
 *   outcomeAlarms: [ // OutcomeAlarms
 *     {
 *       type: "CLOUDWATCH", // required
 *       alarmIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdatePracticeRunConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePracticeRunConfigurationResponse
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   zonalAutoshiftStatus: "ENABLED" || "DISABLED", // required
 * //   practiceRunConfiguration: { // PracticeRunConfiguration
 * //     blockingAlarms: [ // BlockingAlarms
 * //       { // ControlCondition
 * //         type: "CLOUDWATCH", // required
 * //         alarmIdentifier: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     outcomeAlarms: [ // OutcomeAlarms // required
 * //       {
 * //         type: "CLOUDWATCH", // required
 * //         alarmIdentifier: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     blockedWindows: [ // BlockedWindows
 * //       "STRING_VALUE",
 * //     ],
 * //     allowedWindows: [ // AllowedWindows
 * //       "STRING_VALUE",
 * //     ],
 * //     blockedDates: [ // BlockedDates
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePracticeRunConfigurationCommandInput - {@link UpdatePracticeRunConfigurationCommandInput}
 * @returns {@link UpdatePracticeRunConfigurationCommandOutput}
 * @see {@link UpdatePracticeRunConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdatePracticeRunConfigurationCommandOutput} for command's `response` shape.
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
export class UpdatePracticeRunConfigurationCommand extends $Command
  .classBuilder<
    UpdatePracticeRunConfigurationCommandInput,
    UpdatePracticeRunConfigurationCommandOutput,
    ARCZonalShiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCZonalShiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PercDataPlane", "UpdatePracticeRunConfiguration", {})
  .n("ARCZonalShiftClient", "UpdatePracticeRunConfigurationCommand")
  .sc(UpdatePracticeRunConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePracticeRunConfigurationRequest;
      output: UpdatePracticeRunConfigurationResponse;
    };
    sdk: {
      input: UpdatePracticeRunConfigurationCommandInput;
      output: UpdatePracticeRunConfigurationCommandOutput;
    };
  };
}
