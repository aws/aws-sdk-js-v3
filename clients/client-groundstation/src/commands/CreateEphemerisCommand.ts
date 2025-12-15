// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import type { CreateEphemerisRequest, EphemerisIdResponse } from "../models/models_0";
import { CreateEphemeris$ } from "../schemas/schemas_0";

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
 * <p>Create an ephemeris with your specified <a>EphemerisData</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateEphemerisCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateEphemerisCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // CreateEphemerisRequest
 *   satelliteId: "STRING_VALUE",
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
 *     azEl: { // AzElEphemeris
 *       groundStation: "STRING_VALUE", // required
 *       data: { // AzElSegmentsData Union: only one key present
 *         s3Object: {
 *           bucket: "STRING_VALUE",
 *           key: "STRING_VALUE",
 *           version: "STRING_VALUE",
 *         },
 *         azElData: { // AzElSegments
 *           angleUnit: "DEGREE_ANGLE" || "RADIAN", // required
 *           azElSegmentList: [ // AzElSegmentList // required
 *             { // AzElSegment
 *               referenceEpoch: new Date("TIMESTAMP"), // required
 *               validTimeRange: { // ISO8601TimeRange
 *                 startTime: new Date("TIMESTAMP"), // required
 *                 endTime: new Date("TIMESTAMP"), // required
 *               },
 *               azElList: [ // TimeAzElList // required
 *                 { // TimeAzEl
 *                   dt: Number("double"), // required
 *                   az: Number("double"), // required
 *                   el: Number("double"), // required
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *       },
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "CreateEphemeris", {})
  .n("GroundStationClient", "CreateEphemerisCommand")
  .sc(CreateEphemeris$)
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
