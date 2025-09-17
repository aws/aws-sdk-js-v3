// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CreateEphemerisRequest, EphemerisIdResponse } from "../models/models_0";
import { de_CreateEphemerisCommand, se_CreateEphemerisCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEphemerisCommand}.
 */
export interface CreateEphemerisCommandInput extends CreateEphemerisRequest {}
/**
 * @public
 *
 * The output of {@link CreateEphemerisCommand}.
 */
export interface CreateEphemerisCommandOutput extends EphemerisIdResponse, __MetadataBearer {}

/**
 * <p>Creates an Ephemeris with the specified <code>EphemerisData</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateEphemerisCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateEphemerisCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // CreateEphemerisRequest
 *   satelliteId: "STRING_VALUE", // required
 *   enabled: true || false,
 *   priority: Number("int"),
 *   expirationTime: new Date("TIMESTAMP"),
 *   name: "STRING_VALUE", // required
 *   kmsKeyArn: "STRING_VALUE",
 *   ephemeris: { // EphemerisData Union: only one key present
 *     tle: { // TLEEphemeris
 *       s3Object: { // S3Object
 *         bucket: "STRING_VALUE",
 *         key: "STRING_VALUE",
 *         version: "STRING_VALUE",
 *       },
 *       tleData: [ // TLEDataList
 *         { // TLEData
 *           tleLine1: "STRING_VALUE", // required
 *           tleLine2: "STRING_VALUE", // required
 *           validTimeRange: { // TimeRange
 *             startTime: new Date("TIMESTAMP"), // required
 *             endTime: new Date("TIMESTAMP"), // required
 *           },
 *         },
 *       ],
 *     },
 *     oem: { // OEMEphemeris
 *       s3Object: {
 *         bucket: "STRING_VALUE",
 *         key: "STRING_VALUE",
 *         version: "STRING_VALUE",
 *       },
 *       oemData: "STRING_VALUE",
 *     },
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateEphemerisCommand(input);
 * const response = await client.send(command);
 * // { // EphemerisIdResponse
 * //   ephemerisId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEphemerisCommandInput - {@link CreateEphemerisCommandInput}
 * @returns {@link CreateEphemerisCommandOutput}
 * @see {@link CreateEphemerisCommandInput} for command's `input` shape.
 * @see {@link CreateEphemerisCommandOutput} for command's `response` shape.
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
export class CreateEphemerisCommand extends $Command
  .classBuilder<
    CreateEphemerisCommandInput,
    CreateEphemerisCommandOutput,
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
  .s("GroundStation", "CreateEphemeris", {})
  .n("GroundStationClient", "CreateEphemerisCommand")
  .f(void 0, void 0)
  .ser(se_CreateEphemerisCommand)
  .de(de_CreateEphemerisCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEphemerisRequest;
      output: EphemerisIdResponse;
    };
    sdk: {
      input: CreateEphemerisCommandInput;
      output: CreateEphemerisCommandOutput;
    };
  };
}
