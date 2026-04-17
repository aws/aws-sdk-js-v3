// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import type { ListContactVersionsRequest, ListContactVersionsResponse } from "../models/models_0";
import { ListContactVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContactVersionsCommand}.
 */
export interface ListContactVersionsCommandInput extends ListContactVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListContactVersionsCommand}.
 */
export interface ListContactVersionsCommandOutput extends ListContactVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of versions for a specified contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListContactVersionsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListContactVersionsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // ListContactVersionsRequest
 *   contactId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListContactVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListContactVersionsResponse
 * //   nextToken: "STRING_VALUE",
 * //   contactVersionsList: [ // ContactVersionsList
 * //     { // ContactVersion
 * //       versionId: Number("int"),
 * //       created: new Date("TIMESTAMP"),
 * //       activated: new Date("TIMESTAMP"),
 * //       superseded: new Date("TIMESTAMP"),
 * //       lastUpdated: new Date("TIMESTAMP"),
 * //       status: "UPDATING" || "ACTIVE" || "SUPERSEDED" || "FAILED_TO_UPDATE",
 * //       failureCodes: [ // VersionFailureReasonCodes
 * //         "INTERNAL_ERROR" || "INVALID_SATELLITE_ARN" || "INVALID_UPDATE_CONTACT_REQUEST" || "EPHEMERIS_NOT_FOUND" || "EPHEMERIS_TIME_RANGE_INVALID" || "EPHEMERIS_NOT_ENABLED" || "SATELLITE_DOES_NOT_MATCH_EPHEMERIS" || "NOT_ONBOARDED_TO_AZEL_EPHEMERIS" || "AZEL_EPHEMERIS_NOT_FOUND" || "AZEL_EPHEMERIS_WRONG_GROUND_STATION" || "AZEL_EPHEMERIS_INVALID_STATUS" || "AZEL_EPHEMERIS_TIME_RANGE_INVALID",
 * //       ],
 * //       failureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListContactVersionsCommandInput - {@link ListContactVersionsCommandInput}
 * @returns {@link ListContactVersionsCommandOutput}
 * @see {@link ListContactVersionsCommandInput} for command's `input` shape.
 * @see {@link ListContactVersionsCommandOutput} for command's `response` shape.
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
export class ListContactVersionsCommand extends $Command
  .classBuilder<
    ListContactVersionsCommandInput,
    ListContactVersionsCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "ListContactVersions", {})
  .n("GroundStationClient", "ListContactVersionsCommand")
  .sc(ListContactVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactVersionsRequest;
      output: ListContactVersionsResponse;
    };
    sdk: {
      input: ListContactVersionsCommandInput;
      output: ListContactVersionsCommandOutput;
    };
  };
}
