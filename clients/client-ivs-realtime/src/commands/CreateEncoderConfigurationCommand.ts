// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { CreateEncoderConfigurationRequest, CreateEncoderConfigurationResponse } from "../models/models_0";
import { de_CreateEncoderConfigurationCommand, se_CreateEncoderConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEncoderConfigurationCommand}.
 */
export interface CreateEncoderConfigurationCommandInput extends CreateEncoderConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateEncoderConfigurationCommand}.
 */
export interface CreateEncoderConfigurationCommandOutput extends CreateEncoderConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates an EncoderConfiguration object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, CreateEncoderConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, CreateEncoderConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // CreateEncoderConfigurationRequest
 *   name: "STRING_VALUE",
 *   video: { // Video
 *     width: Number("int"),
 *     height: Number("int"),
 *     framerate: Number("float"),
 *     bitrate: Number("int"),
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateEncoderConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateEncoderConfigurationResponse
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
 * @param CreateEncoderConfigurationCommandInput - {@link CreateEncoderConfigurationCommandInput}
 * @returns {@link CreateEncoderConfigurationCommandOutput}
 * @see {@link CreateEncoderConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateEncoderConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link PendingVerification} (client fault)
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
export class CreateEncoderConfigurationCommand extends $Command
  .classBuilder<
    CreateEncoderConfigurationCommandInput,
    CreateEncoderConfigurationCommandOutput,
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
  .s("AmazonInteractiveVideoServiceRealTime", "CreateEncoderConfiguration", {})
  .n("IVSRealTimeClient", "CreateEncoderConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateEncoderConfigurationCommand)
  .de(de_CreateEncoderConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEncoderConfigurationRequest;
      output: CreateEncoderConfigurationResponse;
    };
    sdk: {
      input: CreateEncoderConfigurationCommandInput;
      output: CreateEncoderConfigurationCommandOutput;
    };
  };
}
