// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAutonomousDatabaseBackupsInput, ListAutonomousDatabaseBackupsOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { ListAutonomousDatabaseBackups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAutonomousDatabaseBackupsCommand}.
 */
export interface ListAutonomousDatabaseBackupsCommandInput extends ListAutonomousDatabaseBackupsInput {}
/**
 * @public
 *
 * The output of {@link ListAutonomousDatabaseBackupsCommand}.
 */
export interface ListAutonomousDatabaseBackupsCommandOutput extends ListAutonomousDatabaseBackupsOutput, __MetadataBearer {}

/**
 * <p>Lists the backups of the specified Autonomous Database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListAutonomousDatabaseBackupsCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListAutonomousDatabaseBackupsCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListAutonomousDatabaseBackupsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   autonomousDatabaseId: "STRING_VALUE", // required
 *   status: "ACTIVE" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 *   type: "INCREMENTAL" || "FULL" || "LONGTERM" || "VIRTUAL_FULL" || "CUMULATIVE_INCREMENTAL" || "ROLL_FORWARD_IMAGE_COPY",
 * };
 * const command = new ListAutonomousDatabaseBackupsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutonomousDatabaseBackupsOutput
 * //   nextToken: "STRING_VALUE",
 * //   autonomousDatabaseBackups: [ // AutonomousDatabaseBackupList // required
 * //     { // AutonomousDatabaseBackupSummary
 * //       autonomousDatabaseBackupId: "STRING_VALUE",
 * //       autonomousDatabaseBackupArn: "STRING_VALUE",
 * //       autonomousDatabaseId: "STRING_VALUE",
 * //       ocid: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       dbVersion: "STRING_VALUE",
 * //       status: "ACTIVE" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 * //       statusReason: "STRING_VALUE",
 * //       isAutomatic: true || false,
 * //       retentionPeriodInDays: Number("int"),
 * //       sizeInTBs: Number("double"),
 * //       timeAvailableTill: new Date("TIMESTAMP"),
 * //       timeStarted: new Date("TIMESTAMP"),
 * //       timeEnded: new Date("TIMESTAMP"),
 * //       type: "INCREMENTAL" || "FULL" || "LONGTERM" || "VIRTUAL_FULL" || "CUMULATIVE_INCREMENTAL" || "ROLL_FORWARD_IMAGE_COPY",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAutonomousDatabaseBackupsCommandInput - {@link ListAutonomousDatabaseBackupsCommandInput}
 * @returns {@link ListAutonomousDatabaseBackupsCommandOutput}
 * @see {@link ListAutonomousDatabaseBackupsCommandInput} for command's `input` shape.
 * @see {@link ListAutonomousDatabaseBackupsCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class ListAutonomousDatabaseBackupsCommand extends $Command
  .classBuilder<
    ListAutonomousDatabaseBackupsCommandInput,
    ListAutonomousDatabaseBackupsCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "ListAutonomousDatabaseBackups", {})
  .n("OdbClient", "ListAutonomousDatabaseBackupsCommand")
  .sc(ListAutonomousDatabaseBackups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutonomousDatabaseBackupsInput;
      output: ListAutonomousDatabaseBackupsOutput;
    };
    sdk: {
      input: ListAutonomousDatabaseBackupsCommandInput;
      output: ListAutonomousDatabaseBackupsCommandOutput;
    };
  };
}
