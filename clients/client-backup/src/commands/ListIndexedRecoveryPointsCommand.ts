// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIndexedRecoveryPointsInput, ListIndexedRecoveryPointsOutput } from "../models/models_0";
import { ListIndexedRecoveryPoints } from "../schemas/schemas_17_Recovery";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIndexedRecoveryPointsCommand}.
 */
export interface ListIndexedRecoveryPointsCommandInput extends ListIndexedRecoveryPointsInput {}
/**
 * @public
 *
 * The output of {@link ListIndexedRecoveryPointsCommand}.
 */
export interface ListIndexedRecoveryPointsCommandOutput extends ListIndexedRecoveryPointsOutput, __MetadataBearer {}

/**
 * <p>This operation returns a list of recovery points that have an
 *          associated index, belonging to the specified account.</p>
 *          <p>Optional parameters you can include are: MaxResults;
 *          NextToken; SourceResourceArns; CreatedBefore; CreatedAfter;
 *          and ResourceType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListIndexedRecoveryPointsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListIndexedRecoveryPointsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListIndexedRecoveryPointsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SourceResourceArn: "STRING_VALUE",
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   ResourceType: "STRING_VALUE",
 *   IndexStatus: "PENDING" || "ACTIVE" || "FAILED" || "DELETING",
 * };
 * const command = new ListIndexedRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListIndexedRecoveryPointsOutput
 * //   IndexedRecoveryPoints: [ // IndexedRecoveryPointList
 * //     { // IndexedRecoveryPoint
 * //       RecoveryPointArn: "STRING_VALUE",
 * //       SourceResourceArn: "STRING_VALUE",
 * //       IamRoleArn: "STRING_VALUE",
 * //       BackupCreationDate: new Date("TIMESTAMP"),
 * //       ResourceType: "STRING_VALUE",
 * //       IndexCreationDate: new Date("TIMESTAMP"),
 * //       IndexStatus: "PENDING" || "ACTIVE" || "FAILED" || "DELETING",
 * //       IndexStatusMessage: "STRING_VALUE",
 * //       BackupVaultArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIndexedRecoveryPointsCommandInput - {@link ListIndexedRecoveryPointsCommandInput}
 * @returns {@link ListIndexedRecoveryPointsCommandOutput}
 * @see {@link ListIndexedRecoveryPointsCommandInput} for command's `input` shape.
 * @see {@link ListIndexedRecoveryPointsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
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
export class ListIndexedRecoveryPointsCommand extends $Command
  .classBuilder<
    ListIndexedRecoveryPointsCommandInput,
    ListIndexedRecoveryPointsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListIndexedRecoveryPoints", {})
  .n("BackupClient", "ListIndexedRecoveryPointsCommand")
  .sc(ListIndexedRecoveryPoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIndexedRecoveryPointsInput;
      output: ListIndexedRecoveryPointsOutput;
    };
    sdk: {
      input: ListIndexedRecoveryPointsCommandInput;
      output: ListIndexedRecoveryPointsCommandOutput;
    };
  };
}
