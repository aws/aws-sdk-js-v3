// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { PurchaseCapacityBlockExtensionRequest, PurchaseCapacityBlockExtensionResult } from "../models/models_8";
import { PurchaseCapacityBlockExtension } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PurchaseCapacityBlockExtensionCommand}.
 */
export interface PurchaseCapacityBlockExtensionCommandInput extends PurchaseCapacityBlockExtensionRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseCapacityBlockExtensionCommand}.
 */
export interface PurchaseCapacityBlockExtensionCommandOutput
  extends PurchaseCapacityBlockExtensionResult,
    __MetadataBearer {}

/**
 * <p>Purchase the Capacity Block extension for use with your account. You must specify the
 * 			ID of the Capacity Block extension offering you are purchasing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseCapacityBlockExtensionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseCapacityBlockExtensionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // PurchaseCapacityBlockExtensionRequest
 *   CapacityBlockExtensionOfferingId: "STRING_VALUE", // required
 *   CapacityReservationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new PurchaseCapacityBlockExtensionCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseCapacityBlockExtensionResult
 * //   CapacityBlockExtensions: [ // CapacityBlockExtensionSet
 * //     { // CapacityBlockExtension
 * //       CapacityReservationId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       InstanceCount: Number("int"),
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       CapacityBlockExtensionOfferingId: "STRING_VALUE",
 * //       CapacityBlockExtensionDurationHours: Number("int"),
 * //       CapacityBlockExtensionStatus: "payment-pending" || "payment-failed" || "payment-succeeded",
 * //       CapacityBlockExtensionPurchaseDate: new Date("TIMESTAMP"),
 * //       CapacityBlockExtensionStartDate: new Date("TIMESTAMP"),
 * //       CapacityBlockExtensionEndDate: new Date("TIMESTAMP"),
 * //       UpfrontFee: "STRING_VALUE",
 * //       CurrencyCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PurchaseCapacityBlockExtensionCommandInput - {@link PurchaseCapacityBlockExtensionCommandInput}
 * @returns {@link PurchaseCapacityBlockExtensionCommandOutput}
 * @see {@link PurchaseCapacityBlockExtensionCommandInput} for command's `input` shape.
 * @see {@link PurchaseCapacityBlockExtensionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class PurchaseCapacityBlockExtensionCommand extends $Command
  .classBuilder<
    PurchaseCapacityBlockExtensionCommandInput,
    PurchaseCapacityBlockExtensionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "PurchaseCapacityBlockExtension", {})
  .n("EC2Client", "PurchaseCapacityBlockExtensionCommand")
  .sc(PurchaseCapacityBlockExtension)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PurchaseCapacityBlockExtensionRequest;
      output: PurchaseCapacityBlockExtensionResult;
    };
    sdk: {
      input: PurchaseCapacityBlockExtensionCommandInput;
      output: PurchaseCapacityBlockExtensionCommandOutput;
    };
  };
}
