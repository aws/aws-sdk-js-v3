// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { DescribeEphemerisRequest, DescribeEphemerisResponse } from "../models/models_0";
import { de_DescribeEphemerisCommand, se_DescribeEphemerisCommand } from "../protocols/Aws_restJson1";

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
 * <p>Describes an existing ephemeris.</p>
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
 * //   },
 * //   invalidReason: "METADATA_INVALID" || "TIME_RANGE_INVALID" || "TRAJECTORY_INVALID" || "KMS_KEY_INVALID" || "VALIDATION_ERROR",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "DescribeEphemeris", {})
  .n("GroundStationClient", "DescribeEphemerisCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEphemerisCommand)
  .de(de_DescribeEphemerisCommand)
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
