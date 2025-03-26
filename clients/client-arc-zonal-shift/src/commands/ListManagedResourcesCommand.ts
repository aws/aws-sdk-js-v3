// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListManagedResourcesRequest, ListManagedResourcesResponse } from "../models/models_0";
import { de_ListManagedResourcesCommand, se_ListManagedResourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedResourcesCommand}.
 */
export interface ListManagedResourcesCommandInput extends ListManagedResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedResourcesCommand}.
 */
export interface ListManagedResourcesCommandOutput extends ListManagedResourcesResponse, __MetadataBearer {}

/**
 * <p>Lists all the resources in your Amazon Web Services account in this Amazon Web Services Region that are managed for
 *    		zonal shifts in Amazon Route 53 Application Recovery Controller, and information about them. The information includes the zonal autoshift status for the resource,
 *    		as well as the Amazon Resource Name (ARN), the Availability Zones that each resource is deployed in, and
 *    		the resource name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, ListManagedResourcesCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, ListManagedResourcesCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const input = { // ListManagedResourcesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListManagedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedResourcesResponse
 * //   items: [ // ManagedResourceSummaries // required
 * //     { // ManagedResourceSummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       availabilityZones: [ // AvailabilityZones // required
 * //         "STRING_VALUE",
 * //       ],
 * //       appliedWeights: { // AppliedWeights
 * //         "<keys>": Number("float"),
 * //       },
 * //       zonalShifts: [ // ZonalShiftsInResource
 * //         { // ZonalShiftInResource
 * //           appliedStatus: "APPLIED" || "NOT_APPLIED", // required
 * //           zonalShiftId: "STRING_VALUE", // required
 * //           resourceIdentifier: "STRING_VALUE", // required
 * //           awayFrom: "STRING_VALUE", // required
 * //           expiryTime: new Date("TIMESTAMP"), // required
 * //           startTime: new Date("TIMESTAMP"), // required
 * //           comment: "STRING_VALUE", // required
 * //           shiftType: "ZONAL_SHIFT" || "PRACTICE_RUN" || "FIS_EXPERIMENT" || "ZONAL_AUTOSHIFT",
 * //           practiceRunOutcome: "FAILED" || "INTERRUPTED" || "PENDING" || "SUCCEEDED",
 * //         },
 * //       ],
 * //       autoshifts: [ // AutoshiftsInResource
 * //         { // AutoshiftInResource
 * //           appliedStatus: "APPLIED" || "NOT_APPLIED", // required
 * //           awayFrom: "STRING_VALUE", // required
 * //           startTime: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //       zonalAutoshiftStatus: "ENABLED" || "DISABLED",
 * //       practiceRunStatus: "ENABLED" || "DISABLED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedResourcesCommandInput - {@link ListManagedResourcesCommandInput}
 * @returns {@link ListManagedResourcesCommandOutput}
 * @see {@link ListManagedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListManagedResourcesCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
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
export class ListManagedResourcesCommand extends $Command
  .classBuilder<
    ListManagedResourcesCommandInput,
    ListManagedResourcesCommandOutput,
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
  .s("PercDataPlane", "ListManagedResources", {})
  .n("ARCZonalShiftClient", "ListManagedResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListManagedResourcesCommand)
  .de(de_ListManagedResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedResourcesRequest;
      output: ListManagedResourcesResponse;
    };
    sdk: {
      input: ListManagedResourcesCommandInput;
      output: ListManagedResourcesCommandOutput;
    };
  };
}
