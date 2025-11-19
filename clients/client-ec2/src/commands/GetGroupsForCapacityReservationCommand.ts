// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetGroupsForCapacityReservationRequest, GetGroupsForCapacityReservationResult } from "../models/models_5";
import { GetGroupsForCapacityReservation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGroupsForCapacityReservationCommand}.
 */
export interface GetGroupsForCapacityReservationCommandInput extends GetGroupsForCapacityReservationRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupsForCapacityReservationCommand}.
 */
export interface GetGroupsForCapacityReservationCommandOutput
  extends GetGroupsForCapacityReservationResult,
    __MetadataBearer {}

/**
 * <p>Lists the resource groups to which a Capacity Reservation has been added.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetGroupsForCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetGroupsForCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetGroupsForCapacityReservationRequest
 *   CapacityReservationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new GetGroupsForCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupsForCapacityReservationResult
 * //   NextToken: "STRING_VALUE",
 * //   CapacityReservationGroups: [ // CapacityReservationGroupSet
 * //     { // CapacityReservationGroup
 * //       GroupArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetGroupsForCapacityReservationCommandInput - {@link GetGroupsForCapacityReservationCommandInput}
 * @returns {@link GetGroupsForCapacityReservationCommandOutput}
 * @see {@link GetGroupsForCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link GetGroupsForCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetGroupsForCapacityReservationCommand extends $Command
  .classBuilder<
    GetGroupsForCapacityReservationCommandInput,
    GetGroupsForCapacityReservationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetGroupsForCapacityReservation", {})
  .n("EC2Client", "GetGroupsForCapacityReservationCommand")
  .sc(GetGroupsForCapacityReservation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupsForCapacityReservationRequest;
      output: GetGroupsForCapacityReservationResult;
    };
    sdk: {
      input: GetGroupsForCapacityReservationCommandInput;
      output: GetGroupsForCapacityReservationCommandOutput;
    };
  };
}
