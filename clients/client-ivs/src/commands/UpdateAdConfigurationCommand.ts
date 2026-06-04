// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import type { UpdateAdConfigurationRequest, UpdateAdConfigurationResponse } from "../models/models_0";
import { UpdateAdConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAdConfigurationCommand}.
 */
export interface UpdateAdConfigurationCommandInput extends UpdateAdConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAdConfigurationCommand}.
 */
export interface UpdateAdConfigurationCommandOutput extends UpdateAdConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates a specified ad configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, UpdateAdConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, UpdateAdConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // UpdateAdConfigurationRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   mediaTailorPlaybackConfigurations: [ // MediaTailorPlaybackConfigurationsList
 *     { // MediaTailorPlaybackConfiguration
 *       playbackConfigurationArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateAdConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAdConfigurationResponse
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
 * @param UpdateAdConfigurationCommandInput - {@link UpdateAdConfigurationCommandInput}
 * @returns {@link UpdateAdConfigurationCommandOutput}
 * @see {@link UpdateAdConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAdConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
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
 * @throws {@link ThrottlingException} (client fault)
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
export class UpdateAdConfigurationCommand extends $Command
  .classBuilder<
    UpdateAdConfigurationCommandInput,
    UpdateAdConfigurationCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "UpdateAdConfiguration", {})
  .n("IvsClient", "UpdateAdConfigurationCommand")
  .sc(UpdateAdConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAdConfigurationRequest;
      output: UpdateAdConfigurationResponse;
    };
    sdk: {
      input: UpdateAdConfigurationCommandInput;
      output: UpdateAdConfigurationCommandOutput;
    };
  };
}
