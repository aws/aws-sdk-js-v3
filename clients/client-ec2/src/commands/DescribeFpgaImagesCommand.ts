// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeFpgaImagesRequest, DescribeFpgaImagesResult } from "../models/models_3";
import { DescribeFpgaImages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFpgaImagesCommand}.
 */
export interface DescribeFpgaImagesCommandInput extends DescribeFpgaImagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFpgaImagesCommand}.
 */
export interface DescribeFpgaImagesCommandOutput extends DescribeFpgaImagesResult, __MetadataBearer {}

/**
 * <p>Describes the Amazon FPGA Images (AFIs) available to you. These include public AFIs,
 * 			private AFIs that you own, and AFIs owned by other Amazon Web Services accounts for which you have load
 * 			permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFpgaImagesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFpgaImagesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeFpgaImagesRequest
 *   DryRun: true || false,
 *   FpgaImageIds: [ // FpgaImageIdList
 *     "STRING_VALUE",
 *   ],
 *   Owners: [ // OwnerStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeFpgaImagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFpgaImagesResult
 * //   FpgaImages: [ // FpgaImageList
 * //     { // FpgaImage
 * //       FpgaImageId: "STRING_VALUE",
 * //       FpgaImageGlobalId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ShellVersion: "STRING_VALUE",
 * //       PciId: { // PciId
 * //         DeviceId: "STRING_VALUE",
 * //         VendorId: "STRING_VALUE",
 * //         SubsystemId: "STRING_VALUE",
 * //         SubsystemVendorId: "STRING_VALUE",
 * //       },
 * //       State: { // FpgaImageState
 * //         Code: "pending" || "failed" || "available" || "unavailable",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       UpdateTime: new Date("TIMESTAMP"),
 * //       OwnerId: "STRING_VALUE",
 * //       OwnerAlias: "STRING_VALUE",
 * //       ProductCodes: [ // ProductCodeList
 * //         { // ProductCode
 * //           ProductCodeId: "STRING_VALUE",
 * //           ProductCodeType: "devpay" || "marketplace",
 * //         },
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Public: true || false,
 * //       DataRetentionSupport: true || false,
 * //       InstanceTypes: [ // InstanceTypesList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFpgaImagesCommandInput - {@link DescribeFpgaImagesCommandInput}
 * @returns {@link DescribeFpgaImagesCommandOutput}
 * @see {@link DescribeFpgaImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeFpgaImagesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeFpgaImagesCommand extends $Command
  .classBuilder<
    DescribeFpgaImagesCommandInput,
    DescribeFpgaImagesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeFpgaImages", {})
  .n("EC2Client", "DescribeFpgaImagesCommand")
  .sc(DescribeFpgaImages$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFpgaImagesRequest;
      output: DescribeFpgaImagesResult;
    };
    sdk: {
      input: DescribeFpgaImagesCommandInput;
      output: DescribeFpgaImagesCommandOutput;
    };
  };
}
