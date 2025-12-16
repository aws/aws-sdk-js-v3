// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAvailabilityZonesRequest, DescribeAvailabilityZonesResult } from "../models/models_3";
import { DescribeAvailabilityZones$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAvailabilityZonesCommand}.
 */
export interface DescribeAvailabilityZonesCommandInput extends DescribeAvailabilityZonesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAvailabilityZonesCommand}.
 */
export interface DescribeAvailabilityZonesCommandOutput extends DescribeAvailabilityZonesResult, __MetadataBearer {}

/**
 * <p>Describes the Availability Zones, Local Zones, and Wavelength Zones that are available to
 *       you.</p>
 *          <p>For more information about Availability Zones, Local Zones, and Wavelength Zones, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">Regions and zones</a>
 *       in the <i>Amazon EC2 User Guide</i>.</p>
 *          <note>
 *             <p>The order of the elements in the response, including those within nested
 *         structures, might vary. Applications should not assume the elements appear in a
 *         particular order.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAvailabilityZonesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAvailabilityZonesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeAvailabilityZonesRequest
 *   ZoneNames: [ // ZoneNameStringList
 *     "STRING_VALUE",
 *   ],
 *   ZoneIds: [ // ZoneIdStringList
 *     "STRING_VALUE",
 *   ],
 *   AllAvailabilityZones: true || false,
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAvailabilityZonesResult
 * //   AvailabilityZones: [ // AvailabilityZoneList
 * //     { // AvailabilityZone
 * //       OptInStatus: "opt-in-not-required" || "opted-in" || "not-opted-in",
 * //       Messages: [ // AvailabilityZoneMessageList
 * //         { // AvailabilityZoneMessage
 * //           Message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RegionName: "STRING_VALUE",
 * //       ZoneName: "STRING_VALUE",
 * //       ZoneId: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       NetworkBorderGroup: "STRING_VALUE",
 * //       ZoneType: "STRING_VALUE",
 * //       ParentZoneName: "STRING_VALUE",
 * //       ParentZoneId: "STRING_VALUE",
 * //       GroupLongName: "STRING_VALUE",
 * //       State: "available" || "information" || "impaired" || "unavailable" || "constrained",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAvailabilityZonesCommandInput - {@link DescribeAvailabilityZonesCommandInput}
 * @returns {@link DescribeAvailabilityZonesCommandOutput}
 * @see {@link DescribeAvailabilityZonesCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailabilityZonesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe your Availability Zones
 * ```javascript
 * // This example describes the Availability Zones that are available to you. The response includes Availability Zones only for the current region.
 * const input = { /* empty *\/ };
 * const command = new DescribeAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AvailabilityZones: [
 *     {
 *       Messages:       [],
 *       RegionName: "us-east-1",
 *       State: "available",
 *       ZoneName: "us-east-1b"
 *     },
 *     {
 *       Messages:       [],
 *       RegionName: "us-east-1",
 *       State: "available",
 *       ZoneName: "us-east-1c"
 *     },
 *     {
 *       Messages:       [],
 *       RegionName: "us-east-1",
 *       State: "available",
 *       ZoneName: "us-east-1d"
 *     },
 *     {
 *       Messages:       [],
 *       RegionName: "us-east-1",
 *       State: "available",
 *       ZoneName: "us-east-1e"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeAvailabilityZonesCommand extends $Command
  .classBuilder<
    DescribeAvailabilityZonesCommandInput,
    DescribeAvailabilityZonesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeAvailabilityZones", {})
  .n("EC2Client", "DescribeAvailabilityZonesCommand")
  .sc(DescribeAvailabilityZones$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAvailabilityZonesRequest;
      output: DescribeAvailabilityZonesResult;
    };
    sdk: {
      input: DescribeAvailabilityZonesCommandInput;
      output: DescribeAvailabilityZonesCommandOutput;
    };
  };
}
