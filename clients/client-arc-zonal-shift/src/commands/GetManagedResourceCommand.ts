// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetManagedResourceRequest, GetManagedResourceResponse } from "../models/models_0";
import { GetManagedResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Get information about a resource that's been registered for zonal shifts with Amazon Application Recovery Controller in this Amazon Web Services Region. Resources that are registered for zonal shifts are managed resources in ARC. You can start zonal shifts and configure zonal autoshift for managed resources.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, GetManagedResourceCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, GetManagedResourceCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * // import type { ARCZonalShiftClientConfig } from "@aws-sdk/client-arc-zonal-shift";
 * const config = {}; // type is ARCZonalShiftClientConfig
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
 * //       shiftType: "ZONAL_SHIFT" || "PRACTICE_RUN" || "FIS_EXPERIMENT" || "ZONAL_AUTOSHIFT",
 * //       practiceRunOutcome: "FAILED" || "INTERRUPTED" || "PENDING" || "SUCCEEDED" || "CAPACITY_CHECK_FAILED",
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
 *
 * You do not have sufficient access to perform this action.
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
export class GetManagedResourceCommand extends command<GetManagedResourceCommandInput, GetManagedResourceCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedResource",
  GetManagedResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedResourceRequest;
      output: GetManagedResourceResponse;
    };
    sdk: {
      input: GetManagedResourceCommandInput;
      output: GetManagedResourceCommandOutput;
    };
  };
}
