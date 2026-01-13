// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateApplicationRequest, UpdateApplicationResult } from "../models/models_0";
import { UpdateApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandInput extends UpdateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandOutput extends UpdateApplicationResult, __MetadataBearer {}

/**
 * <p>Updates the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateApplicationCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateApplicationCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // UpdateApplicationRequest
 *   Name: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   IconS3Location: { // S3Location
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   LaunchPath: "STRING_VALUE",
 *   WorkingDirectory: "STRING_VALUE",
 *   LaunchParameters: "STRING_VALUE",
 *   AppBlockArn: "STRING_VALUE",
 *   AttributesToDelete: [ // ApplicationAttributes
 *     "LAUNCH_PARAMETERS" || "WORKING_DIRECTORY",
 *   ],
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationResult
 * //   Application: { // Application
 * //     Name: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     IconURL: "STRING_VALUE",
 * //     LaunchPath: "STRING_VALUE",
 * //     LaunchParameters: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     Metadata: { // Metadata
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     WorkingDirectory: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     AppBlockArn: "STRING_VALUE",
 * //     IconS3Location: { // S3Location
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3Key: "STRING_VALUE",
 * //     },
 * //     Platforms: [ // Platforms
 * //       "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "WINDOWS_SERVER_2025" || "AMAZON_LINUX2" || "RHEL8" || "ROCKY_LINUX8" || "UBUNTU_PRO_2404",
 * //     ],
 * //     InstanceFamilies: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateApplicationCommandInput - {@link UpdateApplicationCommandInput}
 * @returns {@link UpdateApplicationCommandOutput}
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class UpdateApplicationCommand extends $Command
  .classBuilder<
    UpdateApplicationCommandInput,
    UpdateApplicationCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "UpdateApplication", {})
  .n("AppStreamClient", "UpdateApplicationCommand")
  .sc(UpdateApplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationRequest;
      output: UpdateApplicationResult;
    };
    sdk: {
      input: UpdateApplicationCommandInput;
      output: UpdateApplicationCommandOutput;
    };
  };
}
