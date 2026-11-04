// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteReportPlanInput } from "../models/models_0";
import { DeleteReportPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteReportPlanCommand}.
 */
export interface DeleteReportPlanCommandInput extends DeleteReportPlanInput {}
/**
 * @public
 *
 * The output of {@link DeleteReportPlanCommand}.
 */
export interface DeleteReportPlanCommandOutput extends __MetadataBearer {}

/**
 * Deletes the report plan specified by a report plan name.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteReportPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DeleteReportPlanInput
 *   ReportPlanName: "STRING_VALUE", // required
 * };
 * const command = new DeleteReportPlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReportPlanCommandInput - {@link DeleteReportPlanCommandInput}
 * @returns {@link DeleteReportPlanCommandOutput}
 * @see {@link DeleteReportPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteReportPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Backup can't perform the action that you requested until it finishes performing a previous action. Try again later.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Indicates that a required parameter is missing.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource that is required for the action doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request failed due to a temporary failure of the server.
 *
 * @throws {@link BackupServiceException}
 *
 * Base exception class for all service exceptions from Backup service.
 *
 * @public
 */
export class DeleteReportPlanCommand extends command<DeleteReportPlanCommandInput, DeleteReportPlanCommandOutput>(
  _ep0,
  _mw0,
  "DeleteReportPlan",
  DeleteReportPlan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReportPlanInput;
      output: {};
    };
    sdk: {
      input: DeleteReportPlanCommandInput;
      output: DeleteReportPlanCommandOutput;
    };
  };
}
