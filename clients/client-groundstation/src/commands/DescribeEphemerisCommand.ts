// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import type { DescribeEphemerisRequest, DescribeEphemerisResponse } from "../models/models_0";
import { DescribeEphemeris } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEphemerisCommand}.
 */
export interface DescribeEphemerisCommandInput extends DescribeEphemerisRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEphemerisCommand}.
 */
export interface DescribeEphemerisCommandOutput extends DescribeEphemerisResponse, __MetadataBearer {}

/**
 * <p>Retrieve information about an existing ephemeris.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DescribeEphemerisCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DescribeEphemerisCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // DescribeEphemerisRequest
 *   ephemerisId: "STRING_VALUE", // required
 * };
 * const command = new DescribeEphemerisCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEphemerisResponse
 * //   ephemerisId: "STRING_VALUE",
 * //   satelliteId: "STRING_VALUE",
 * //   status: "VALIDATING" || "INVALID" || "ERROR" || "ENABLED" || "DISABLED" || "EXPIRED",
 * //   priority: Number("int"),
 * //   creationTime: new Date("TIMESTAMP"),
 * //   enabled: true || false,
 * //   name: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   suppliedData: { // EphemerisTypeDescription Union: only one key present
 * //     tle: { // EphemerisDescription
 * //       sourceS3Object: { // S3Object
 * //         bucket: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //         version: "STRING_VALUE",
 * //       },
 * //       ephemerisData: "STRING_VALUE",
 * //     },
 * //     oem: {
 * //       sourceS3Object: {
 * //         bucket: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //         version: "STRING_VALUE",
 * //       },
 * //       ephemerisData: "STRING_VALUE",
 * //     },
 * //     azEl: {
 * //       sourceS3Object: {
 * //         bucket: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //         version: "STRING_VALUE",
 * //       },
 * //       ephemerisData: "STRING_VALUE",
 * //     },
 * //   },
 * //   invalidReason: "METADATA_INVALID" || "TIME_RANGE_INVALID" || "TRAJECTORY_INVALID" || "KMS_KEY_INVALID" || "VALIDATION_ERROR",
 * //   errorReasons: [ // EphemerisErrorReasonList
 * //     { // EphemerisErrorReason
 * //       errorCode: "INTERNAL_ERROR" || "MISMATCHED_SATCAT_ID" || "OEM_VERSION_UNSUPPORTED" || "ORIGINATOR_MISSING" || "CREATION_DATE_MISSING" || "OBJECT_NAME_MISSING" || "OBJECT_ID_MISSING" || "REF_FRAME_UNSUPPORTED" || "REF_FRAME_EPOCH_UNSUPPORTED" || "TIME_SYSTEM_UNSUPPORTED" || "CENTER_BODY_UNSUPPORTED" || "INTERPOLATION_MISSING" || "INTERPOLATION_DEGREE_INVALID" || "AZ_EL_SEGMENT_LIST_MISSING" || "INSUFFICIENT_TIME_AZ_EL" || "START_TIME_IN_FUTURE" || "END_TIME_IN_PAST" || "EXPIRATION_TIME_TOO_EARLY" || "START_TIME_METADATA_TOO_EARLY" || "STOP_TIME_METADATA_TOO_LATE" || "AZ_EL_SEGMENT_END_TIME_BEFORE_START_TIME" || "AZ_EL_SEGMENT_TIMES_OVERLAP" || "AZ_EL_SEGMENTS_OUT_OF_ORDER" || "TIME_AZ_EL_ITEMS_OUT_OF_ORDER" || "MEAN_MOTION_INVALID" || "TIME_AZ_EL_AZ_RADIAN_RANGE_INVALID" || "TIME_AZ_EL_EL_RADIAN_RANGE_INVALID" || "TIME_AZ_EL_AZ_DEGREE_RANGE_INVALID" || "TIME_AZ_EL_EL_DEGREE_RANGE_INVALID" || "TIME_AZ_EL_ANGLE_UNITS_INVALID" || "INSUFFICIENT_KMS_PERMISSIONS" || "FILE_FORMAT_INVALID" || "AZ_EL_SEGMENT_REFERENCE_EPOCH_INVALID" || "AZ_EL_SEGMENT_START_TIME_INVALID" || "AZ_EL_SEGMENT_END_TIME_INVALID" || "AZ_EL_SEGMENT_VALID_TIME_RANGE_INVALID" || "AZ_EL_SEGMENT_END_TIME_TOO_LATE" || "AZ_EL_TOTAL_DURATION_EXCEEDED", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEphemerisCommandInput - {@link DescribeEphemerisCommandInput}
 * @returns {@link DescribeEphemerisCommandOutput}
 * @see {@link DescribeEphemerisCommandInput} for command's `input` shape.
 * @see {@link DescribeEphemerisCommandOutput} for command's `response` shape.
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
export class DescribeEphemerisCommand extends $Command
  .classBuilder<
    DescribeEphemerisCommandInput,
    DescribeEphemerisCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GroundStation", "DescribeEphemeris", {})
  .n("GroundStationClient", "DescribeEphemerisCommand")
  .sc(DescribeEphemeris)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEphemerisRequest;
      output: DescribeEphemerisResponse;
    };
    sdk: {
      input: DescribeEphemerisCommandInput;
      output: DescribeEphemerisCommandOutput;
    };
  };
}
