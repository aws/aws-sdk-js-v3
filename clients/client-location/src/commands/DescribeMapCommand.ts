// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { DescribeMapRequest, DescribeMapResponse } from "../models/models_0";
import { DescribeMap } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMapCommand}.
 */
export interface DescribeMapCommandInput extends DescribeMapRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMapCommand}.
 */
export interface DescribeMapCommandOutput extends DescribeMapResponse, __MetadataBearer {}

/**
 * <important> <p>This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require <code>Grab</code> data.</p> <ul> <li> <p> <code>DescribeMap</code> is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).</p> </li> <li> <p>The Maps API version 2 has a simplified interface that can be used without creating or managing map resources.</p> </li> <li> <p>If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under <code>geo-maps</code> or <code>geo_maps</code>, not under <code>location</code>.</p> </li> <li> <p>Since <code>Grab</code> is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using <code>Grab</code>.</p> </li> <li> <p>Start your version 2 API journey with the <a href="https://docs.aws.amazon.com/location/latest/APIReference/API_Operations_Amazon_Location_Service_Maps_V2.html">Maps V2 API Reference</a> or the <a href="https://docs.aws.amazon.com/location/latest/developerguide/maps.html">Developer Guide</a>.</p> </li> </ul> </important> <p>Retrieves the map resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // DescribeMapRequest
 *   MapName: "STRING_VALUE", // required
 * };
 * const command = new DescribeMapCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMapResponse
 * //   MapName: "STRING_VALUE", // required
 * //   MapArn: "STRING_VALUE", // required
 * //   PricingPlan: "STRING_VALUE",
 * //   DataSource: "STRING_VALUE", // required
 * //   Configuration: { // MapConfiguration
 * //     Style: "STRING_VALUE", // required
 * //     PoliticalView: "STRING_VALUE",
 * //     CustomLayers: [ // CustomLayerList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Description: "STRING_VALUE", // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeMapCommandInput - {@link DescribeMapCommandInput}
 * @returns {@link DescribeMapCommandOutput}
 * @see {@link DescribeMapCommandInput} for command's `input` shape.
 * @see {@link DescribeMapCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class DescribeMapCommand extends $Command
  .classBuilder<
    DescribeMapCommandInput,
    DescribeMapCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "DescribeMap", {})
  .n("LocationClient", "DescribeMapCommand")
  .sc(DescribeMap)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMapRequest;
      output: DescribeMapResponse;
    };
    sdk: {
      input: DescribeMapCommandInput;
      output: DescribeMapCommandOutput;
    };
  };
}
