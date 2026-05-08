// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import type { GetAdConfigurationRequest, GetAdConfigurationResponse } from "../models/models_0";
import { GetAdConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAdConfigurationCommand}.
 */
export interface GetAdConfigurationCommandInput extends GetAdConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetAdConfigurationCommand}.
 */
export interface GetAdConfigurationCommandOutput extends GetAdConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets the ad configuration represented by the specified ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetAdConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetAdConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // GetAdConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetAdConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAdConfigurationResponse
 * //   adConfiguration: { // AdConfiguration
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     mediaTailorPlaybackConfigurations: [ // MediaTailorPlaybackConfigurationsList // required
 * //       { // MediaTailorPlaybackConfiguration
 * //         playbackConfigurationArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAdConfigurationCommandInput - {@link GetAdConfigurationCommandInput}
 * @returns {@link GetAdConfigurationCommandOutput}
 * @see {@link GetAdConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAdConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class GetAdConfigurationCommand extends $Command
  .classBuilder<
    GetAdConfigurationCommandInput,
    GetAdConfigurationCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "GetAdConfiguration", {})
  .n("IvsClient", "GetAdConfigurationCommand")
  .sc(GetAdConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAdConfigurationRequest;
      output: GetAdConfigurationResponse;
    };
    sdk: {
      input: GetAdConfigurationCommandInput;
      output: GetAdConfigurationCommandOutput;
    };
  };
}
