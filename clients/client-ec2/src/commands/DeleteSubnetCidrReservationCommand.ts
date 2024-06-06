// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSubnetCidrReservationRequest, DeleteSubnetCidrReservationResult } from "../models/models_3";
import { de_DeleteSubnetCidrReservationCommand, se_DeleteSubnetCidrReservationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSubnetCidrReservationCommand}.
 */
export interface DeleteSubnetCidrReservationCommandInput extends DeleteSubnetCidrReservationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSubnetCidrReservationCommand}.
 */
export interface DeleteSubnetCidrReservationCommandOutput extends DeleteSubnetCidrReservationResult, __MetadataBearer {}

/**
 * <p>Deletes a subnet CIDR reservation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSubnetCidrReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSubnetCidrReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteSubnetCidrReservationRequest
 *   SubnetCidrReservationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteSubnetCidrReservationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSubnetCidrReservationResult
 * //   DeletedSubnetCidrReservation: { // SubnetCidrReservation
 * //     SubnetCidrReservationId: "STRING_VALUE",
 * //     SubnetId: "STRING_VALUE",
 * //     Cidr: "STRING_VALUE",
 * //     ReservationType: "prefix" || "explicit",
 * //     OwnerId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteSubnetCidrReservationCommandInput - {@link DeleteSubnetCidrReservationCommandInput}
 * @returns {@link DeleteSubnetCidrReservationCommandOutput}
 * @see {@link DeleteSubnetCidrReservationCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetCidrReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteSubnetCidrReservationCommand extends $Command
  .classBuilder<
    DeleteSubnetCidrReservationCommandInput,
    DeleteSubnetCidrReservationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeleteSubnetCidrReservation", {})
  .n("EC2Client", "DeleteSubnetCidrReservationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSubnetCidrReservationCommand)
  .de(de_DeleteSubnetCidrReservationCommand)
  .build() {}
