// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRealtimeLogConfigRequest, UpdateRealtimeLogConfigResult } from "../models/models_2";
import { de_UpdateRealtimeLogConfigCommand, se_UpdateRealtimeLogConfigCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRealtimeLogConfigCommand}.
 */
export interface UpdateRealtimeLogConfigCommandInput extends UpdateRealtimeLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRealtimeLogConfigCommand}.
 */
export interface UpdateRealtimeLogConfigCommandOutput extends UpdateRealtimeLogConfigResult, __MetadataBearer {}

/**
 * <p>Updates a real-time log configuration.</p>
 *          <p>When you update a real-time log configuration, all the parameters are updated with the
 * 			values provided in the request. You cannot update some parameters independent of others.
 * 			To update a real-time log configuration:</p>
 *          <ol>
 *             <li>
 *                <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log
 * 					configuration.</p>
 *             </li>
 *             <li>
 *                <p>Locally modify the parameters in the real-time log configuration that you want
 * 					to update.</p>
 *             </li>
 *             <li>
 *                <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire
 * 					real-time log configuration, including the parameters that you modified and
 * 					those that you didn't.</p>
 *             </li>
 *          </ol>
 *          <p>You cannot update a real-time log configuration's <code>Name</code> or
 * 				<code>ARN</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateRealtimeLogConfigRequest
 *   EndPoints: [ // EndPointList
 *     { // EndPoint
 *       StreamType: "STRING_VALUE", // required
 *       KinesisStreamConfig: { // KinesisStreamConfig
 *         RoleARN: "STRING_VALUE", // required
 *         StreamARN: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   Fields: [ // FieldList
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE",
 *   ARN: "STRING_VALUE",
 *   SamplingRate: Number("long"),
 * };
 * const command = new UpdateRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRealtimeLogConfigResult
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
 * @param UpdateRealtimeLogConfigCommandInput - {@link UpdateRealtimeLogConfigCommandInput}
 * @returns {@link UpdateRealtimeLogConfigCommandOutput}
 * @see {@link UpdateRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateRealtimeLogConfigCommandOutput} for command's `response` shape.
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
export class UpdateRealtimeLogConfigCommand extends $Command
  .classBuilder<
    UpdateRealtimeLogConfigCommandInput,
    UpdateRealtimeLogConfigCommandOutput,
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
  .s("Cloudfront2020_05_31", "UpdateRealtimeLogConfig", {})
  .n("CloudFrontClient", "UpdateRealtimeLogConfigCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRealtimeLogConfigCommand)
  .de(de_UpdateRealtimeLogConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRealtimeLogConfigRequest;
      output: UpdateRealtimeLogConfigResult;
    };
    sdk: {
      input: UpdateRealtimeLogConfigCommandInput;
      output: UpdateRealtimeLogConfigCommandOutput;
    };
  };
}
