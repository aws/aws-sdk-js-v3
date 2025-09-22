// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRestoreJobMetadataInput, GetRestoreJobMetadataOutput } from "../models/models_0";
import { GetRestoreJobMetadata } from "../schemas/schemas_11_Restore";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRestoreJobMetadataCommand}.
 */
export interface GetRestoreJobMetadataCommandInput extends GetRestoreJobMetadataInput {}
/**
 * @public
 *
 * The output of {@link GetRestoreJobMetadataCommand}.
 */
export interface GetRestoreJobMetadataCommandOutput extends GetRestoreJobMetadataOutput, __MetadataBearer {}

/**
 * <p>This request returns the metadata for the specified restore job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRestoreJobMetadataCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRestoreJobMetadataCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // GetRestoreJobMetadataInput
 *   RestoreJobId: "STRING_VALUE", // required
 * };
 * const command = new GetRestoreJobMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetRestoreJobMetadataOutput
 * //   RestoreJobId: "STRING_VALUE",
 * //   Metadata: { // Metadata
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRestoreJobMetadataCommandInput - {@link GetRestoreJobMetadataCommandInput}
 * @returns {@link GetRestoreJobMetadataCommandOutput}
 * @see {@link GetRestoreJobMetadataCommandInput} for command's `input` shape.
 * @see {@link GetRestoreJobMetadataCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class GetRestoreJobMetadataCommand extends $Command
  .classBuilder<
    GetRestoreJobMetadataCommandInput,
    GetRestoreJobMetadataCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "GetRestoreJobMetadata", {})
  .n("BackupClient", "GetRestoreJobMetadataCommand")
  .sc(GetRestoreJobMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRestoreJobMetadataInput;
      output: GetRestoreJobMetadataOutput;
    };
    sdk: {
      input: GetRestoreJobMetadataCommandInput;
      output: GetRestoreJobMetadataCommandOutput;
    };
  };
}
