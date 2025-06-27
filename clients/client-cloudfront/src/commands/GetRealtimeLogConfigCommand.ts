// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRealtimeLogConfigRequest, GetRealtimeLogConfigResult } from "../models/models_1";
import { de_GetRealtimeLogConfigCommand, se_GetRealtimeLogConfigCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRealtimeLogConfigCommand}.
 */
export interface GetRealtimeLogConfigCommandInput extends GetRealtimeLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetRealtimeLogConfigCommand}.
 */
export interface GetRealtimeLogConfigCommandOutput extends GetRealtimeLogConfigResult, __MetadataBearer {}

/**
 * <p>Gets a real-time log configuration.</p> <p>To get a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to get.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetRealtimeLogConfigRequest
 *   Name: "STRING_VALUE",
 *   ARN: "STRING_VALUE",
 * };
 * const command = new GetRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetRealtimeLogConfigResult
 * //   RealtimeLogConfig: { // RealtimeLogConfig
 * //     ARN: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     SamplingRate: Number("long"), // required
 * //     EndPoints: [ // EndPointList // required
 * //       { // EndPoint
 * //         StreamType: "STRING_VALUE", // required
 * //         KinesisStreamConfig: { // KinesisStreamConfig
 * //           RoleARN: "STRING_VALUE", // required
 * //           StreamARN: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     ],
 * //     Fields: [ // FieldList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRealtimeLogConfigCommandInput - {@link GetRealtimeLogConfigCommandInput}
 * @returns {@link GetRealtimeLogConfigCommandOutput}
 * @see {@link GetRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link GetRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchRealtimeLogConfig} (client fault)
 *  <p>The real-time log configuration does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetRealtimeLogConfigCommand extends $Command
  .classBuilder<
    GetRealtimeLogConfigCommandInput,
    GetRealtimeLogConfigCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "GetRealtimeLogConfig", {})
  .n("CloudFrontClient", "GetRealtimeLogConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetRealtimeLogConfigCommand)
  .de(de_GetRealtimeLogConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRealtimeLogConfigRequest;
      output: GetRealtimeLogConfigResult;
    };
    sdk: {
      input: GetRealtimeLogConfigCommandInput;
      output: GetRealtimeLogConfigCommandOutput;
    };
  };
}
