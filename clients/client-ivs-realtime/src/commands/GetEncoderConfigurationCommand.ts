// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { GetEncoderConfigurationRequest, GetEncoderConfigurationResponse } from "../models/models_0";
import { de_GetEncoderConfigurationCommand, se_GetEncoderConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEncoderConfigurationCommand}.
 */
export interface GetEncoderConfigurationCommandInput extends GetEncoderConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetEncoderConfigurationCommand}.
 */
export interface GetEncoderConfigurationCommandOutput extends GetEncoderConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified EncoderConfiguration resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, GetEncoderConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, GetEncoderConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // GetEncoderConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetEncoderConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetEncoderConfigurationResponse
 * //   encoderConfiguration: { // EncoderConfiguration
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     video: { // Video
 * //       width: Number("int"),
 * //       height: Number("int"),
 * //       framerate: Number("float"),
 * //       bitrate: Number("int"),
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEncoderConfigurationCommandInput - {@link GetEncoderConfigurationCommandInput}
 * @returns {@link GetEncoderConfigurationCommandOutput}
 * @see {@link GetEncoderConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetEncoderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class GetEncoderConfigurationCommand extends $Command
  .classBuilder<
    GetEncoderConfigurationCommandInput,
    GetEncoderConfigurationCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "GetEncoderConfiguration", {})
  .n("IVSRealTimeClient", "GetEncoderConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetEncoderConfigurationCommand)
  .de(de_GetEncoderConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEncoderConfigurationRequest;
      output: GetEncoderConfigurationResponse;
    };
    sdk: {
      input: GetEncoderConfigurationCommandInput;
      output: GetEncoderConfigurationCommandOutput;
    };
  };
}
