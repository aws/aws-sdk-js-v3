// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribeMapRequest, DescribeMapResponse, DescribeMapResponseFilterSensitiveLog } from "../models/models_0";
import { de_DescribeMapCommand, se_DescribeMapCommand } from "../protocols/Aws_restJson1";

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
 * <p>Retrieves the map resource details.</p>
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
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "DescribeMap", {})
  .n("LocationClient", "DescribeMapCommand")
  .f(void 0, DescribeMapResponseFilterSensitiveLog)
  .ser(se_DescribeMapCommand)
  .de(de_DescribeMapCommand)
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
