// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetManagedResourceRequest, GetManagedResourceResponse } from "../models/models_0";
import { de_GetManagedResourceCommand, se_GetManagedResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetManagedResourceCommand}.
 */
export interface GetManagedResourceCommandInput extends GetManagedResourceRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedResourceCommand}.
 */
export interface GetManagedResourceCommandOutput extends GetManagedResourceResponse, __MetadataBearer {}

/**
 * <p>Get information about a resource that's been registered for zonal shifts with Amazon Route 53 Application Recovery Controller in this Amazon Web Services Region. Resources that are registered for
 *    		zonal shifts are managed resources in Route 53 ARC. You can start zonal shifts and configure zonal autoshift for managed resources.</p>
 *          <p>At this time, you can only start a zonal shift or configure zonal autoshift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, GetManagedResourceCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, GetManagedResourceCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const input = { // GetManagedResourceRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetManagedResourceCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedResourceResponse
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   appliedWeights: { // AppliedWeights // required
 * //     "<keys>": Number("float"),
 * //   },
 * //   zonalShifts: [ // ZonalShiftsInResource // required
 * //     { // ZonalShiftInResource
 * //       appliedStatus: "APPLIED" || "NOT_APPLIED", // required
 * //       zonalShiftId: "STRING_VALUE", // required
 * //       resourceIdentifier: "STRING_VALUE", // required
 * //       awayFrom: "STRING_VALUE", // required
 * //       expiryTime: new Date("TIMESTAMP"), // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       comment: "STRING_VALUE", // required
 * //       practiceRunOutcome: "FAILED" || "INTERRUPTED" || "PENDING" || "SUCCEEDED",
 * //     },
 * //   ],
 * //   autoshifts: [ // AutoshiftsInResource
 * //     { // AutoshiftInResource
 * //       appliedStatus: "APPLIED" || "NOT_APPLIED", // required
 * //       awayFrom: "STRING_VALUE", // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
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
 * //   zonalAutoshiftStatus: "ENABLED" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param GetManagedResourceCommandInput - {@link GetManagedResourceCommandInput}
 * @returns {@link GetManagedResourceCommandOutput}
 * @see {@link GetManagedResourceCommandInput} for command's `input` shape.
 * @see {@link GetManagedResourceCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetManagedResourceCommand extends $Command
  .classBuilder<
    GetManagedResourceCommandInput,
    GetManagedResourceCommandOutput,
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
  .s("PercDataPlane", "GetManagedResource", {})
  .n("ARCZonalShiftClient", "GetManagedResourceCommand")
  .f(void 0, void 0)
  .ser(se_GetManagedResourceCommand)
  .de(de_GetManagedResourceCommand)
  .build() {}
