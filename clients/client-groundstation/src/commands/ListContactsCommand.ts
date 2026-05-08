// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import type { ListContactsRequest, ListContactsResponse } from "../models/models_0";
import { ListContacts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContactsCommand}.
 */
export interface ListContactsCommandInput extends ListContactsRequest {}
/**
 * @public
 *
 * The output of {@link ListContactsCommand}.
 */
export interface ListContactsCommandOutput extends ListContactsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code> groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListContactsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListContactsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // ListContactsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   statusList: [ // StatusList // required
 *     "SCHEDULING" || "FAILED_TO_SCHEDULE" || "SCHEDULED" || "CANCELLED" || "AWS_CANCELLED" || "PREPASS" || "PASS" || "POSTPASS" || "COMPLETED" || "FAILED" || "AVAILABLE" || "CANCELLING" || "AWS_FAILED",
 *   ],
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   groundStation: "STRING_VALUE",
 *   satelliteArn: "STRING_VALUE",
 *   missionProfileArn: "STRING_VALUE",
 *   ephemeris: { // EphemerisFilter Union: only one key present
 *     azEl: { // AzElEphemerisFilter
 *       id: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new ListContactsCommand(input);
 * const response = await client.send(command);
 * // { // ListContactsResponse
 * //   nextToken: "STRING_VALUE",
 * //   contactList: [ // ContactList
 * //     { // ContactData
 * //       contactId: "STRING_VALUE",
 * //       missionProfileArn: "STRING_VALUE",
 * //       satelliteArn: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       prePassStartTime: new Date("TIMESTAMP"),
 * //       postPassEndTime: new Date("TIMESTAMP"),
 * //       groundStation: "STRING_VALUE",
 * //       contactStatus: "SCHEDULING" || "FAILED_TO_SCHEDULE" || "SCHEDULED" || "CANCELLED" || "AWS_CANCELLED" || "PREPASS" || "PASS" || "POSTPASS" || "COMPLETED" || "FAILED" || "AVAILABLE" || "CANCELLING" || "AWS_FAILED",
 * //       errorMessage: "STRING_VALUE",
 * //       maximumElevation: { // Elevation
 * //         value: Number("double"), // required
 * //         unit: "DEGREE_ANGLE" || "RADIAN", // required
 * //       },
 * //       region: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       visibilityStartTime: new Date("TIMESTAMP"),
 * //       visibilityEndTime: new Date("TIMESTAMP"),
 * //       ephemeris: { // EphemerisResponseData
 * //         ephemerisId: "STRING_VALUE",
 * //         ephemerisType: "TLE" || "OEM" || "AZ_EL" || "SERVICE_MANAGED", // required
 * //       },
 * //       version: { // ContactVersion
 * //         versionId: Number("int"),
 * //         created: new Date("TIMESTAMP"),
 * //         activated: new Date("TIMESTAMP"),
 * //         superseded: new Date("TIMESTAMP"),
 * //         lastUpdated: new Date("TIMESTAMP"),
 * //         status: "UPDATING" || "ACTIVE" || "SUPERSEDED" || "FAILED_TO_UPDATE",
 * //         failureCodes: [ // VersionFailureReasonCodes
 * //           "INTERNAL_ERROR" || "INVALID_SATELLITE_ARN" || "INVALID_UPDATE_CONTACT_REQUEST" || "EPHEMERIS_NOT_FOUND" || "EPHEMERIS_TIME_RANGE_INVALID" || "EPHEMERIS_NOT_ENABLED" || "SATELLITE_DOES_NOT_MATCH_EPHEMERIS" || "NOT_ONBOARDED_TO_AZEL_EPHEMERIS" || "AZEL_EPHEMERIS_NOT_FOUND" || "AZEL_EPHEMERIS_WRONG_GROUND_STATION" || "AZEL_EPHEMERIS_INVALID_STATUS" || "AZEL_EPHEMERIS_TIME_RANGE_INVALID",
 * //         ],
 * //         failureMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListContactsCommandInput - {@link ListContactsCommandInput}
 * @returns {@link ListContactsCommandOutput}
 * @see {@link ListContactsCommandInput} for command's `input` shape.
 * @see {@link ListContactsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class ListContactsCommand extends $Command
  .classBuilder<
    ListContactsCommandInput,
    ListContactsCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "ListContacts", {})
  .n("GroundStationClient", "ListContactsCommand")
  .sc(ListContacts$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactsRequest;
      output: ListContactsResponse;
    };
    sdk: {
      input: ListContactsCommandInput;
      output: ListContactsCommandOutput;
    };
  };
}
