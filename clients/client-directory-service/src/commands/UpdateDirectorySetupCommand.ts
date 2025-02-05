// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDirectorySetupRequest, UpdateDirectorySetupResult } from "../models/models_0";
import { de_UpdateDirectorySetupCommand, se_UpdateDirectorySetupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDirectorySetupCommand}.
 */
export interface UpdateDirectorySetupCommandInput extends UpdateDirectorySetupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDirectorySetupCommand}.
 */
export interface UpdateDirectorySetupCommandOutput extends UpdateDirectorySetupResult, __MetadataBearer {}

/**
 * <p>
 *       Updates the directory for a particular update type.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateDirectorySetupCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateDirectorySetupCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DirectoryServiceClient(config);
 * const input = { // UpdateDirectorySetupRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   UpdateType: "OS", // required
 *   OSUpdateSettings: { // OSUpdateSettings
 *     OSVersion: "SERVER_2012" || "SERVER_2019",
 *   },
 *   CreateSnapshotBeforeUpdate: true || false,
 * };
 * const command = new UpdateDirectorySetupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDirectorySetupCommandInput - {@link UpdateDirectorySetupCommandInput}
 * @returns {@link UpdateDirectorySetupCommandOutput}
 * @see {@link UpdateDirectorySetupCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectorySetupCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link DirectoryInDesiredStateException} (client fault)
 *  <p>
 *       The directory is already updated to desired update type settings.
 *     </p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link SnapshotLimitExceededException} (client fault)
 *  <p>The maximum number of manual snapshots for the directory has been reached. You can
 *             use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits
 *             for a directory.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 * @public
 */
export class UpdateDirectorySetupCommand extends $Command
  .classBuilder<
    UpdateDirectorySetupCommandInput,
    UpdateDirectorySetupCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "UpdateDirectorySetup", {})
  .n("DirectoryServiceClient", "UpdateDirectorySetupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDirectorySetupCommand)
  .de(de_UpdateDirectorySetupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDirectorySetupRequest;
      output: {};
    };
    sdk: {
      input: UpdateDirectorySetupCommandInput;
      output: UpdateDirectorySetupCommandOutput;
    };
  };
}
