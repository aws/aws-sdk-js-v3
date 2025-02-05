// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { DescribeOfferingRequest, DescribeOfferingResponse } from "../models/models_0";
import { de_DescribeOfferingCommand, se_DescribeOfferingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOfferingCommand}.
 */
export interface DescribeOfferingCommandInput extends DescribeOfferingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOfferingCommand}.
 */
export interface DescribeOfferingCommandOutput extends DescribeOfferingResponse, __MetadataBearer {}

/**
 * Displays the details of an offering. The response includes the offering description, duration, outbound bandwidth, price, and Amazon Resource Name (ARN).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DescribeOfferingCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DescribeOfferingCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaConnectClient(config);
 * const input = { // DescribeOfferingRequest
 *   OfferingArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeOfferingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOfferingResponse
 * //   Offering: { // Offering
 * //     CurrencyCode: "STRING_VALUE", // required
 * //     Duration: Number("int"), // required
 * //     DurationUnits: "MONTHS", // required
 * //     OfferingArn: "STRING_VALUE", // required
 * //     OfferingDescription: "STRING_VALUE", // required
 * //     PricePerUnit: "STRING_VALUE", // required
 * //     PriceUnits: "HOURLY", // required
 * //     ResourceSpecification: { // ResourceSpecification
 * //       ReservedBitrate: Number("int"),
 * //       ResourceType: "Mbps_Outbound_Bandwidth", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeOfferingCommandInput - {@link DescribeOfferingCommandInput}
 * @returns {@link DescribeOfferingCommandOutput}
 * @see {@link DescribeOfferingCommandInput} for command's `input` shape.
 * @see {@link DescribeOfferingCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 * @public
 */
export class DescribeOfferingCommand extends $Command
  .classBuilder<
    DescribeOfferingCommandInput,
    DescribeOfferingCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConnect", "DescribeOffering", {})
  .n("MediaConnectClient", "DescribeOfferingCommand")
  .f(void 0, void 0)
  .ser(se_DescribeOfferingCommand)
  .de(de_DescribeOfferingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOfferingRequest;
      output: DescribeOfferingResponse;
    };
    sdk: {
      input: DescribeOfferingCommandInput;
      output: DescribeOfferingCommandOutput;
    };
  };
}
