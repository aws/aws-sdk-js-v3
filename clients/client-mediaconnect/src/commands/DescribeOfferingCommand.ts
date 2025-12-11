// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { DescribeOfferingRequest, DescribeOfferingResponse } from "../models/models_0";
import { DescribeOffering } from "../schemas/schemas_0";

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
 * <p> Displays the details of an offering. The response includes the offering description, duration, outbound bandwidth, price, and Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DescribeOfferingCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DescribeOfferingCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
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
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "DescribeOffering", {})
  .n("MediaConnectClient", "DescribeOfferingCommand")
  .sc(DescribeOffering)
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
