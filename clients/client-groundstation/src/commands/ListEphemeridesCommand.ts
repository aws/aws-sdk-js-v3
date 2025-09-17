// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListEphemeridesRequest, ListEphemeridesResponse } from "../models/models_0";
import { de_ListEphemeridesCommand, se_ListEphemeridesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEphemeridesCommand}.
 */
export interface ListEphemeridesCommandInput extends ListEphemeridesRequest {}
/**
 * @public
 *
 * The output of {@link ListEphemeridesCommand}.
 */
export interface ListEphemeridesCommandOutput extends ListEphemeridesResponse, __MetadataBearer {}

/**
 * <p>List existing ephemerides.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListEphemeridesCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListEphemeridesCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // ListEphemeridesRequest
 *   satelliteId: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   statusList: [ // EphemerisStatusList
 *     "VALIDATING" || "INVALID" || "ERROR" || "ENABLED" || "DISABLED" || "EXPIRED",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEphemeridesCommand(input);
 * const response = await client.send(command);
 * // { // ListEphemeridesResponse
 * //   nextToken: "STRING_VALUE",
 * //   ephemerides: [ // EphemeridesList
 * //     { // EphemerisItem
 * //       ephemerisId: "STRING_VALUE",
 * //       status: "VALIDATING" || "INVALID" || "ERROR" || "ENABLED" || "DISABLED" || "EXPIRED",
 * //       priority: Number("int"),
 * //       enabled: true || false,
 * //       creationTime: new Date("TIMESTAMP"),
 * //       name: "STRING_VALUE",
 * //       sourceS3Object: { // S3Object
 * //         bucket: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //         version: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEphemeridesCommandInput - {@link ListEphemeridesCommandInput}
 * @returns {@link ListEphemeridesCommandOutput}
 * @see {@link ListEphemeridesCommandInput} for command's `input` shape.
 * @see {@link ListEphemeridesCommandOutput} for command's `response` shape.
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
export class ListEphemeridesCommand extends $Command
  .classBuilder<
    ListEphemeridesCommandInput,
    ListEphemeridesCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "ListEphemerides", {})
  .n("GroundStationClient", "ListEphemeridesCommand")
  .f(void 0, void 0)
  .ser(se_ListEphemeridesCommand)
  .de(de_ListEphemeridesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEphemeridesRequest;
      output: ListEphemeridesResponse;
    };
    sdk: {
      input: ListEphemeridesCommandInput;
      output: ListEphemeridesCommandOutput;
    };
  };
}
