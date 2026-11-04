// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateReportPlanInput, CreateReportPlanOutput } from "../models/models_0";
import { CreateReportPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateReportPlanCommand}.
 */
export interface CreateReportPlanCommandInput extends CreateReportPlanInput {}
/**
 * @public
 *
 * The output of {@link CreateReportPlanCommand}.
 */
export interface CreateReportPlanCommandOutput extends CreateReportPlanOutput, __MetadataBearer {}

/**
 * Creates a report plan. A report plan is a document that contains information about the contents of the report and where Backup will deliver it.
 *
 * If you call `CreateReportPlan` with a plan that already exists, you receive an `AlreadyExistsException` exception.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateReportPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateReportPlanInput
 *   ReportPlanName: "STRING_VALUE", // required
 *   ReportPlanDescription: "STRING_VALUE",
 *   ReportDeliveryChannel: { // ReportDeliveryChannel
 *     S3BucketName: "STRING_VALUE", // required
 *     S3KeyPrefix: "STRING_VALUE",
 *     Formats: [ // FormatList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ReportSetting: { // ReportSetting
 *     ReportTemplate: "STRING_VALUE", // required
 *     FrameworkArns: [ // stringList
 *       "STRING_VALUE",
 *     ],
 *     NumberOfFrameworks: Number("int"),
 *     Accounts: [
 *       "STRING_VALUE",
 *     ],
 *     OrganizationUnits: [
 *       "STRING_VALUE",
 *     ],
 *     Regions: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ReportPlanTags: { // stringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new CreateReportPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateReportPlanOutput
 * //   ReportPlanName: "STRING_VALUE",
 * //   ReportPlanArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateReportPlanCommandInput - {@link CreateReportPlanCommandInput}
 * @returns {@link CreateReportPlanCommandOutput}
 * @see {@link CreateReportPlanCommandInput} for command's `input` shape.
 * @see {@link CreateReportPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * The required resource already exists.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Indicates that a required parameter is missing.
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
export class CreateReportPlanCommand extends command<CreateReportPlanCommandInput, CreateReportPlanCommandOutput>(
  _ep0,
  _mw0,
  "CreateReportPlan",
  CreateReportPlan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReportPlanInput;
      output: CreateReportPlanOutput;
    };
    sdk: {
      input: CreateReportPlanCommandInput;
      output: CreateReportPlanCommandOutput;
    };
  };
}
