// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePracticeRunConfigurationRequest, CreatePracticeRunConfigurationResponse } from "../models/models_0";
import {
  de_CreatePracticeRunConfigurationCommand,
  se_CreatePracticeRunConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePracticeRunConfigurationCommand}.
 */
export interface CreatePracticeRunConfigurationCommandInput extends CreatePracticeRunConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreatePracticeRunConfigurationCommand}.
 */
export interface CreatePracticeRunConfigurationCommandOutput
  extends CreatePracticeRunConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>A practice run configuration for zonal autoshift is required when you enable zonal autoshift.
 * 			A practice run configuration includes specifications for blocked dates and blocked time windows,
 * 		and for Amazon CloudWatch alarms that you create to use with practice runs. The alarms that you specify are an
 * 			<i>outcome alarm</i>, to monitor application health during practice runs and,
 * 			optionally, a <i>blocking alarm</i>, to block practice runs from starting.</p>
 *          <p>When a resource has a practice run configuration, Route 53 ARC starts zonal shifts for the resource
 * 			weekly, to shift traffic for practice runs. Practice runs help you to ensure that
 * 			shifting away traffic from an Availability Zone during an autoshift is safe for your application.</p>
 *          <p>For more information, see
 * 			<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.considerations.html">
 * 				Considerations when you configure zonal autoshift</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, CreatePracticeRunConfigurationCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, CreatePracticeRunConfigurationCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ARCZonalShiftClient(config);
 * const input = { // CreatePracticeRunConfigurationRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 *   blockedWindows: [ // BlockedWindows
 *     "STRING_VALUE",
 *   ],
 *   blockedDates: [ // BlockedDates
 *     "STRING_VALUE",
 *   ],
 *   blockingAlarms: [ // ControlConditions
 *     { // ControlCondition
 *       type: "CLOUDWATCH", // required
 *       alarmIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   outcomeAlarms: [ // required
 *     {
 *       type: "CLOUDWATCH", // required
 *       alarmIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePracticeRunConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreatePracticeRunConfigurationResponse
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   zonalAutoshiftStatus: "ENABLED" || "DISABLED", // required
 * //   practiceRunConfiguration: { // PracticeRunConfiguration
 * //     blockingAlarms: [ // ControlConditions
 * //       { // ControlCondition
 * //         type: "CLOUDWATCH", // required
 * //         alarmIdentifier: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     outcomeAlarms: [ // required
 * //       {
 * //         type: "CLOUDWATCH", // required
 * //         alarmIdentifier: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     blockedWindows: [ // BlockedWindows
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
 * @param CreatePracticeRunConfigurationCommandInput - {@link CreatePracticeRunConfigurationCommandInput}
 * @returns {@link CreatePracticeRunConfigurationCommandOutput}
 * @see {@link CreatePracticeRunConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreatePracticeRunConfigurationCommandOutput} for command's `response` shape.
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
export class CreatePracticeRunConfigurationCommand extends $Command
  .classBuilder<
    CreatePracticeRunConfigurationCommandInput,
    CreatePracticeRunConfigurationCommandOutput,
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
  .s("PercDataPlane", "CreatePracticeRunConfiguration", {})
  .n("ARCZonalShiftClient", "CreatePracticeRunConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreatePracticeRunConfigurationCommand)
  .de(de_CreatePracticeRunConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePracticeRunConfigurationRequest;
      output: CreatePracticeRunConfigurationResponse;
    };
    sdk: {
      input: CreatePracticeRunConfigurationCommandInput;
      output: CreatePracticeRunConfigurationCommandOutput;
    };
  };
}
