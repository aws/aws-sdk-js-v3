// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import type { CreateAdConfigurationRequest, CreateAdConfigurationResponse } from "../models/models_0";
import { CreateAdConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAdConfigurationCommand}.
 */
export interface CreateAdConfigurationCommandInput extends CreateAdConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAdConfigurationCommand}.
 */
export interface CreateAdConfigurationCommandOutput extends CreateAdConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a new ad configuration to be used for server-side ad insertion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, CreateAdConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, CreateAdConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // CreateAdConfigurationRequest
 *   name: "STRING_VALUE",
 *   mediaTailorPlaybackConfigurations: [ // MediaTailorPlaybackConfigurationsList // required
 *     { // MediaTailorPlaybackConfiguration
 *       playbackConfigurationArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateAdConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAdConfigurationResponse
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
 * @param CreateAdConfigurationCommandInput - {@link CreateAdConfigurationCommandInput}
 * @returns {@link CreateAdConfigurationCommandOutput}
 * @see {@link CreateAdConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateAdConfigurationCommandOutput} for command's `response` shape.
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
export class CreateAdConfigurationCommand extends $Command
  .classBuilder<
    CreateAdConfigurationCommandInput,
    CreateAdConfigurationCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "CreateAdConfiguration", {})
  .n("IvsClient", "CreateAdConfigurationCommand")
  .sc(CreateAdConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAdConfigurationRequest;
      output: CreateAdConfigurationResponse;
    };
    sdk: {
      input: CreateAdConfigurationCommandInput;
      output: CreateAdConfigurationCommandOutput;
    };
  };
}
