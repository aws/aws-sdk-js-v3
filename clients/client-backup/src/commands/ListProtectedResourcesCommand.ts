// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListProtectedResourcesInput, ListProtectedResourcesOutput } from "../models/models_0";
import { ListProtectedResources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProtectedResourcesCommand}.
 */
export interface ListProtectedResourcesCommandInput extends ListProtectedResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListProtectedResourcesCommand}.
 */
export interface ListProtectedResourcesCommandOutput extends ListProtectedResourcesOutput, __MetadataBearer {}

/**
 * <p>Returns an array of resources successfully backed up by Backup, including
 *          the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a
 *          resource type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListProtectedResourcesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListProtectedResourcesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListProtectedResourcesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProtectedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListProtectedResourcesOutput
 * //   Results: [ // ProtectedResourcesList
 * //     { // ProtectedResource
 * //       ResourceArn: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       LastBackupTime: new Date("TIMESTAMP"),
 * //       ResourceName: "STRING_VALUE",
 * //       LastBackupVaultArn: "STRING_VALUE",
 * //       LastRecoveryPointArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProtectedResourcesCommandInput - {@link ListProtectedResourcesCommandInput}
 * @returns {@link ListProtectedResourcesCommandOutput}
 * @see {@link ListProtectedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListProtectedResourcesCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
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
export class ListProtectedResourcesCommand extends $Command
  .classBuilder<
    ListProtectedResourcesCommandInput,
    ListProtectedResourcesCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListProtectedResources", {})
  .n("BackupClient", "ListProtectedResourcesCommand")
  .sc(ListProtectedResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProtectedResourcesInput;
      output: ListProtectedResourcesOutput;
    };
    sdk: {
      input: ListProtectedResourcesCommandInput;
      output: ListProtectedResourcesCommandOutput;
    };
  };
}
